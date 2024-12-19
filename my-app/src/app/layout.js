// app/layout.tsx
"use client"
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Navbar/>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
 