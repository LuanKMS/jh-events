import { Header } from "./header";
import { Footer } from "./footer";

export function Wrapper({children, ...props}: React.HTMLAttributes<HTMLDivElement>){
  return(
    <>
      <Header />
        <main {...props}>
          { children }
        </main>
      <Footer />
    </>
  )
}