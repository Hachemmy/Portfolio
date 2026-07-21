import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { liensNavigation } from '../data/donneesPortfolio';

// Chemin vers le CV (place le fichier dans public/assets/)
const lienCV = process.env.PUBLIC_URL + '/assets/CVHachemmy.pdf';

function BarreNavigation() {
    const [estDefile, setEstDefile] = useState(false);
    const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

    useEffect(() => {
        const gererDefilement = () => setEstDefile(window.scrollY > 20);
        gererDefilement();
        window.addEventListener('scroll', gererDefilement);
        return () => window.removeEventListener('scroll', gererDefilement);
    }, []);

    const variants = {
        open: { height: 'fit-content', opacity: 1 },
        closed: { height: 0, opacity: 0 }
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${estDefile ? 'bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <a
                    href="#accueil"
                    className="flex items-center gap-3 text-lg font-semibold tracking-[0.3em] text-slate-50"
                >
                    <span className="flex h-15 w-15 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 text-sky-300">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Hachemmy.jpg'}
                            alt="Logo"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    </span>
                    <span className="hidden sm:inline">HACHEMMY</span>
                </a>

                {/* Menu desktop */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {liensNavigation.map((lien) => (
                        <a
                            key={lien.label}
                            href={lien.href}
                            className="text-sm text-slate-400 transition hover:text-sky-300"
                        >
                            {lien.label}
                        </a>
                    ))}
                </nav>

                {/* Bouton CV desktop */}
                <a
                    href={lienCV}
                    download="CVHachemmy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-500/20 lg:flex"
                >
                    Télécharger CV <FaArrowRight />
                </a>

                {/* Bouton menu mobile */}
                <button
                    type="button"
                    onClick={() => setMenuMobileOuvert((precedent) => !precedent)}
                    className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-200 lg:hidden"
                    aria-label="Menu"
                >
                    {menuMobileOuvert ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu mobile */}
            <motion.div
                initial="closed"
                animate={menuMobileOuvert ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-slate-800/80 bg-slate-950/95 z-50 lg:hidden"
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
                    {liensNavigation.map((lien) => (
                        <a
                            key={lien.label}
                            href={lien.href}
                            className="block w-full rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-sky-300"
                            onClick={() => setMenuMobileOuvert(false)}
                        >
                            {lien.label}
                        </a>
                    ))}
                    <a
                        href={lienCV}
                        download="CV-Hachemmy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300"
                        onClick={() => setMenuMobileOuvert(false)}
                    >
                        Télécharger CV <FaArrowRight />
                    </a>
                </div>
            </motion.div>
        </header>
    );
}

export default BarreNavigation;
