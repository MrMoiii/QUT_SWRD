import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Book from './pages/Book'
import Home from './pages/Home'
import Menu from './pages/Menu'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
