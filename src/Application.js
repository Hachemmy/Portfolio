import { HashRouter, Route, Routes } from 'react-router-dom';
import Disposition from './Disposition';
import PageAccueil from './pages/PageAccueil';
import PageAPropos from './pages/PageAPropos';
import PageCompetences from './pages/PageCompetences';
import PageProjets from './pages/PageProjets';
import PageParcours from './pages/PageParcours';
import PageContact from './pages/PageContact';

function Application() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Disposition />}>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/a-propos" element={<PageAPropos />} />
          <Route path="/competences" element={<PageCompetences />} />
          <Route path="/projets" element={<PageProjets />} />
          <Route path="/parcours" element={<PageParcours />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageAccueil />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Application;