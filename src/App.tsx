import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/Profile";

import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CircularProgress from "@mui/material/CircularProgress";
import Login from "./Pages/Login";
import { Flip, ToastContainer } from "react-toastify";
import refreshToken from "./utils/refreshLogin";
import { useDispatch } from "react-redux";
import DestinationPage from "./Pages/Destination";
import ItineraryInfo from "./Components/Itinerary/itineraryInfo";
import ConfirmBooking from "./Pages/ConfirmBooking";
function App() {
  const apiKey: string = process.env.REACT_APP_GOOGLE_API || "";
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
     refreshToken(dispatch)
  },[dispatch])
  return (
    <APIProvider
      apiKey={apiKey}
      libraries={["places"]}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }}
      onError={() => {}}
    >
      {loading && (
        <motion.div className="bg-gray-50 w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
          <CircularProgress />
        </motion.div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        theme="light"
      />
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="bg-gray-50"
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/itinerary" element={<ItineraryInfo />} />
              <Route path="/destination" element={<DestinationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/confirm-booking" element={<ConfirmBooking />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </APIProvider>
  );
}

export default App;
