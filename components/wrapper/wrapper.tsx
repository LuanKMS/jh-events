import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";
import { toggleTheme } from "../index";

export function Wrapper(
  {children, className, ...props}: React.HTMLAttributes<HTMLDivElement>
){
  return(
    <toggleTheme.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
      <Header />
        <main className={cn("flex flex-col min-h-screen p-5 gap-10", className)} {...props}>
          { children }
        </main>
      <Footer />
    </toggleTheme.ThemeProvider>
  )
}