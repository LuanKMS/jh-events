"use client"

import { ReactNode } from "react"
import { dropMenu } from "./ui/index"

export type IPropsDropMenu = {
  data: ({
    item: boolean,
    content: ReactNode | string,
    click: () => void
  } | {
    label: boolean
    title: string
  } | {
    separator: boolean
  })[],
  trigger: ReactNode
}

export function DataDropMenu({ data, trigger }: IPropsDropMenu){
  return(
    <dropMenu.DropdownMenu>
      <dropMenu.DropdownMenuTrigger asChild>
          {trigger}
      </dropMenu.DropdownMenuTrigger>

      <dropMenu.DropdownMenuContent>
        {data.map((d, i) => {
          if('item' in d){
            return (
              <dropMenu.DropdownMenuItem key={i} onClick={d.click}>
                {d.content}
              </dropMenu.DropdownMenuItem>
            )
          }
          
          else if('label' in d){
            return (
              <dropMenu.DropdownMenuLabel key={i}>
                {d.title}
              </dropMenu.DropdownMenuLabel>
            )
          }
          
          else if('separator' in d){
            return <dropMenu.DropdownMenuSeparator key={i} />
          }
        })}
      </dropMenu.DropdownMenuContent>
    </dropMenu.DropdownMenu>
  )
}