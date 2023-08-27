import React from "react";
import UserAuthForm from "./UserAuthForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Instance
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing you agree to our{" "}
          <Link href="#" className="text-accent-foreground/75">
            terms of service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-accent-foreground/75">
            privacy policy
          </Link>
        </p>

        {/* Sign In Form */}
        <UserAuthForm />

        <p className="text-sm max-w-xs mx-auto">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-accent-foreground/75 underline underline-offset-8"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
