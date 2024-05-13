"use client"
import { carousel, cardNews } from "@/components/index"

const news = [
  {
    catetory: "Futebol",
    title: "Jogador machuca o pé"
  },
  {
    catetory: "Tecnologia",
    title: "Nova atualização do sistema operacional lançada"
  },
  {
    catetory: "Cinema",
    title: "Filme ganha prêmio de Melhor Filme Estrangeiro"
  },
  {
    catetory: "Ciência",
    title: "Descoberta nova espécie de planta na Amazônia"
  },
  {
    catetory: "Saúde",
    title: "Estudo revela os benefícios da meditação para o coração"
  },
  {
    catetory: "Política",
    title: "Presidente anuncia medidas para combater o desemprego"
  },
  {
    catetory: "Entretenimento",
    title: "Nova temporada de série popular estreia na plataforma de streaming"
  },
  {
    catetory: "Educação",
    title: "Escola implementa programa de leitura para incentivar o hábito entre os alunos"
  },
  {
    catetory: "Economia",
    title: "Bolsa de valores atinge recorde histórico"
  },
  {
    catetory: "Meio Ambiente",
    title: "ONG lança campanha de conscientização sobre reciclagem"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-5 gap-5">
      <carousel.Carousel>
        {Array.from({ length: 10 }).map((_, i) =>
          <img alt="test" key={i} src="https://picsum.photos/1700/500" />
        )}
      </carousel.Carousel>

      <div className="grid grid-cols-2 grid-rows-3 grid-flow-col">
        <cardNews.CardNews className="col-span-1 row-span-3 text-3xl" thumbnail="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" />

        <cardNews.CardNews className="col-span-1 row-span-3 text-3xl" thumbnail="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" />
      </div>

      <article className="grid justify-center items-start lg:grid-cols-5 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
        {news.map((n, i) =>
          <cardNews.CardNews key={i} thumbnail="https://picsum.photos/250/150" 
            catetory={n.catetory}title={n.title} />
        )}
      </article>
    </main>
  );
}
