import {
  FaGithub,
  FaFilePdf,
  FaLinkedin,
} from "../index"

const About = () => {
  return (
    <div id="aboutMe" className="h-screen my-10 sm:mt-6 sm:mb-10 ">
      <section className="h-screen">
        <h1 className="text-center text-xl font-julius">Sobre Mim</h1>
        <div className="flex flex-col sm:flex-row-reverse h-full ">
          <div className="sm:w-1/2">
            <img
              src="/developer-minor.jpg"
              className="rounded-full mx-auto h-40 flex mt-10 sm:h-5/6 sm:rounded-xl "
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center sm:w-1/2  ">
            <div className=" text-justify sm:w-full sm:text-lg sm:flex sm:flex-col sm:p-20  sm:m-20 sm:leading-10 ">
              <p className= " my-2">
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
                Meus hobbies incluem jiu-jitsu, futebol e videogame . O
                jiu-jitsu se tornou uma parte importante da minha vida,
                ensinando-me a enfrentar desafios e lidar com adversidades com
                determinação e perseverança.
              </p>         
            <div className="flex justify-center text-center text-pPurple items-center gap-4 text-3xl my-10">
                <a href="https://github.com/GuilhermeVieiraDosAnjos">
                  <FaGithub />
                </a>
                <a href="">
                  <FaFilePdf />
                </a>
                <a href="https://www.linkedin.com/in/guilherme-vieira-dos-anjos-7709881b4/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
