import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginButton from "./components/auth0Components/LoginBotton";
import { Routes, Route } from "react-router-dom";
import { PagesContainer } from "./components/PagesContainer";
import { AboutPage, AllProducts, ContactUs, HomePage, NotFound } from "./Pages/main";

export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <div className="App">
          <PagesContainer></PagesContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>
      );
    } else {
      return <LoginButton />;
    }
  } else {
    return <div className="App">...Loading</div>;
  }
};
