import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { carousel, btn, Skeleton } from "./ui"
import { cn } from "@/lib/utils"

type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNavSlideCarousel = { count: number, api: carousel.CarouselApi } & IPropsDiv

export function NavSlideCarousel(
  { count, api, className, ...props }: IPropsNavSlideCarousel)
{
  const [select, setSelect] = React.useState<number>(0)

  React.useEffect(() => {
    if(!api)
      return

    api.on('select', (api: carousel.CarouselApi) => {
      setSelect(api?.selectedScrollSnap()?? 1);
    })
  })

  const onClick = React.useCallback((i: number) => {
    setSelect(i);
    api?.scrollTo(i);
  }, [api])

  return(
    <div className={cn("flex gap-4 justify-center items-center w-full", className)} {...props}>
      {Array.from({length: count}).map((_, i) => 
        <span key={i} onClick={() => onClick(i)} 
        className={`block cursor-pointer w-[1.5%] sm:w-[2%] aspect-square duration-200 rounded-full border-2 ${select === i? "bg-emphasis border-transparent" : "bg-transparent border-emphasis"}`} />
      )}
    </div>
  )
}

export function CarouselImg({ children, className, ...props }: IPropsDiv){
  const [api, setApi] = React.useState<carousel.CarouselApi>()

  return(
    <carousel.Carousel setApi={setApi} plugins={[Autoplay({delay: 4000})]} className={cn("relative select-none", className)} { ...props }>
      <carousel.CarouselContent>
        {!children && <Skeleton className="block w-full aspect-[17/6] rounded-sm"/>}

        {React.Children.map(children, (child, i) => (
          <carousel.CarouselItem key={i} className="flex justify-center items-end">
            { child }
          </carousel.CarouselItem>
        ))}
      </carousel.CarouselContent>

      {api && (
        <NavSlideCarousel className="absolute bottom-5" api={api}
        count={React.Children.count(children)}/> 
      )}
    </carousel.Carousel>
  )
}

export function CarouselItems(
  { children, className, title, ...props }: IPropsDiv & { title?: string }
){
  const [api, setApi] = React.useState<carousel.CarouselApi>()

  return(
    <article className="flex flex-col px-12">
       {title && (<h1 className="text-2xl font-semibold">{title}</h1>)}
       <carousel.Carousel className={cn("select-none p-0", className)} setApi={setApi} opts={{dragFree: true}} { ...props }>
        <carousel.CarouselContent className="items-start">
          {React.Children.map(children, (child, i) => (
            <carousel.CarouselItem key={i} className="basis-[none]">
              { child }
            </carousel.CarouselItem>
          ))}
        </carousel.CarouselContent>

        <carousel.CarouselNext className="hidden h-full border-none rounded-sm sm:block" />
        <carousel.CarouselPrevious className=" hidden h-full border-none rounded-sm sm:block"/>
      </carousel.Carousel>
    </article>
  )
}