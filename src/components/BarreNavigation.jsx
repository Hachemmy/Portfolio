import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowDown, FaBars, FaTimes, FaHome, FaUser, FaMicrochip, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { liensNavigation } from '../data/donneesPortfolio';
import { demanderIntro } from '../introSignal';

const lienCV = process.env.PUBLIC_URL + '/assets/CVHachemmy.pdf';

const iconesLien = {
    Accueil: <FaHome className="h-5 w-5 shrink-0" />,
    'À propos': <FaUser className="h-5 w-5 shrink-0" />,
    Compétences: <FaMicrochip className="h-5 w-5 shrink-0" />,
    Projets: <FaFolderOpen className="h-5 w-5 shrink-0" />,
    Expérience: <FaBriefcase className="h-5 w-5 shrink-0" />,
    Contact: <FaEnvelope className="h-5 w-5 shrink-0" />,
};

function BarreNavigation() {
    const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
    const { pathname } = useLocation();

    const estActif = (route) => pathname === route;

    const classesPilule = (route) =>
        `relative inline-flex items-center gap-3 whitespace-nowrap rounded-full border px-7 py-[17px] text-lg transition-colors ${
            estActif(route)
                ? 'border-white text-black'
                : 'border-white/10 text-white hover:border-white hover:bg-white hover:text-black'
        }`;

    useEffect(() => {
        if (menuMobileOuvert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuMobileOuvert]);

    const fermerMenu = () => {
        setMenuMobileOuvert(false);
        document.body.style.overflow = '';
    };

    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 }
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent">
            <div className="mx-auto w-full max-w-[1720px] px-6 py-5 sm:px-8 lg:px-10">

                {/* Barre commune noire : du logo jusqu'à Contact */}
                <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">

                    {/* Logo : rond 68px (comme le template) */}
                    <Link
                        to="/"
                        onClick={demanderIntro}
                        className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] transition hover:border-brand/50"
                        aria-label="Accueil"
                        style={{ filter: 'drop-shadow(0px -4px 23px rgba(0,0,0,0.25)) drop-shadow(0px 24px 23px rgba(0,0,0,0.25))' }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Hachemmy.png'}
                            alt="Logo Hachemmy"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </Link>

                    {/* Groupe de liens en pilules avec icônes 20px */}
                    <nav className="hidden flex-1 items-center justify-center gap-3 xl:flex">
                        {[
                            { label: 'Accueil', route: '/', icone: iconesLien.Accueil },
                            { label: 'À propos', route: '/a-propos', icone: iconesLien['À propos'] },
                            { label: 'Compétences', route: '/competences', icone: iconesLien.Compétences },
                            { label: 'Projets', route: '/projets', icone: iconesLien.Projets },
                            { label: 'Expérience', route: '/parcours', icone: iconesLien.Expérience }
                        ].map((lien) => (
                            <Link
                                key={lien.label}
                                to={lien.route}
                                className={classesPilule(lien.route)}
                            >
                                {estActif(lien.route) && (
                                    <motion.span
                                        layoutId="nav-pilule"
                                        className="absolute inset-0 rounded-full bg-white"
                                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                                    />
                                )}
                                <span className="relative flex items-center gap-3">
                                    {lien.icone}
                                    {lien.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">

                        {/* Télécharger le CV */}
                        <a
                            href={lienCV}
                            download="CVHachemmy.pdf"
                            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black lg:inline-flex"
                            aria-label="Télécharger le CV"
                            title="Télécharger le CV"
                        >
                            Télécharger CV <FaArrowDown />
                        </a>

                        {/* CTA "Contact" aligné à droite */}
                        <Link
                            to="/contact"
                            className="hidden rounded-full border border-white/10 bg-white/5 px-7 py-[15px] text-lg font-medium text-white transition hover:border-white hover:bg-white hover:text-black lg:inline-flex"
                        >
                            Contact
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMenuMobileOuvert((precedent) => !precedent)}
                            className="shrink-0 rounded-full border border-white/10 bg-white/5 p-3.5 text-white transition hover:border-brand/50 hover:text-brand lg:hidden"
                            aria-label="Menu"
                            aria-expanded={menuMobileOuvert}
                        >
                            {menuMobileOuvert ? <FaTimes /> : <FaBars />}
                        </button>

                    </div>
                </div>
            </div>

            <motion.nav
                initial="closed"
                animate={menuMobileOuvert ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="w-full overflow-y-auto border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
                style={{ maxHeight: 'calc(100vh - 80px)' }}
            >
                <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-2 px-6 py-4 sm:px-8">
                    {liensNavigation.map((lien) => (
                        <Link
                            key={lien.label}
                            to={lien.route}
                            className={`flex w-full items-center gap-3 rounded-full border px-5 py-3.5 text-base transition ${
                                estActif(lien.route)
                                    ? 'border-white bg-white text-black'
                                    : 'border-white/10 bg-white/[0.03] text-white hover:border-white hover:bg-white hover:text-black'
                            }`}
                            onClick={fermerMenu}
                        >
                            {iconesLien[lien.label]}
                            {lien.label}
                        </Link>
                    ))}
                    <a
                        href={lienCV}
                        download="CVHachemmy.pdf"
                        className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
                        onClick={fermerMenu}
                    >
                        Télécharger le CV <FaArrowDown />
                    </a>
                </div>
            </motion.nav>
        </header>
    );
}

export default BarreNavigation;