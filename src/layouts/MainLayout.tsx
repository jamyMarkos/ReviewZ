import React from "react";
import SiteHeader from "../components/SiteHeader";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="max-w-screen-lg mx-auto ">
        <SiteHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
