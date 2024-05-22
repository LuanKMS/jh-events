import { cn } from "@/lib/utils"
import { card, Skeleton, btn } from "./ui"
import Image from "next/image"
import React from "react"
import { cva, VariantProps } from "class-variance-authority"


type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNewsInformations = { category: string, date: string } & IPropsDiv
type IPropsBaseCardNews = IPropsDiv & {
  src: string,
  category: string,
  title: string,
}
type IPropsCardNews = IPropsBaseCardNews & {
  priority: "high" | "normal" | "low"
}
type IPropsCardNewsBg = IPropsBaseCardNews & {
  variant: "default",
  subtitle?: string
}

export function NewsInformations(
  {category, date, className, ...props}: IPropsNewsInformations)
{
  return(
    <div className={cn("flex justify-between text-xs text-emphasis", className)} {...props}>
      <p>{category}</p>
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

export function Button(
  {className, children, ...props}: React.HTMLAttributes<HTMLButtonElement>
){
  return(
    <btn.Button className={cn("bg-emphasis border-transparent border-2 hover:bg-transparent hover:border-emphasis", className)} variant="outline" {...props}>
      {children}
    </btn.Button>
  )
}

export function CardNews({src, category, title, className, ...props}: IPropsCardNews){
  const priority = props.priority === "high"? 1 : props.priority === "normal"? 2 : 3;

  return(
    <card.Card className={cn("flex justify-center items-start border-none text-sm p-0", className )} 
    {...props}>
      <card.CardContent className="p-0">
        <ThumbnailNews src={src} w={750/priority} h={550/priority}/>
        <NewsInformations className="my-1" category={category} date="04/03/23"/>
        <p className="text-wrap min-w-full font-semibold w-min">{title}</p>
      </card.CardContent>
    </card.Card>
  )
}

export function CardNewsBg(
  {src, category, title, variant="default", className, children, subtitle, ...props}: IPropsCardNewsBg
){

  return(
    <card.Card className={cn("flex justify-center items-center border-none text-sm p-0", className )}
    {...props}>
      <card.CardContent className="relative p-0">
        <div className="absolute flex flex-col justify-end bottom-0 w-full h-full p-6 pb-24 bg-gradient-to-tr from-background">
          <h1 className="font-bold text-4xl">
            <NewsInformations category="Esportes" date="04/03/23" 
            className= "text-xl justify-start gap-7"/>
            {title}
          </h1>

          {subtitle && (
            <p className="text-foreground/75">{subtitle}</p>
          )}

          {children && (
            <div className="flex flex-row mt-8 pl-4 gap-4">
              {children}
            </div>
          )}
        </div>
        <ThumbnailNews src={src} w={1700} h={600}/>
      </card.CardContent>
    </card.Card>
  )
}