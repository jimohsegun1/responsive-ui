"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function MFAPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // focus the first input on component mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[0-9]/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // move focus to the next input
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      // if the last digit is entered, submit implicitly or keep focus
      if (index === otp.length - 1 && value !== "") {
        // todo
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // handle backspace to clear and move focus to previous input
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length !== otp.length) {
      alert("Please enter the full OTP.");
      return;
    }
    console.log("OTP submitted:", fullOtp);
    router.push("/dashboard"); // redirects to dashboard or next step after successful OTP verification
  };

  const handleResendCode = () => {
    console.log("Resend code clicked.");
    // Logic to trigger resending the OTP
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-gray-800 text-white py-2 px-4 text-sm">
        Step 2: Multi-Factor Authentication (MFA)
      </header>

      <main className="flex flex-grow justify-center items-center py-8 px-4">
        <div className="w-full max-w-xl p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Multi-Factor Authentication
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            For your security, please enter the verification code sent to your
            email or phone number.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="otp" className="text-sm font-medium text-gray-700 mb-2 block">
                OTP
              </Label>
              <div className="flex justify-start space-x-3 mb-6">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500
                                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" // Hide number input arrows
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
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
                className="py-2 px-6 bg-black text-white rounded hover:bg-gray-800 transition-colors"
              >
                Submit Code
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}