
import { useEffect } from 'react';
import BarreNavigation from './components/BarreNavigation';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Parcours from './components/Parcours';
import Contact from './components/Contact';
import PiedDePage from './components/PiedDePage';
import ProgressionDefilement from './components/ProgressionDefilement';
import RetourEnHaut from './components/RetourEnHaut';

function Application() {
  useEffect(() => {
    // Le scroll fluide n'est activé qu'après le premier rendu, pour éviter
    // le "double scroll" visible au chargement/rafraîchissement de la page
    // (saut instantané du navigateur suivi d'une animation de défilement).
    const identifiant = window.requestAnimationFrame(() => {
      document.documentElement.classList.add('defilement-fluide');
    });
    return () => window.cancelAnimationFrame(identifiant);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <ProgressionDefilement />
      <BarreNavigation />
      <main className="relative overflow-x-hidden">
        <Accueil />
        <APropos />
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
      </main>
      <PiedDePage />
      <RetourEnHaut />
    </div>
  );
}

export default Application;

