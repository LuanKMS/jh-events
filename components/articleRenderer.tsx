import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

function HtmlStrToArray(htmlStr: string){
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlStr, 'text/html')
  const body = html.querySelector("body");
  const dom = body?.querySelectorAll(":scope > *");
  const arr = Array.from(dom as NodeListOf<Element>);
  return arr;
}

function strToArticle(htmlStr: string){
  const arr = HtmlStrToArray(htmlStr);
  return arr.map((elem) => formatArticle(elem));
}

export function Title(
  {children, className, ...props}: React.HTMLAttributes<HTMLParagraphElement>
){
  return(
    <h1 className={cn("text-3xl", className)} {...props}>
      {children}
    </h1>
  )
}

export function CustomLink(
  {href, className, children, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>
){
  return(
    <Link href={href?? ""} className="no-underline text-emphasis hover:underline visited:text-emphasis-dark" {...props}>
      {children}
    </Link>
  )
}

export function Paragraph(
  {children, className, ...props}: React.HTMLAttributes<HTMLParagraphElement>
){
  return(
    <p className={cn("", className)} {...props}>
      {strToArticle(children?.toString()?? '')}
    </p>
  )
}


function formatArticle({ tagName, attributes, innerHTML }: Element){
  const key = `${innerHTML}`
  switch (tagName) {
    case "TITLE":
      return  <Title key={key}>{innerHTML}</Title>
    case "P":
      return  <Paragraph key={key}>{innerHTML}</Paragraph>
    case "SPAN":
      return  innerHTML
    case "TITLE":
      return  <Title key={key}>{innerHTML}</Title>
    case "A":
      return  (
        <CustomLink key={key} href={Array.from(attributes)[0].nodeValue?? ''}>
          {innerHTML}
        </CustomLink>
      )
    case "IMG":
      return (
        <Image key={key} alt={Array.from(attributes)[1].nodeValue?? ''} width={750} height={550} src={Array.from(attributes)[0].nodeValue?? ''}/>
      ) 
  }
}

export function Renderer({children}: React.HTMLAttributes<HTMLDivElement>){
  return(
     children && strToArticle(children.toString())
  )
}