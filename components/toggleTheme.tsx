"use client"

import { MoonStar, Sun } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { btn } from "./ui";
import { dataDropMenu } from "./";
 
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ToggleTheme(){
  const { setTheme } = useTheme()

  const data: dataDropMenu.IPropsDropMenu["data"] = [
    { item: true, click: () => setTheme('light'), content: "light" },
    { item: true, click: () => setTheme('dark'), content: "dark" },
    { item: true, click: () => setTheme('system'), content: "system" },
  ]
  const trigger = (
    <btn.Button variant="outline" size="icon">
      <Sun className='h-4 w-4 scale-100 dark:scale-0'/>
      <MoonStar className='absolute h-4 w-4 scale-0 dark:scale-100'/>
    </btn.Button>
  )

  return(
    <dataDropMenu.DataDropMenu data={data} trigger={trigger} />
  )
}