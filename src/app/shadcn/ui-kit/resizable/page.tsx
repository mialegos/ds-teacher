import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/shadcn/resizable";

export default function ResizableShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="mt-2 text-muted-foreground">
          Панели с изменяемым размером. Построены на react-resizable-panels.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Горизонтальное разделение
        </h2>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border border-border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Боковая панель</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Контент</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Вертикальное разделение
        </h2>
        <ResizablePanelGroup
          orientation="vertical"
          className="min-h-[300px] rounded-lg border border-border"
        >
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Верхняя панель</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Нижняя панель</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Три панели
        </h2>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border border-border"
        >
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Навигация</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Редактор</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-sm font-medium">Превью</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  );
}
