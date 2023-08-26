import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";
import React from "react";
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "./ui/Avatar";

interface Props extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

export default function UserAvatar({ user, ...props }: Props) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image fill src={user.image} alt="profile picture" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <PersonIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
