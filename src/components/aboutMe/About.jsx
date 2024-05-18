import "../projects/projects.css";
import { FaGithub, FaFilePdf, FaLinkedin } from "../index";
import PropTypes from 'prop-types';

const About = () => {
  return (
    <div id="aboutMe" className="">
      <section className="">
        <h1 className="text-center text-xl font-julius mt-10">Sobre Mim</h1>
        <div className="m-3 ss:px-10 md:flex md:gap-20 flex-row-reverse justify-center items-center">
          <div className="ss:m-4">
            <img
              src="/perfil1.jpeg"
              className="rounded-full mx-auto h-40 m-10 ss:rounded-lg ss:h-64 sm:h-96 md:rounded-full border-pPurple border-2"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center md:w-1/2">
            <div className="text-justify ss:px-10 sm:text-2xl sm:leading-10 md:w-full md:text-sm md:flex-col md:p-20 md:leading-8">
              <p className="my-4">
                Olá, meu nome é{" "}
                <strong className="text-pPurple">
                  Guilherme Vieira dos Anjos
                </strong>
                , e sou um{" "}
                <strong className="text-pPurple">
                  Desenvolvedor Frontend
                </strong>{" "}
                apaixonado pela área de tecnologia. Desde que descobri esse
                mundo, venho me surpreendendo com as possibilidades de criação
                que a área da tecnologia oferece. Busco constantemente aprimorar
                minhas habilidades para criar aplicações funcionais e atraentes,
                utilizando tecnologias modernas e ferramentas de design.
              </p>
              <p className="my-2">
                Além da minha formação em Análise e Desenvolvimento de Sistemas,
                tenho um forte conhecimento em{" "}
                <strong className="text-pPurple">
                  HTML, CSS, JavaScript e frameworks como React e Tailwind
                </strong>
                . Também tenho interesse em explorar novas tecnologias e
                aprender continuamente.
              </p>
              <p className="my-2">
                Meus hobbies incluem jiu-jitsu, futebol e videogame. O
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

About.propTypes = {
  // Declare propTypes if needed
};

export default About;
