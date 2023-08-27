"use client";

import type { User } from "next-auth";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { getSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

interface Props {
  user: Pick<User, "name" | "image" | "email">;
}

export default function UserAccountNav({ user }: Props) {
  const [id, setId] = React.useState<string | null>(null);

  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const getId = async () => {
      const session = await getSession();
      setId(session?.user?.id || null);
    };

    getId();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8 rounded-full"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-background" align="end">
        <DropdownMenuItem className="flex items-center justify-start gap-2 p-4">
          <Link
            href={`/profile/${id}`}
            className="flex flex-col space-y-1 leading-none"
          >
            {user.name && <span className="font-medium">{user.name}</span>}
            {user.email && (
              <span className="w-[200px] truncate text-sm text-accent-foreground">
                {user.email}
              </span>
            )}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/create">Create Post</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            setTheme(
              theme === "dark"
                ? "system"
                : theme === "system"
                ? "light"
                : "dark"
            );
          }}
          className="flex items-center justify-between cursor-pointer"
        >
          <span>Toggle Theme</span>
          {theme === "dark" ? (
            <MoonIcon />
          ) : theme === "system" ? (
            <DesktopIcon />
          ) : (
            <SunIcon />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
          className="cursor-pointer"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
