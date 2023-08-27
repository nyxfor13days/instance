import { InfoCircledIcon } from "@radix-ui/react-icons";
import React from "react";

export default function page() {
  return (
    <main className="container h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="p-4 max-w-lg flex items-start gap-4 bg-card text-card-foreground rounded shadow-md">
          <InfoCircledIcon className="w-6 h-6" />
          <p className="text-sm">
            Posts are currently not ready. We are working on the development and
            will be availabel to users soon.
          </p>
        </div>
      </div>
    </main>
  );
}
