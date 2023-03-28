//import "./styles/styles.css";
import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Book from './pages/Book'
import Home from './pages/Home'
import Menu from './pages/Menu'

import { Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/book">book</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
