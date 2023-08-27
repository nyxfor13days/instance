import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import SignIn from "@/components/SignIn";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function page() {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "self-start -mt-20 flex items-center gap-2",
          )}
        >
          <ArrowLeftIcon />
        </Link>

        <SignIn />
      </div>
    </div>
  );
}
