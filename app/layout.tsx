import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { toggleTheme, wrapper } from "@/components/index"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "HJ Events",
  description: "Site de informações da escola josé henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={cn(inter.className, "font-medium")} style={{accentColor: "-moz-initial"}}>
        <wrapper.Wrapper>
          { children }
        </wrapper.Wrapper>
      </body>
    </html>
  );
}
