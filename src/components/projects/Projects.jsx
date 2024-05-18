import { FaReact, FaMobile, SiTailwindcss } from "../../components";
import "./projects.css";

const projects = [
  {
    title: "U-Entertainment",
    imgSrc: "/uEnt-desktop.png",
    description: "O u-Entertainment é uma plataforma de entretenimento que permite aos usuários explorar informações sobre filmes, séries e pessoas relacionadas ao cinema e à televisão. Consumindo dados da API do The Movie Database(TMDB), o aplicativo oferece uma ampla gama de recursos, incluindo pesquisa de filmes e séries, detalhes sobre elenco, bilheteria e orçamento. Responsivo, ajustando-se automaticamente a diferentes tipos de telas. ",
    link: "https://silly-ganache-bdc6d6.netlify.app/"
  },
  {
    title: "DoList",
    imgSrc: "/DoList-desktop.png",
    description: "O DoList é um aplicativo de lista de tarefas que permite aos usuários registrar, fazer login e gerenciar suas tarefas diárias. Possui recursos de para adicionar, marcar como concluidas e filtrar tarefas, o app é uma ferramenta de eficiente para manter a organização e a produtividade. Além disso, é responsivo adaptando-se automaticamente a diferentes tipos de telas. ",
    link: "https://remarkable-daifuku-41f488.netlify.app/"
  },
  {
    title: "NewsLetter",
    imgSrc: "/Newsletter-desktop.png",
    description: "Newsletter é um formulário de inscrição para receber atualizações mensais. Ele permite que usuário que insiram seus endereço de e-mail e, após a validação, se inscrevam na newsletter. Quando o usuário se inscreve com sucesso é exibida uma mensagem que informa que a inscrição foi realizada com sucesso e descartada ao clicar em um botão. O app é responsivo e se adapta em diferentes tamanhos de tela.",
    link: "https://tubular-truffle-899a09.netlify.app/"
  },
  {
    title: "Intro-section",
    imgSrc: "/Intro-section-desktop.png",
    description: "Este app foi construido com React JS e Tailwind CSS, oferecendo uma interface responsiva e amigável. Ele consiste em uma barra de navegação com dropdowns para recursos e informções da empresa. Além disso, apresenta um banner promocional com texto e botões de ação. A estrutura do código é organizada e modular, facilitando a manutenção e extensão do projeto.Além disso, é responsivo e adapta-se a todo tipo de tela.",
    link: "https://fastidious-dolphin-970993.netlify.app/"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="text-pPurple">
      <section className="sm:h-auto">
        <h1 className="text-center font-julius text-xl my-2">Projetos</h1>
        <div className="flex flex-col font-quicksand md:flex-row md:flex-wrap md:justify-around md:gap-8 h-full mt-4 gap-2 box-sizing">

          {projects.map(({ title, imgSrc, description, link }) => (
            <div key={title} className="project-border h-1/3 my-1 p-1 flex flex-col items-center md:h-auto md:w-1/3">
              <h2 className="text-center p-1 text-xl">{title}</h2>
              <img src={imgSrc} className="h-52" alt={title} />
              <p className="flex items-center text-xl my-4 gap-2">
                Tecnologias: <FaReact className="text-blue-400" /> <SiTailwindcss className="text-blue-600" /> <FaMobile className="text-slate-400" />
                </p>
              <p className="text-justify flex justify-center items-center md:w-72 md:h-1/2">
                {description}
              </p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-pGray hover:text-black duration-300">
                <a target="_blank" href={link}>Veja Mais</a>
              </button>
            </div>
          ))}
          
        </div>
      </section>
    </div>
  );
};
             
export default Projects;
