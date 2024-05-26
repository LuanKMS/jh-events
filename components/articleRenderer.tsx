import React from "react";

function strToArticle(htmlStr: string){
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlStr, 'text/html');
}

export function Renderer({children, ...props}: React.HTMLAttributes<HTMLDivElement>){
  return(
    <article>
      {children}
    </article>
  )
}