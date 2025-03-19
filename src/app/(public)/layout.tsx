import type { Metadata } from "next";
import PablicHeader from "@/components/layouts/PublicHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PablicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <PablicHeader />
        {children}
    </>
  );
}
