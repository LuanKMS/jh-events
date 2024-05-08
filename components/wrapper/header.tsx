import { toggleTheme } from "../index";

export function Header(){
  return(
    <header className="sticky top-0 flex justify-between items-center w-full h-20 p-5 bg-sky-400 dark:bg-purple-400">
      <div className="w-max text-center">
        <h1 className="text-5xl font-black">
          HJ
        </h1>
        <p className="font-bold text-1xl">
          Events
        </p>
      </div>
      <toggleTheme.ToggleTheme className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"/>
    </header>
  )
}