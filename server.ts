import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

const PORT = 3000;
const MESSAGES_FILE = path.join(process.cwd(), "messages.json");
const WALL_FILE = path.join(process.cwd(), "wall.json");

// Send email helper
async function sendEmailNotification(name: string, email: string, subject: string, message: string) {
  const host = process.env.SMTP_HOST || "";
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || "iawaisahmd@gmail.com";

  console.log(`[Email Integration] Preparing to notify: ${receiver}`);

  if (!host || !user || !pass) {
    console.log(`[Email Integration] SMTP environment variables are missing (SMTP_HOST, SMTP_USER, SMTP_PASS). Skipping SMTP delivery.`);
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name} via Portfolio" <${user}>`,
      replyTo: email,
      to: receiver,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Integration] Email sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("[Email Integration] Failed to send email via SMTP:", error);
    return false;
  }
}

// Helper to load current messages
function loadMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading messages.json:", error);
  }
  return [];
}

// Helper to save messages
function saveMessages(messages: any[]) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing messages.json:", error);
  }
}

// Helper to load wall messages
function loadWall() {
  try {
    if (fs.existsSync(WALL_FILE)) {
      const data = fs.readFileSync(WALL_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading wall.json:", error);
  }
  // Default seed wall posts
  return [
    {
      id: "w_1",
      name: "Ali Raza",
      message: "This site is stunning, Awais! Keep up the brilliant work. 🔥",
      color: "bg-indigo-50/60 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-100 border-indigo-200/50 dark:border-indigo-900/30",
      emoji: "🚀",
      date: new Date(Date.now() - 3600000 * 24).toISOString()
    },
    {
      id: "w_2",
      name: "Sarah M.",
      message: "The animations on the hero ribbons are clean! Love the typography and attention to detail.",
      color: "bg-pink-50/60 dark:bg-pink-950/20 text-pink-900 dark:text-pink-100 border-pink-200/50 dark:border-pink-900/30",
      emoji: "🎨",
      date: new Date(Date.now() - 3600000 * 5).toISOString()
    },
    {
      id: "w_3",
      name: "Zainab",
      message: "Brilliant React portfolio! Same-to-same replication of high end craftsmanship. 🙌",
      color: "bg-amber-50/60 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100 border-amber-200/50 dark:border-amber-900/30",
      emoji: "💻",
      date: new Date(Date.now() - 3600000 * 12).toISOString()
    }
  ];
}

// Helper to save wall messages
function saveWall(wall: any[]) {
  try {
    fs.writeFileSync(WALL_FILE, JSON.stringify(wall, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing wall.json:", error);
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route: Get all Wall posts
  app.get("/api/wall", (req, res) => {
    const wall = loadWall();
    res.json(wall);
  });

  // API Route: Post to Wall
  app.post("/api/wall", (req, res) => {
    const { name, message, color, emoji } = req.body;
    if (!name || !message) {
      res.status(400).json({ error: "Name and message are required" });
      return;
    }

    const newPost = {
      id: "wall_" + Math.random().toString(36).substr(2, 9),
      name: name.slice(0, 50),
      message: message.slice(0, 500),
      color: color || "bg-slate-50/60 dark:bg-slate-900/20 text-slate-900 dark:text-slate-100 border-slate-200/50 dark:border-slate-800/30",
      emoji: emoji || "✍️",
      date: new Date().toISOString()
    };

    const wall = loadWall();
    wall.unshift(newPost);
    saveWall(wall);

    res.status(201).json({ success: true, data: newPost });
  });

  // API Route: Delete from Wall
  app.delete("/api/wall/:id", (req, res) => {
    const { id } = req.params;
    let wall = loadWall();
    const originalLength = wall.length;
    wall = wall.filter((w: any) => w.id !== id);

    if (wall.length === originalLength) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    saveWall(wall);
    res.json({ success: true, message: "Wall post deleted" });
  });

  // API Route: Send Contact Form Submission
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: "All form fields are required" });
      return;
    }

    const newMessage = {
      id: "msg_" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      subject,
      message,
      date: new Date().toISOString()
    };

    const messages = loadMessages();
    messages.unshift(newMessage); // Most recent first
    saveMessages(messages);

    // Call the nodemailer helper asynchronously to avoid blocking the API response
    sendEmailNotification(name, email, subject, message).catch((err) => {
      console.error("[Email Notification Error] Error details:", err);
    });

    res.status(201).json({ success: true, message: "Message received successfully", data: newMessage });
  });

  // API Route: Retrieve Contact Form Submissions for Admin Dashboard
  app.get("/api/messages", (req, res) => {
    const messages = loadMessages();
    res.json(messages);
  });

  // API Route: Delete a message from the dashboard
  app.delete("/api/messages/:id", (req, res) => {
    const { id } = req.params;
    let messages = loadMessages();
    const originalLength = messages.length;
    messages = messages.filter((m: any) => m.id !== id);
    
    if (messages.length === originalLength) {
      res.status(404).json({ error: "Message not found" });
      return;
    }
    
    saveMessages(messages);
    res.json({ success: true, message: "Message deleted" });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode serving static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
