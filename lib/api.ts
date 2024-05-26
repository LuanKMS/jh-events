export type IWriter = {
  name: string;
  description: string;
}
export type INews = {
  category: string;
  title: string;
  src: string;
  id: number;
}
export type IMainNews = INews & {
  subtitle: string;
  btns: {
    title: string;
    link: string;
  }[];
}
export type IDb = {
  writers?: IWriter[];
  news: INews[];
  relevantNews: INews[];
  mainNews: IMainNews[];
}

const db: IDb = {
  writers: [
    {
      name: "Professor Carlos",
      description: "Professor de Matemática com 20 anos de experiência em ensino médio."
    },
    {
      name: "Professora Ana",
      description: "Professora de História e coordenadora pedagógica."
    }
  ],
  news: [
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
  ],
  relevantNews: [
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
    }
  ],
  mainNews: [
    {
      category: "Educação",
      title: "Melhorias na infraestrutura escolar",
      src: "https://picsum.photos/1700/600",
      id: 31,
      subtitle: "Novas salas de aula e laboratórios de informática",
      btns: [
        {
          title: "Saiba mais",
          link: "https://example.com/",
        },
      ]
    },
    {
      category: "Eventos",
      title: "Semana Cultural",
      src: "https://picsum.photos/1700/600",
      id: 61,
      subtitle: "Uma semana de atividades culturais e artísticas",
      btns: [
      {
        title: "Veja a programação",
        link: "https://example.com/",
      }
    ]
    },
    {
      category: "Tecnologia",
      title: "Parceria com empresa de software",
      src: "https://picsum.photos/1700/600",
      id: 71,
      subtitle: "Alunos terão acesso a cursos de programação gratuitos",
      btns: [
        {
          title: "Inscreva-se",
          link: "https://example.com/",
        },
        {
          title: "Saiba mais",
          link: "https://example.com/",
        },
      ]
    }
  ]
}

export function get(): Promise<IDb>{
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(db), 1000)
  })
}

const loremIpsum = "<a href='https://picsum.photos/500/300'>Lorem ipsum </a><span>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </span> <a href='https://picsum.photos/'>proident</a><span>, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>"

const articleExemple = `<body><title>Algo foda</title><p>${loremIpsum}</p><img src="https://picsum.photos/1700/600" alt="um teste"/><p>${loremIpsum}</p></body>`

export function getArticle(): Promise<string>{
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(articleExemple), 1000)
  })
}