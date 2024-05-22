"use client"
import { carousel, cardNews } from "@/components/index"
import Link from "next/link";

type INews = {
  category: string;
  title: string;
  src: string;
  id: number;
};

const news: INews[] = [
  {
    category: "Tecnologia",
    title: "Novo smartphone da marca X promete revolucionar o mercado",
    src: "https://picsum.photos/750/550",
    id: 1,
  },
  {
    category: "Esporte",
    title: "Time local conquista título importante em campeonato regional",
    src: "https://picsum.photos/750/550",
    id: 2,
  },
  {
    category: "Entretenimento",
    title: "Série popular retorna para nova temporada com elenco original",
    src: "https://picsum.photos/750/550",
    id: 3,
  },
  {
    category: "Ciência",
    title: "Descoberta científica abre caminho para novos avanços na medicina",
    src: "https://picsum.photos/750/550",
    id: 4,
  },
  {
    category: "Política",
    title: "Lideranças políticas se reúnem para discutir medidas importantes",
    src: "https://picsum.photos/750/550",
    id: 5,
  },
  {
    category: "Economia",
    title: "Indicadores econômicos apontam para crescimento moderado no próximo trimestre",
    src: "https://picsum.photos/750/550",
    id: 6,
  },
  {
    category: "Mundo",
    title: "Líderes mundiais se reúnem para debater questões globais",
    src: "https://picsum.photos/750/550",
    id: 7,
  },
  {
    category: "Saúde",
    title: "Nova campanha de conscientização sobre doença importante ganha destaque",
    src: "https://picsum.photos/750/550",
    id: 8,
  },
  {
    category: "Tecnologia",
    title: "Aplicativo inovador facilita a vida dos usuários com diversas funcionalidades",
    src: "https://picsum.photos/750/550",
    id: 9,
  },
  {
    category: "Esporte",
    title: "Atleta local conquista medalha de ouro em competição internacional",
    src: "https://picsum.photos/750/550",
    id: 10,
  },
  {
    category: "Entretenimento",
    title: "Filme nacional aclamado pela crítica recebe diversos prêmios",
    src: "https://picsum.photos/750/550",
    id: 11,
  },
  {
    category: "Ciência",
    title: "Estudos científicos comprovam os benefícios de uma alimentação saudável",
    src: "https://picsum.photos/750/550",
    id: 12,
  },
  {
    category: "Política",
    title: "Novas leis são aprovadas para garantir os direitos da população",
    src: "https://picsum.photos/750/550",
    id: 13,
  },
  {
    category: "Economia",
    title: "Empresas anunciam investimentos em novos projetos e geram empregos",
    src: "https://picsum.photos/750/550",
    id: 14,
  },
  {
    category: "Mundo",
    title: "Ações humanitárias ajudam a aliviar o sofrimento de pessoas em situação de vulnerabilidade",
    src: "https://picsum.photos/750/550",
    id: 15,
  },
  {
    category: "Saúde",
    title: "Novos tratamentos médicos oferecem esperança para pacientes com doenças graves",
    src: "https://picsum.photos/750/550",
    id: 16,
  },
  {
    category: "Tecnologia",
    title: "Inteligência artificial revoluciona diversos setores da sociedade",
    src: "https://picsum.photos/750/550",
    id: 17,
  }
]

function MainCarousel(){
  return (
    <carousel.CarouselImg>
      {Array.from({ length: 10 }).map((_, i) =>
        <Link href={`/article/${i+20}`}>
          <cardNews.CardNewsBg key={i} src="https://picsum.photos/1700/600" category="Esportes" title="Ronaldo ganha de ET em uma partida de futebol" variant="default" subtitle='"Isso parece até mentira" - bilu'>
            <cardNews.Button>oi</cardNews.Button>
            <cardNews.Button>oi</cardNews.Button>
            <cardNews.Button>oi</cardNews.Button>
            <cardNews.Button>oi</cardNews.Button>
            <cardNews.Button>oi</cardNews.Button>
          </cardNews.CardNewsBg>
        </Link>
      )}
    </carousel.CarouselImg>
  )
}

function MainNews(){
  const mainNews = [news[0], news[1]]

  return(
    <div className="flex items-between gap-6">
      {mainNews.map(({id, ...attr}) =>
        <Link href={`/article/${id}`}>
          <cardNews.CardNews className="text-3xl" key={id} {...attr} priority="high"/>
        </Link>
      )}
    </div>
  )
}

function CarouselItems({data, title}: {data: INews[], title: string}){
  return(
    <carousel.CarouselItems title={title}>
      {data.map(({id, ...attr}) =>
        <Link href={`/article/${id}`}>
          <cardNews.CardNews key={id} {...attr} priority="low"/>
        </Link>
      )}
    </carousel.CarouselItems>
  )
}

export default function Home(){
  return(
    <>
      <MainCarousel />
      
      <MainNews />
      
      <CarouselItems data={news} title="Estudos"/>
      <CarouselItems data={news} title="Notícias"/>
      <CarouselItems data={news} title="Fofocas"/>
    </>
  );
}
