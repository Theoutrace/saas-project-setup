"use client";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTE_PATHS } from "@/utils/data/Routes";
import { toast } from "sonner";

export default function CookiesNotifier() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setVisible(false);
    toast.success("Accepted!");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50 border-b-4 border-primary">
      <p className="text-xs">
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies. Learn more in our{" "}
        <Link
          href={ROUTE_PATHS.PRIVACY_POLICY}
          className="text-blue-500 underline"
        >
          Privacy Policy
        </Link>
      </p>
      <Button
        variant={"default"}
        size={"sm"}
        onClick={acceptCookies}
        className="ml-4 px-4 py-2 rounded"
      >
        Accept
      </Button>
    </div>
  );
}
