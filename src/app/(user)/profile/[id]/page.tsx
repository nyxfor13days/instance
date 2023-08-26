import React from "react";
import Image from "next/image";
import { getAuthSession } from "@/lib/auth";

interface Props {
  params: {
    id: string;
  };
}

export default async function page({ params }: Props) {
  const { id } = params;

  const session = await getAuthSession();
  const user = session?.user;

  return (
    <main className="grid grid-cols-3 place-content-center gap-2">
      <aside className="hidden md:block col-span-1 border-r border-accent">
        <div className="py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-32 w-32 relative bg-accent-foreground">
              <Image fill src={user?.image || "/images/placeholder.png"} alt={user?.name || "Profile Picture"} />
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
