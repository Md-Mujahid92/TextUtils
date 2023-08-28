import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import TextForm from "./component/text-form/text-form";
import About from "./component/about/about";
import aboutData from "./component/about/aboutData.json";
import Alert from "./component/alert/alert";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = (cls) => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <div className="container-fluid p-0">
        <div className="position-sticky top-0 z-index-1">
          <Navbar
            title="TextUtils"
            aboutText="About Us"
            mode={darkMode}
            enableDarkMode={toggleMode}
          />
        </div>
        <Alert alert={alert} />
        <div className="container mt-5">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About data={aboutData} mode={darkMode} showAlert={showAlert} />
              }
            />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={darkMode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
