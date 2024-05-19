"use client"
import { UserCog, LogOut } from "lucide-react"
import { toggleTheme } from "../index"
import { dropMenu, avatar } from "../ui/index"
import { Logo } from "./logo"
import Link from "next/link"

function LinkStyled({href, children}: {href: string, children: React.ReactNode}){
  return(
    <Link href={href} className="duration-200 hover:opacity-75">{children}</Link>
  )
}

export function Header(){
  return(
    <header className="sticky top-0 z-50 select-none flex justify-between items-center w-full h-20 p-5 bg-emphasis">
      <div className="flex items-center flex-row gap-7">
        <Logo />

        <ul className="flex gap-4">
        <li><LinkStyled href="/">Início</LinkStyled></li>
          <li><LinkStyled href="/about">Sobre</LinkStyled></li>
          <li><LinkStyled href="/events">Eventos</LinkStyled></li>
          <li><LinkStyled href="/writer">Escritores</LinkStyled></li>
        </ul>
      </div>

      <div className="flex flex-row gap-4 text-sm">
        <toggleTheme.ToggleTheme className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"/>

        <dropMenu.DropdownMenu>
          <dropMenu.DropdownMenuTrigger className="focus:outline-none">
            <avatar.Avatar className="duration-200 hover:brightness-75">
              <avatar.AvatarImage src="https://picsum.photos/1000/1000"/>
              <avatar.AvatarFallback>LK</avatar.AvatarFallback>
            </avatar.Avatar>
          </dropMenu.DropdownMenuTrigger>

          <dropMenu.DropdownMenuContent>
            <dropMenu.DropdownMenuItem className="flex flex-row gap-4">
              <UserCog className="w-4"/> <span>Minha Conta</span>
            </dropMenu.DropdownMenuItem>
            <dropMenu.DropdownMenuItem className="flex flex-row gap-4">
              <LogOut className="w-4"/> <span>Sair</span>
            </dropMenu.DropdownMenuItem>
          </dropMenu.DropdownMenuContent>
        </dropMenu.DropdownMenu>
      </div>
    </header>
  )
}