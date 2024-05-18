import { useState } from "react";
import {
  MdLocationOn,
  MdEmail,
  MdWork,
  FaGithub,
  FaFilePdf,
  FaLinkedin,
  IoCheckmarkDone
} from "../index.js";
import PropTypes from 'prop-types';

const Home = () => {
  const [email, setEmail] = useState("guilhermevieiradosanjos02@gmail.com");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy email: ", error);
      });
  };

  return (
    <div className="h-screen ">
      <section id="home" className="flex h-full items-center gap-4 justify-center ">
        <div className="p-2 md:p-0">
          <div className="text-xl">
            <p>
              Olá &#128075;, me chamo{" "}
              <strong className="text-pPurple nameG">
                Guilherme Vieira dos Anjos
              </strong>
            </p>
          </div>
          <div className="text-xl">
            <p>
              Eu sou um{" "}
              <strong className="text-pPurple">Desenvolvedor Frontend</strong>
            </p>
          </div>
          <div className="flex items-center gap-2 text-pPurple">
            <MdLocationOn />
            <p>Brasília-DF</p>
          </div>
          <div className="flex items-center gap-2  text-pPurple">
            <MdWork />
            <p>Disponível</p>
          </div>
          <div className="text-pPurple ease-in-out transition duration-300 hover:scale-105">
            <button onClick={handleCopyToClipboard} className="flex items-center gap-2">
              {copySuccess ? (
                <IoCheckmarkDone/>
              ): (
              <MdEmail/>
              )}
              guilhermevieiradosanjos02@gmail.com
            </button>
          </div>
          <div className="flex justify-around text-center text-pPurple items-center text-2xl my-10 ">
            <a target="_blank" href="https://github.com/GuilhermeVieiraDosAnjos" className="hover:-translate-y-1 hover:scale-125 duration-300">
              <FaGithub />
            </a>
            <a href="\public\Curriculum.pdf" download={true} className="hover:-translate-y-1 hover:scale-125 duration-300">
              <FaFilePdf />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/guilherme-vieira-dos-anjos-7709881b4/" className="hover:-translate-y-1 hover:scale-125 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hidden  sm:flex">
          <img
            src="/developer.svg"
            className="h-96"
            alt="people at the computer"
          />
        </div>
      </section>
    </div>

  );
};

Home.propTypes = {
  email: PropTypes.string.isRequired
};

export default Home;
