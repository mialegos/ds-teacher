import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconCircleX,
  IconRocket,
} from "@tabler/icons-react";

export default function AlertShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a callout for user attention with optional icon, title, and
          description.
        </p>
      </div>

      <div className="flex max-w-lg flex-col gap-4">
        {/* Success with icon and description */}
        <Alert variant="success">
          <IconCircleCheck className="size-4" />
          <AlertTitle>Success! Your changes have been saved.</AlertTitle>
          <AlertDescription>
            Your profile information has been updated successfully. The changes
            will be visible to other users within a few minutes.
          </AlertDescription>
        </Alert>

        {/* Info alert */}
        <Alert>
          <IconInfoCircle className="size-4" />
          <AlertTitle>
            This method only works for files that are publicly accessible.
          </AlertTitle>
          <AlertDescription>
            Make sure the file permissions are set correctly before proceeding
            with the import.
          </AlertDescription>
        </Alert>

        {/* Description only, no title, no icon */}
        <Alert>
          <AlertDescription>
            This only has a description only. No title. No icon.
          </AlertDescription>
        </Alert>

        {/* Warning alert */}
        <Alert variant="warning">
          <IconAlertTriangle className="size-4" />
          <AlertTitle>
            Let&apos;s try one with our variables to see how it looks.
          </AlertTitle>
          <AlertDescription>
            This alert uses the warning color variables from the design system.
          </AlertDescription>
        </Alert>

        {/* Long description alert */}
        <Alert>
          <IconInfoCircle className="size-4" />
          <AlertTitle>Long description example</AlertTitle>
          <AlertDescription>
            This is a longer description to demonstrate how the alert component
            handles multiple lines of text content. When the description text is
            long enough, it will wrap to the next line while maintaining proper
            alignment with the icon and title above. This is useful for
            providing detailed context or instructions to the user.
          </AlertDescription>
        </Alert>

        {/* Long title alert */}
        <Alert>
          <IconInfoCircle className="size-4" />
          <AlertTitle className="line-clamp-none">
            This is a very long title that spans multiple lines to demonstrate
            how the component handles text wrapping in the title area
          </AlertTitle>
          <AlertDescription>
            The title above wraps to multiple lines while the layout stays
            consistent.
          </AlertDescription>
        </Alert>

        {/* Destructive — session expired */}
        <Alert variant="destructive">
          <IconCircleX className="size-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>

        {/* Destructive — payment failure */}
        <Alert variant="destructive">
          <IconCircleX className="size-4" />
          <AlertTitle>Unable to process your payment</AlertTitle>
          <AlertDescription>
            Please check your card details and try again, or use a different
            payment method.
          </AlertDescription>
        </Alert>

        {/* Error with icon */}
        <Alert variant="destructive">
          <IconCircleX className="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            An unexpected error occurred. Please try again later.
          </AlertDescription>
        </Alert>

        {/* Success — payment */}
        <Alert variant="success">
          <IconCircleCheck className="size-4" />
          <AlertTitle>Payment successful!</AlertTitle>
          <AlertDescription>
            Your payment of $49.99 has been processed. A receipt has been sent
            to your email.
          </AlertDescription>
        </Alert>

        {/* New feature with Explore button */}
        <Alert variant="success">
          <IconRocket className="size-4" />
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            <p>
              Check out the latest updates we&apos;ve made to improve your
              experience.
            </p>
            <Button size="xs" className="mt-2">
              Explore
            </Button>
          </AlertDescription>
        </Alert>

        {/* Dark mode available with button */}
        <Alert variant="success">
          <IconRocket className="size-4" />
          <AlertTitle>Dark mode is now available</AlertTitle>
          <AlertDescription>
            <p>
              Toggle between light and dark mode from your settings panel.
            </p>
            <Button size="xs" className="mt-2">
              Explore
            </Button>
          </AlertDescription>
        </Alert>

        {/* Destructive with action text */}
        <Alert variant="destructive">
          <IconCircleX className="size-4" />
          <AlertTitle>Your account is at risk</AlertTitle>
          <AlertDescription>
            <p>
              We detected unusual activity. Please verify your identity to
              secure your account.
            </p>
            <Button
              size="xs"
              variant="destructive"
              className="mt-2"
            >
              Verify now
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
