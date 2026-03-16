"use client";

import { useState } from "react";
import * as TablerIcons from "@tabler/icons-react";

const iconShowcase = [
  "IconHome", "IconUser", "IconSettings", "IconSearch", "IconBell",
  "IconMail", "IconHeart", "IconStar", "IconPlus", "IconMinus",
  "IconX", "IconCheck", "IconArrowRight", "IconArrowLeft", "IconArrowUp",
  "IconArrowDown", "IconChevronRight", "IconChevronLeft", "IconChevronUp", "IconChevronDown",
  "IconMenu2", "IconDots", "IconDotsVertical", "IconEdit", "IconTrash",
  "IconCopy", "IconDownload", "IconUpload", "IconShare", "IconLink",
  "IconExternalLink", "IconEye", "IconEyeOff", "IconLock", "IconLockOpen",
  "IconFilter", "IconSortAscending", "IconSortDescending", "IconCalendar", "IconClock",
  "IconPhoto", "IconCamera", "IconFile", "IconFolder", "IconClipboard",
  "IconBookmark", "IconFlag", "IconTag", "IconHash", "IconAt",
  "IconBrandGithub", "IconBrandFigma", "IconBrandSlack", "IconBrandGoogle", "IconWorld",
  "IconCloud", "IconSun", "IconMoon", "IconBolt", "IconFlame",
  "IconRefresh", "IconLoader2", "IconAlertTriangle", "IconInfoCircle", "IconCircleCheck",
  "IconCircleX", "IconHelp", "IconMessage", "IconSend", "IconPhone",
  "IconMapPin", "IconCompass", "IconGlobe", "IconDatabase", "IconServer",
  "IconCode", "IconTerminal2", "IconGitBranch", "IconGitCommit", "IconGitPullRequest",
] as const;

type IconName = typeof iconShowcase[number];

export default function IconsPage() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(24);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = iconShowcase.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(
      `import { ${name} } from "@tabler/icons-react";`
    );
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Icons</h1>
        <p className="mt-3 text-muted-foreground">
          Tabler Icons — 5000+ иконок. Нажмите, чтобы скопировать импорт.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <input
          type="text"
          placeholder="Поиск иконки..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 w-64 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Размер:</span>
          {[16, 20, 24, 32].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`rounded px-2 py-1 text-xs transition-colors ${
                size === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
        {filtered.map((name) => {
          const Icon = TablerIcons[name as IconName] as React.ComponentType<{
            size?: number;
            stroke?: number;
          }>;
          if (!Icon) return null;

          return (
            <button
              key={name}
              onClick={() => handleCopy(name)}
              className="group flex flex-col items-center gap-2 rounded-lg border border-transparent p-3 transition-all hover:border-border hover:bg-accent"
              title={name}
            >
              <Icon size={size} stroke={1.5} />
              <span className="w-full truncate text-center text-xs text-muted-foreground">
                {copied === name ? "Скопировано!" : name.replace("Icon", "")}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          Ничего не найдено
        </p>
      )}

      <p className="mt-8 text-xs text-muted-foreground">
        Показана подборка из {iconShowcase.length} иконок. Полный каталог:{" "}
        <a
          href="https://tabler.io/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          tabler.io/icons
        </a>
      </p>
    </div>
  );
}
