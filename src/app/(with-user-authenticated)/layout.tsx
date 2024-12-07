import type { Metadata } from "next";

import Sidebar from "@/components/Sidebar";
import Linkbar from "@/components/Linkbar";

export const metadata: Metadata = {
  title: "Admin Chatbot",
  description: "chatbot for admin",
};

export default function UserAuthenticatedLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen grid grid-rows-11 grid-cols-12 bg-gray dark:bg-gray-dark text-foreground dark:text-foreground-dark">
      <Sidebar />

      <div className="col-span-12 md:col-span-10 row-span-11 p-2 px-3 md:p-5 overflow-auto">
        <Linkbar />

        {children}
      </div>
    </div>
  );
}

