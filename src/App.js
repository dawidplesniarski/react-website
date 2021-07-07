import React from "react"
import MainPage from "./Pages/MainPage"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ContactPage from "./Pages/ContactPage"
import BathRoomPage from "./Pages/Services/BathRoomPage"
import ElectroInstallationsPage from "./Pages/Services/ElectroInstallationsPage"
import RenovationsPage from "./Pages/Services/RenovationsPage"
import IsolationPage from "./Pages/Services/IsolationPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path={"/"} component={MainPage}/>
          <Route exact path={"/contact"} component={ContactPage}/>
          <Route exact path={"/bathroom"} component={BathRoomPage}/>
          <Route exact path={"/electro-installations"} component={ElectroInstallationsPage}/>
          <Route exact path={"/renovations"} component={RenovationsPage}/>
          <Route exact path={"/isolation"} component={IsolationPage}/>
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default App
