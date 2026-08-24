import { Project, BlogPost, TranslationDict } from '../types';

export const translations: Record<'en' | 'ur', TranslationDict> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navBlog: "Blog",
    navWall: "The Wall",
    navContact: "Contact",
    heroGreeting: "Hi, I'm",
    heroTitle: "Awais Ahmad",
    heroSubtitle: "A professional app developer dedicated to crafting high-performance, elegant mobile and web experiences.",
    heroCtaWork: "View Projects",
    heroCtaContact: "Let's Connect",
    aboutTitle: "About Me",
    aboutSubtitle: "Discover my journey, background, and the interactive elements that represent my daily life.",
    experienceTitle: "Professional Experience",
    experienceSubtitle: "A timeline of my software engineering journey, contract collaborations, and technical milestones.",
    skillsTitle: "Core Expertise",
    skillsSubtitle: "The technologies and frameworks I use to bring ideas to life.",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A showcase of custom-built applications under active development.",
    projectsStatus: "Active Project",
    blogTitle: "Technical Blog",
    blogSubtitle: "Articles and tutorials on mobile development, performance optimization, and modern tech.",
    blogReadMore: "Read Article",
    wallTitle: "The Wall",
    wallSubtitle: "Leave a nice public note, sign your presence, or share what's on your mind!",
    wallSubmit: "Sign the Wall",
    wallSuccess: "Your message has been posted on the wall!",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have an app idea or need a developer? Drop a message and let's build something exceptional.",
    contactName: "Your Name",
    contactEmail: "Your Email Address",
    contactSubject: "Subject",
    contactMessage: "Your Message",
    contactSubmit: "Send Message",
    contactSubmitting: "Sending...",
    contactSuccess: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
    footerRights: "All rights reserved."
  },
  ur: {
    navHome: "ہوم",
    navAbout: "میرے بارے میں",
    navExperience: "تجربہ",
    navSkills: "مہارت",
    navProjects: "پروجیکٹس",
    navBlog: "بلاگ",
    navWall: "دیوار",
    navContact: "رابطہ",
    heroGreeting: "سلام، میں ہوں",
    heroTitle: "اویس احمد",
    heroSubtitle: "ایک پیشہ ور ایپ ڈویلپر جو اعلیٰ کارکردگی اور خوبصورت موبائل اور ویب ایپلی کیشنز بنانے میں مہارت رکھتا ہے۔",
    heroCtaWork: "پروجیکٹس دیکھیں",
    heroCtaContact: "رابطہ کریں",
    aboutTitle: "میرے بارے میں",
    aboutSubtitle: "میرا سفر، پس منظر اور ان انٹرایکٹو عناصر کو دریافت کریں جو میری روزمرہ کی زندگی کی عکاسی کرتے ہیں۔",
    experienceTitle: "پیشہ ورانہ تجربہ",
    experienceSubtitle: "میرے سوفٹ ویئر انجینئرنگ کا سفر، کنٹریکٹ پر کام اور اہم تکنیکی سنگِ میل کی تفصیل۔",
    skillsTitle: "بنیادی مہارت",
    skillsSubtitle: "وہ ٹیکنالوجیز جنہیں میں خیالات کو حقیقت کا روپ دینے کے لیے استعمال کرتا ہوں۔",
    projectsTitle: "نمایاں پروجیکٹس",
    projectsSubtitle: "زیرِ تعمیر اور جدید ترین ایپلی کیشنز کا ایک شوکیس۔",
    projectsStatus: "فعال پروجیکٹ",
    blogTitle: "تکنیکی بلاگ",
    blogSubtitle: "موبائل ڈویلپمنٹ، کارکردگی اور جدید ویب ٹیکنالوجی پر مضامین۔",
    blogReadMore: "مضمون پڑھیں",
    wallTitle: "دیوارِ پیغام",
    wallSubtitle: "ایک اچھا عوامی پیغام چھوڑیں، اپنی موجودگی درج کریں، یا اپنے خیالات کا اظہار کریں!",
    wallSubmit: "دیوار پر دستخط کریں",
    wallSuccess: "آپ کا پیغام کامیابی کے ساتھ دیوار پر شائع ہو گیا ہے!",
    contactTitle: "رابطہ کریں",
    contactSubtitle: "کوئی ایپ کا خیال ہے یا ڈویلپر کی ضرورت ہے؟ پیغام بھیجیں اور مل کر کچھ بہترین بناتے ہیں۔",
    contactName: "آپ کا نام",
    contactEmail: "آپ کا ای میل",
    contactSubject: "موضوع",
    contactMessage: "آپ کا پیغام",
    contactSubmit: "پیغام بھیجیں",
    contactSubmitting: "بھیجا جا رہا ہے...",
    contactSuccess: "شکریہ! آپ کا پیغام کامیابی کے ساتھ موصول ہو گیا ہے۔ میں جلد ہی آپ سے رابطہ کروں گا۔",
    footerRights: "جملہ حقوق محفوظ ہیں۔"
  }
};

export const skillsData = [
  {
    category: "Mobile App Development",
    icon: "Smartphone",
    skills: [
      { name: "React Native / Expo", level: 95 },
      { name: "Flutter / Dart", level: 85 },
      { name: "Swift / iOS", level: 80 },
      { name: "Kotlin / Android", level: 75 },
      { name: "App Store Optimization", level: 85 }
    ]
  },
  {
    category: "Frontend Web Stack",
    icon: "Layout",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "State Management (Zustand, Redux)", level: 90 },
      { name: "Motion Animations", level: 88 }
    ]
  },
  {
    category: "Backend & Storage",
    icon: "Database",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Firebase (Firestore, Auth)", level: 92 },
      { name: "PostgreSQL & Supabase", level: 85 },
      { name: "RESTful APIs / GraphQL", level: 90 },
      { name: "Cloud Functions / Serverless", level: 82 }
    ]
  },
  {
    category: "Developer Workflow",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub CI/CD", level: 92 },
      { name: "Docker & Containerization", level: 78 },
      { name: "Figma UI/UX Prototyping", level: 85 },
      { name: "Jest & Native Testing", level: 80 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "shukar-daily",
    name: "Shukar Daily",
    index: "01",
    quarter: "Q1 2025",
    category: "MOBILE APP",
    tagline: "A peaceful, ad-free Islamic gratitude journal and counters app to build daily reflection streaks",
    description: "Shukar Daily is a beautifully minimalist, offline-first gratitude journal and counter app designed to help you notice and celebrate your blessings. With rich stats tracking, daily reminders, elegant local journal entries, interactive counter rings, and custom gratitude duas, it serves as a peaceful digital sanctuary for reflection and daily spiritual streaks without any ads or distractions.",
    tags: ["Flutter", "Dart", "Hive DB", "Local Notifications", "Provider"],
    features: [
      "Daily Shukr Counter with high-fidelity animations, a responsive green ring, and live status metrics",
      "Full offline-first Gratitude Journal with prompt guidance to capture daily reflections and blessings",
      "Curated 30 Duas of Gratitude with complete Arabic text, English/Urdu translation, transliteration, and authentic Hadith sources",
      "Smart recurring local notification reminders for morning gratitude and evening reflection triggers"
    ],
    metrics: [
      { label: "User Rating", value: "5.0 ★" },
      { label: "Ad Experience", value: "100% Free" },
      { label: "Data Security", value: "Full Offline" }
    ],
    image: "from-emerald-950 to-teal-900",
    accentColor: "emerald-500",
    links: {
      github: "https://github.com/iawaisahmd/shukar_daily",
      demo: "https://shukardaily.awrs.me"
    }
  },
  {
    id: "lumina",
    name: "Lumina",
    index: "02",
    quarter: "Q2 2025",
    category: "AI MOBILE APP",
    tagline: "Know what touches your skin — Smart cosmetic ingredient scanner & allergen analyzer",
    description: "Lumina is an intelligent skincare and cosmetic ingredient scanner designed to empower users to analyze product formulations instantly. Using mobile OCR and Google ML Kit combined with Gemini AI analysis, Lumina extracts ingredient lists from product labels, detects personal allergens, calculates comedogenic risk scores, and provides clean, evidence-based ingredient insights.",
    tags: ["Flutter", "Dart", "Google ML Kit", "Gemini API", "Hive DB", "Provider"],
    features: [
      "Real-time Camera Label OCR Scanner & Instant Ingredient List Parsing",
      "Comedogenic Rating Calculator (0-5 scale) with acne risk warnings & pore-clogging flags",
      "Personalized Allergen Detector flagging Fragrances, Parabens, Sulfates, Retinoids, and custom irritants",
      "Curated 'My Safe List' & Product Library with offline bookmarking and safer ingredient alternatives"
    ],
    metrics: [
      { label: "Scan Accuracy", value: "98.5%" },
      { label: "Ingredient DB", value: "15,000+" },
      { label: "User Rating", value: "4.9 ★" }
    ],
    image: "from-amber-950 to-stone-900",
    accentColor: "amber-500",
    links: {
      github: "https://github.com/iawaisahmd/lumina_skincare",
      demo: "https://lumina.awrs.me"
    }
  },
  {
    id: "packsavvy",
    name: "Packsavvy",
    index: "03",
    quarter: "Q4 2024",
    category: "UTILITY APP",
    tagline: "Smart Packing List Companion",
    description: "Packsavvy is an elegant, intelligent utility app that generates bespoke, travel checklist templates adjusted for local destination climates, trip duration, and custom-added activities. Designed to reduce pre-travel cognitive load through stateful offline synchronization.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Weather API"],
    features: [
      "Intelligent weather-informed automated checklist generator",
      "Preloaded checklists for hiking, diving, business, and ski trips",
      "Integrated luggage limit calculators with airline support lists",
      "Fully responsive state system with multi-device local synchronizing"
    ],
    metrics: [
      { label: "Travelers Helped", value: "8,500+" },
      { label: "Lists Created", value: "32,000+" },
      { label: "Load Time", value: "0.2s" }
    ],
    image: "from-[#1b152e] to-[#0c0a17]",
    accentColor: "indigo-500",
    links: {
      github: "https://github.com/iawaisahmd/packsavvy",
      demo: "https://packsavvy.awrs.me"
    }
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "flutter-clean-architecture-2026",
    title: "Flutter Clean Architecture in 2026: A Practical Guide for Real Apps",
    summary: "Learn Flutter clean architecture step by step: layers, repository pattern, MVVM, Riverpod, folder structure, and testing practices for real apps.",
    date: "August 24, 2026",
    readTime: "9 min read",
    tags: ["Flutter", "Clean Architecture", "Riverpod", "MVVM", "Repository Pattern"],
    category: "Flutter Development",
    views: 356,
    content: `When I started building larger Flutter apps, one problem appeared again and again: code that worked perfectly in a small project became difficult to manage after adding authentication, APIs, local storage, notifications, and multiple features.

That is where **Flutter clean architecture** starts to matter.

The goal is not to create dozens of folders or follow a complicated diagram. The goal is to separate responsibilities so your app stays easier to test, maintain, and expand.

Flutter's current architecture guidance strongly recommends separating the UI and data layers, using repositories for data access, and keeping logic outside widgets.

This guide explains how to apply those ideas in a practical Flutter project in 2026.

> Flutter clean architecture means separating your UI, business logic, and data access so each part of the app has a clear responsibility, and changes in one area do not break everything else.

## What Is Flutter Clean Architecture?

Clean architecture is a way of organizing application code into separate layers.

Instead of putting API calls, database queries, validation, and UI code inside the same widget, each responsibility lives in its own part of the project.

A common Flutter structure looks like this:

1. **Presentation layer**
2. **Domain layer**
3. **Data layer**

The Flutter team currently recommends at least a UI layer and a data layer for most apps. A domain layer becomes useful when business logic becomes complex.

This means you do not need three layers in every small project.

Architecture should match the complexity of the app.

## Why Flutter App Architecture Matters

A Flutter project often starts simply.

You might have:

- Login
- Home screen
- API request
- Settings
- Local storage

After a few months, the same app might include:

- Push notifications
- Payments
- User roles
- Offline mode
- Analytics
- Subscriptions
- Multiple APIs
- Background services

If everything lives inside widgets, development becomes harder.

Good architecture improves:

- Maintainability
- Testing
- Code reuse
- Team collaboration
- Debugging
- Feature development
- Dependency management

Flutter's architecture documentation describes intentional architecture as important for building maintainable, resilient, and scalable applications.

If you are still deciding how state management fits into this structure, see [Flutter State Management in 2026](/blog/flutter-state-management-2026).

## The Core Flutter Clean Architecture Layers

### 1. Presentation Layer

The presentation layer handles what users see and interact with.

Typical files include:

- Screens
- Widgets
- ViewModels
- Controllers
- State providers
- BLoCs
- UI state

The UI should display data and respond to user actions.

It should not contain database queries or direct API calls.

Flutter's current recommendations emphasize keeping widgets lean and moving application logic into ViewModels or similar state-management components.

For example:

\`\`\`dart
class LoginViewModel {
  final AuthRepository repository;

  LoginViewModel(this.repository);

  Future<void> login(String email, String password) {
    return repository.login(email, password);
  }
}
\`\`\`

The screen only communicates with the ViewModel.

It does not need to know how authentication works internally.

### 2. Domain Layer

The domain layer contains business rules.

You might also see this called:

- Business logic layer
- Use case layer
- Interactor layer

This layer becomes useful when the application has business logic that does not naturally belong inside the UI or data layer.

For example:

\`\`\`dart
class CalculateOrderTotal {
  double execute(List<CartItem> items) {
    return items.fold(
      0,
      (total, item) => total + item.price * item.quantity,
    );
  }
}
\`\`\`

This logic does not care about Flutter widgets, Firebase, REST APIs, or SQLite.

It only represents a business rule.

Flutter's architecture guide describes the domain layer as optional and most useful for applications with complex client-side logic.

### 3. Data Layer

The data layer communicates with external data sources.

Examples include:

- REST APIs
- Firebase
- SQLite
- Hive
- SharedPreferences
- Device APIs
- Local files

The two most important concepts here are **repositories** and **services**.

## Repository Pattern in Flutter

The repository pattern is one of the strongest recommendations in Flutter's current architecture documentation.

A repository acts as the source of truth for a particular type of data.

For example:

\`\`\`dart
abstract class UserRepository {
  Future<User> getUser();
  Future<void> updateUser(User user);
}
\`\`\`

The actual implementation might use an API:

\`\`\`dart
class UserRepositoryImpl implements UserRepository {
  final UserApiService apiService;

  UserRepositoryImpl(this.apiService);

  @override
  Future<User> getUser() {
    return apiService.fetchUser();
  }

  @override
  Future<void> updateUser(User user) {
    return apiService.updateUser(user);
  }
}
\`\`\`

Your ViewModel only depends on \`UserRepository\`.

It does not need to know whether the user data comes from:

- REST API
- Firebase
- Local database
- Mock data

This separation makes testing much easier.

Flutter's architecture guide also describes repositories as the application's source of truth and recommends one repository for each major data type.

## Services vs Repositories in Flutter

These two concepts often get mixed up.

### Service

A service talks directly to a data source.

Example:

\`\`\`dart
class ProductApiService {
  Future<List<Product>> fetchProducts() async {
    // HTTP request
  }
}
\`\`\`

### Repository

A repository decides how application data should be handled.

Example:

\`\`\`dart
class ProductRepository {
  final ProductApiService api;

  ProductRepository(this.api);

  Future<List<Product>> getProducts() async {
    final products = await api.fetchProducts();
    return products;
  }
}
\`\`\`

A repository might also handle:

- Caching
- Retry logic
- Error handling
- Local and remote synchronization
- Data transformations

Flutter specifically recommends services for low-level external data access and repositories for application-facing data logic.

## Flutter Clean Architecture With Riverpod

Clean architecture works especially well with Riverpod because dependencies remain easy to separate.

For example:

\`\`\`dart
final apiServiceProvider = Provider<ProductApiService>((ref) {
  return ProductApiService();
});

final productRepositoryProvider = Provider<ProductRepository>((ref) {
  return ProductRepository(
    ref.watch(apiServiceProvider),
  );
});
\`\`\`

Then your UI state provider depends on the repository:

\`\`\`dart
final productsProvider = FutureProvider<List<Product>>((ref) {
  return ref.watch(productRepositoryProvider).getProducts();
});
\`\`\`

The dependency direction becomes:

\`\`\`text
UI
↓
State Management
↓
Repository
↓
Service
↓
API
\`\`\`

This keeps external infrastructure away from your widgets.

Riverpod is not required for clean architecture.

The Flutter architecture case study notes that developers can apply the same principles using Riverpod, BLoC, streams, ChangeNotifier, or other state-management approaches.

## Flutter Clean Architecture Folder Structure

There is no single official folder structure.

A practical feature-first structure looks like this:

\`\`\`text
lib/
│
├── core/
│   ├── errors/
│   ├── network/
│   ├── constants/
│   └── utilities/
│
├── features/
│   │
│   ├── authentication/
│   │   ├── data/
│   │   │   ├── repositories/
│   │   │   └── services/
│   │   │
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   └── usecases/
│   │   │
│   │   └── presentation/
│   │       ├── screens/
│   │       ├── widgets/
│   │       └── providers/
│   │
│   └── products/
│       ├── data/
│       ├── domain/
│       └── presentation/
│
└── main.dart
\`\`\`

This approach keeps everything related to one feature close together.

For larger applications, feature-first organization often becomes easier to maintain than placing every screen in one folder and every repository in another.

### When should you use feature-first structure?

Feature-first structure works well when:

- Your app has multiple independent features
- Several developers work on the project
- Features grow separately
- You expect long-term development

For tiny apps, this structure might be unnecessary.

## Clean Architecture vs MVVM in Flutter

These terms are often treated as competing approaches, but they solve slightly different problems.

**MVVM** describes how the UI layer is organized.

It commonly includes:

- Model
- View
- ViewModel

**Clean architecture** describes broader separation across the application.

You can combine both.

Flutter's current recommended architecture uses MVVM-style Views and ViewModels for the UI layer, with repositories and services in the data layer.

A simplified flow looks like:

\`\`\`text
View
↓
ViewModel
↓
Repository
↓
Service
\`\`\`

For complex apps, you might insert use cases between the ViewModel and repository.

\`\`\`text
View
↓
ViewModel
↓
Use Case
↓
Repository
↓
Service
\`\`\`

## Single Source of Truth in Flutter

One of the most useful architecture principles is maintaining a single source of truth.

Imagine your app stores the logged-in user in:

- Auth screen
- Profile screen
- Settings screen
- Dashboard
- Local storage service

Now five different places might contain different versions of the same user.

This creates bugs.

Instead, one repository should own the user state.

Other features consume that data.

Flutter's architecture guidance strongly recommends this single-source-of-truth pattern and identifies repositories as the usual place to manage application data.

## Unidirectional Data Flow

Clean Flutter apps work best when data moves predictably.

A common flow looks like:

\`\`\`text
API → Repository → ViewModel → UI
\`\`\`

User events move in the opposite direction:

\`\`\`text
UI → ViewModel → Repository → API
\`\`\`

Flutter's architecture documentation recommends this unidirectional data flow because it separates state from the widgets displaying it.

This helps developers understand where changes originate.

## Testing Flutter Clean Architecture

Architecture becomes most valuable when you start testing.

Because each part has a clear responsibility, you can test it independently.

For example:

### Unit tests

Test:

- Services
- Repositories
- Use cases
- ViewModels

### Widget tests

Test:

- Screens
- Forms
- UI states
- User interactions

### Integration tests

Test:

- Complete user journeys
- Authentication flow
- Checkout flow
- API-backed features

Flutter recommends testing architectural components individually and together, including services, repositories, ViewModels, and views.

A repository abstraction also lets you inject fake implementations during tests.

\`\`\`dart
class FakeUserRepository implements UserRepository {
  @override
  Future<User> getUser() async {
    return User(name: 'Test User');
  }
}
\`\`\`

No real API request is required.

## Do Small Flutter Apps Need Clean Architecture?

Not always.

This is where developers sometimes overengineer projects.

A three-screen MVP does not need:

- 20 use cases
- 15 abstract interfaces
- 10 layers
- hundreds of files

Flutter's own guidance treats architecture recommendations as guidelines rather than strict rules and encourages developers to adapt them to project requirements.

For a simple project, this structure might be enough:

\`\`\`text
lib/
├── screens/
├── widgets/
├── models/
├── services/
├── repositories/
└── providers/
\`\`\`

As complexity increases, you can separate features and introduce a domain layer.

Architecture should reduce complexity, not create more of it.

## Best Flutter Architecture for Startups in 2026

For many startup applications, this practical setup works well:

| Area | Recommended Approach |
|---|---|
| UI | Flutter widgets |
| State management | Riverpod |
| Architecture | MVVM-style layered architecture |
| Data access | Repository pattern |
| API layer | Service classes |
| Local storage | Repository-managed |
| Complex business logic | Optional use cases |
| Testing | Unit + widget tests |
| Structure | Feature-first |

This setup offers a strong balance between simplicity and growth.

It also leaves room to add features without rebuilding the entire codebase.

## Common Flutter Clean Architecture Mistakes

### 1. Creating too many layers

Every feature does not need a use case.

Add a domain layer when the business logic earns it.

### 2. Calling APIs directly from widgets

Widgets should not know how your backend works.

Use a repository or service layer.

### 3. Putting every feature in global folders

Large projects become difficult to browse.

Feature-first structure often scales better.

### 4. Mixing UI and business logic

Validation, calculations, and data transformations should not live inside large widget files.

### 5. Creating repositories with no purpose

A repository should provide meaningful abstraction.

Do not add one only because an architecture diagram says so.

### 6. Ignoring testing

Architecture without testability loses much of its value.

## Frequently Asked Questions

### What is clean architecture in Flutter?

Clean architecture in Flutter separates UI, business logic, and data access into distinct layers. The goal is to make the application easier to maintain, test, and scale.

### How to implement clean architecture in Flutter?

Start by separating your presentation and data layers. Add repositories between your UI logic and external services. Introduce a domain layer only when your business rules become complex.

### What is the best folder structure for Flutter clean architecture?

A feature-first structure works well for larger apps. Each feature contains its own presentation, domain, and data folders, while shared utilities stay inside a core folder.

### Why does Flutter use the repository pattern?

Repositories separate application logic from APIs, databases, and other data sources. They also provide a single source of truth and make testing easier.

### What is the difference between clean architecture and MVVM in Flutter?

MVVM mainly structures the UI layer into Views and ViewModels. Clean architecture covers the broader application, including data access, repositories, services, and optional domain logic.

## Final Thoughts

**Flutter clean architecture** should make your application easier to understand, not harder.

Start with clear separation between UI and data. Keep business logic outside widgets. Use repositories as your source of truth. Add services for external data sources and introduce a domain layer when your application becomes complex.

For most modern Flutter projects, a feature-first structure combined with Riverpod, repositories, and clear dependency boundaries provides a practical foundation for long-term development.

If you are building a Flutter application and want an architecture designed around future growth, performance, and maintainability, [get in touch with Awais Ahmad](/contact).

## External Resources

- [Flutter App Architecture](https://docs.flutter.dev/app-architecture)
- [Flutter Architecture Recommendations](https://docs.flutter.dev/app-architecture/recommendations)
- [Flutter Architecture Guide](https://docs.flutter.dev/app-architecture/guide)`
  },
  {
    id: "add-ai-flutter-app-2026",
    title: "How to Add AI to a Flutter App in 2026",
    summary: "Learn how to add AI to a Flutter app using Gemini, Firebase AI Logic, and Flutter AI Toolkit with a practical, architecture-first approach.",
    date: "August 24, 2026",
    readTime: "10 min read",
    tags: ["Flutter", "AI Integration", "Gemini", "Firebase", "Riverpod"],
    category: "AI Integration",
    views: 428,
    content: `Adding AI to a Flutter app used to mean wiring together custom backend services, API clients, prompt logic, and error handling from scratch.

In 2026, the process is much more practical.

Flutter now has official AI documentation, Firebase AI Logic supports Gemini in Flutter, and the Flutter AI Toolkit includes ready-made components for chat, streaming responses, voice input, attachments, and function calling.

If you want to build a chatbot, recommendation feature, document assistant, image-aware tool, or AI-powered business app, this guide shows the cleanest path.

## What Is the Best Way to Add AI to Flutter in 2026?

For most new Flutter apps, a strong approach is:

1. Flutter for the mobile interface
2. Firebase for app infrastructure
3. Firebase AI Logic for Gemini access
4. Riverpod or BLoC for state management
5. A repository layer between UI and AI services
6. Firebase App Check for client protection

Firebase AI Logic provides Dart and Flutter support for Gemini and is designed for mobile and web apps. Its client SDKs include security features and Firebase integrations.

That makes the stack attractive for startups and small businesses building AI features without maintaining a large custom backend.

## Why AI Features Are Becoming Easier in Flutter

Flutter now has a dedicated AI section in its official documentation.

It covers:

- Flutter AI Toolkit
- Firebase AI Logic
- Genkit Dart
- GenUI
- AI prompting
- AI evaluation
- AI-assisted development workflows

Flutter's official AI page now treats AI as both a development tool and an app feature category.

For developers, this means less time building basic infrastructure and more time designing useful product experiences.

If you want the surrounding structure to stay clean as you add AI, see [Flutter Clean Architecture in 2026](/blog/flutter-clean-architecture-2026).

## Step 1: Decide What AI Should Do

Do not start by adding a chatbot because AI is popular.

Start with a business problem.

Useful AI features include:

- Customer support assistants
- Product recommendations
- Text summarization
- Document analysis
- Image understanding
- Content generation
- Search assistants
- Form assistance
- Voice-based interaction
- Personalized onboarding

A service business might use AI to qualify leads.

An e-commerce app might use AI for product discovery.

A startup might use AI to summarize reports or analyze user-uploaded content.

The best AI feature removes friction from an existing task.

## Step 2: Choose Your AI Integration

There are three practical routes for Flutter in 2026.

### Option 1: Firebase AI Logic

Firebase AI Logic gives Flutter apps access to Gemini models through the \`firebase_ai\` package.

This route works well when you already use Firebase.

Benefits include:

- Flutter SDK support
- Firebase integration
- Gemini access
- App Check support
- Multimodal input
- Mobile-first architecture

Firebase AI Logic also supports text, images, PDFs, video, and audio as model inputs.

### Option 2: Flutter AI Toolkit

Flutter AI Toolkit is useful when your app needs a chat-style AI interface.

Its official documentation lists support for:

- Multi-turn chat
- Streaming responses
- Rich text
- Voice input
- Multimedia attachments
- Function calling
- Custom styling

This saves time when building an AI assistant interface.

### Option 3: Custom AI Backend

For more advanced products, you might still want a backend.

This makes sense when you need:

- Multiple AI providers
- Complex billing rules
- Sensitive business logic
- Custom retrieval pipelines
- Advanced analytics
- Server-side tool execution

A custom backend also gives you more control over rate limits, auditing, model switching, and secrets.

## Step 3: Install Firebase AI Logic in Flutter

Firebase's current Flutter setup uses the \`firebase_ai\` package.

Run:

\`\`\`bash
flutter pub add firebase_ai firebase_app_check
\`\`\`

You also need Firebase configured in your Flutter project.

A typical initialization looks like:

\`\`\`dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}
\`\`\`

Firebase's documentation also recommends App Check when using AI Logic from client applications.

## Step 4: Keep AI Logic Out of Your Widgets

This is where architecture matters.

Avoid putting model calls directly inside a screen.

Instead, use a service:

\`\`\`dart
class AiService {
  Future<String> generateResponse(String prompt) async {
    // Call AI model here
    return response;
  }
}
\`\`\`

Then wrap it with a repository:

\`\`\`dart
class AiRepository {
  final AiService service;

  AiRepository(this.service);

  Future<String> ask(String prompt) {
    return service.generateResponse(prompt);
  }
}
\`\`\`

Your state-management layer then talks to the repository.

\`\`\`text
UI
↓
State Management
↓
Repository
↓
AI Service
↓
Gemini
\`\`\`

This structure keeps the app easier to test and maintain.

For choosing the state layer itself, see [Flutter State Management in 2026](/blog/flutter-state-management-2026).

## Step 5: Manage AI State Properly

AI requests introduce more states than a normal button click.

You usually need:

- Idle
- Loading
- Streaming
- Success
- Error
- Retry

Riverpod works well for this because AI flows often involve asynchronous state.

BLoC also works well when you want explicit events and state transitions.

For a small prototype, Provider also works.

The important point is to keep AI response state separate from the widget itself.

## Step 6: Use Streaming Responses

Streaming improves perceived performance.

Instead of waiting for the full model response, users see text appear as it arrives.

This is especially useful for:

- AI chat
- Long summaries
- Generated plans
- Document answers
- Product recommendations

Flutter AI Toolkit officially supports streaming responses in its chat components.

From a user-experience perspective, streaming usually feels faster even when total generation time stays similar.

## Step 7: Design Better Prompts

Weak prompts create weak outputs.

Flutter's current AI best-practices documentation recommends structured prompting, system instructions, dynamic parameters, and prompt versioning.

A poor prompt might be:

\`\`\`text
Help the user.
\`\`\`

A better prompt would define:

- Role
- Goal
- User context
- Output format
- Limitations
- Safety rules

For example:

\`\`\`text
You are a customer-support assistant for a home services app.

Answer using only the supplied service information.
Keep responses under 120 words.
If information is unavailable, ask the user to contact support.
Do not invent pricing or availability.
\`\`\`

This improves consistency.

## Step 8: Add Guardrails

AI output should not be trusted blindly.

For production apps, add:

- Input validation
- Output validation
- Restricted tool access
- Fallback messages
- Rate limits
- Retry logic
- Moderation where needed
- Human review for high-risk tasks

Flutter's AI documentation now includes guidance around guardrails and AI evaluation as part of production AI development.

This becomes especially important in apps involving:

- Finance
- Health information
- Legal information
- Business automation
- User-generated content

## Step 9: Protect Your AI Integration

Do not hardcode sensitive credentials into a Flutter app.

Client applications can be inspected.

Firebase AI Logic is designed to reduce this risk through Firebase-managed access and App Check support.

For more sensitive workflows, route model access through your backend.

Security decisions should depend on what the AI feature is allowed to access.

## Step 10: Add AI Features Gradually

One of the biggest product mistakes is trying to build an AI super-app on version one.

Start with one useful feature.

For example:

### Phase 1

AI text assistant

### Phase 2

Conversation history

### Phase 3

Image input

### Phase 4

Voice input

### Phase 5

Function calling

### Phase 6

Personalization

This gives you time to measure whether users value the feature before increasing complexity.

## Flutter AI Toolkit vs Custom UI

| Feature | Flutter AI Toolkit | Custom UI |
|---|---|---|
| Setup speed | Fast | Slower |
| Chat interface | Built in | Build manually |
| Streaming | Supported | Manual |
| Voice input | Supported | Manual |
| Attachments | Supported | Manual |
| Design flexibility | Good | Maximum |
| Custom workflows | Medium | High |
| Best for | AI chat apps | Unique AI products |

For standard assistant experiences, Flutter AI Toolkit reduces development work.

For highly customized products, a custom interface gives you more control.

## Firebase AI Logic vs Custom Backend

| Area | Firebase AI Logic | Custom Backend |
|---|---|---|
| Setup | Faster | More work |
| Firebase integration | Strong | Manual |
| Client AI access | Supported | Usually indirect |
| Security control | Good | Maximum |
| Multi-provider support | Limited | Flexible |
| Maintenance | Lower | Higher |
| Best for | MVPs and mobile apps | Advanced AI platforms |

For many startups, Firebase AI Logic offers a strong starting point.

## Where AI Fits Into Clean Architecture

AI should be treated like any other external data source.

Do not make it a special exception.

A clean architecture might look like:

\`\`\`text
Presentation
↓
ViewModel / Provider / BLoC
↓
Use Case
↓
AI Repository
↓
AI Service
↓
Gemini / AI Provider
\`\`\`

This makes provider replacement easier later.

For example, if you move from Gemini to another model provider, your UI should not need a full rewrite.

That is one of the strongest reasons to isolate AI access behind a repository.

## AI Features Small Businesses Can Use

AI is not limited to large software companies.

Small businesses can use AI features in practical ways.

Examples include:

- Appointment FAQ assistant
- Lead qualification
- Quote request summaries
- Customer-message drafting
- Service recommendations
- Product matching
- Document summarization
- Internal knowledge search

The goal should be to save time or improve customer experience.

A feature that looks impressive but solves no business problem will not improve retention.

## Common Flutter AI Development Mistakes

### 1. Calling the model directly from widgets

This makes testing and maintenance harder.

### 2. Hardcoding API credentials

Client applications should not expose sensitive secrets.

### 3. Ignoring loading and error states

AI requests fail.

Your UI needs retry and fallback behavior.

### 4. Sending huge prompts

Larger prompts increase cost and latency.

Send only relevant context.

### 5. Trusting every AI response

Validate important outputs.

### 6. Building too many AI features at once

Start with one feature and measure usage.

### 7. Ignoring product value

AI should solve a real task.

## Is Flutter Good for AI Apps?

Yes.

Flutter is well suited to AI-powered mobile apps because it provides one codebase for multiple platforms and now has growing official support for AI development.

Flutter's current AI ecosystem includes Firebase AI Logic, Flutter AI Toolkit, Genkit Dart, GenUI, prompting guidance, and evaluation tooling.

That makes Flutter a strong choice for AI MVPs, mobile assistants, multimodal apps, and AI-enabled business products.

## Frequently Asked Questions

### What is the easiest way to add AI to Flutter?

For many Flutter apps, Firebase AI Logic offers one of the simplest routes because it provides Gemini access through an official Flutter package and integrates with Firebase services.

### How to use Gemini in a Flutter app?

Connect your Flutter app to Firebase, add the \`firebase_ai\` package, configure Firebase AI Logic, and call a supported Gemini model through the SDK.

### What is Flutter AI Toolkit?

Flutter AI Toolkit is a collection of Flutter widgets for building AI chat experiences with features such as streaming, voice input, attachments, rich text, and function calling.

### Why does an AI Flutter app need a repository layer?

A repository separates your UI from the AI provider. This improves testing, maintainability, provider switching, and overall architecture.

### What is the best state management for Flutter AI apps?

Riverpod works well for many AI apps because it handles asynchronous state and dependency injection cleanly. BLoC is also suitable for applications needing explicit state transitions.

## Final Thoughts

Adding AI to Flutter in 2026 is much easier than it was a few years ago.

For many projects, a practical stack is Flutter, Firebase AI Logic, Gemini, Riverpod, and a clean repository-based architecture.

Start with one useful AI feature. Keep model access outside your widgets. Add streaming, validation, and security early. Then expand only when users show demand.

If you are planning an AI-powered Flutter app or MVP, [get in touch with Awais Ahmad](/contact).

## External Resources

- [Flutter AI Documentation](https://docs.flutter.dev/ai)
- [Flutter AI Toolkit](https://docs.flutter.dev/ai/ai-toolkit)
- [Firebase AI Logic](https://firebase.google.com/docs/ai-logic)`
  },
  {
    id: "flutter-state-management-2026",
    title: "Flutter State Management in 2026: setState vs Provider vs Riverpod vs BLoC",
    summary: "Compare Flutter state management with setState, Provider, Riverpod, and BLoC. Learn which approach fits your app before development starts.",
    date: "August 24, 2026",
    readTime: "8 min read",
    tags: ["Flutter", "State Management", "Riverpod", "BLoC", "Provider"],
    category: "Flutter Development",
    views: 412,
    content: `Managing data sounds simple until a mobile app grows beyond a few screens.

A login session needs to stay active. A shopping cart must update everywhere. API data needs loading and error states. User preferences need to persist. Suddenly, choosing the right **Flutter state management** approach affects far more than code style.

From hands-on Flutter development, I have found that there is no single solution for every project. The right choice depends on app size, business logic, development team, testing requirements, and expected growth.

For startups and businesses planning a Flutter application in 2026, four approaches deserve particular attention: \`setState\`, Provider, Riverpod, and BLoC.

This guide explains how each works, where each fits, and how to make a sensible choice without overengineering your app.

> For most new Flutter apps, Riverpod offers a strong balance of scalability, testability, and developer experience, while \`setState\` suits local UI state, Provider works well for simpler applications, and BLoC fits complex apps needing strict and predictable state transitions.

## What Is Flutter State Management?

State is any information in an application that changes while someone uses the app.

Examples include:

- Whether a user is logged in
- Items inside a shopping cart
- Selected filters
- API responses
- Form values
- Loading indicators
- Theme preferences
- Notification settings

Flutter uses a declarative UI model. When application state changes, Flutter rebuilds the relevant parts of the interface.

Flutter's official documentation separates state broadly into **ephemeral state** and **application state**. Ephemeral state belongs to one widget or a small part of the interface. Application state is shared across multiple parts of the app.

This distinction is important because a counter button and an e-commerce checkout flow should not require the same architecture.

## Flutter setState: The Simplest Starting Point

\`setState()\` is built directly into Flutter.

You change a variable inside a \`StatefulWidget\`, call \`setState()\`, and Flutter rebuilds the affected widget.

\`\`\`dart
int counter = 0;

void incrementCounter() {
  setState(() {
    counter++;
  });
}
\`\`\`

Flutter's documentation describes \`setState\` as a low-level option suited to widget-specific, ephemeral state.

### When should you use flutter setState?

It works well for:

- Toggling a password field
- Changing the selected tab
- Expanding a section
- Controlling animations
- Small form interactions
- Simple counters

For a small prototype, \`setState\` often provides everything required.

Problems start when the same state needs to reach several screens. Developers may begin passing values and callbacks through multiple widget layers. Business logic also starts mixing with interface code.

### Best fit

Choose \`setState\` when the state belongs mainly to one widget.

Avoid turning every application feature into a global state-management problem.

## Provider: Simple Shared State Management

Provider has long been one of Flutter's best-known state-management packages.

It builds on Flutter concepts such as \`InheritedWidget\` and commonly works alongside \`ChangeNotifier\`.

Flutter's own simple state-management tutorial still teaches Provider for developers who have no strong reason to select another approach. The documentation highlights its relatively small amount of code and approachable concepts.

A basic model might look like:

\`\`\`dart
class CartModel extends ChangeNotifier {
  final List<String> items = [];

  void addItem(String item) {
    items.add(item);
    notifyListeners();
  }
}
\`\`\`

Widgets listen for updates through tools such as \`Consumer\`.

### Why businesses still use Provider

Provider works well for apps with straightforward shared state.

Examples include:

- Small booking apps
- Local service apps
- Basic customer portals
- Internal business tools
- Simple e-commerce MVPs

The Provider package offers automatic resource management, lazy loading, DevTools support, and less boilerplate compared with manually handling inherited widgets.

As application logic grows, large \`ChangeNotifier\` classes sometimes become harder to organize.

That brings us to an increasingly common comparison.

## Provider vs Riverpod: What Changed?

Developers searching **provider vs riverpod** are often deciding whether a newer Flutter application should start with Provider or move toward Riverpod.

Riverpod comes from the same creator as Provider but takes a different architectural approach.

One major difference is dependency access.

Provider commonly relies on the widget tree and \`BuildContext\`. Riverpod introduces providers accessed through \`Ref\`, allowing application logic to exist with less dependence on Flutter's widget hierarchy.

Riverpod's documentation describes providers as access points for shared state designed around testability, scalability, safe access, and efficient listening.

### Riverpod advantages

Riverpod is attractive for growing apps because it supports:

- Dependency injection
- Async state
- State composition
- Provider overrides during testing
- Automatic cleanup patterns
- Fine-grained state watching
- Logic outside widget contexts

A basic Riverpod provider looks like:

\`\`\`dart
final counterProvider = StateProvider<int>((ref) => 0);
\`\`\`

Widgets then watch the provider and react to changes.

Riverpod also supports generated providers and modern patterns for asynchronous data sources.

### Provider or Riverpod?

For a small app with straightforward requirements, Provider remains an understandable choice.

For a new product expected to expand across multiple features, APIs, user roles, and services, Riverpod usually provides more room for clean growth.

Riverpod's official migration guide also supports incremental migration from Provider, so an existing Provider app does not require a complete rewrite in one step.

## Riverpod vs BLoC for Scalable Flutter Apps

The **riverpod vs bloc** discussion becomes more relevant once an app has complex business rules.

BLoC stands for Business Logic Component.

Instead of directly changing values, traditional BLoC architecture works through a predictable flow:

1. The UI sends an event.
2. The BLoC processes the event.
3. A new state is emitted.
4. The UI responds to the new state.

The \`flutter_bloc\` package also includes Cubit, which offers a simpler approach without requiring a separate event for every action.

Its current package documentation describes \`BlocBuilder\` as a widget that rebuilds in response to state updates and \`BlocProvider\` as a dependency-injection widget for sharing Bloc or Cubit instances through a widget subtree.

### When BLoC makes sense

BLoC suits applications where teams need highly explicit state transitions.

Examples include:

- Fintech applications
- Multi-step onboarding
- Complex checkout systems
- Enterprise workflows
- Applications with strict business rules
- Large development teams

The tradeoff is additional structure and more concepts for developers to learn.

Riverpod tends to offer greater flexibility, while BLoC provides stronger architectural conventions.

Neither approach wins every project.

## setState vs Provider vs Riverpod vs BLoC

| Approach | Learning Curve | Scalability | Boilerplate | Best For |
|---|---|---|---|---|
| **setState** | Low | Low | Low | Local UI state |
| **Provider** | Low to Medium | Medium | Low | Small and medium apps |
| **Riverpod** | Medium | High | Medium | Modern scalable apps |
| **BLoC** | Medium to High | High | Higher | Complex business applications |

This table should not be treated as a ranking.

The best architecture is the simplest approach that still supports the application's expected complexity.

## Best State Management Flutter Projects Should Use in 2026

So, what is the **best state management Flutter** developers should choose?

A practical decision framework looks like this:

### Use setState when:

- State stays inside one widget
- The feature is simple
- No other screen needs the data

### Use Provider when:

- Shared state is straightforward
- The development team prefers simpler concepts
- The app is relatively small

### Use Riverpod when:

- The application will grow
- Multiple APIs or repositories are involved
- Testing matters
- Async state appears throughout the product
- Dependencies need clean separation

### Use BLoC when:

- State transitions need strict rules
- Business logic is extensive
- Several developers work on the same codebase
- Predictability matters more than minimal code

Flutter itself does not declare one community package as the universal winner. Its documentation states that package selection depends on application complexity, team preference, and the problem being solved.

That is the most useful principle to follow.

## Why State Management Matters to Startups

This decision is not limited to developers.

For a startup or small business, poor architecture often creates costs later.

Suppose your first application contains five screens. A simple solution works well.

Six months later, the product includes subscriptions, push notifications, API caching, authentication, analytics, several account types, and twenty screens.

Changing architecture at that stage takes more effort.

A startup should therefore consider both **current requirements and likely product growth**.

At the same time, choosing BLoC for a tiny three-screen MVP often adds unnecessary development overhead.

Good architecture sits between these two extremes.

## Frequently Asked Questions

### What is state management in Flutter?

State management is the process of storing, updating, and sharing data that affects a Flutter application's interface and behavior. Flutter offers built-in approaches such as \`setState\`, plus community packages including Provider, Riverpod, and BLoC.

### How to choose state management in Flutter?

Start by determining where the state is used. Use \`setState\` for local widget state, Provider for simpler shared state, Riverpod for flexible scalable architecture, and BLoC when complex business rules need strict state transitions.

### What is the difference between Provider and Riverpod?

Provider commonly shares dependencies through Flutter's widget tree and \`BuildContext\`. Riverpod uses providers and references, which make dependencies easier to compose, test, override, and access outside traditional widget-tree patterns.

### Why does BLoC use events and states?

Events describe what happened, while states describe the application's resulting condition. Separating the two creates a predictable data flow that helps developers trace complex business logic.

### What is better, Riverpod or BLoC?

Riverpod suits teams wanting flexibility with strong dependency and async-state management. BLoC suits teams preferring explicit architectural rules and highly traceable state transitions. Project complexity and team experience should decide the choice.

## Final Thoughts

Choosing **Flutter state management** should start with your application's requirements, not whichever package currently receives the most attention.

Use \`setState\` for local interface changes. Consider Provider for simple shared state. Choose Riverpod when building a modern application expected to grow. Consider BLoC when business logic demands strict, predictable state transitions.

If you are planning a Flutter app for your startup or business and want the architecture designed around both your MVP and future growth, feel free to reach out through the contact page.

## Further Reading

- [Flutter State Management Documentation](https://docs.flutter.dev/data-and-backend/state-mgmt)
- [Riverpod Documentation](https://riverpod.dev/)
- [flutter_bloc on pub.dev](https://pub.dev/packages/flutter_bloc)`
  },
  {
    id: "build-ai-agent-flutter-app-2026",
    title: "How to Build an AI Agent App with Flutter in 2026",
    summary: "Learn how to build an AI agent app with Flutter using tools, Gemini, Firebase AI Logic, function calling, and clean architecture.",
    date: "August 24, 2026",
    readTime: "12 min read",
    tags: ["Flutter", "AI Agents", "Gemini", "Firebase", "Tool Calling"],
    category: "AI Integration",
    views: 297,
    content: `AI chatbots answer questions.

AI agents go a step further. They reason through a task, call tools, fetch information, take actions, and return a useful result.

That makes **AI agent app development with Flutter** one of the more interesting directions for mobile apps in 2026.

Google is actively pushing agent workflows across its developer ecosystem. At Google I/O 2026, Google showed a production-oriented AI agent architecture using Flutter as the client interface, Cloud Run as the backend, and the Agent Development Kit for tool-based agent workflows.

For startups and small businesses, this opens up more useful applications than a basic chat screen.

You can build an app that helps customers book services, compare options, analyze uploaded files, plan tasks, query business data, or complete multi-step workflows.

This guide explains how the architecture works and where Flutter fits.

> An AI agent app in Flutter combines a Flutter interface with an AI model, tool calling, business logic, and external services so the assistant can complete tasks instead of only generating text.

## What Is an AI Agent?

An AI agent is a system that receives a goal and decides what steps to take.

A normal chatbot might respond:

> "Your appointment is scheduled for tomorrow."

An agent might:

1. Check available appointment slots.
2. Ask which service the customer wants.
3. Query the booking system.
4. Choose an available slot.
5. Confirm the request.
6. Save the booking.
7. Return the result to the user.

The important difference is **action**.

Agents combine language models with:

- Tools
- APIs
- Functions
- Business rules
- Memory
- External data
- Multi-step reasoning

This makes them much closer to software workflows than traditional chatbots.

## Why Flutter Is a Good Frontend for AI Agents

Flutter works well for agent-based apps because one codebase can support Android, iOS, web, and desktop interfaces.

The AI logic itself does not need to live inside Flutter.

Flutter can focus on:

- Chat UI
- Voice input
- Image uploads
- File attachments
- Tool-result cards
- Progress indicators
- Confirmation screens
- User authentication

Flutter's current AI documentation includes Flutter AI Toolkit, Firebase AI Logic, Genkit Dart, and GenUI as part of its AI development stack.

That means developers now have more official building blocks for AI-powered interfaces.

If you want the foundation first, see [How to Add AI to a Flutter App in 2026](/blog/add-ai-flutter-app-2026).

## AI Agent vs AI Chatbot

These two terms are often mixed together.

| Feature | AI Chatbot | AI Agent |
|---|---|---|
| Answers questions | Yes | Yes |
| Uses tools | Sometimes | Core feature |
| Completes tasks | Limited | Yes |
| Calls APIs | Optional | Common |
| Multi-step workflows | Limited | Common |
| Takes actions | Rare | Yes |
| Business automation | Low | High |

A chatbot is good for conversation.

An agent is better when the user wants something done.

## Example AI Agent App Ideas

Small businesses do not need enterprise-scale systems to benefit from agents.

Useful examples include:

- Appointment booking assistant
- Quote-generation assistant
- AI travel planner
- Lead qualification agent
- Customer support agent
- E-commerce shopping assistant
- Property inquiry assistant
- Document analysis agent
- AI onboarding assistant
- Internal business knowledge assistant

A service business could build an agent that asks customers what they need, collects details, checks service availability, generates a quote request, and sends the information to the business.

That is far more useful than a generic chatbot.

## AI Agent Architecture for Flutter

A clean architecture might look like this:

\`\`\`text
Flutter UI
↓
State Management
↓
Agent Repository
↓
Agent Service
↓
AI Model
↓
Tool Router
↓
APIs / Database / Business Services
\`\`\`

For more advanced apps, the agent itself might run on a backend:

\`\`\`text
Flutter App
↓
Backend API
↓
AI Agent
↓
Tools
↓
External Services
\`\`\`

Google's I/O 2026 example used Flutter as the frontend and Cloud Run with the Agent Development Kit for the agent layer.

This structure is often better when agents access sensitive data or perform business actions.

## Step 1: Define the Agent's Goal

Start with one clear job.

Bad idea:

> "Build an AI assistant that does everything."

Better idea:

> "Build an agent that helps users find and book a home-cleaning service."

The agent should have a narrow responsibility.

For example:

\`\`\`text
Goal:
Help customers choose a cleaning service and request an appointment.

Agent tasks:
- Ask for property size
- Ask for service type
- Check available slots
- Estimate service duration
- Collect contact details
- Submit booking request
\`\`\`

This gives the model clear boundaries.

## Step 2: Decide Which Tools the Agent Needs

Tools are functions the model is allowed to call.

For a booking agent, tools might include:

\`\`\`text
getAvailableSlots()
getServicePrices()
createBooking()
getCustomerProfile()
sendConfirmation()
\`\`\`

The AI model does not directly access your database.

Instead, it asks your application to execute approved tools.

This is one of the core ideas behind production AI agents.

## Step 3: Connect Gemini with Firebase AI Logic

Firebase AI Logic provides Dart and Flutter SDK support for Gemini models. It supports multimodal prompts and client-side AI features for mobile apps.

For Flutter:

\`\`\`bash
flutter pub add firebase_ai firebase_app_check
\`\`\`

Initialize Firebase:

\`\`\`dart
await Firebase.initializeApp(
  options: DefaultFirebaseOptions.currentPlatform,
);
\`\`\`

Then create the model:

\`\`\`dart
final model = FirebaseAI.googleAI().generativeModel(
  model: 'gemini-3.6-flash',
);
\`\`\`

Firebase's current documentation recommends App Check and remote configuration for production-oriented AI features.

## Step 4: Add Function Calling

Function calling allows the AI to request actions.

Imagine the user says:

> "Book me a consultation on Friday afternoon."

The model might request:

\`\`\`json
{
  "function": "getAvailableSlots",
  "arguments": {
    "day": "Friday",
    "time": "afternoon"
  }
}
\`\`\`

Your application executes the function.

Then the result returns to the model:

\`\`\`json
{
  "available_slots": [
    "2:00 PM",
    "3:30 PM",
    "5:00 PM"
  ]
}
\`\`\`

The model can then ask the user which time they prefer.

This creates an agent workflow.

## Step 5: Keep Tools Strictly Controlled

Never give the agent unlimited access.

Instead, expose specific functions.

For example:

\`\`\`dart
class BookingTools {
  Future<List<String>> getAvailableSlots(DateTime date) async {
    // Query booking API
  }

  Future<void> createBooking(BookingRequest request) async {
    // Create appointment
  }
}
\`\`\`

The model should only access actions you explicitly allow.

This reduces risk.

## Step 6: Add Confirmation Before Important Actions

Agents should not automatically execute high-impact actions without user confirmation.

For example:

> "I found a slot for Friday at 3:30 PM. Confirm booking?"

Then show:

**Confirm**

**Change Time**

**Cancel**

This pattern is useful for:

- Payments
- Appointments
- Sending messages
- Deleting data
- Account changes
- Purchases

The model helps decide the action, but the user keeps control.

## Step 7: Use Riverpod or BLoC for Agent State

Agent interactions create multiple states.

Examples:

- Waiting for user
- Thinking
- Calling tool
- Waiting for API
- Receiving tool result
- Generating response
- Waiting for confirmation
- Error

Riverpod fits this pattern well because it handles asynchronous state and dependency injection.

BLoC also works well when you want explicit event-driven flows.

For choosing between them, see [Flutter State Management in 2026](/blog/flutter-state-management-2026).

## Step 8: Build the Agent Repository

Keep AI logic away from widgets.

A repository might look like:

\`\`\`dart
class AgentRepository {
  final AgentService service;

  AgentRepository(this.service);

  Future<AgentResponse> sendMessage(String message) {
    return service.sendMessage(message);
  }
}
\`\`\`

The widget should only care about displaying state.

This makes provider changes much easier later.

For the full structure, see [Flutter Clean Architecture in 2026](/blog/flutter-clean-architecture-2026).

## Step 9: Add Agent Memory

Agents often need context.

For example:

\`\`\`text
User:
I need a haircut appointment.

Agent:
Which location?

User:
Downtown.

Agent:
What day?

User:
Saturday.
\`\`\`

The agent must remember:

- Service
- Location
- Date

There are two common memory types.

### Short-Term Memory

Current conversation context.

Useful for:

- Multi-turn chat
- Current booking
- Current form
- Temporary preferences

### Long-Term Memory

Persistent user information.

Examples:

- Favorite location
- Saved preferences
- Previous bookings
- Account information

Do not store everything.

Only persist information that provides clear user value.

## Step 10: Use Structured Outputs

Free-form text is not enough for many agent workflows.

Structured outputs make responses easier to use inside the app.

For example:

\`\`\`json
{
  "service": "Home Cleaning",
  "date": "2026-09-10",
  "time": "14:30",
  "estimated_duration": 120
}
\`\`\`

Your Flutter UI can turn this into a card:

**Home Cleaning**

September 10

2:30 PM

Estimated duration: 2 hours

Structured data makes agent interfaces feel more like real applications and less like chat windows.

## Step 11: Go Beyond Chat with GenUI

One interesting direction in Flutter's current AI ecosystem is **GenUI**.

Flutter's GenUI SDK lets AI-driven applications generate interactive UI components rather than returning only text. The current SDK is still marked experimental.

For example, instead of saying:

> "Here are three hotels."

The agent might generate:

- Hotel cards
- Pricing
- Ratings
- Select buttons
- Booking options

This creates a more app-like AI experience.

## Step 12: Use a Backend for Sensitive Agent Actions

Client-side AI works for many features.

But some agent workflows belong on a backend.

Examples include:

- Payments
- CRM updates
- Private business data
- Admin operations
- Email sending
- Subscription changes
- Database writes
- Account deletion

A backend lets you:

- Validate tool calls
- Hide credentials
- Enforce permissions
- Add rate limits
- Log actions
- Audit agent behavior

For serious agent products, backend-controlled tools are usually the safer architecture.

## Step 13: Protect the AI Layer

Production agent apps need safeguards.

Consider:

- Firebase App Check
- Authentication
- Tool permissions
- Rate limiting
- Request validation
- Output validation
- Prompt injection protection
- Logging
- Confirmation screens

The more actions your agent can perform, the stronger these controls should become.

## Step 14: Design for Agent Failure

AI agents will fail sometimes.

Tools might return errors.

APIs might be unavailable.

The model might misunderstand intent.

Your app should support:

- Retry
- Cancel
- Back
- Manual input
- Human support
- Clear error messages

Never design an agent workflow where the user becomes trapped when AI fails.

## AI Agent App Tech Stack for 2026

A practical Flutter stack might look like:

| Layer | Technology |
|---|---|
| Frontend | Flutter |
| State management | Riverpod |
| Authentication | Firebase Auth |
| AI | Gemini |
| AI access | Firebase AI Logic |
| Backend | Firebase Functions / Cloud Run |
| Agent framework | ADK or custom tools |
| Database | Firestore |
| Security | App Check |
| Architecture | Repository pattern |

This is not the only valid stack.

The right choice depends on what the agent needs to do.

## AI Agent vs RAG

Another common question is whether an app needs an agent or RAG.

RAG stands for Retrieval-Augmented Generation.

RAG helps an AI answer questions using your own documents or data.

An agent helps perform actions.

Example:

### RAG

> "What is our refund policy?"

### Agent

> "Start a refund for order #1042."

Many advanced apps use both.

The agent retrieves business information and then calls tools.

## Common AI Agent Development Mistakes

### 1. Giving the agent too many tools

Start small.

Every tool increases complexity.

### 2. No user confirmation

Important actions should require approval.

### 3. Mixing tool logic with widgets

Keep business operations in repositories or services.

### 4. Trusting model output blindly

Validate parameters before executing tools.

### 5. Building an agent when a simple form works better

Not every workflow needs AI.

### 6. Ignoring fallback UX

Always provide a manual path.

## Are AI Agents Useful for Small Businesses?

Yes, when the agent handles repetitive work.

Good examples include:

- Answering service questions
- Collecting leads
- Booking appointments
- Creating quote requests
- Searching internal documents
- Guiding customers to the right service
- Summarizing customer requests

The strongest agent use cases save staff time while making the customer experience faster.

## Frequently Asked Questions

### What is an AI agent in Flutter?

An AI agent in Flutter is an AI-powered feature that uses a language model, tools, APIs, and business logic to complete multi-step tasks through a Flutter interface.

### How to build an AI agent app with Flutter?

Build the Flutter interface first, connect an AI model such as Gemini, define approved tools, add a backend for sensitive actions, and manage agent state using Riverpod or BLoC.

### What is the difference between an AI agent and chatbot?

A chatbot primarily generates responses. An AI agent can use tools and external systems to complete tasks such as bookings, searches, updates, or workflow automation.

### Why does an AI agent need tool calling?

Tool calling lets the model interact with real systems. Without tools, the model can discuss an appointment but cannot check availability or create a booking.

### What is the best backend for a Flutter AI agent?

Firebase Functions and Cloud Run are strong options for Flutter apps. Cloud Run is especially useful for more advanced agent services and custom backend workflows.

## Final Thoughts

AI agent apps are one of the more practical ways to move beyond basic generative AI experiences.

Flutter provides the cross-platform interface, Gemini provides the intelligence, and tools connect the agent to real business systems.

The key is to start with one clear workflow.

Give the agent a limited set of tools. Keep sensitive actions behind a backend. Require confirmation before important operations. Build a fallback path when AI fails.

If you are planning an AI-powered Flutter app or agent-based MVP, [get in touch with Awais Ahmad](/contact).

## External Resources

- [Flutter AI Documentation](https://docs.flutter.dev/ai/create-with-ai)
- [Firebase AI Logic](https://firebase.google.com/docs/ai-logic)
- [Google I/O 2026 AI Agent with Flutter Workshop](https://io.google/2026/explore/workshop-7)`
  }
];
