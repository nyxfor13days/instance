import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import React from "react";

export default function page() {
  return (
    <div className="fixed inset-0 bg-background/25 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-popover text-popover-foreground w-full h-fit py-20 px-2 rounded shadow-md">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  );
}
