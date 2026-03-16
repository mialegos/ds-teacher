import Link from "next/link";
import {
  IconTypography,
  IconPalette,
  IconIcons,
  IconShadow,
  IconBorderRadius,
  IconRulerMeasure,
  IconReportAnalytics,
  IconSquareRoundedLetterB,
  IconList,
  IconAlertTriangle,
  IconAlertCircle,
  IconAspectRatio,
  IconUserCircle,
  IconTag,
  IconChevronRight,
  IconHandClick,
  IconCopy,
  IconCalendar,
  IconCreditCard,
  IconPlayerPlay,
  IconChartBar,
  IconSquareCheck,
  IconLayoutSidebarLeftCollapse,
  IconSearch,
  IconTerminal2,
  IconMenu2,
  IconTable,
  IconCalendarEvent,
  IconWindowMaximize,
  IconArrowsHorizontal,
  IconLayoutBottombar,
  IconChevronDown,
  IconMoodEmpty,
  IconForms,
  IconIdBadge,
  IconTextCaption,
  IconInputSearch,
  IconKey,
  IconListDetails,
  IconKeyboard,
  IconLabel,
  IconLayoutNavbar,
  IconNavigation,
  IconArrowsLeftRight,
  IconMessageDots,
  IconLoader,
  IconCircleDot,
  IconMaximize,
  IconMarquee,
  IconSelector,
  IconLine,
  IconLayoutSidebar,
  IconLayoutSidebarRight,
  IconBox,
  IconAdjustments,
  IconBell,
  IconFidgetSpinner,
  IconToggleLeft,
  IconTableFilled,
  IconNotebook,
  IconAlignLeft,
  IconBold,
  IconBlockquote,
  IconTooltip,
} from "@tabler/icons-react";

interface ItemDef {
  href: string;
  icon: React.ComponentType<{ size?: number; stroke?: number; className?: string }>;
  title: string;
  description: string;
}

const foundations: ItemDef[] = [
  {
    href: "/shadcn/ui-kit/typography",
    icon: IconTypography,
    title: "Typography",
    description: "Шрифт Struve, начертания и масштаб типографики",
  },
  {
    href: "/shadcn/ui-kit/colors",
    icon: IconPalette,
    title: "Colors",
    description: "Палитра цветов и CSS-переменные из дизайн-системы",
  },
  {
    href: "/shadcn/ui-kit/icons",
    icon: IconIcons,
    title: "Icons",
    description: "Библиотека Tabler Icons — 5000+ иконок",
  },
  {
    href: "/shadcn/ui-kit/shadows",
    icon: IconShadow,
    title: "Shadows",
    description: "Box shadow, inset shadow, drop shadow — все уровни",
  },
  {
    href: "/shadcn/ui-kit/radius",
    icon: IconBorderRadius,
    title: "Radius",
    description: "Токены скруглений из Figma и маппинг на Tailwind",
  },
  {
    href: "/shadcn/ui-kit/spacing",
    icon: IconRulerMeasure,
    title: "Spacing",
    description: "Шкала отступов, размеры компонентов и gap",
  },
];

const examples: (ItemDef & { external?: boolean })[] = [
  {
    href: "/example/lesson-report",
    icon: IconReportAnalytics,
    title: "Описание урока",
    description: "Полноценный макет отчёта по уроку — все компоненты ДС в деле",
    external: true,
  },
];

const components: ItemDef[] = [
  { href: "/shadcn/ui-kit/accordion", icon: IconList, title: "Accordion", description: "Раскрывающиеся секции контента" },
  { href: "/shadcn/ui-kit/alert", icon: IconAlertTriangle, title: "Alert", description: "Информационные и предупреждающие уведомления" },
  { href: "/shadcn/ui-kit/alert-dialog", icon: IconAlertCircle, title: "Alert Dialog", description: "Модальный диалог подтверждения действия" },
  { href: "/shadcn/ui-kit/aspect-ratio", icon: IconAspectRatio, title: "Aspect Ratio", description: "Контейнер с фиксированным соотношением сторон" },
  { href: "/shadcn/ui-kit/avatar", icon: IconUserCircle, title: "Avatar", description: "Аватар пользователя с фоллбэком" },
  { href: "/shadcn/ui-kit/badge", icon: IconTag, title: "Badge", description: "Бейдж для статусов и категорий" },
  { href: "/shadcn/ui-kit/breadcrumb", icon: IconChevronRight, title: "Breadcrumb", description: "Навигационные хлебные крошки" },
  { href: "/shadcn/ui-kit/button", icon: IconSquareRoundedLetterB, title: "Button", description: "Кнопка с вариантами, размерами и состояниями" },
  { href: "/shadcn/ui-kit/button-group", icon: IconCopy, title: "Button Group", description: "Группа кнопок с общим контекстом" },
  { href: "/shadcn/ui-kit/calendar", icon: IconCalendar, title: "Calendar", description: "Компонент выбора даты" },
  { href: "/shadcn/ui-kit/card", icon: IconCreditCard, title: "Card", description: "Карточка контента с заголовком и описанием" },
  { href: "/shadcn/ui-kit/carousel", icon: IconPlayerPlay, title: "Carousel", description: "Карусель с навигацией по слайдам" },
  { href: "/shadcn/ui-kit/chart", icon: IconChartBar, title: "Chart", description: "Графики на базе Recharts" },
  { href: "/shadcn/ui-kit/checkbox", icon: IconSquareCheck, title: "Checkbox", description: "Чекбоксы для множественного выбора" },
  { href: "/shadcn/ui-kit/collapsible", icon: IconLayoutSidebarLeftCollapse, title: "Collapsible", description: "Сворачиваемый блок контента" },
  { href: "/shadcn/ui-kit/combobox", icon: IconSearch, title: "Combobox", description: "Выпадающий список с поиском" },
  { href: "/shadcn/ui-kit/command", icon: IconTerminal2, title: "Command", description: "Палитра команд с поиском" },
  { href: "/shadcn/ui-kit/context-menu", icon: IconMenu2, title: "Context Menu", description: "Контекстное меню по правому клику" },
  { href: "/shadcn/ui-kit/data-table", icon: IconTable, title: "Data Table", description: "Таблица данных с сортировкой" },
  { href: "/shadcn/ui-kit/date-picker", icon: IconCalendarEvent, title: "Date Picker", description: "Выбор даты и диапазона дат" },
  { href: "/shadcn/ui-kit/dialog", icon: IconWindowMaximize, title: "Dialog", description: "Модальный диалог с формой" },
  { href: "/shadcn/ui-kit/direction", icon: IconArrowsHorizontal, title: "Direction", description: "LTR/RTL направление текста" },
  { href: "/shadcn/ui-kit/drawer", icon: IconLayoutBottombar, title: "Drawer", description: "Выдвижная панель снизу" },
  { href: "/shadcn/ui-kit/dropdown-menu", icon: IconChevronDown, title: "Dropdown Menu", description: "Выпадающее меню с элементами" },
  { href: "/shadcn/ui-kit/empty", icon: IconMoodEmpty, title: "Empty", description: "Состояния пустых данных" },
  { href: "/shadcn/ui-kit/field", icon: IconForms, title: "Field", description: "Поле формы с меткой и валидацией" },
  { href: "/shadcn/ui-kit/hover-card", icon: IconIdBadge, title: "Hover Card", description: "Карточка при наведении" },
  { href: "/shadcn/ui-kit/input", icon: IconTextCaption, title: "Input", description: "Текстовое поле ввода" },
  { href: "/shadcn/ui-kit/input-group", icon: IconInputSearch, title: "Input Group", description: "Поле ввода с иконками и аддонами" },
  { href: "/shadcn/ui-kit/input-otp", icon: IconKey, title: "Input OTP", description: "Ввод одноразового кода" },
  { href: "/shadcn/ui-kit/item", icon: IconListDetails, title: "Item", description: "Элементы списков разного типа" },
  { href: "/shadcn/ui-kit/kbd", icon: IconKeyboard, title: "Kbd", description: "Отображение клавиш клавиатуры" },
  { href: "/shadcn/ui-kit/label", icon: IconLabel, title: "Label", description: "Метки форм" },
  { href: "/shadcn/ui-kit/menubar", icon: IconLayoutNavbar, title: "Menubar", description: "Строка меню в стиле десктопа" },
  { href: "/shadcn/ui-kit/navigation-menu", icon: IconNavigation, title: "Navigation Menu", description: "Навигация с выпадающими панелями" },
  { href: "/shadcn/ui-kit/pagination", icon: IconArrowsLeftRight, title: "Pagination", description: "Постраничная навигация" },
  { href: "/shadcn/ui-kit/popover", icon: IconMessageDots, title: "Popover", description: "Всплывающая панель с контентом" },
  { href: "/shadcn/ui-kit/progress", icon: IconLoader, title: "Progress", description: "Индикатор прогресса" },
  { href: "/shadcn/ui-kit/radio-group", icon: IconCircleDot, title: "Radio Group", description: "Группа радиокнопок" },
  { href: "/shadcn/ui-kit/resizable", icon: IconMaximize, title: "Resizable", description: "Изменяемые панели" },
  { href: "/shadcn/ui-kit/scroll-area", icon: IconMarquee, title: "Scroll Area", description: "Область прокрутки" },
  { href: "/shadcn/ui-kit/select", icon: IconSelector, title: "Select", description: "Выпадающий список выбора" },
  { href: "/shadcn/ui-kit/separator", icon: IconLine, title: "Separator", description: "Визуальный разделитель" },
  { href: "/shadcn/ui-kit/sheet", icon: IconLayoutSidebarRight, title: "Sheet", description: "Боковая выдвижная панель" },
  { href: "/shadcn/ui-kit/sidebar", icon: IconLayoutSidebar, title: "Sidebar", description: "Боковая панель навигации" },
  { href: "/shadcn/ui-kit/skeleton", icon: IconBox, title: "Skeleton", description: "Загрузочные скелетоны" },
  { href: "/shadcn/ui-kit/slider", icon: IconAdjustments, title: "Slider", description: "Ползунок выбора значения" },
  { href: "/shadcn/ui-kit/sonner", icon: IconBell, title: "Sonner", description: "Toast-уведомления" },
  { href: "/shadcn/ui-kit/spinner", icon: IconFidgetSpinner, title: "Spinner", description: "Индикатор загрузки" },
  { href: "/shadcn/ui-kit/switch", icon: IconToggleLeft, title: "Switch", description: "Переключатель вкл/выкл" },
  { href: "/shadcn/ui-kit/table", icon: IconTableFilled, title: "Table", description: "Таблица данных" },
  { href: "/shadcn/ui-kit/tabs", icon: IconNotebook, title: "Tabs", description: "Вкладки навигации" },
  { href: "/shadcn/ui-kit/textarea", icon: IconAlignLeft, title: "Textarea", description: "Многострочное поле ввода" },
  { href: "/shadcn/ui-kit/toggle", icon: IconBold, title: "Toggle", description: "Переключаемая кнопка" },
  { href: "/shadcn/ui-kit/toggle-group", icon: IconBlockquote, title: "Toggle Group", description: "Группа переключаемых кнопок" },
  { href: "/shadcn/ui-kit/tooltip", icon: IconTooltip, title: "Tooltip", description: "Подсказка при наведении" },
];

export default function ShadcnUiKitPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Shadcn UI Kit</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Компоненты на базе Tailwind CSS + shadcn/ui, соответствующие
          дизайн-системе из Figma.
        </p>
      </div>

      <h2 className="text-sm font-medium text-muted-foreground mb-4">Examples</h2>
      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        {examples.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <item.icon
              size={28}
              stroke={1.5}
              className="text-muted-foreground transition-colors group-hover:text-primary"
            />
            <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">
              {item.title}
              {item.external && <span className="ml-1 text-xs text-muted-foreground">↗</span>}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      <h2 className="text-sm font-medium text-muted-foreground mb-4">Foundations</h2>
      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        {foundations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <item.icon
              size={28}
              stroke={1.5}
              className="text-muted-foreground transition-colors group-hover:text-primary"
            />
            <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      <h2 className="text-sm font-medium text-muted-foreground mb-4">Components</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-sm"
          >
            <item.icon
              size={20}
              stroke={1.5}
              className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-medium group-hover:text-primary">
                {item.title}
              </h3>
              <p className="truncate text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
