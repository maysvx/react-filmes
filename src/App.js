import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import FilmesLancamentos from "./pages/filmes/FilmesLancamentos";
import FilmesCartaz from "./pages/filmes/FilmesCartaz";

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
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
