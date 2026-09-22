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
{/* Fond mobile : photo visible au niveau du prénom et de la signature */}
            <div className="pointer-events-none absolute inset-0 z-0 lg:hidden">
                <div
                    className="absolute inset-x-0 opacity-[0.5]"
                    style={{
                        top: '151px',
                        aspectRatio: '1086 / 1448',
                    }}
                >
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/HC-nobg.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 0%',
                        }}
                    />
                </div>
                <div
                    className="absolute inset-x-0 opacity-[0.9]"
                    style={{
                        top: '1628px',
                        aspectRatio: '1086 / 1448',
                    }}
                >
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/HC-nobg.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 0%',
                        }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
            </div>

            {/* Fond desktop : parallax fixe */}
            <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
                <div
                    className="absolute inset-0 bg-cover bg-[50%_20%] bg-fixed opacity-[0.5]"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/HC.png)`,
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