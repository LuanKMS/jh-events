"use client"

import { MoonStar, Sun, Laptop } from "lucide-react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { btn, dropMenu } from "./ui"
import { cn } from "@/lib/utils"
 
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ToggleTheme(
  {className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>
){
  const { setTheme } = useTheme()

  return(
    <dropMenu.DropdownMenu>
      <dropMenu.DropdownMenuTrigger className="focus:outline-none">
        <btn.Button size="icon" {...props} className={cn("bg-transparent duration-200 hover:bg-transparent hover:opacity-75", className)}>
          <Sun className='scale-100 dark:scale-0'/>
          <MoonStar className='absolute scale-0 dark:scale-100'/>
        </btn.Button>
      </dropMenu.DropdownMenuTrigger>

      <dropMenu.DropdownMenuContent>
        <dropMenu.DropdownMenuItem onClick={() => setTheme('light')} className="flex flex-row gap-4">
          <Sun className="w-4"/> <span>Claro</span>
        </dropMenu.DropdownMenuItem>

        <dropMenu.DropdownMenuItem onClick={() => setTheme('dark')} className="flex flex-row gap-4">
          <MoonStar className="w-4"/> <span>Escuro</span>
        </dropMenu.DropdownMenuItem>

        <dropMenu.DropdownMenuItem onClick={() => setTheme('system')} className="flex flex-row gap-4">
          <Laptop className="w-4"/> <span>Sistema</span>
        </dropMenu.DropdownMenuItem>
      </dropMenu.DropdownMenuContent>
    </dropMenu.DropdownMenu>
  )
}