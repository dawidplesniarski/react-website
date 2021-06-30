import React from "react"
import MainPage from "./Pages/MainPage"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route path={"/"} component={MainPage}/>
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default App
