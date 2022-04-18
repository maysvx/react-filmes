import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesLancamentos from "./pages/filmes/FilmesLancamentos";
import FilmesCartaz from "./pages/filmes/FilmesCartaz";
import SeriesPopulares from "./pages/series/SeriesPopulares";
import SeriesLancamentos from "./pages/series/SeriesLancamentos";
import SeriesNoAr from "./pages/series/SeriesNoAr";
import AtoresDetalhes from "./pages/atores/AtoresDetalhes";
import SeriesDetalhes from "./pages/series/SeriesDetalhes";
import PaginaPrincipal from "./pages/principal/PaginaPrincipal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/filmes/populares" element={<FilmesPopulares />}/>
            <Route path="/filmes/:id" element={<FilmesDetalhes/>}/>
            <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>}/>
            <Route path="/filmes/cartaz" element={<FilmesCartaz/>}/>
            <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>}/>
            <Route path="/atores/:id" element={<AtoresDetalhes/>}></Route>
            <Route path="/series/populares" element={<SeriesPopulares/>}/>
            <Route path="/series/lancamentos" element={<SeriesLancamentos/>}/>
            <Route path="/series/no-ar" element={<SeriesNoAr/>}/>
            <Route path="/series/:id" element={<SeriesDetalhes/>}/>
            <Route path="/" element={<PaginaPrincipal/>}/>

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
