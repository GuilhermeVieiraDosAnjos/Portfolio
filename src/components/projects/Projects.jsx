import {FaReact, FaMobile , SiTailwindcss } from '../../components'

const Projects = () => {
  return (
    <div id="projects" className="text-pPurple ">
      <section className="sm:h-auto">

        <h1 className="text-center font-julius text-xl my-2">Projetos</h1>

        <div className="flex flex-col font-quicksand md:flex-row h-full mt-4 gap-2 box-sizing ">

            <div className="h-1/3 my-1 p-1 flex flex-col items-center md:h-auto md:w-1/3">
              <h2 className="text-center p-1 text-xl">U-Entertainment</h2>
              <img src="/uEnt-desktop.png"  alt=""></img>
              <p className='flex items-center text-xl my-4 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2">O u-Entertainment é uma plataforma de entretenimento que permite aos usuários explorar informações sobre filmes, séries e pessoas relacionadas ao cinema e à televisão. Consumindo dados da API do The Movie Database (TMDB), o aplicativo oferece uma ampla gama de recursos, incluindo pesquisa de filmes e séries, detalhes sobre elenco, avaliações e trailers. Além disso, é responsivo, ajustando-se automaticamente a diferentes dispositivos para uma experiência de usuário otimizada em qualquer tela.</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-300"><a target='_blank' href="https://silly-ganache-bdc6d6.netlify.app/">Veja Mais</a></button>
            </div>

            <div className="h-1/3 my-1 p-1 flex flex-col items-center md:h-auto md:w-1/3">
              <h2  className="text-center p-1 text-xl">DoList</h2>
              <img src="/DoList-desktop.png"  alt="" />
              <p className='flex items-center text-xl my-4 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2">
              O DoList é um aplicativo de lista de tarefas que permite aos usuários registrar, fazer login e gerenciar suas tarefas diárias. Com recursos para adicionar, marcar como concluídas e filtrar tarefas, além de uma função de pesquisa integrada, o aplicativo é uma ferramenta eficiente para manter a organização e a produtividade. Além disso, é responsivo, adaptando-se a diferentes dispositivos para uma experiência de usuário consistente em todas as plataformas.</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-300"><a target='_blank' href="https://remarkable-daifuku-41f488.netlify.app/">Veja Mais</a></button>
            </div>

            <div className="h-1/3 my-1 p-1 flex flex-col items-center md:h-autp md:w-1/3">
              <h2 className="text-center p-1 text-xl">NewsLetter</h2>
              <img src="/Newsletter-desktop.png" alt="" />
              <p className='flex items-center text-xl my-4 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2"> Newsletter é um formulário de inscrição para receber atualizações mensais. Ele permite que os usuários insiram seus endereços de e-mail e, após validação, se inscrevam na newsletter. Quando o usuário se inscreve com sucesso, uma mensagem de confirmação é exibida com um ícone de marca de seleção. O usuário também pode descartar a mensagem de sucesso clicando em um botão. O aplicativo é responsivo e se adapta a diferentes tamanhos de tela.</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-500"><a target='_blank' href="https://tubular-truffle-899a09.netlify.app/">Veja Mais</a></button>
            </div>
            
        </div>

      </section>
    </div>
  );
};

export default Projects;
