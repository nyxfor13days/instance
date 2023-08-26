import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default async function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-background border-b border-accent z-10 py-2">
      <div className="container max-w-7xl h-full flex items-center justify-between gap-2">
        <Link href="/" className="font-bold uppercase tracking-wide">
          Instance
        </Link>

        {/* Search Bar */}

        <Link href="/sign-in" className={buttonVariants({ variant: "ghost" })}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
