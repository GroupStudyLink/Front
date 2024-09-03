import MainFooter from "@/components/layouts/MainFooter";
import MainHeader from "@/components/layouts/MainHeader";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <MainFooter />
    </>
  );
}
