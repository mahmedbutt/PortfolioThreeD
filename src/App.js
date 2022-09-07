import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Reasons from "./Pages/8_Reason/Reasons";
import Policy from "./Components/Policy/Policy";
import Cookie from "./Components/Cookie/Cookie";
import Legal from "./Components/Legal/Legal";
import Computer3DModel from "./Pages/Computer3DModel/Computer3DModel";
function App() {
  // these varible use to change language, theme and open small tool panekl
  const [lang, setLang] = useState(true);
  const [theme, setTheme] = useState(true);
  const [isOpen, setIsopen] = useState(false);
  const [threeAnimation, setAnimationVal] = useState(true);

  return (
    // This is the small panel use to change the language and theme.
    <div className="App position-relative">
      <button
        className={`${isOpen ? "d-none" : "d-block"} language`}
        onClick={() => setIsopen(!isOpen)}
      >
        {" "}
        <AiFillSetting onClick={() => setIsopen(!isOpen)} />
      </button>
      <div
        className={`${isOpen ? "d-block" : "d-none"} language`}
        style={{ width: " 170px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <AiOutlineClose onClick={() => setIsopen(!isOpen)} />
            </div>
            <div className="col-12">
              <button className="" onClick={() => setLang(!lang)}>
                {lang ? "Spanish" : "English"}
              </button>
            </div>
            <div className="col-12">
              <button className="" onClick={() => setTheme(!theme)}>
                {theme ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* this is react router dom by which we can give our component link. */}
      <BrowserRouter>
        {!threeAnimation ? <Header lang={lang} theme={theme} /> : <></>}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setAnimationVal={setAnimationVal}
                lang={lang}
                theme={theme}
              />
            }
          />
          <Route
            path="/reason"
            element={<Reasons lang={lang} theme={theme} />}
          />
          <Route
            path="/policy"
            element={<Policy lang={lang} theme={theme} />}
          />
          <Route
            path="/cookie"
            element={<Cookie lang={lang} theme={theme} />}
          />
          <Route path="/legal" element={<Legal lang={lang} theme={theme} />} />

          {/* this is default link used whenever other path is add. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {!threeAnimation ? <Footer lang={lang} theme={theme} /> : <></>}
      </BrowserRouter>
    </div>
  );
}

export default App;
