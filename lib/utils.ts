import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type ITargetLink = "_parent" | "_blank" | "_self" | "_top"
export function openLink(link: string, target: ITargetLink = "_blank"){
  window.open(link, target)
}