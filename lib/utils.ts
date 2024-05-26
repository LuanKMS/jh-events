import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ITargetLink = "_parent" | "_blank" | "_self" | "_top"
export function openLink(link: string, target: ITargetLink = "_blank"){
  window.open(link, target)
}

function callbackDefault<T, D>(result: T): any{ return result }
export async function componentFetch<T, D>(asyncFunc: () => Promise<T>, set: React.Dispatch<React.SetStateAction<D>>, callback: (result: T) => D = callbackDefault){
  asyncFunc().then((r) => {
    const result = callback(r);
    set(result);
  })
}