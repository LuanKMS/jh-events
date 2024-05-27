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
    <articleRenderer.Renderer className="w-2/3">
      {article}
    </articleRenderer.Renderer>
  )
}