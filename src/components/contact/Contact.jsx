import { useState } from "react";
import {
  IoIosContact,
  IoIosCopy,
  FaGithub,
  FaFilePdf,
  FaLinkedin,
  IoCheckmarkDone,
} from "../index.js";

const Contact = () => {
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
    <div id="contact">
      <section className="h-auto">
        <h1 className="text-pPurple font-julius text-xl my-2 flex items-center justify-center">
          Contato <IoIosContact />
        </h1>
        <div className="flex flex-col   items-center  justify-center gap-2 h-full">
          <h1>Get in touch!</h1>

          <div className="sm:flex sm:w-full sm:justify-around">
            <div className="">
              <button
                className="p-2 bg-slate-300 rounded-lg flex items-center"
                onClick={handleCopyToClipboard}
              >
                {copySuccess ? (
                  <IoCheckmarkDone className="text-pPurple mr-2" />
                ) : (
                  <IoIosCopy className="mr-2" />
                )}
                {copySuccess ? "Copied" : email}
              </button>
              <div className="flex items-center gap-4 text-2xl my-10">
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
            <div className="hidden full md:flex">
              <img src="/contact.svg" className=" h-96" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
