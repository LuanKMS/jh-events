import { cn } from "@/lib/utils"
import { card, Skeleton } from "./ui"
import Image from "next/image"
import React from "react"
import { cva, VariantProps } from "class-variance-authority"


type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNewsInformations = { catetory: string, date: string } & IPropsDiv
type IPropsBaseCardNews = IPropsDiv & {
  src: string,
  catetory: string,
  title: string,
}
type IPropsCardNews = IPropsBaseCardNews & {
  priority: "high" | "normal" | "low"
}
type IPropsCardNewsBg = IPropsBaseCardNews & {
  variant: "default"
}

export function NewsInformations(
  {catetory, date, className, ...props}: IPropsNewsInformations)
{
  return(
    <div className={cn("flex justify-between text-xs text-emphasis", className)} {...props}>
      <p>{catetory}</p>
      <p>{date}</p>
    </div>
  )
}

export function ThumbnailNews(
  {src, w, h, className}: {src: string, w: number, h: number, className?: string}
){
  
  return(
    <Image
      alt=""
      src={src}
      className={cn("select-none rounded-sm", className)}
      loading="lazy"
      width={w}
      height={h}
    />
  )
}

export function CardNews({src, catetory, title, className, ...props}: IPropsCardNews){
  const priority = props.priority === "high"? 1 : props.priority === "normal"? 2 : 3;

  return(
    <card.Card className={cn("flex justify-center items-center border-none text-sm p-0", className )} 
    {...props}>
      <card.CardContent className="p-0">
        <ThumbnailNews src={src} w={750/priority} h={550/priority}/>
        <NewsInformations className="my-1" catetory={catetory} date="04/03/23"/>
        <p className="text-wrap font-semibold">{title}</p>
      </card.CardContent>
    </card.Card>
  )
}

export function CardNewsBg(
  {src, catetory, title, variant, className, ...props}: IPropsCardNewsBg
){

  const styles = {
    default: {
      container: "absolute bottom-28 w-full p-6 ",
      title: "font-bold text-4xl "
    }
  }

  return(
    <card.Card className={cn("flex justify-center items-center border-none text-sm p-0", className )}
    {...props}>
      <card.CardContent className="relative p-0">
        <div className={styles[variant].container}>
          <h1 className={styles[variant].title}>{title}</h1>
        </div>
        <ThumbnailNews src={src} w={1700} h={600}/>
      </card.CardContent>
    </card.Card>
  )
}