"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert } from "@/components/ui/alert";

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export function ResetPassword({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema)
  });

  const onSubmit = async (formData: ResetPasswordForm) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log({
        formData
      });
      
      // TODO: Implement your password reset API call here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-40 text-slate-400" />
              </div>
            </Link>
            <h1 className="text-xl font-bold">Set new password</h1>
          </div>

          {error && (
            <Alert variant="destructive">
              {error}
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-50 text-green-700">
              Password reset successfully!
            </Alert>
          )}

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Set your new password"
                  {...register("password")}
                  className={errors.password ? "border-red-500" : ""}
                  disabled={isLoading}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  {...register("confirmPassword")}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Set new password"}
            </Button>
          </div>
        </div>
      </form>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}
