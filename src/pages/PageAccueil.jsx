import { useEffect, useState } from 'react';
import Accueil from '../components/Accueil';
import Statistiques from '../components/Statistiques';
import Signature from '../components/Signature';
import Services from '../components/Services';
import AnimationDeDebut from '../components/AnimationDeDebut';
import { etatIntro, ecouterIntro } from '../introSignal';

function PageAccueil() {
    const [montrerIntro, setMontrerIntro] = useState(false);

    useEffect(() => {
        if (etatIntro()) {
            setMontrerIntro(true);
        }
        return ecouterIntro(() => setMontrerIntro(true));
    }, []);

    return (
        <div className="relative">
            {montrerIntro && (
                <AnimationDeDebut onTermine={() => setMontrerIntro(false)} />
            )}
            {/* Fond HC.png fixe, continu sur toute la page avant le footer */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.22]"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/HC.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 20%',
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
            </div>

            <div className="relative z-10">
                <Accueil />
                <Statistiques />
                <Signature />
                <Services />
            </div>
        </div>
    );
}

export default PageAccueil;