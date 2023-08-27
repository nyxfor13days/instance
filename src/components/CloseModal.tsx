"use client";

import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  return (
    <Button
      aria-label="close modal"
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
    >
      <Cross1Icon />
    </Button>
  );
}
