import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/Button";
import Logo from "./ui/Logo";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 left-0 right-0 h-fit bg-background border-b border-accent z-10 py-2">
      <div className="container max-w-7xl h-full flex items-center justify-between gap-2">
        <Logo />

        {/* Search Bar */}

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
