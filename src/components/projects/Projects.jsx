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
              <p className='flex items-center text-xl my-2 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est blanditiis explicabo aperiam provident fugit officiis ut deleniti, temporibus natus. Tenetur harum suscipit rerum quaerat et officia modi voluptatem, id autem.</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-300">Veja Mais</button>
            </div>

            <div className="h-1/3 my-1 p-1 flex flex-col items-center md:h-auto md:w-1/3">
              <h2  className="text-center p-1 text-xl">DoList</h2>
              <img src="/DoList-desktop.png"  alt="" />
              <p className='flex items-center text-xl my-2 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam autem quidem soluta architecto! Sequi, aut vel! Distinctio itaque atque nam repellendus? Beatae excepturi accusantium blanditiis minima totam tenetur! Labore, hic!</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-300">Veja Mais</button>
            </div>

            <div className="h-1/3 my-1 p-1 flex flex-col items-center md:h-autp md:w-1/3">
              <h2 className="text-center p-1 text-xl">NewsLetter</h2>
              <img src="/Newsletter-desktop.png" alt="" />
              <p className='flex items-center text-xl my-2 gap-2'>Tecnologias : <FaReact className='text-blue-400'/> <SiTailwindcss className='text-blue-600'/> <FaMobile className='text-slate-400'/></p>
              <p className="text-justify  flex justify-center items-center md:w-64  md:h-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam quisquam, necessitatibus perferendis quis magnam dolores voluptatem. Praesentium delectus eaque vitae cumque similique. Architecto consequatur placeat reprehenderit nemo nesciunt debitis.</p>
              <button className="mt-2 bg-pPurple text-white w-1/2 md:w-1/3 md:p-1 rounded-lg md:hover:bg-slate-500 hover:text-black duration-500">Veja Mais</button>
            </div>
            
        </div>

      </section>
    </div>
  );
};

export default Projects;
