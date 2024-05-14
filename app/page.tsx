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
    <main className="flex flex-col min-h-screen p-5 gap-10">
      <carousel.Carousel>
        {Array.from({ length: 10 }).map((_, i) =>
          <cardNews.CardNewsBg key={i} src="https://picsum.photos/1700/600" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol"
          variant="default"/>
        )}
      </carousel.Carousel>

      <div className="flex items-between gap-6">
        <cardNews.CardNews className="text-3xl" src="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" priority="high" />

        <cardNews.CardNews className="text-3xl" src="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" priority="high" />
      </div>

      <article className="grid justify-center items-start lg:grid-cols-5 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
        {news.map((n, i) =>
          <cardNews.CardNews key={i} src="https://picsum.photos/750/550"
          catetory={n.catetory} title={n.title} priority="low"/>
        )}
      </article>
    </main>
  );
}
