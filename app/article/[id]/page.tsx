"use client"

import { componentFetch } from "@/lib/utils"
import * as api from "@/lib/api"
import React from "react"


export default function Article({ params }: { params: { id: number } }){
  const [article, setArticle] = React.useState<string | null>(null)

  React.useEffect(() => {
    componentFetch(api.getArticle, setArticle)
  }, [])

  return(
    <article>
      {article}
    </article>
  )
}