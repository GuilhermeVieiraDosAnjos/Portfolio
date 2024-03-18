
const Home = () => {
  return (
    <div id="home">
      <section className="h-screen w-screen m-4 flex justify-center items-center ">
        <div className="font-montserrat w-1/2">
          <p className="">Olá me chamo Guilherme Vieira dos Anjos e sou </p>
          <h1>Desenvolvedor FrontEnd</h1>
          <p>Tenho 22 anos sou formado em Análise e Desenvolvimento de sistemas buscando meu primeiro emprego na área de de desenvolvimento, gosto de resolver problemas utilizando novas tecnologias que otimizem as </p>
        </div>
        <div className="hidden md:w-1/2 md:flex">
          <img src="/developer.svg" alt="people at the computer" />
        </div>
      </section>
    </div>
  )
}

export default Home
