"use client"
import { carousel } from "@/components/index"

export default function Home() {
  return (
    <main className="min-h-screen p-5">
      <carousel.Carousel>
        {
          Array.from({ length: 10 }).map((_, i) => 
          <img alt="test" key={i} src="https://picsum.photos/1200/500" />)
        }
      </carousel.Carousel>
    </main>
  );
}
