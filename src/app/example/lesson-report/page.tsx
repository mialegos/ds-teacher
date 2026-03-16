"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconLayoutSidebar,
  IconChevronRight,
  IconChevronLeft,
  IconPlayerPlayFilled,
  IconVolume,
  IconCircle1,
  IconCircle2,
  IconCircle3,
  IconDownload,
  IconHome,
  IconBook,
  IconUsers,
  IconSchool,
  IconUsersGroup,
  IconFileDescription,
  IconNotebook,
  IconSparkles,
  IconHelp,
  IconSend,
  IconExternalLink,
} from "@tabler/icons-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/shadcn/breadcrumb";
import { Separator } from "@/components/shadcn/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/shadcn/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { Button } from "@/components/shadcn/button";

/* ================================================================
   Data
   ================================================================ */

const criteriaRows = [
  {
    name: "Психологический вход",
    score: 2,
    comment:
      "Урок начинается сразу с дела, без формального вступления, что для этого класса, возможно, оптимально.",
  },
  {
    name: "Целеполагание",
    score: 1,
    comment:
      "Цели ясны и озвучены в самом начале: «Погнали, записываем тему урока... Сопротивление проводника... и сразу не сегодня мы пройдём закон Ома».",
  },
  {
    name: "Динамика",
    score: 1,
    comment: "Не применялась. Работа фронтальная и индивидуальная.",
  },
  {
    name: "Голос ученика",
    score: 2,
    comment:
      "Четкие и лаконичные: «Записываем», «Давайте посмотрим на симулятор», «Открываем параграф...».",
  },
  {
    name: "Групповая работа",
    score: 2,
    comment:
      "Ключевое достоинство урока. Аналогии гениальны: «На шкаф вдруг садится Стёпа... двигаться теперь вы как будете? Медленнее» (06:00).",
  },
];

const otherCriteria = [
  { name: "Взаимодействие и вовлеченность", score: 3 },
  { name: "Личность и климат", score: 5 },
  { name: "Содержание и инструменты", score: 1 },
];

const chronology = [
  {
    time: "00:00 — 03:20",
    text: "Организационный момент. Объявление темы урока. Переход к работе с интерактивной симуляцией.",
  },
  {
    time: "03:20 — 11:00",
    text: "Актуализация знаний. Повторение схемы электрической цепи, способов подключения амперметра и вольтметра, связи между напряжением и силой тока (по материалам ДЗ).",
  },
  {
    time: "11:00 — 24:30",
    text: "Введение нового понятия «резистор» и «сопротивление». Учитель использует эвристическую беседу («Что такое вообще резистор?») и блестящие аналогии (шкаф, на который сел Стёпа; сужение дороги) для объяснения физического смысла сопротивления.",
  },
  {
    time: "24:30 — 35:00",
    text: "Работа с формулами. Вывод зависимости R = U/I. Решение задач. Самостоятельная работа учеников.",
  },
  {
    time: "35:00 — 41:20",
    text: "Подведение итогов. Запись домашнего задания. Обсуждение практической работы на следующий урок.",
  },
];

const recommendations = [
  {
    icon: IconCircle1,
    title: "Легализовать шум",
    text: "Вместо борьбы с разговорами, направить их в учебное русло. Вводить короткие задания для пар: «Обсудите с соседом, почему электроны стали двигаться медленнее. У вас 30 секунд».",
  },
  {
    icon: IconCircle2,
    title: "Расширить охват",
    text: "Использовать техники случайного выбора (например, карточки с именами) для вовлечения молчаливых учеников.",
  },
  {
    icon: IconCircle3,
    title: "Физическая разминка",
    text: "Учитывая живость класса, короткая (1 минута) смена позы или простое упражнение в середине урока может помочь сбросить напряжение.",
  },
];

const studentAssessment = [
  {
    name: "Артур",
    comment:
      "Проявил глубокое понимание, дав ключевую характеристику резистора: «Он даёт сопротивление электрическому току». Рекомендуется давать усложнённые задания.",
  },
  {
    name: "Мила",
    comment:
      "Явный лидер учебной группы. Активно отвечает, быстро соображает («Чтобы не перегорело»), выходит к доске.",
  },
  {
    name: "Василиса",
    comment:
      "Способна формулировать определения на основе обсуждения, что говорит о высоком уровне осмысления материала.",
  },
  {
    name: "Гриша",
    comment:
      "Его вопрос «I — это что?» (11:35) — важный диагностический сигнал. Он показывает, что базовые обозначения не усвоены.",
  },
];

/* ================================================================
   Helpers
   ================================================================ */

function getSectionColor(score: number) {
  if (score <= 3) return "bg-destructive";
  if (score <= 6) return "bg-edtech-yellow-500";
  return "bg-primary";
}

function SectionScore({ score }: { score: number }) {
  const color = getSectionColor(score);
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`size-4 rounded-full ${
              i < score ? color : "bg-muted-2"
            }`}
          />
        ))}
      </div>
      <span className="text-2xl font-bold leading-8 tabular-nums">
        {score}
      </span>
    </div>
  );
}

function SkillDots({ score }: { score: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={`size-3 rounded-full ${
            i < score ? "bg-foreground" : "bg-muted-2"
          }`}
        />
      ))}
    </div>
  );
}

function AudioWaveform() {
  const bars = [
    20, 35, 15, 40, 25, 38, 30, 42, 20, 38, 35, 28, 40, 22, 36,
    40, 25, 38, 30, 42, 15, 35, 40, 20, 38, 42, 30, 25, 40, 35,
    20, 15, 38, 40, 25, 42, 35, 30, 28, 40, 22, 36, 38, 20, 35,
    15, 40, 25, 30, 42, 38, 20, 35, 40, 28, 22, 36, 40, 25, 38,
    30, 42, 20, 38, 35, 28, 40, 22, 36, 40, 25, 38, 30, 42, 15,
    35, 40, 20, 38, 42, 30, 25, 40, 35, 20, 15, 38, 40, 25, 42,
    35, 30, 28, 40, 22, 36, 38, 20, 35, 15, 40, 25, 30, 42, 38,
    20, 35, 40, 28, 22, 36, 40, 25, 38, 30, 42, 20, 38, 35, 28,
    40, 22, 36, 40, 25, 38, 30, 42, 15, 35, 40, 20, 38, 42, 30,
    25, 40, 35, 20, 15, 38, 40, 25, 42, 35, 30, 28, 40, 22, 36,
  ];
  return (
    <div className="flex h-10 flex-1 items-end gap-px">
      {bars.map((h, i) => (
        <div
          key={i}
          className="min-w-[1px] flex-1 rounded-full bg-muted-foreground/40"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* ================================================================
   Page
   ================================================================ */

function getScoreColor(score: number) {
  if (score <= 30) return "bg-destructive";
  if (score <= 64) return "bg-edtech-yellow-500";
  return "bg-primary";
}

function getScoreLevel(score: number) {
  if (score <= 30) return "Урок требует доработки";
  if (score <= 64) return "Урок проведён на среднем уровне";
  return "Урок проведён на высоком уровне";
}

function LessonScore({ score }: { score: number }) {
  const filledCount = Math.round(score / 10);
  const color = getScoreColor(score);

  return (
    <div className="flex shrink-0 flex-col items-end gap-4">
      <div className="flex items-baseline">
        <span className="text-5xl font-bold tabular-nums">{score}</span>
        <span className="text-xl text-muted-foreground">/100</span>
      </div>
      <div className="grid grid-cols-5 gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`size-8 rounded-full ${
              i < filledCount ? color : "bg-muted-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LessonReportPage() {
  const [carouselOffset, setCarouselOffset] = useState(0);

  const structureScore = criteriaRows.reduce((a, r) => a + r.score, 0);
  const lessonScore = 92;

  return (
    <div className="flex min-h-screen">
      {/* ── Edtech Sidebar ──────────────────────────── */}
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-card">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <img src="/logo.svg" alt="artifact" className="size-8" />
          <span className="text-xl font-bold">artifact</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2">
          <p className="mb-2 px-3 text-xs font-medium text-muted-foreground">
            Основное
          </p>
          {([
            { icon: IconHome, label: "Обзор", bg: "bg-primary", text: "text-primary-foreground" },
            { icon: IconBook, label: "Уроки", bg: "bg-orange-500", text: "text-white" },
            { icon: IconUsers, label: "Учителя", bg: "bg-cyan-500", text: "text-white" },
            { icon: IconUsersGroup, label: "Классы", bg: "bg-purple-500", text: "text-white" },
          ] as const).map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <div className={`flex size-8 items-center justify-center rounded-[9999px] ${item.bg}`}>
                <item.icon className={`size-4 ${item.text}`} />
              </div>
              {item.label}
            </Link>
          ))}

          <p className="mb-2 mt-6 px-3 text-xs font-medium text-muted-foreground">
            Дополнительно
          </p>
          {([
            { icon: IconUsers, label: "Пользователи" },
            { icon: IconSchool, label: "Школы" },
            { icon: IconNotebook, label: "Электронный журнал" },
            { icon: IconSparkles, label: "Настройки ии" },
          ] as const).map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <IconFileDescription className="size-4 shrink-0" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 px-3 pb-4">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <IconHelp className="size-4" />
            Помощь
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <IconSend className="size-4" />
            Написать разработчикам
          </Link>

          <div className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-foreground text-background">
              <span className="text-xs font-bold">Ш</span>
            </div>
            <div className="flex-1 truncate">
              <p className="truncate text-sm font-medium">Шпак Марина</p>
              <p className="truncate text-xs text-muted-foreground">m@example.com</p>
            </div>
            <IconExternalLink className="size-4 shrink-0 text-muted-foreground" />
          </div>
        </div>
      </aside>

      {/* ── Main Content ────────────────────────────── */}
      <main className="flex-1 overflow-y-auto bg-background-1">
      <div className="mx-auto flex max-w-[800px] flex-col gap-5 py-5">
        {/* ── Card 1: Header + Summary ───────────────── */}
        <section className="overflow-hidden rounded-[48px] bg-card">
          {/* Header bar: p=32/32/20/32, border-b */}
          <div className="flex items-center gap-4 border-b border-border px-8 pt-8 pb-5">
            <Button variant="ghost" size="icon" className="size-7">
              <IconLayoutSidebar className="size-4" />
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Обзор</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Уроки</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">7а класс</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Отчет по уроку</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Content: Header section — gap=16 */}
          <div className="flex flex-col gap-4 px-8 pt-6 pb-2">
            <div className="flex items-center gap-1.5 text-base text-muted-foreground">
              <span>Соколова Татьяна Сергеевна</span>
              <span>•</span>
              <span>Биология, 7 класс</span>
            </div>
            <h1 className="text-[30px] font-bold leading-tight">
              Зоология — наука о животных.
              <br />
              Простейшие и многоклеточные.
            </h1>
          </div>

          {/* Content: Summary + Score — p=8/32/8/32, inner gap=24 */}
          <div className="px-8 py-2 pb-8">
            <div className="flex items-start gap-6">
              <div className="flex-1 space-y-1 pt-1">
                <h3 className="text-sm font-semibold">
                  {getScoreLevel(lessonScore)}
                </h3>
                <p className="text-sm leading-relaxed">
                  Урок прошел на высоком методическом уровне: вы блестяще
                  раскрыли переход от одноклеточных форм к многоклеточным,
                  сохранив идеальный баланс теории и интерактива.
                </p>
              </div>
              <LessonScore score={lessonScore} />
            </div>
          </div>
        </section>

        {/* ── Card 2: Критерии оценки уроков ─────────── */}
        {/* r=48, p=32, gap=16 between title and accordion */}
        <section className="rounded-[48px] bg-card p-8">
          <h2 className="mb-4 text-[30px] font-normal leading-tight">
            Критерии оценки уроков
          </h2>

          <div className="flex flex-col gap-4">
            {/* Expanded section: table with r=14, border */}
            <Accordion
              type="single"
              collapsible
              defaultValue="structure"
            >
              <AccordionItem value="structure" className="border-0">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex flex-1 items-center justify-between gap-2 pr-4">
                    <span className="text-base font-medium">
                      Структура урока и методология
                    </span>
                    <SectionScore score={structureScore} />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-hidden rounded-[14px] border border-border">
                    <Table className="table-fixed">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">
                            Критерий
                          </TableHead>
                          <TableHead className="w-[70px]">Оценка</TableHead>
                          <TableHead className="w-[372px]">
                            Комментарий
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {criteriaRows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell className="whitespace-normal font-medium">
                              {row.name}
                            </TableCell>
                            <TableCell className="whitespace-normal">
                              <SkillDots score={row.score} />
                            </TableCell>
                            <TableCell className="whitespace-normal text-sm">
                              {row.comment}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Collapsed sections: gap=8 between them */}
            <div className="flex flex-col gap-2">
              {otherCriteria.map((item) => (
                <Accordion key={item.name} type="single" collapsible>
                  <AccordionItem value={item.name} className="border-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <div className="flex flex-1 items-center justify-between gap-2 pr-4">
                        <span className="text-base font-medium">
                          {item.name}
                        </span>
                        <SectionScore score={item.score} />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Подробная оценка раздела будет представлена после
                        завершения анализа.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* ── Card 3: Запись и расшифровка урока ──────── */}
        {/* r=48, p=32, gap=16 */}
        <section className="rounded-[48px] bg-card p-8">
          <h2 className="mb-4 text-[30px] font-normal leading-tight">
            Запись и расшифровка урока
          </h2>

          <div className="flex flex-col gap-4">
            {/* File title + download: gap=8 */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Физика 7а.m4a</h3>
              <Button variant="ghost" size="sm">
                <IconDownload className="mr-1.5 size-4" />
                Скачать
              </Button>
            </div>

            {/* Player: 736x96, NO background, directly on card */}
            <div className="flex flex-col gap-2">
              <AudioWaveform />
              <div className="flex h-10 items-center gap-2">
                <IconPlayerPlayFilled className="size-6 shrink-0" />
                <div className="flex flex-1 items-center gap-2">
                  <span className="text-xs tabular-nums text-foreground">
                    00:00 / 41:20
                  </span>
                </div>
                <span className="text-xs text-foreground">Скорость: 1</span>
                <IconVolume className="size-6 shrink-0" />
              </div>
            </div>

            {/* Tabs + carousel controls: gap=8 */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 overflow-hidden">
                <Tabs defaultValue="chronology">
                  <TabsList variant="line">
                    <TabsTrigger value="chronology">Хронология</TabsTrigger>
                    <TabsTrigger value="problems">
                      Проблемные места
                    </TabsTrigger>
                    <TabsTrigger value="best">
                      Лучшие моменты
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 rounded-full"
                  onClick={() =>
                    setCarouselOffset(Math.max(0, carouselOffset - 1))
                  }
                >
                  <IconChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-8 rounded-full"
                  onClick={() =>
                    setCarouselOffset(
                      Math.min(chronology.length - 3, carouselOffset + 1)
                    )
                  }
                >
                  <IconChevronRight className="size-4" />
                </Button>
              </div>
            </div>

            {/* Carousel: gap=12, cards r=14, bg=secondary, p=16 */}
            <div className="overflow-hidden">
              <div
                className="flex gap-3 transition-transform duration-300"
                style={{
                  transform: `translateX(-${carouselOffset * 34.33}%)`,
                }}
              >
                {chronology.map((item, i) => (
                  <div
                    key={i}
                    className="w-[calc(33.333%-8px)] shrink-0 rounded-[14px] bg-secondary p-4"
                  >
                    <p className="mb-2 text-sm font-medium tabular-nums text-primary">
                      {item.time}
                    </p>
                    <p className="text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Card 4: Анализ класса и учеников ────────── */}
        {/* r=48, p=32, gap=16 between title and content */}
        <section className="rounded-[48px] bg-card p-8">
          <h2 className="mb-4 text-[30px] font-normal leading-tight">
            Анализ класса и учеников
          </h2>

          {/* Inner content: gap=8 between all blocks */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Дисциплина</h3>

            <div className="space-y-2">
              <p className="text-sm leading-relaxed">
                Класс можно охарактеризовать как «рабочий шум». Ученики не
                срывают урок, но позволяют себе общаться на посторонние темы.
                Реакция на прямое замечание («Вы надоели болтать», 14:47) —
                кратковременное затихание. Это говорит о том, что авторитет у
                учителя есть, но класс требует постоянного вовлечения, чтобы
                не «уплывать».
              </p>
            </div>

            <h3 className="mt-2 text-lg font-medium">
              Рекомендации по работе с этим классом:
            </h3>

            {recommendations.map((rec) => (
              <div key={rec.title} className="flex gap-2">
                <rec.icon className="mt-0.5 size-6 shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold">{rec.title}</p>
                  <p className="text-sm leading-relaxed">{rec.text}</p>
                </div>
              </div>
            ))}

            <h3 className="mt-2 text-lg font-medium">
              Оценка ответов учеников
            </h3>

            <div className="overflow-hidden rounded-[14px] border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[240px]">Ученик</TableHead>
                    <TableHead>Комментарий</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentAssessment.map((student) => (
                    <TableRow key={student.name}>
                      <TableCell className="align-top whitespace-normal font-medium">
                        {student.name}
                      </TableCell>
                      <TableCell className="align-top whitespace-normal text-sm">
                        {student.comment}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </div>
      </main>
    </div>
  );
}
