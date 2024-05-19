import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";

export function Wrapper(
  {children, className, ...props}: React.HTMLAttributes<HTMLDivElement>
){
  return(
    <>
      <Header />
        <main className={cn("flex flex-col min-h-screen p-5 gap-10", className)} {...props}>
          { children }
        </main>
      <Footer />
    </>
  )
}