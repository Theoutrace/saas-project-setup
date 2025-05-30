import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SiteHeader } from "@/components/layout/header/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import CookiesNotifier from "@/components/layout/alerts/CookiesNotifier";
import { Toaster } from "@/components/ui/sonner";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <CookiesNotifier />
      <Toaster position="top-center" toastOptions={{}} richColors/>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default template;
