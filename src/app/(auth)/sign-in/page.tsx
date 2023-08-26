import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SignIn from "@/components/SignIn";

export default function page() {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "self-start -mt-20")}>
          Home
        </Link>

        <SignIn />
      </div>
    </div>
  );
}