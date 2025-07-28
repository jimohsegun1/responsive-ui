"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Login attempt:", { email, password });
    // simimulating login success and redirect e.g to a dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-gray-800 text-white py-2 px-4 text-sm">
        Step 1: Login Screen
      </header>

      <main className="flex flex-grow justify-center items-center py-8 px-4">
        <div className="w-full max-w-xl p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 ml-0">
            Login to PharmMar
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Enter your email and password to access your PharmMar account. If
            you don&apos;t have an account yet, you can register now.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
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
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => {
                    console.log("Toggle password visibility");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-left">
              <Link href="/forgot-password">
                <p className="text-sm text-emerald-500 hover:underline">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <Button
              type="submit"
              className="py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
