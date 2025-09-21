import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Itinerary from "./Components/Itinerary/main";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { motion } from "motion/react";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const apiKey:string = process.env.REACT_APP_GOOGLE_API||"";
  const [loading, setLoading] = useState(true);
  return (  
    <APIProvider
      apiKey={apiKey}
      libraries={["places"]}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }}
      onError={()=>{

      }}
      
    >
     
      {loading && (
        <motion.div className="bg-gray-50 w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
          <CircularProgress />
        </motion.div>
      )}
      {!loading && (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{
          duration:1,
          ease:"easeInOut",

        }}} className="bg-gray-50">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Itinerary" element={<Itinerary />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </APIProvider>
  );
}

export default App;
