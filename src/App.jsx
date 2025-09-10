import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function Peliculas() { return <div>Películas</div>; }
function Series() { return <div>Series</div>; }
function Contacto() { return <div>Contacto</div>; }

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pelicula" element={<Peliculas />} />
                <Route path="/series" element={<Series />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}