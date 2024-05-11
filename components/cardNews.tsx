import { cn } from "@/lib/utils"
import { card } from "./ui"

type IPropsDiv = React.HTMLAttributes<HTMLDivElement>
type IPropsNewsInformations = { catetory: string, date: string } & IPropsDiv

interface ICardNews{
  thumbnail: string,
  catetory: string,
  title: string,
}

export function NewsInformations(
  {catetory, date, className, ...props}: IPropsNewsInformations)
{
  return(
    <div className={cn("flex justify-between text-xs text-emphasis", className)} {...props}>
      <p>{catetory}</p>
      <p>{date}</p>
    </div>
  )
}

export function CardNews({thumbnail, catetory, title}: ICardNews){
  return(
    <card.Card className="flex justify-center items-center border-none">
      <card.CardContent className="w-[250px]">
        <img alt="Imagem" src={thumbnail} className="select-none"/>
        <NewsInformations className="my-1" catetory={catetory} date="04/03/23"/>
        <p className="text-wrap text-sm font-semibold">{title}</p>
      </card.CardContent>
    </card.Card>
  )
}