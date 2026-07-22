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

  useEffect(() => {
    // Si l'URL contient une ancre (#parcours, #contact, etc.), on scrolle
    // manuellement vers la section correspondante une fois que tous les
    // composants ont fini d'être montés dans le DOM. Nécessaire car le
    // navigateur tente son propre scroll natif AVANT que React n'ait
    // rendu le contenu, ce qui échoue silencieusement (ex: lien partagé
    // sur les réseaux sociaux, ouverture directe de l'URL avec ancre).
    const hash = window.location.hash;
    if (!hash) return;

    const tenterScroll = () => {
      const cible = document.querySelector(hash);
      if (cible) {
        cible.scrollIntoView({ behavior: 'auto', block: 'start' });
        return true;
      }
      return false;
    };

    // Essaie tout de suite, puis réessaie à quelques reprises au cas où
    // certains composants (images, animations) mettent un peu plus de
    // temps à s'afficher et à définir leur hauteur finale.
    let tentatives = 0;
    const maxTentatives = 10;
    const intervalle = setInterval(() => {
      tentatives += 1;
      const reussi = tenterScroll();
      if (reussi || tentatives >= maxTentatives) {
        clearInterval(intervalle);
      }
    }, 100);

    return () => clearInterval(intervalle);
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