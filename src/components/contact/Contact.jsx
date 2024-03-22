import { useState } from "react";
import { IoIosContact, IoIosCopy, IoCheckmarkDone } from "../index.js";

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
    <div id="contact" className="h-screen sm:my-40 md:h-20 flex justify-center items-center">
      <section className="">
        <h1 className="text-pPurple font-julius text-xl my-4 flex items-center justify-center">
          Contato <IoIosContact />
        </h1>

        <div className="flex flex-col  font-quicksand  items-center  justify-center gap-4 h-full">
          <h1 className="text-xl">Entre em contato comigo!</h1>

          <div className="text-pPurple">
            <img src="boxemail.svg" className="h-24 " alt="" />
          </div>

          <div className="sm:flex sm:w-full sm:justify-around">
            <div className="">
              <button
                className="p-2 bg-slate-300 rounded-lg flex flex-row-reverse gap-2 items-center"
                onClick={handleCopyToClipboard}
              >
                {copySuccess ? (
                  <IoCheckmarkDone className="text-pPurple mr-2" />
                ) : (
                  <IoIosCopy />
                )}
                {copySuccess ? "Copied" : email}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
