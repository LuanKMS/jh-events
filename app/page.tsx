"use client"
import { carousel, cardNews } from "@/components/index"
import { Skeleton } from "@/components/ui";
import * as api from "@/lib/api"
import Link from "next/link";
import React from "react";

type IPropNews = api.INews[] | undefined

function MainNews({news}: {news: api.IMainNews[] | undefined}){
  return (
    <carousel.CarouselImg>
      {news?.map(({id, ...n}, i) =>
        <cardNews.CardNewsBg key={id} { ...n }>
          {n?.btns.map((b) => (
            <cardNews.Button>
              <Link href={b.link} target="_blank">
                { b.title }
              </Link>
            </cardNews.Button>
          ))}
        </cardNews.CardNewsBg>
      )}
    </carousel.CarouselImg>
  )
}

function RelevantNews({news}: {news: IPropNews}){
  return(
    <div className="flex items-between gap-6 width-full">
      {!news && Array.from({length: 2}).map((_, i) =>
          <cardNews.CardNews key={i} priority="high" className="w-full">
            <cardNews.ThumbnailNews className="w-full aspect-[15/11]"/>
          </cardNews.CardNews>
      )}

      {news?.map(({id, ...attr}) =>
        <Link href={`/article/${id}`}>
          <cardNews.CardNews className="text-3xl" key={id} {...attr} priority="high"/>
        </Link>
      )}
    </div>
  )
}

function News({news, title}: {news: IPropNews, title: string}){
  return(
    <carousel.CarouselItems title={title}>
      {!news && Array.from({length: 17}).map((_, i) => (
        <cardNews.CardNews key={i} priority="low"/>
      ))}

      {news?.map(({id, ...attr}) =>
        <Link href={`/article/${id}`}>
          <cardNews.CardNews key={id} {...attr} priority="low"/>
        </Link>
      )}
    </carousel.CarouselItems>
  )
}

export default function Home(){
  const [db, setDb] = React.useState<api.IDb | undefined>()
  
  React.useEffect(() => {
    async function featch(){
      api.get().then((d) => setDb(d))
    }
    featch()
  }, [])

  return(
    <>
      <MainNews news={db?.mainNews}/>
      
      <RelevantNews news={db?.relevantNews}/>
      
      <News news={db?.news} title="Estudos"/>
      <News news={db?.news} title="Notícias"/>
      <News news={db?.news} title="Fofocas"/>
    </>
  );
}
