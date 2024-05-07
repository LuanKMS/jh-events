"use client"
import { toggleTheme } from "@/components/index";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <toggleTheme.ToggleTheme />
    </main>
  );
}
