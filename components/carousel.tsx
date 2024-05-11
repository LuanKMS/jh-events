import React from "react"
import { carousel } from "./ui"
import { cn } from "@/lib/utils"

export type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNavSlideCarousel = { count: number, api: carousel.CarouselApi } & IPropsDiv

export function NavSlideCarousel(
  { count, api, className, ...props }: IPropsNavSlideCarousel)
{
  const [select, setSelect] = React.useState<number>(0)

  React.useEffect(() => {
    if(!api)
      return

    api.on('select', (api: carousel.CarouselApi) => {
      console.log(select, api)
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
        <span key={i} onClick={(e) => onClick(i)} 
        className={`block h-5 w-5 duration-200 rounded-full border-2 ${select === i? "bg-emphasis border-transparent" : "bg-transparent border-emphasis"}`} />
      )}
    </div>
  )
}

export function Carousel({ children, className, ...props }: IPropsDiv){
  const [api, setApi] = React.useState<carousel.CarouselApi>()

  return(
    <carousel.Carousel setApi={setApi} opts={{
      align: 'center'
    }} className={cn("relative select-none", className)} { ...props }>
      <carousel.CarouselContent>
        {React.Children.map(children, (child, i) => (
          <carousel.CarouselItem key={i}>
            { child }
          </carousel.CarouselItem>
        ))}
      </carousel.CarouselContent>

      {api? 
        <NavSlideCarousel className="absolute bottom-5" 
          count={React.Children.count(children)} api={api}/> 
        : null}
    </carousel.Carousel>
  )
}