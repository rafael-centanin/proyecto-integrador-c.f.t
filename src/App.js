import './App.css'
import { Switch, Route } from "react-router-dom";
import Header from './componentes/Header/Header'
import Home from "./screens/Home/Home";
import Register from './screens/Register/Register';
import Footer from './componentes/Footer/Footer';
import SearchResult from './screens/SearchResult/SearchResult';
import NotFound from './componentes/404NotFound/404NotFound'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register"  component={Register} />
        <Route path="/SearchResults/:valor" component={SearchResult} />
        <Route path= "" component={NotFound}/>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
