"use client";

import Layout from "@/components/layout/Index";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main>
          <Layout />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
