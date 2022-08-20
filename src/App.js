/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Router,
} from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";


import Container from "./components/home/container";
import CalendarCmp from "./components/calendar/calendar";

function App() {

  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Container/>}></Route>
        <Route path="/calendar" element={<CalendarCmp/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
