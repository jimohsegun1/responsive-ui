"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from 'next/navigation';

export default function PasswordResetSentPage() {
  const router = useRouter();

  const handleGoToEmail = () => {
    console.log("Go to Email button clicked.");
  };

  const handleResendCode = () => {
    console.log("Resend code clicked (on password reset sent screen).");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <header className="w-full bg-gray-800 text-white py-2 px-4 text-sm">
        Step 2: Email Verification for Password Reset
      </header>

      <main className="flex flex-grow justify-center items-center py-8 px-4">
        <div className="w-full max-w-xl p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Password Reset Link Sent
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            We&apos;ve sent a password reset link to your email address. Please
            check your inbox and follow the instructions to reset your password.
          </p>
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
              onClick={handleGoToEmail}
              className="py-2 px-6 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Go to Email
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}