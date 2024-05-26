"use client"

import React from "react"
import * as api from "@/lib/api"
import { componentFetch } from "@/lib/utils"
import { articleRenderer } from "@/components/index"

export default function Article({ params }: { params: { id: number } }){
  const [article, setArticle] = React.useState<string | null>(null)

  React.useEffect(() => {
    componentFetch(api.getArticle, setArticle)
  }, [])

  return(
    <article>
      <articleRenderer.Renderer>
        {article}
      </articleRenderer.Renderer>
    </article>
  )
}