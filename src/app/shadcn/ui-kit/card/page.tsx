"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import { Badge } from "@/components/shadcn/badge";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

export default function CardShowcase() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="mt-2 text-muted-foreground">
          A container component with header, content, and footer sections.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Login Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Don&apos;t have an account?{" "}
              <a href="#" className="text-primary underline underline-offset-2">
                Sign up
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Password</Label>
                <a
                  href="#"
                  className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full">Login</Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>

        {/* Event Card */}
        <Card className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop"
            alt="Design systems meetup"
            className="h-48 w-full object-cover"
          />
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Design systems meetup</CardTitle>
              <Badge variant="secondary">Featured</Badge>
            </div>
            <CardDescription>
              Join us for an evening of talks and networking about design systems
              and component libraries.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>

        {/* Small Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This is a small size variant of the card component, useful for
              compact layouts and sidebar content.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
