"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Requesting password reset for:", email);
    router.push("/password-reset-sent");
  };

  const handleResendCode = () => {
    console.log("Resend code clicked (on forgot password screen).");
    // window.location.href = "/mfa"
    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <header className="w-full bg-gray-800 text-white py-2 px-4 text-sm">
        Step 1: Reset Password Screen
      </header>


      <main className="flex flex-grow justify-center items-center py-8 px-4">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Reset Your Password
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Enter your email address, and we&apos;ll send you a link to reset
            your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <Button
                type="button"
                variant="link"
                onClick={handleResendCode}
                className="text-emerald-500 hover:underline px-0"
              >
                Resend Code
              </Button>
              <Button
                type="submit"
                className="py-2 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                Send Reset Link
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}