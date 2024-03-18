
const About = () => {
  return (
    <div id="aboutMe" className="h-screen mt-6">
        <section className="h-full"> 
          <h1 className="text-center text-xl font-julius">Sobre Mim</h1>
          <div className="flex flex-col sm:flex-row-reverse h-full ">

              <div className="sm:w-1/2">
                <img src="/developer-minor.jpg" className="rounded-full mx-auto h-40 flex mt-10 sm:h-5/6 sm:rounded-xl " alt="" />
                </div>

              <div className="sm:w-1/2 flex justify-center ">
                <p className=" text-justify mt-auto h-full p-4 sm:leading-10 md:flex md:items-center md:w-3/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia hic quam maxime, eveniet magni consequatur deleniti nemo corporis in nobis totam beatae. Voluptates ex ipsum, repudiandae exercitationem voluptate deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, maxime in. Quibusdam odio, a autem qui praesentium, odit molestias error temporibus expedita rem, ipsam nostrum quo saepe in modi sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed blanditiis impedit non veniam rem perspiciatis, magni quos, voluptas magnam aspernatur est ipsa repellat unde ipsam quis nam. Non, repudiandae. Totam.</p>
              </div>

          </div>
        </section>
      
    </div>
  )
}

export default About
