import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> c1b8001232de3d7393b27a107b1c0524c90d3929

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Book from './pages/Book'
import Home from './pages/Home'
import Menu from './pages/Menu'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
<<<<<<< HEAD
const { spawn } = require("child_process");
const pythonProcess = spawn('python',["test.py","INSERT INTO my_table (id, title) VALUES ('2','Book two');" ]);

pythonProcess.stdout.on('data', (data) => {
  console.log(data)
 });
=======
>>>>>>> c1b8001232de3d7393b27a107b1c0524c90d3929

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
