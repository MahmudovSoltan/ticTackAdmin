import MainRouter from "./routes"
import './assets/css/global.css'
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { ToastContainer } from "react-toastify";

function App() {

  useEffect(() => {
    useAuthStore.getState().initializeTokens();
  }, []);

  return (
    <>
      <MainRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
