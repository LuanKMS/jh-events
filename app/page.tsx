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

function MainCarousel(){
  return (
    <carousel.CarouselImg>
      {Array.from({ length: 10 }).map((_, i) =>
        <cardNews.CardNewsBg key={i} src="https://picsum.photos/1700/600" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol"
        variant="default" subtitle='"Isso parece até mentira" - bilu'>
          <cardNews.Button>oi</cardNews.Button>
          <cardNews.Button>oi</cardNews.Button>
          <cardNews.Button>oi</cardNews.Button>
          <cardNews.Button>oi</cardNews.Button>
          <cardNews.Button>oi</cardNews.Button>
        </cardNews.CardNewsBg>
      )}
    </carousel.CarouselImg>
  )
}

function MainNews(){
  return(
    <div className="flex items-between gap-6">
      <cardNews.CardNews className="text-3xl" src="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" priority="high" />

      <cardNews.CardNews className="text-3xl" src="https://picsum.photos/750/450" catetory="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" priority="high" />
    </div>
  )
}

function CarouselItems({data, title, src}: {data: any[], title: string, src: string}){
  return(
    <carousel.CarouselItems title={title}>
      {data.map((n, i) =>
        <cardNews.CardNews key={i} src={src}
        catetory={n.catetory} title={n.title} priority="low"/>
      )}
    </carousel.CarouselItems>
  )
}

export default function Home(){
  return(
    <>
      <MainCarousel />
      
      <MainNews />
      
      <CarouselItems data={news} title="Estudos" src="https://picsum.photos/750/550"/>
      <CarouselItems data={news} title="Notícias" src="https://picsum.photos/750/550"/>
      <CarouselItems data={news} title="Fofocas" src="https://picsum.photos/750/550"/>
    </>
  );
}
