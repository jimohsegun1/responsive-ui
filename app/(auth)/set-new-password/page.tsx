"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import Link from "next/link";

export default function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasNumber, setHasNumber] = useState(false); 
  const [hasSpecialChar, setHasSpecialChar] = useState(false); 

//   const searchParams = useSearchParams();
  const router = useRouter();
//   const token = searchParams.get('token'); 

  useEffect(() => {
    setIsPasswordRequired(newPassword.length > 0);
    setIsLengthValid(newPassword.length >= 8);
    setHasNumber(/[0-9]/.test(newPassword));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
  }, [newPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    if (!isLengthValid || !hasNumber || !hasSpecialChar) {
      alert("Password does not meet all requirements.");
      return;
    }

    // if (!token) {
    //   alert("Missing password reset token. Please try resetting your password again.");
    //   router.push("/forgot-password"); 
    //   return;
    // }


    // console.log("Setting new password with token:", token, "Password:", newPassword);
    
    // router.push("/login?passwordReset=success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-gray-800 text-white py-2 px-4 text-sm">
        Step 3: Set New Password 
      </header>

      <main className="flex flex-grow justify-center items-center py-8 px-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Set a New Password
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Enter your new password below. Make sure it&apos;s at least 8
            characters long and includes a mix of letters, numbers, and symbols.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700 mb-1 block">
                New Password
              </Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-3 space-y-1 text-sm">
                <p className={isPasswordRequired ? "text-cyan-600" : "text-gray-500"}>
                  {isPasswordRequired ? "•" : "•"} Password is required.
                </p>
                <p className={isLengthValid ? "text-cyan-600" : "text-gray-500"}>
                  {isLengthValid ? "•" : "•"} Password must be at least 8 characters.
                </p>
                <p className={(hasNumber && hasSpecialChar) ? "text-cyan-600" : "text-gray-500"}>
                  {(hasNumber && hasSpecialChar) ? "•" : "•"} Password must contain at least 1 number and 1 special character.
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="confirmNewPassword" className="text-sm font-medium text-gray-700 mb-1 block">
                Confirm New Password
              </Label>
              <Input
                id="confirmNewPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Submit New Password
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}