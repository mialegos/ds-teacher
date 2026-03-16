import {
  IconChevronRight,
  IconStar,
  IconShield,
  IconCheck,
  IconPhoto,
  IconCalendarEvent,
  IconBook,
  IconShare,
  IconLink,
  IconMusic,
} from "@tabler/icons-react";
import { Badge } from "@/components/shadcn/badge";
import { Switch } from "@/components/shadcn/switch";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";

export default function ItemShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Item</h1>
        <p className="mt-2 text-muted-foreground">
          Various list item layout patterns for different use cases.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-lg">
        {/* Item with description + Active badge + chevron */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With badge &amp; chevron
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <IconMusic className="size-5 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Music Store</p>
                <p className="text-xs text-muted-foreground">
                  Browse and manage your music collection
                </p>
              </div>
              <Badge variant="success">Active</Badge>
              <IconChevronRight className="size-4 text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* Item with checkbox + icon + description */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With checkbox
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <Checkbox id="item-check" />
              <IconCalendarEvent className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Calendar events</p>
                <p className="text-xs text-muted-foreground">
                  Manage your upcoming events
                </p>
              </div>
              <Badge variant="secondary">New</Badge>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <Checkbox id="item-check-2" />
              <IconLink className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Online resources</p>
                <p className="text-xs text-muted-foreground">
                  Access shared online content
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <Checkbox id="item-check-3" />
              <IconShare className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Shared Content</p>
              </div>
              <Badge variant="outline">Data</Badge>
            </div>
          </div>
        </section>

        {/* Simple items */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Simple items
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="px-4 py-3 text-sm">Default item</div>
            <div className="px-4 py-3 text-sm">All Mail Box</div>
            <div className="px-4 py-3 text-sm">Annual Reports</div>
          </div>
        </section>

        {/* Item with avatar group */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With avatar group
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Team Allocations</p>
              </div>
              <div className="flex -space-x-2">
                <Avatar className="size-6 border-2 border-background">
                  <AvatarFallback className="text-[10px]">JD</AvatarFallback>
                </Avatar>
                <Avatar className="size-6 border-2 border-background">
                  <AvatarFallback className="text-[10px]">AK</AvatarFallback>
                </Avatar>
                <Avatar className="size-6 border-2 border-background">
                  <AvatarFallback className="text-[10px]">+3</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-muted-foreground">Shared</span>
            </div>
          </div>
        </section>

        {/* User item with avatar */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            User item
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <Avatar className="size-9">
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Michael Davis</p>
                <p className="text-xs text-muted-foreground">Acme Corp.</p>
              </div>
              <IconChevronRight className="size-4 text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* Colored items */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Colored indicators
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            {[
              { label: "High Priority", color: "bg-red-500" },
              { label: "Medium Priority", color: "bg-purple-500" },
              { label: "Low Priority", color: "bg-blue-500" },
              { label: "Completed", color: "bg-green-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3">
                <span className={`size-2 rounded-full ${item.color}`} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Favorites */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Favorites
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <IconStar className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">Favorites</span>
            </div>
          </div>
        </section>

        {/* Image item */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With image
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="size-10 shrink-0 rounded-md bg-muted flex items-center justify-center">
                <IconPhoto className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">External Networks</p>
                <p className="text-xs text-muted-foreground">
                  Connect to external resources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security alert */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Alert item
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <IconShield className="size-5 text-warning" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Security Alert</p>
                <p className="text-xs text-muted-foreground">
                  Review and fix security issues
                </p>
              </div>
              <Badge variant="destructive">Fix Now</Badge>
            </div>
          </div>
        </section>

        {/* Switch item */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With switch
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Enable notifications</p>
                <p className="text-xs text-muted-foreground">
                  Receive push notifications
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </section>

        {/* Thumbnail item */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Image thumbnail
          </h2>
          <div className="divide-y divide-border rounded-lg border">
            <div className="flex items-center gap-3 px-4 py-3">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=96&h=96&fit=crop&crop=center"
                alt="Featured content"
                className="size-12 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Featured Content</p>
                <p className="text-xs text-muted-foreground">
                  A large image item with a description for the content preview.
                </p>
              </div>
              <IconChevronRight className="size-4 text-muted-foreground" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
