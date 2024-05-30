import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from './Components/Blog';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';


function App() {
  return (
    <>
    <div className="App">
      <Router>
<Header/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>


    </div>
    </>
  );
}

export default App;
