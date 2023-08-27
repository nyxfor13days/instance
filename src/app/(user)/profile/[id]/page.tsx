"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Profile, User } from "@prisma/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function Profile({ params }: Props) {
  const { id } = params;

  const [user, setUser] = React.useState<User>();
  const [profile, setProfile] = React.useState<Profile>();

  const router = useRouter();

  // run a fetch query on "/api/profile/[id]" to get the user's profile
  const { isLoading: profileLoading, status: profileStatus } = useQuery(
    [`/api/profile?id=${id}`, id],
    () => fetch(`/api/profile?id=${id}`).then((res) => res.json()),
    {
      enabled: !!id,
      retry: 2,
      onSuccess: (res) => {
        if (res.data) setProfile(res.data);
        else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Could not load profile.",
          });
        }
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not load profile.",
        });
      },
    },
  );

  const { isLoading: userLoading } = useQuery(
    [`/api/user?id=${id}`, id],
    () => fetch(`/api/user?id=${id}`).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setUser(res.data);
      },
    },
  );

  if (profileLoading || userLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <ReloadIcon className="animate-spin" />
      </div>
    );

  if (!profile)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <p className="text-sm">No Profile Found</p>
        <Button onClick={() => router.push(`/profile/${id}/create`)}>
          Create your profile
        </Button>
      </div>
    );

  return (
    <main className="py-12 grid grid-cols-3 place-content-center gap-2">
      <aside className="hidden md:block col-span-1 border-r border-accent">
        <div className="py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-32 w-32 relative bg-accent-foreground">
              <Image
                fill
                src={user?.image || ""}
                alt={user?.name || "profile picture"}
              />
            </div>
            <h1 className="">{user?.name}</h1>
          </div>
        </div>
      </aside>
      <div className="col-span-2">
        <div className="md:pl-4 py-6 flex flex-col gap-4">Content</div>
      </div>
    </main>
  );
}
