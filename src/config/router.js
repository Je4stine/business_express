import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutUsPage from '../Components/AboutUsPage.jsx'
import Home from '../Components/Home.jsx'
import ContactUsPage from '../Components/ContactUsPage.jsx'
import ServicesPage from "../Components/ServicesPage.jsx"

class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                      <Route exact path="/" component={Home} />

                      <Route exact path="/about" component={AboutUsPage} />

                      <Route exact path="/contact" component={ContactUsPage} />

                      <Route exact path="/services" component={ServicesPage} />

                  </Router>

        )
    }
}
export default AppRouter;