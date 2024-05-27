import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cardNews } from ".";

function HtmlStrToArray(htmlStr: string){
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlStr, 'text/html');
  const body = html.querySelector("body");
  const dom = body?.querySelectorAll(":scope > *");
  const arr = Array.from(dom as NodeListOf<Element>);
  return arr;
}

function strToArticle(htmlStr: string){
  const arr = HtmlStrToArray(htmlStr);
  return arr.map((elem, i) => {
    elem.id = i.toString();
    return formatArticle(elem);
  });
}

export function Title(
  {children, className, ...props}: React.HTMLAttributes<HTMLParagraphElement>
){
  return(
    <h1 className={cn("text-3xl w-full font-bold", className)} {...props}>
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
    <p className={cn("my-4 indent-4", className)} {...props}>
      {strToArticle(children?.toString()?? '')}
    </p>
  )
}

type Isize = number | `${number}` | undefined
type IPropsImg = {w: Isize, h: Isize, alt: string, src: string}
export function Img({alt, w, h, src}: IPropsImg){
  return(
    <div className="flex justify-center w-full select-none">
      <Image alt={alt} className="rounded-sm" width={w} height={h} src={src}/>
    </div>
  )
}


function formatArticle({ tagName, attributes, innerHTML, id }: Element){
  const attr = attributes;

  switch (tagName) {
    case "TITLE":
      return  <Title key={id}>{innerHTML}</Title>
    case "P":
      return  <Paragraph key={id}>{innerHTML}</Paragraph>
    case "SPAN":
      return  innerHTML
    case "TITLE":
      return  <Title key={id}>{innerHTML}</Title>
    case "A":
      return  (
        <CustomLink key={id} href={Array.from(attributes)[0].nodeValue?? ''}>
          {innerHTML}
        </CustomLink>
      )
    case "IMG":
      return (
        <Img key={id} alt={attr.getNamedItem("alt")?.nodeValue?? ''}
        w={(attr.getNamedItem("width")?.nodeValue?? 800) as number}
        h={(attr.getNamedItem("height")?.nodeValue?? 600) as number}
        src={attr.getNamedItem("src")?.nodeValue?? ''}/>
      ) 
  }
}

export function Renderer({children, ...props}: React.HTMLAttributes<HTMLDivElement>){
  return(
    <article {...props}>
      { children && strToArticle(children.toString()) }
    </article>
  )
}