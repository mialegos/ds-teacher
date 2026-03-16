"use client";

import {
  Button,
  Typography,
  Input,
  Textarea,
  Select,
  DatePicker,
  Checkbox,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Toggle,
} from "@/components/ui";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-b border-border py-12 last:border-b-0">
      <div className="mb-8">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="p" muted className="mt-2">
          {description}
        </Typography>
      </div>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <Typography variant="h5" muted className="mb-3">
        {title}
      </Typography>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </div>
  );
}

export default function UiKitPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-12">
        <Typography variant="h1">UI Kit</Typography>
        <Typography variant="p" muted className="mt-3">
          Библиотека переиспользуемых компонентов. Каждый компонент --
          самостоятельная обёртка с поддержкой вариантов, размеров и стандартных
          HTML-атрибутов.
        </Typography>
      </div>

      {/* ============================================================ */}
      {/* BUTTON */}
      {/* ============================================================ */}
      <Section
        id="button"
        title="Button"
        description="Кнопка с вариантами стиля и размера. Поддерживает все атрибуты <button>."
      >
        <SubSection title="Варианты">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </SubSection>

        <SubSection title="Размеры">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </SubSection>

        <SubSection title="Состояния">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </SubSection>
      </Section>

      {/* ============================================================ */}
      {/* TYPOGRAPHY */}
      {/* ============================================================ */}
      <Section
        id="typography"
        title="Typography"
        description="Типографика с семантическими вариантами. Автоматически подбирает HTML-тег по варианту."
      >
        <div className="flex flex-col gap-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="p">
            Paragraph -- основной текст. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </Typography>
          <Typography variant="p" muted>
            Muted paragraph -- приглушённый текст для дополнительной информации.
          </Typography>
          <Typography variant="blockquote">
            Blockquote -- цитата или выделенный текст.
          </Typography>
          <Typography variant="p">
            Inline <Typography variant="code">code snippet</Typography> внутри
            текста.
          </Typography>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* INPUT */}
      {/* ============================================================ */}
      <Section
        id="input"
        title="Input"
        description="Текстовое поле с поддержкой label, подсказки, состояния ошибки."
      >
        <div className="flex max-w-sm flex-col gap-4">
          <Input label="Имя пользователя" placeholder="Введите имя..." />
          <Input
            label="Email"
            type="email"
            placeholder="user@example.com"
            hint="Мы не передаём email третьим лицам"
          />
          <Input
            label="Пароль"
            type="password"
            error="Пароль должен содержать минимум 8 символов"
          />
          <Input label="Отключённое поле" disabled value="Нельзя изменить" />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* TEXTAREA */}
      {/* ============================================================ */}
      <Section
        id="textarea"
        title="Textarea"
        description="Многострочное текстовое поле."
      >
        <div className="flex max-w-sm flex-col gap-4">
          <Textarea label="Описание" placeholder="Введите описание..." />
          <Textarea
            label="Комментарий"
            error="Поле обязательно для заполнения"
          />
          <Textarea label="Заметки" hint="Максимум 500 символов" />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* SELECT */}
      {/* ============================================================ */}
      <Section
        id="select"
        title="Select"
        description="Выпадающий список с нативным <select> и кастомным стилем."
      >
        <div className="flex max-w-sm flex-col gap-4">
          <Select
            label="Страна"
            placeholder="Выберите страну..."
            options={[
              { value: "ru", label: "Россия" },
              { value: "us", label: "США" },
              { value: "de", label: "Германия" },
              { value: "jp", label: "Япония" },
            ]}
          />
          <Select
            label="Роль"
            error="Необходимо выбрать роль"
            options={[
              { value: "admin", label: "Администратор" },
              { value: "editor", label: "Редактор" },
              { value: "viewer", label: "Читатель" },
            ]}
          />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* DATE PICKER */}
      {/* ============================================================ */}
      <Section
        id="date-picker"
        title="Date Picker"
        description="Выбор даты на основе нативного input[type='date']."
      >
        <div className="flex max-w-sm flex-col gap-4">
          <DatePicker label="Дата начала" />
          <DatePicker
            label="Дата окончания"
            hint="Выберите дату после даты начала"
          />
          <DatePicker
            label="Дата рождения"
            error="Дата не может быть в будущем"
          />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* CHECKBOX */}
      {/* ============================================================ */}
      <Section
        id="checkbox"
        title="Checkbox"
        description="Чекбокс с label и опциональным описанием."
      >
        <div className="flex flex-col gap-4">
          <Checkbox label="Простой чекбокс" />
          <Checkbox
            label="С описанием"
            description="Дополнительная информация о настройке"
          />
          <Checkbox label="Отмечен по умолчанию" defaultChecked />
          <Checkbox label="Отключённый" disabled />
          <Checkbox label="Отключённый отмеченный" disabled defaultChecked />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* BADGE */}
      {/* ============================================================ */}
      <Section
        id="badge"
        title="Badge"
        description="Бейджи для статусов, тэгов и меток."
      >
        <SubSection title="Варианты">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </SubSection>
      </Section>

      {/* ============================================================ */}
      {/* CARD */}
      {/* ============================================================ */}
      <Section
        id="card"
        title="Card"
        description="Контейнер с секциями: header, content, footer."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Заголовок карточки</CardTitle>
              <CardDescription>Описание карточки с дополнительной информацией</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="p">Содержимое карточки. Любой контент может быть размещён здесь.</Typography>
            </CardContent>
            <CardFooter>
              <Button size="sm">Действие</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Статистика</CardTitle>
              <CardDescription>За последние 30 дней</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <Typography variant="h2">2,847</Typography>
                <Badge variant="success">+12%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* TOGGLE */}
      {/* ============================================================ */}
      <Section
        id="toggle"
        title="Toggle"
        description="Переключатель вкл/выкл (switch)."
      >
        <div className="flex flex-col gap-4">
          <Toggle label="Уведомления" />
          <Toggle
            label="Тёмная тема"
            description="Включить тёмное оформление интерфейса"
          />
          <Toggle label="Включён по умолчанию" defaultChecked />
          <Toggle label="Отключённый" disabled />
        </div>
      </Section>
    </div>
  );
}
