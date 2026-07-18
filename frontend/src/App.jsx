import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Eligibility from "./pages/Eligibility";
import Chat from "./pages/Chat";
import Compare from "./pages/Compare";
import Upload from "./pages/Upload";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {

  return (

    <BrowserRouter>


      <div className="app-container">


        <Navbar />


        {/* Space below fixed navbar */}

        <main className="main-content">


          <Routes>


            {/* Home */}

            <Route
              path="/"
              element={<Home />}
            />



            {/* Authentication */}

            <Route
              path="/login"
              element={<Login />}
            />


            <Route
              path="/register"
              element={<Register />}
            />



            {/* Main Application */}

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />


            <Route
              path="/eligibility"
              element={<Eligibility />}
            />


            <Route
              path="/upload"
              element={<Upload />}
            />


            <Route
              path="/chat"
              element={<Chat />}
            />


            <Route
              path="/compare"
              element={<Compare />}
            />



            {/* Information */}

            <Route
              path="/about"
              element={<About />}
            />



            {/* Error */}

            <Route
              path="*"
              element={<NotFound />}
            />


          </Routes>


        </main>


      </div>


    </BrowserRouter>

  );

}