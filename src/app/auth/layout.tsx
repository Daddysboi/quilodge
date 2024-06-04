// app/auth/layout.js
import React from "react";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-7 min-h-screen font-mono">
      <div className="col-span-2 relative  bg-auth bg-cover" />

      <div className="col-span-3 ml-40 mt-20">
        <div className="mb-5 font-semibold text-2xl ">Sign up to Quilodge</div>

        <Button
          variant="outline"
          className=" font-bold py-2 px-4 rounded-full h-12 w-full"
        >
          Sign In with Google
        </Button>
        <div className="flex justify-center items-center py-6">
          <span className="w-full border border-[rgba(0,0,0,0.05)]" />
          <span className=" w-full mx-3  text-[rgba(0,0,0,0.5)]">
            or sign up with
          </span>
          <span className=" w-full border border-[rgba(0,0,0,0.05)]" />
        </div>
        {children}
        <div className="pt-4 text-center">Dont have an account? Sign Up</div>
      </div>

      <div className="col-span-2"></div>
    </div>
  );
}
