const About = () => {
  return (
    <div id="aboutMe" className="h-screen mt-6">
      <section className="h-full">
        <h1 className="text-center text-xl font-julius">Sobre Mim</h1>
        <div className="flex flex-col sm:flex-row-reverse h-full ">
          <div className="sm:w-1/2">
            <img
              src="/developer-minor.jpg"
              className="rounded-full mx-auto h-40 flex mt-10 sm:h-5/6 sm:rounded-xl "
              alt=""
            />
          </div>

          <div className="sm:w-1/2 flex sm:flex-col justify-center ">
            <div className="sm:w-full sm:flex sm:flex-col p-20  m-20 leading-10 text-justify">
              <p className="my-2">
                Olá, meu nome é <strong className="text-pPurple">Guilherme Vieira dos Anjos</strong>, e
                sou um <strong className="text-pPurple">Desenvolvedor Frontend </strong> apaixonado pela
                área de tecnologia. Desde que descobri esse mundo, venho me
                surpreendendo com as possibilidades de criação que a área da
                tecnologia oferece. Busco constantemente aprimorar minhas
                habilidades para criar aplicações funcionais e atraentes,
                utilizando tecnologias modernas e ferramentas de design.
              </p>
              <p className="my-2">
                Além da minha formação em Análise e Desenvolvimento de Sistemas,
                tenho um forte conhecimento em <strong className="text-pPurple">
                  HTML, CSS, JavaScript e
                  frameworks como React e Tailwind
                </strong>. Também tenho interesse em
                explorar novas tecnologias e aprender continuamente.
              </p>
              <p className="my-2">
                Meus hobbies incluem videogames, futebol e jiu-jitsu. O
                jiu-jitsu se tornou uma parte importante da minha vida,
                ensinando-me a enfrentar desafios e lidar com adversidades com
                determinação e perseverança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
