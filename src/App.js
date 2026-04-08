import './App.css'
import { Switch, Route } from "react-router-dom";
import Header from './componentes/Header/Header'
import Home from "./screens/Home/Home";
import Register from './screens/Register/Register';
import Footer from './componentes/Footer/Footer';
import SearchResult from './screens/SearchResult/SearchResult';
import NotFound from './screens/404NotFound/404NotFound';
import Detalle from "./screens/Detalle/Detalle";
import Movies from "./componentes/Movies/Movies";
import Series from "./componentes/Series/Series";
import Favoritos from './screens/Favoritos/Favoritos';
import DetalleSeries from './screens/DetalleSeries/DetalleSeries';
import VerTodasCartel from './componentes/VerTodasCartel/VerTodasCartel';
import VerTodasPopulares from './componentes/VerTodasPopulares/VerTodasPopulares';
import CardSeries from './componentes/CardSeries/CardSeries';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/SearchResults/:select/:valor" component={SearchResult} />
        <Route path="/Detalle/movie/:id" component={Detalle} />
        <Route path="/Detalle/tv/:id" component={DetalleSeries} />
        <Route path="/VerTodasCartel" component={VerTodasCartel} />
        <Route path="/VerTodasPopulares" component={VerTodasPopulares} />
        <Route path="/CardSeries" component={CardSeries}/>
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
