import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="relative container mx-auto">
    <div className='fixed top-0 inset-x-1/4'>
        <Navbar />
    </div>
    <main className='mt-24'>
        <About />
        <Projects />
        <Contact />
    </main>

</div>
  );
}

export default App;
