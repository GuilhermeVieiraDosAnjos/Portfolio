import { useState } from "react";
import { IoIosContact, IoIosCopy, IoCheckmarkDone, FaGithub, FaFilePdf, FaLinkedin } from "../index.js";

const Contact = () => {
  const email = "guilhermevieiradosanjos02@gmail.com";
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
    <div id="contact" className="my-12 md:h-46 flex justify-center items-center">
      <section className="">
        <h1 className="text-pPurple font-julius text-xl my-4 flex items-center justify-center">
          Contato <IoIosContact />
        </h1>

        <div className="flex flex-col font-quicksand items-center justify-center gap-4 h-full">
          <h1 className="text-xl">Entre em contato comigo!</h1>

          <div className="text-pPurple">
            <img src="boxemail.svg" className="h-24" alt="" />
          </div>

          <div className="sm:flex sm:w-full sm:justify-around">
            <div className="">
              <button
                className="p-2 bg-slate-300 hover:bg-slate-200 duration-300 rounded-lg flex flex-row-reverse gap-2 items-center"
                onClick={handleCopyToClipboard}
              >
                {copySuccess ? (
                  <IoCheckmarkDone className="text-pPurple mr-2" />
                ) : (
                  <IoIosCopy className="text-pPurple" />
                )}
                {copySuccess ? "Copied" : email}
              </button>
              <div className="flex justify-around text-center text-pPurple items-center text-2xl my-5 ">
                <a target="_blank" href="https://github.com/GuilhermeVieiraDosAnjos" className="hover:-translate-y-1 hover:scale-125 duration-300">
                  <FaGithub />
                </a>
                <a href="\public\Curriculum.pdf" download={true} className="hover:-translate-y-1 hover:scale-125 duration-300">
                  <FaFilePdf />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/guilhermevieiradosanjos/" className="hover:-translate-y-1 hover:scale-125 duration-300">
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


export default Contact;
