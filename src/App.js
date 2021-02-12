import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Livetv from "./components/Livetv";
import Budget from "./components/Budget";
import Latest from "./components/Latest";
import offbeat from "./components/offbeat";
import Video from "./components/Video";
import Trends from "./components/Trends";
import India from "./components/India";
import World from "./components/World";
import Cities from "./components/cities";
import Corona from "./components/Corona";
import opinion from "./components/opinion";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Router>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/live-tv" component={Livetv} />
            <Route  exact path="/latest" component={Latest}/>
            <Route exact path="/budget" component={Budget}/>
            <Route exact path="/offbeat" component={offbeat}/>
            <Route exact path="/video" component={Video}/>
            <Route exact path="/trends" component={Trends}/>
            <Route export path="/india" component={India}/>
            <Route export path="/world" component={World} />
            <Route export path="/cities" component={Cities} />
            <Route export path="/corona" component={Corona} />
            <Route export path="/opinion" component={opinion} />

          </Router>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
