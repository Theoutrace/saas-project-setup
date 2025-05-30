"use client";
import React from 'react'
import { EmailSignup } from "../_components/email-signup";
import { LoginForm } from "../_components/login-form";
import { useSearchParams } from "next/navigation";
import { ResetPassword } from "../_components/reset-password";
import { ROUTE_PATHS } from "@/utils/data/Routes";

const AuthPage = () => {
    const searchParams = useSearchParams();
    const ComponentRenderer = () => {
        switch (searchParams.get("type")) {
          case ROUTE_PATHS.LOGIN:
            return (
              <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
              </div>
            );
          case ROUTE_PATHS.FORGOT_PASSWORD:
            return (
              <div className="w-full max-w-sm">
                <EmailSignup />
              </div>
            );
          case ROUTE_PATHS.RESET_PASSWORD:
            return (
              <div className="w-full max-w-sm">
                <ResetPassword />
              </div>
            );
          default:
            return (
              <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
              </div>
            );
        }
      };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      {ComponentRenderer()}
    </div>
  )
}

export default AuthPage

