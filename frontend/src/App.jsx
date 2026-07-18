import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Eligibility from "./pages/Eligibility";
import Chat from "./pages/Chat";
import Compare from "./pages/Compare";
import Upload from "./pages/Upload";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { askGemini } from "./services/gemini";


export default function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/eligibility" element={<Eligibility/>}/>

<Route path="/chat" element={<Chat/>}/>

<Route path="/compare" element={<Compare/>}/>

<Route path="/upload" element={<Upload/>}/>

<Route path="/about" element={<About/>}/>

<Route path="*" element={<NotFound/>}/>

</Routes>


</BrowserRouter>

)

}