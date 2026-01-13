import { useEffect, useMemo, useRef, useState } from "react";
import "./ResumeConsole.css";

const PROMPT = "winbisid:resume$";

type HistoryEntry = {
  command: string;
  output: string[];
  system?: boolean;
};

type CommandHandler = () => string[];

type CommandMap = Record<string, CommandHandler>;

export default function ResumeConsole() {
  const [input, setInput] = useState("");
  const [typingTest, setTypingTest] = useState<null | {
    prompt: string;
    start: number;
    active: boolean;
  }>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [booting, setBooting] = useState(true);
  const [showHints, setShowHints] = useState(true);
  const [theme, setTheme] = useState<"neon" | "mono" | "oldschool">("neon");
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [missions, setMissions] = useState<string[]>(["Try 'cat about.txt'", "Open the PDF résumé", "List your skills"]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const virtualFs: Record<string, string[]> = useMemo(
    () => ({
      "about.txt": [
        "Frontend engineer & creative coder; motion-rich, performant interfaces.",
      ],
      "skills.txt": [
        "TS/JS, React, Vite, Three.js, Framer Motion, CSS systems;",
        "Node/Express, REST, GraphQL (light), Postgres, Docker, k8s basics;",
        "DX: GitHub Actions, testing, lint/format, Storybook (light);",
        "Ops/Sec: auth flows, logging/obs, threat modeling basics.",
      ],
      "experience.log": [
        "Freelance/Consulting — motion-first frontends, product experiments.",
        "Startups — dashboards, marketing, internal tools with strong UX.",
        "Enterprise — Windows Server/AD, scripting/automation, observability plumbing.",
      ],
      "projects.lst": [
        "Showcase 3D studio + network map (this site).",
        "Blanksy — creator platform (in progress).",
        "Homelab — Pi cluster, k8s, nginx, ZeroTier/WG, RAID NAS, Samba.",
        "Open source — Omnivore app contributions.",
      ],
      "contact.cfg": [
        "Email: abrahamapibit@outlook.com",
        "GitHub: https://github.com/Winbisid",
        "Portfolio: https://winbisid.netlify.app",
      ],
      "resume.pdf": ["Use 'pdf' to open the file in a new tab."],
    }),
    []
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);

  const commands: CommandMap = useMemo(
    () => ({
      help: () => [
        "Available commands:",
        "  help          Show this list",
        "  about         Quick intro",
        "  skills        Core stack & tools",
        "  experience    Highlights of roles",
        "  projects      Notable work",
        "  contact       How to reach me",
        "  pdf           Open the PDF résumé",
        "  ls / dir      List files",
        "  cat <file>    View a file (about.txt, skills.txt, etc.)",
        "  whoami        Current user",
        "  pwd           Where you are",
        "  status        System status",
        "  map           Network-style overview",
        "  theme neon    Switch to neon theme",
        "  theme mono    Switch to mono theme",
        "  theme oldschool Switch to old school theme",
        "  clear         Clear the console",
        "  exit / q      Close this tab",
        "  ip            Show your public IP address",
        "  history       Show previous commands",
        "  echo <text>   Print text back",
        "  cowsay <txt>  ASCII cow says your text",
        "  color <clr>   Change accent color (neon/oldschool)",
        "  man <cmd>     Show manual for a command",
        "  clear -a      Reset XP/achievements (confirm)",
        "  theme         List available themes",
        "  date/time     Show current date and time",
        "  weather       Show weather for your location",
        "  ascii         Show random ASCII art",
      ],
      // ...existing code...
      contact: () => [
        "Email: abrahamapibit@outlook.com",
        "GitHub: https://github.com/Winbisid",
        "Portfolio: https://winbisid.netlify.app",
      ],
      ls: () => ["about.txt", "skills.txt", "experience.log", "projects.lst", "contact.cfg", "resume.pdf"],
      dir: () => ["about.txt", "skills.txt", "experience.log", "projects.lst", "contact.cfg", "resume.pdf"],
      whoami: () => ["winbisid"],
      pwd: () => ["/home/winbisid/resume"],
      status: () => {
        const uptimeSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const mins = Math.floor(uptimeSeconds / 60);
        const secs = uptimeSeconds % 60;
        return [
          `System: online | Theme: ${theme}`,
          `Uptime: ${mins}m ${secs}s | Latency: ~14ms`,
          "Node: resume-console@1.0 | Build: stable",
        ];
      },
      map: () => [
        "[you]──frontend──ui/3d/motion",
        "   └──backend──infra/auth/apis",
        "   └──security──threat-model/logging",
        "   └──ops──k8s/docker/gha",
        "   └──lab──pi-cluster/raid-nas",
      ],
      pdf: () => {
        window.open("/resume.pdf", "_blank", "noopener,noreferrer");
        return ["Opening résumé PDF in a new tab..."]; 
      },
      clear: () => [],
    }),
    [theme]
  );

  useEffect(() => {
    const bootLines = [
      "[boot] initializing display...",
      "[boot] loading commands...",
      "[boot] linking resume modules...",
      "[boot] system ready. type 'help'",
    ];
    setHistory([{ command: "boot", output: bootLines, system: true }]);

    const timer = setTimeout(() => {
      setBooting(false);
      inputRef.current?.focus();
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [booting]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Gamification logic: XP, level, achievements
  // (removed duplicate updateGamify declaration)

  const typingPrompts = [
    "The quick brown fox jumps over the lazy dog.",
    "TypeScript makes JavaScript safer and more fun.",
    "Framer Motion powers beautiful React animations.",
    "Hack the planet!",
    "Terminal-based typing tests are retro cool.",
    "Creativity is intelligence having fun.",
    "Simplicity is the soul of efficiency.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
  ];

  const runCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim();
    if (!cmd || booting) return;

    const normalized = cmd.toLowerCase();
    // Typing test start
    if (normalized === "type" || normalized === "typingtest") {
      const prompt = typingPrompts[Math.floor(Math.random() * typingPrompts.length)];
      setTypingTest({ prompt, start: Date.now(), active: true });
      setInput("");
      setHistory((prev) => [...prev, { command: cmdRaw, output: ["Typing Test: Type the following and press Enter:", prompt] }]);
      setShowHints(false);
      return;
    }
    let xpGain = 0;
    let newAchievements: string[] = [];

    // Award XP for any valid command
    if (["help","about","skills","experience","projects","contact","ls","dir","whoami","pwd","status","map","pdf"].some(c => normalized.startsWith(c))) {
      xpGain = 50;
      // First command achievement
      if (xp === 0 && !achievements.includes("First Command")) {
        newAchievements.push("First Command");
      }
      // PDF achievement
      if (normalized === "pdf" && !achievements.includes("PDF Unlocked")) {
        newAchievements.push("PDF Unlocked");
      }
      // Explorer achievement
      if ((normalized.startsWith("cat") || normalized === "ls" || normalized === "dir") && !achievements.includes("Explorer")) {
        newAchievements.push("Explorer");
      }
    }

    // history command
    if (normalized === "history") {
      setHistory((prev) => [...prev, { command: cmd, output: commandHistory.length ? commandHistory.map((c, i) => `${i + 1}: ${c}`) : ["No previous commands."] }]);
      setShowHints(false);
      updateGamify(10, []);
      return;
    }

    // echo command
    if (normalized.startsWith("echo ")) {
      setHistory((prev) => [...prev, { command: cmd, output: [cmdRaw.slice(5)] }]);
      setShowHints(false);
      updateGamify(5, []);
      return;
    }

    // cowsay command
    if (normalized.startsWith("cowsay ")) {
      const msg = cmdRaw.slice(7).trim() || "Moo!";
      const cow = [
        `  ${'_'.repeat(msg.length + 2)}`,
        `< ${msg} >`,
        `  ${'-'.repeat(msg.length + 2)}`,
        "        \\",
        "         \\   ^__^",
        "             (oo)\\_______",
        "             (__)\\       )\\/\\",
        "                 ||----w |",
        "                 ||     ||",
      ];
      setHistory((prev) => [...prev, { command: cmd, output: cow }]);
      setShowHints(false);
      updateGamify(15, []);
      return;
    }

    // color command (for neon/oldschool)
    if (normalized.startsWith("color ")) {
      const color = cmdRaw.slice(6).trim();
      document.documentElement.style.setProperty('--resume-accent', color);
      setHistory((prev) => [...prev, { command: cmd, output: [`Accent color set to ${color}`] }]);
      setShowHints(false);
      updateGamify(10, []);
      return;
    }

    // man command
    if (normalized.startsWith("man ")) {
      const manCmd = cmdRaw.slice(4).trim();
      const manPages: Record<string, string[]> = {
        help: ["help: List all available commands."],
        history: ["history: Show previous commands in this session."],
        echo: ["echo <text>: Print text back to you."],
        cowsay: ["cowsay <text>: ASCII cow says your text."],
        color: ["color <color>: Change accent color (neon/oldschool). Accepts CSS color names or hex."],
        man: ["man <command>: Show manual/help for a command."],
        'clear -a': ["clear -a: Reset XP and achievements (with confirmation)."],
        theme: ["theme [name]: Switch or list available themes."],
        date: ["date/time: Show current date and time."],
        weather: ["weather: Show weather for your location (uses your IP)."],
        ascii: ["ascii: Show random ASCII art."],
      };
      setHistory((prev) => [...prev, { command: cmd, output: manPages[manCmd] || ["No manual entry for " + manCmd] }]);
      setShowHints(false);
      updateGamify(10, []);
      return;
    }

    // clear -a command
    if (normalized === "clear -a") {
      setHistory((prev) => [...prev, { command: cmd, output: ["Are you sure you want to reset XP and achievements? Type 'yes' to confirm."] }]);
      setShowHints(false);
      // Wait for 'yes' input
      const confirmReset = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === 'y') {
          setXp(0);
          setLevel(1);
          setAchievements([]);
          setHistory((prev) => [...prev, { command: '', output: ["XP and achievements reset!"] }]);
          window.removeEventListener('keydown', confirmReset);
        } else if (e.key.toLowerCase() === 'n') {
          setHistory((prev) => [...prev, { command: '', output: ["Reset cancelled."] }]);
          window.removeEventListener('keydown', confirmReset);
        }
      };
      window.addEventListener('keydown', confirmReset);
      return;
    }

    // theme (list themes if no arg)
    if (normalized === "theme") {
      setHistory((prev) => [...prev, { command: cmd, output: ["Available themes: neon, mono, oldschool"] }]);
      setShowHints(false);
      updateGamify(5, []);
      return;
    }

    // date/time
    if (normalized === "date") {
      const now = new Date();
      setHistory((prev) => [...prev, { command: cmd, output: [now.toDateString()] }]);
      setShowHints(false);
      updateGamify(5, []);
      return;
    }
    if (normalized === "time") {
      const now = new Date();
      setHistory((prev) => [...prev, { command: cmd, output: [now.toLocaleTimeString()] }]);
      setShowHints(false);
      updateGamify(5, []);
      return;
    }

    // weather (uses IP location)
    if (normalized === "weather") {
      setHistory((prev) => [...prev, { command: cmd, output: ["Fetching your weather..."] }]);
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => fetch(`https://wttr.in/?format=3`))
        .then((res) => res.text())
        .then((weather) => {
          setHistory((prev) => [...prev, { command: '', output: [weather] }]);
        })
        .catch(() => {
          setHistory((prev) => [...prev, { command: '', output: ["Could not fetch weather."] }]);
        });
      setShowHints(false);
      updateGamify(10, []);
      return;
    }

    // ascii art
    if (normalized === "ascii") {
      const art = [
        `   _   _`,
        `  (.)_(.)`,
        `   (o o)`,
        `  /  V  \\`,
        ` /(  _  )\\`,
        `   ^^ ^^`,
      ];
      setHistory((prev) => [...prev, { command: cmd, output: art }]);
      setShowHints(false);
      updateGamify(10, []);
      return;
    }
    if (normalized === "exit" || normalized === "q") {
      setTimeout(() => {
        window.close();
      }, 400);
      setHistory((prev) => [...prev, { command: cmd, output: ["Exiting... (close this tab if not auto-closed)"] }]);
      setShowHints(false);
      return;
    }

    if (normalized.startsWith("cat")) {
      const parts = normalized.split(" ").filter(Boolean);
      const file = parts[1];
      if (file && virtualFs[file]) {
        setHistory((prev) => [...prev, { command: cmd, output: virtualFs[file] }]);
      } else {
        setHistory((prev) => [...prev, { command: cmd, output: ["File not found. Try 'ls' to list files."] }]);
      }
      setShowHints(false);
      xpGain = 30;
      if (!achievements.includes("Explorer")) newAchievements.push("Explorer");
      updateGamify(xpGain, newAchievements);
      return;
    }

    if (normalized === "clear") {
      setHistory([]);
      setShowHints(false);
      return;
    }

    if (normalized.startsWith("theme ")) {
      const arg = normalized.split(" ")[1];
      if (arg === "neon" || arg === "mono" || arg === "oldschool") {
        setTheme(arg);
        setHistory((prev) => [...prev, { command: cmd, output: [`Theme set to ${arg}.`] }]);
      } else {
        setHistory((prev) => [...prev, { command: cmd, output: ["Unknown theme. Try 'theme neon', 'theme mono', or 'theme oldschool'."] }]);
      }
      setShowHints(false);
      return;
    }

    if (normalized === "ip") {
      setHistory((prev) => [...prev, { command: cmd, output: ["Fetching your public IP address..."] }]);
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => {
          setHistory((prev) => [...prev, { command: "", output: ["Your public IP: " + data.ip] }]);
        })
        .catch(() => {
          setHistory((prev) => [...prev, { command: "", output: ["Could not fetch IP address."] }]);
        });
      setShowHints(false);
      updateGamify(xpGain, newAchievements);
      return;
    }

    const handler = commands[normalized];
    const output = handler ? handler() : ["Command not found. Type 'help' to see options."];

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setShowHints(false);
    updateGamify(xpGain, newAchievements);
  };

  // Gamification logic: XP, level, achievements
  const updateGamify = (xpGain: number, newAchievements: string[]) => {
    if (xpGain > 0) {
      setXp((prevXp) => {
        const totalXp = prevXp + xpGain;
        if (totalXp >= level * 200) {
          setLevel((prevLevel) => prevLevel + 1);
        }
        return totalXp;
      });
    }
    if (newAchievements.length > 0) {
      setAchievements((prev) => Array.from(new Set([...prev, ...newAchievements])));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typingTest && typingTest.active) {
      const end = Date.now();
      const duration = (end - typingTest.start) / 1000;
      const words = typingTest.prompt.trim().split(/\s+/).length;
      const wpm = Math.round((words / duration) * 60);
      const correct = input.trim() === typingTest.prompt.trim();
      const accuracy = correct
        ? 100
        : Math.max(
            0,
            100 -
              Math.round(
                (Math.abs(typingTest.prompt.length - input.length) /
                  typingTest.prompt.length) *
                  100
              )
          );
      setHistory((prev) => [
        ...prev,
        {
          command: "",
          output: [
            `Typing Test Results:`,
            `Prompt: ${typingTest.prompt}`,
            `Your input: ${input}`,
            `WPM: ${wpm}`,
            `Accuracy: ${accuracy}%`,
            correct ? "Perfect!" : "Try again for 100% accuracy!",
          ],
        },
      ]);
      if (correct && wpm >= 60) updateGamify(50, ["Typing Pro"]);
      else if (correct) updateGamify(30, ["Typing Complete"]);
      setTypingTest(null);
      setInput("");
      return;
    }
    if (!input.trim()) return;
    runCommand(input);
    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex((prev) => prev + 1);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const nextIndex = Math.max(prev - 1, 0);
        setInput(commandHistory[nextIndex] ?? "");
        return nextIndex;
      });
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const nextIndex = Math.min(prev + 1, commandHistory.length);
        setInput(commandHistory[nextIndex] ?? "");
        return nextIndex;
      });
    }
  };

  return (
      <div className={`resume-shell theme-${theme}`} onClick={() => inputRef.current?.focus()}>
        <div className="resume-overlay" />
        <div className="resume-console">
          <div className="crt-glow" aria-hidden />
          <div className="crt-scan" aria-hidden />
          <div className="top-bar">
            <span className="pill">resume node: online</span>
            <span className="pill">latency ~14ms</span>
            <span className="pill">theme: {theme}</span>
            <span className="pill">XP: {xp}</span>
            <span className="pill">Level: {level}</span>
          </div>

          {theme === "oldschool" && (
            <div className="oldschool-gamify">
              <div className="achievements">
                <strong>Achievements:</strong>
                <ul>
                  {achievements.length === 0 && <li>None yet</li>}
                  {achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
              <div className="missions">
                <strong>Quests:</strong>
                <ul>
                  {missions.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>
          )}

          <div className="intro">
            <div className="badge">interactive résumé</div>
            <h1>Winbisid</h1>
            <p>Type a command to explore.</p>
            {showHints && !booting && (
              <div className="hints">Try: skills · projects · pdf · map · status</div>
            )}
          </div>

        <div className="history" ref={historyRef}>
          {history.map((entry, idx) => (
            <div key={idx} className={`history-entry ${entry.system ? "system" : ""}`}>
              <div className="prompt-line">
                <span className="prompt">{PROMPT}</span>
                <span className="command">{entry.command}</span>
              </div>
              {entry.output.length > 0 && (
                <div className="output">
                  {entry.output.map((line, lineIdx) => (
                    <div
                      key={lineIdx}
                      className="line-anim"
                      style={{ animationDelay: `${lineIdx * 70}ms` }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {!booting && (
          <form className="input-row" onSubmit={onSubmit}>
            <span className="prompt">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              spellCheck={false}
              aria-label="resume console input"
              disabled={!!(typingTest && typingTest.active && false)}
            />
          </form>
        )}
      </div>
    </div>
  );
}
