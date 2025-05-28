"use client";
import React, { Suspense } from "react";
import AuthPage from "./(auth)/_components/AuthPage";

const AccountAuth = () => {
  return (
    <Suspense fallback={null}>
      <AuthPage/>
    </Suspense>
  );
};

export default AccountAuth;
