"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { ReloadIcon, RocketIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useToast } from "@/hooks/use-toast";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({ className, ...props }: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "There was an error while trying to sign in with Google. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button isLoading={isLoading} size="sm" className="w-full flex items-center gap-2" onClick={loginWithGoogle}>
        {isLoading ? <ReloadIcon className="animate-spin" /> : <RocketIcon />}
        Google
      </Button>
    </div>
  );
}
