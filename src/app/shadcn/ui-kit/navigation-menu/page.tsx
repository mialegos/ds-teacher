import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  { title: "Alert Dialog", href: "#", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "#", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "#", description: "Displays an indicator showing the completion progress of a task." },
  { title: "Scroll-area", href: "#", description: "Augments native scroll functionality for custom, cross-browser styling." },
  { title: "Tabs", href: "#", description: "A set of layered sections of content—known as tab panels." },
  { title: "Tooltip", href: "#", description: "A popup that displays information related to an element when it receives focus or hover." },
];

export default function NavigationMenuShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="mt-2 text-muted-foreground">
          A collection of links for navigating websites.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Full nav with Getting Started / Components / Documentation */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With content panels
          </h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
                            alt="Abstract gradient"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                          <div className="relative z-10 mb-2 mt-4 text-lg font-medium text-white">
                            shadcn/ui
                          </div>
                          <p className="relative z-10 text-sm leading-tight text-white/80">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Introduction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Re-usable components built using Radix UI and Tailwind CSS.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Installation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">How to install dependencies and structure your app.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Typography</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Styles for headings, paragraphs, lists...etc</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={component.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {component.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {component.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Simple dropdown links */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Simple dropdown
          </h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Components</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Documentation</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Blog</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Extended List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Components</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Documentation</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Blog</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>With Sub</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Components</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Documentation</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">Blog</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </div>
    </div>
  );
}
