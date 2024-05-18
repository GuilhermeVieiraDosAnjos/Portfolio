import { About, Contact, Home, Navbar, Projects} from './components'


function App() {
  return (
    <>

      <div className="overflow-x-hidden overflow-y-hidden h-auto">
        <Navbar/>
        <Home />
        <Projects />
        <About/>
        <Contact />
      </div>
    </>
  );
}

export default App;
