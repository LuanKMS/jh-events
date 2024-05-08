"use client"
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { openLink } from "@/lib/utils";

export function Footer(){
  return(
    <footer className="flex justify-between items-center w-full h-32 p-5 bg-sky-400 dark:bg-purple-400">
      <div className="w-max text-center">
        <h1 className="text-5xl font-black">
          HJ
        </h1>
        <p className="font-bold text-1xl">
          Events
        </p>
      </div>
      <div className="flex flex-row gap-4">
       <Instagram onClick={() => openLink("https://www.instagram.com/")} className="cursor-pointer rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" 
       height="40" width="40" viewBox="1 1 22 22"/>

       <Facebook onClick={() => openLink("https://www.facebook.com/")} className="cursor-pointer fill-[#0866ff]" height="40" width="40"/>

       <Youtube onClick={() => openLink("https://www.youtube.com/")} 
       className="cursor-pointer fill-[#fe0000]" height="40" width="40"/>
       
       <Twitter onClick={() => openLink("https://www.twitter.com/")} 
       className="cursor-pointer fill-[#249ef1]" height="40" width="40"/>
      </div>
    </footer>
  )
}