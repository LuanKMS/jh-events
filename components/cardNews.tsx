import { cn } from "@/lib/utils"
import { card, Skeleton, btn } from "./ui"
import Image from "next/image"
import React from "react"


type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNewsInformations = IPropsDiv & { 
  category?: string, 
  date?: string 
}
type IPropsBaseCardNews = IPropsDiv & {
  src?: string,
  category?: string,
  title?: string,
}
type IPropsThumbnailNews = {
  src?: string, 
  w?: number, 
  h?: number, 
  className?: string
}
type IPropsCardNews = IPropsBaseCardNews & {
  priority: "high" | "normal" | "low"
}
type IPropsCardNewsBg = IPropsBaseCardNews & {
  subtitle?: string
}

export function NewsInformations(
  {category, date, className, ...props}: IPropsNewsInformations
){
  return(
    <div className={cn("flex flex-row justify-between text-xs text-emphasis", className)}
    {...props}>
      {!category && <Skeleton className="w-2/5 h-3"/>}
      {category && <p>{category}</p>}

      {!date && <Skeleton className="w-2/5 h-3"/>}
      {date && <p>{date}</p>}
    </div>
  )
}

export function ThumbnailNews({src, w, h, className}: IPropsThumbnailNews){
  return(
    <>
      {!src && <Skeleton className={cn("aspect-[15/11]", className)} style={{height: h, width: w}}/>}

      {src && (
        <Image
          alt=""
          src={src}
          className={cn("select-none rounded-sm", className)}
          loading="lazy"
          width={w}
          height={h}
        />
      )}
    </>
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
      <card.CardContent className="p-0 w-full">

        {!props.children && <ThumbnailNews src={src} w={750/priority} h={550/priority}/>}
        {props.children && props.children}

        <NewsInformations className="my-1" category={category} date="04/03/23"/>
        
        {!title && (
          <div className="flex flex-col gap-2">
            <Skeleton style={{height: 48/priority}} className="w-4/5"/>
            <Skeleton style={{height: 48/priority}} className="w-3/4"/>
          </div>
        )}
        {title && <p className="text-wrap min-w-full font-semibold w-min">{title}</p>}
        
      </card.CardContent>
    </card.Card>
  )
}

export function CardNewsBg(
  {src, category, title, className, children, subtitle, ...props}: IPropsCardNewsBg
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