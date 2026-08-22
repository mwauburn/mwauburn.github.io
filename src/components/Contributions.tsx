import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Star, Sparkles, Github, GitCommitHorizontal } from 'lucide-react';
import { TranslationDict } from '../types';

interface ContributionsProps {
  t: TranslationDict;
  language: 'en' | 'ur';
}

const GITHUB_USER = 'iawaisahmd';
const GITHUB_CACHE_KEY = `github-stats:${GITHUB_USER}`;

interface GithubStats {
  followers: number;
  repositories: number;
  stars: number;
  commits: number;
}

export default function Contributions({ language }: ContributionsProps) {
  const isUrdu = language === 'ur';

  // State for interactive info on hover
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    const getLastPage = (link: string | null) => {
      const match = link?.match(/[?&]page=(\d+)>; rel="last"/);
      return match ? Number(match[1]) : null;
    };

    const loadGithubStats = async () => {
      const cached = sessionStorage.getItem(GITHUB_CACHE_KEY);
      if (cached) {
        setGithubStats(JSON.parse(cached));
        return;
      }

      const userUrl = `https://api.github.com/users/${GITHUB_USER}`;
      const reposUrl = `${userUrl}/repos?per_page=100&type=owner&sort=updated`;
      const [userRes, reposRes] = await Promise.all([fetch(userUrl), fetch(reposUrl)]);
      if (!userRes.ok || !reposRes.ok) return;

      const user = await userRes.json() as { followers?: number; public_repos?: number };
      const repos = await reposRes.json() as Array<{ full_name: string; fork: boolean; stargazers_count: number }>;
      const ownRepos = repos.filter((repo) => !repo.fork);

      const commitCounts = await Promise.all(
        ownRepos.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?author=${GITHUB_USER}&per_page=1`);
          if (!res.ok) return 0;
          const lastPage = getLastPage(res.headers.get('Link'));
          if (lastPage) return lastPage;
          const commits = await res.json() as unknown[];
          return commits.length;
        })
      );

      const nextStats = {
        followers: user.followers ?? 0,
        repositories: user.public_repos ?? ownRepos.length,
        stars: ownRepos.reduce((total, repo) => total + repo.stargazers_count, 0),
        commits: commitCounts.reduce((total, count) => total + count, 0)
      };

      sessionStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify(nextStats));
      setGithubStats(nextStats);
    };

    loadGithubStats().catch(() => undefined);
  }, []);

  const stats = [
    {
      id: 'commits',
      value: githubStats ? githubStats.commits.toLocaleString() : '...',
      label: 'Public Commits',
      icon: GitCommitHorizontal,
      iconColor: 'text-violet-500',
      bgColor: 'bg-violet-500/10 dark:bg-violet-500/20',
      borderColor: 'border-violet-200/50 dark:border-violet-900/30',
    },
    {
      id: 'followers',
      value: githubStats ? githubStats.followers.toLocaleString() : '...',
      label: 'Followers',
      icon: Users,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-500/10 dark:bg-pink-500/20',
      borderColor: 'border-pink-200/50 dark:border-pink-900/30',
    },
    {
      id: 'repositories',
      value: githubStats ? githubStats.repositories.toLocaleString() : '...',
      label: 'Repositories',
      icon: BookOpen,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      borderColor: 'border-emerald-200/50 dark:border-emerald-900/30',
    },
    {
      id: 'stars',
      value: githubStats ? githubStats.stars.toLocaleString() : '...',
      label: 'GitHub Stars',
      icon: Star,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
      borderColor: 'border-amber-200/50 dark:border-amber-900/30',
    },
  ];

  // Let's mock a high-fidelity contribution history grid
  // Generating a realistic matrix: 53 weeks (columns) x 7 days (rows)
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  // Custom seed to create a realistic Github activity density (high density matching the pink color scheme)
  const generateGridData = () => {
    const grid: number[][] = [];
    const seedRandom = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return Math.abs(hash % 100) / 100;
    };

    for (let day = 0; day < 7; day++) {
      const row: number[] = [];
      for (let week = 0; week < 53; week++) {
        // Create natural patterns of active/inactive blocks
        const noise = seedRandom(`week-${week}-day-${day}`);
        let count = 0;
        
        // Match the high activity in the image (mostly pink tiles)
        if (noise > 0.85) {
          count = 0; // No activity
        } else if (noise > 0.6) {
          count = Math.floor(noise * 3) + 1; // 1 to 3 contributions
        } else if (noise > 0.2) {
          count = Math.floor(noise * 8) + 4; // 4 to 8 contributions
        } else {
          count = Math.floor(noise * 15) + 10; // 10+ contributions
        }
        row.push(count);
      }
      grid.push(row);
    }
    return grid;
  };

  const gridData = generateGridData();

  // Color mapper based on contribution count
  const getCellColor = (count: number) => {
    if (count === 0) return 'bg-slate-100 dark:bg-slate-900';
    if (count <= 3) return 'bg-pink-200 dark:bg-pink-950/70';
    if (count <= 7) return 'bg-pink-300 dark:bg-pink-800/80';
    if (count <= 12) return 'bg-pink-400 dark:bg-pink-600';
    return 'bg-pink-500'; // High activity
  };

  return (
    <section id="code-and-contributions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Code & Contributions
          </h2>
          <div className="h-1.5 w-16 bg-pink-500 mt-2 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* GitHub Heatmap panel (Left - 8 columns) */}
          <div className="lg:col-span-8 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 relative">
            
            {/* Header / Profile Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-extrabold font-mono text-base shadow-sm">
                    A
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center border border-slate-200/50 dark:border-slate-800 shadow-xs">
                    <Github className="h-3 w-3 text-slate-700 dark:text-slate-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    @iawaisahmd
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                    Live public GitHub stats for commits, repositories, followers, and stars.
                  </p>
                </div>
              </div>
              
              {/* Optional glowing tag */}
              <div className="hidden sm:flex items-center gap-1 text-[10px] bg-pink-500/10 text-pink-500 px-2.5 py-1 rounded-full font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                <span>ACTIVE DEV</span>
              </div>
            </div>

            {/* Heatmap Area */}
            <div className="overflow-x-auto select-none pb-2 scrollbar-none">
              <div className="min-w-[620px] space-y-2">
                
                {/* Month Labels */}
                <div className="flex text-[10px] font-mono text-slate-400 pl-6 pr-2">
                  {months.map((month, i) => (
                    <div 
                      key={month} 
                      className="text-left font-semibold"
                      style={{ width: `${100 / 12}%` }}
                    >
                      {month}
                    </div>
                  ))}
                </div>

                {/* Grid Grid cells */}
                <div className="flex gap-1">
                  {/* Days of week indicators */}
                  <div className="flex flex-col gap-1 justify-between text-[8px] font-mono text-slate-400 w-5 pr-1.5 pt-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Grid Box */}
                  <div className="flex-1 grid grid-flow-col gap-1.5">
                    {Array.from({ length: 53 }).map((_, weekIdx) => (
                      <div key={weekIdx} className="grid grid-rows-7 gap-1.5">
                        {Array.from({ length: 7 }).map((_, dayIdx) => {
                          const count = gridData[dayIdx][weekIdx];
                          const dateObj = new Date(2025, 6, 1); // Start from July 1st 2025
                          dateObj.setDate(dateObj.getDate() + (weekIdx * 7) + dayIdx);
                          const dateString = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                          return (
                            <div
                              key={dayIdx}
                              className={`h-2.5 w-2.5 rounded-xs transition-colors duration-150 cursor-crosshair hover:ring-2 hover:ring-pink-500 ${getCellColor(count)}`}
                              onMouseEnter={() => setHoveredCell({ count, date: dateString })}
                              onMouseLeave={() => setHoveredCell(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Heatmap Legend & Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-200/40 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
              <div className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                Live public GitHub profile and repository stats
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400">Less</span>
                <div className="flex gap-1">
                  <div className="h-2.5 w-2.5 rounded-xs bg-slate-100 dark:bg-slate-900" />
                  <div className="h-2.5 w-2.5 rounded-xs bg-pink-200" />
                  <div className="h-2.5 w-2.5 rounded-xs bg-pink-300" />
                  <div className="h-2.5 w-2.5 rounded-xs bg-pink-400" />
                  <div className="h-2.5 w-2.5 rounded-xs bg-pink-500" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">More</span>
              </div>
            </div>

            {/* Interactive tooltip overlay */}
            {hoveredCell && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-[10px] font-mono tracking-tight shadow-md border border-slate-800 pointer-events-none flex items-center gap-1.5">
                <span className="font-bold text-pink-400">{hoveredCell.count} {hoveredCell.count === 1 ? 'contribution' : 'contributions'}</span>
                <span className="opacity-60">on</span>
                <span className="font-semibold text-slate-200">{hoveredCell.date}</span>
              </div>
            )}

          </div>

          {/* Side stats widgets (Right - 4 columns) */}
          <div className="lg:col-span-4 space-y-4 w-full">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex items-center gap-5 p-6 rounded-3xl border ${stat.borderColor} bg-white dark:bg-slate-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xs`}
                >
                  <div className={`h-12 w-12 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
