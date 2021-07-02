import React from "react"
import MainPage from "./Pages/MainPage"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ContactPage from "./Pages/ContactPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path={"/"} component={MainPage}/>
          <Route exact path={"/contact"} component={ContactPage}/>
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default App
