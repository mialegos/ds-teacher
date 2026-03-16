import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { IconCheck } from "@tabler/icons-react";

export default function AvatarShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="mt-2 text-muted-foreground">
          An image element with a fallback for representing the user. Built on
          Radix Avatar.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Sizes
        </h2>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="xs">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                alt="XS avatar"
              />
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">XS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
                alt="SM avatar"
              />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">SM</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="default">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face"
                alt="Default avatar"
              />
              <AvatarFallback>DF</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face"
                alt="LG avatar"
              />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">LG</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="xl">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=192&h=192&fit=crop&crop=face"
                alt="XL avatar"
              />
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">XL</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Fallback with initials
        </h2>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-blue-500 text-white">
              AB
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-purple-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          With badge
        </h2>
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge>
              <IconCheck className="size-2" />
            </AvatarBadge>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Avatar group
        </h2>
        <AvatarGroup>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face"
              alt="User 1"
            />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
              alt="User 2"
            />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face"
              alt="User 3"
            />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Large avatar group
        </h2>
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face"
              alt="User A"
            />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=face"
              alt="User B"
            />
            <AvatarFallback>UB</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-primary text-primary-foreground">
              AT
            </AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+12</AvatarGroupCount>
        </AvatarGroup>
      </section>
    </div>
  );
}
