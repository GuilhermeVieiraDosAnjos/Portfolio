import { useState } from "react";
import {
  MdLocationOn,
  MdEmail,
  MdWork,
  FaGithub,
  FaFilePdf,
  FaLinkedin,
} from "../index.js";

const Home = () => {
  const [email, setEmail] = useState("guilhermevieiradosanjos02@gmail.com");
  const [navbar, setNavbar] = useState(true)
  const [copySuccess, setCopySuccess] = useState(false);


  const toggleNavbarVisibility = () => {
    setNavbar(!navbar)
  }

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
              Olá, me chamo{" "}
              <strong className="text-pPurple">
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
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-pPurple" />
            <p>Brasília-DF</p>
          </div>
          <div className="flex items-center gap-2">
            <MdWork className="text-pPurple" />
            <p>Disponível</p>
          </div>
          <div>
            <button onClick={handleCopyToClipboard} className="flex items-center gap-2">
              <MdEmail className="text-pPurple" />
              guilhermevieiradosanjos02@gmail.com{" "}
            </button>
          </div>
          <div className="flex justify-around text-center text-pPurple items-center text-xl my-10">
            <a target="_blank" href="https://github.com/GuilhermeVieiraDosAnjos">
              <FaGithub />
            </a>
            <a href="">
              <FaFilePdf />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/guilherme-vieira-dos-anjos-7709881b4/">
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

export default Home;
