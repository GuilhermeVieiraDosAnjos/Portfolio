
const Home = () => {
  return (
    <div id="home">
      <section className="h-screen w-screen m-4 flex justify-center items-center ">
        <div className="font-montserrat w-1/2">
          <p className="text-xl">Olá me chamo Guilherme Vieira dos Anjos e sou </p>
          <h1 className="text-8xl text-wrap font-hind text-center">Desenvolvedor FrontEnd</h1>
          <div className="w-full  flex justify-end">
            <p className="w-full text-justify text-lg">Tenho 22 anos, sou formado em Análise e Desenvolvimento de Sistema com um ano 1 ano de experiencia trabalhando como freelancer. </p>
          </div>
        </div>
        <div className="hidden md:w-1/2 sm:flex">
          <img src="/developer.svg" alt="people at the computer" />
        </div>
      </section>
    </div>
  )
}

export default Home
