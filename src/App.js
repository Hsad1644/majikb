import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Pages/Home";
import Listings from "./components/Pages/Listings";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Route exact path="/" component={Home} />
        <Route path="/listings" component={Listings} /> */}
      </Router>
    </div>
  );
}
