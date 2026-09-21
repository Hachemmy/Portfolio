import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BarreNavigation from './components/BarreNavigation';
import PiedDePage from './components/PiedDePage';
import ProgressionDefilement from './components/ProgressionDefilement';
import RetourEnHaut from './components/RetourEnHaut';

function DeplacerVersHaut() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Disposition() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        const identifiant = window.requestAnimationFrame(() => {
            document.documentElement.classList.add('defilement-fluide');
        });
        return () => window.cancelAnimationFrame(identifiant);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <DeplacerVersHaut />
            <ProgressionDefilement />
            <BarreNavigation />
            <main className="relative overflow-x-clip">
                <Outlet />
            </main>
            <PiedDePage />
            <RetourEnHaut />
        </div>
    );
}

export default Disposition;