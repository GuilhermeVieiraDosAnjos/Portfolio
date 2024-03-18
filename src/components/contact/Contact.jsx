import { useState } from "react";
import {IoIosContact, IoIosCopy, FaGithub, FaFilePdf, FaLinkedin } from '../index.js'
import {Link} from 'react-router-dom'

const Contact = () => {
  const [email, setEmail] = useState("example@example.com");
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy email: ", error);
    });
  };

  return (
    <div id="contact">
      <section className="h-auto">
        <h1 className="text-pPurple font-julius text-xl my-2 flex items-center justify-center">Contato <IoIosContact/></h1>
        <div className="flex flex-col  items-center  justify-center gap-2">

          <h1>Get in touch!</h1>
          <div>
            {/* <label className="flex items-center p-2 bg-slate-300 rounded-lg">guilhermevieiradosanjos02@gmail.com <IoIosCopy/></label> */}
            <button className="flex items-center p-2 bg-slate-300 rounded-lg" >guilhermevieiradosanjos02@gmail.com <IoIosCopy/></button>
            </div>
            <div className="flex items-center gap-4 text-2xl my-10">
              <a href=""><FaGithub/></a>
              <a href=""><FaFilePdf/></a>
              <a href=""><FaLinkedin/></a>
            </div>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopyToClipboard}>
            Copiar Email
          </button> */}

          
        </div>
      </section>
    </div>
  );
};

export default Contact;
