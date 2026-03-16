import { Button } from "@/components/shadcn/button";
import {
  IconFolderPlus,
  IconCloudUpload,
  IconBellOff,
  IconWifiOff,
  IconUsersGroup,
  IconFileUnknown,
  IconRefresh,
  IconUserPlus,
  IconArrowRight,
} from "@tabler/icons-react";

export default function EmptyShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Empty State</h1>
        <p className="mt-2 text-muted-foreground">
          Empty state patterns with icons, descriptions, and call-to-action buttons.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* No Projects Yet */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconFolderPlus className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">No Projects Yet</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            Get started by creating your first project or importing an existing one.
          </p>
          <div className="mt-4 flex gap-2">
            <Button size="sm">Create Project</Button>
            <Button size="sm">Import Project</Button>
          </div>
          <button className="mt-3 inline-flex items-center text-sm text-primary hover:underline">
            Learn More
            <IconArrowRight className="ml-1 size-3.5" />
          </button>
        </div>

        {/* Cloud Storage Empty */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconCloudUpload className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">Cloud Storage Empty</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            Upload files to your cloud storage to access them anywhere.
          </p>
          <button className="mt-4 text-sm text-primary hover:underline">
            Upload Files
          </button>
        </div>

        {/* No Notifications */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconBellOff className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">No Notifications</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            You&apos;re all caught up! Check back later for updates.
          </p>
          <Button size="sm" variant="outline" className="mt-4">
            <IconRefresh className="mr-2 size-4" />
            Refresh
          </Button>
        </div>

        {/* User Offline */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconWifiOff className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">User Offline</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            It looks like you&apos;re not connected. Check your network settings or add an account.
          </p>
          <Button size="sm" className="mt-4">
            <IconUserPlus className="mr-2 size-4" />
            Add Account
          </Button>
        </div>

        {/* No Team Members */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconUsersGroup className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">No Team Members</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            Invite your team members to start collaborating on projects together.
          </p>
          <Button size="sm" className="mt-4">
            Invite Members
          </Button>
        </div>

        {/* 404 - Not Found */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <IconFileUnknown className="size-6 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold">404 - Not Found</h3>
          <p className="mt-1 max-w-[260px] text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <button className="mt-4 text-sm text-primary hover:underline">
            Try searching for something...
          </button>
          <p className="mt-2 text-xs text-muted-foreground">
            Need help?{" "}
            <button className="text-primary hover:underline">
              Contact support.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
