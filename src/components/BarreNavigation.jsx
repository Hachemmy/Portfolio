import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowDown, FaBars, FaTimes, FaHome, FaUser, FaMicrochip, FaFolderOpen, FaBriefcase, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { liensNavigation } from '../data/donneesPortfolio';
import { demanderIntro } from '../introSignal';
import { useLangue } from '../context/ContexteLangue';

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
    const [menuDroiteOuvert, setMenuDroiteOuvert] = useState(false);
    const { pathname } = useLocation();
    const { langue, changerLangue, t } = useLangue();

    const estActif = (route) => pathname === route;

    useEffect(() => {
        setMenuDroiteOuvert(false);
    }, [pathname]);

    const classesPilule = (route) =>
        `relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-3 text-sm transition-colors xl:gap-3 xl:px-7 xl:py-[17px] xl:text-lg ${
            estActif(route)
                ? 'text-black'
                : 'text-white hover:bg-white/10'
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
            <div className="mx-auto w-full max-w-[1720px] px-6 py-2 sm:px-8 xl:py-5 xl:px-10">

                {/* Barre commune noire : du logo jusqu'à Contact */}
                <div className="flex items-center justify-between gap-3 px-4 py-2 xl:px-5 xl:py-3">

                    {/* Logo : rond 68px (comme le template) */}
                    <Link
                        to="/"
                        onClick={demanderIntro}
                        className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full transition hover:opacity-80 xl:h-16 xl:w-16"
                        aria-label="Accueil"
                        style={{ filter: 'drop-shadow(0px -4px 23px rgba(0,0,0,0.25)) drop-shadow(0px 24px 23px rgba(0,0,0,0.25))' }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Hachemmy.png'}
                            alt="Logo Hachemmy"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </Link>

                    {/* Groupe de liens Accueil → Expérience dans un seul fond continu */}
                    <nav className="hidden items-center justify-center gap-1 rounded-full border border-white/10 bg-black/60 px-1.5 py-1.5 backdrop-blur-xl xl:flex xl:px-2">
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
                                    {t(lien.label)}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="relative flex items-center gap-3">

                        {/* Changement de langue EN/FR (mobile) */}
                        <button
                            type="button"
                            onClick={changerLangue}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-brand/50 hover:text-brand xl:hidden"
                            aria-label="Changer de langue"
                            title="EN / FR"
                        >
                            <FaGlobe className="text-brand" />
                            {langue === 'fr' ? 'EN' : 'FR'}
                        </button>

                        {/* Bouton burger mobile */}
                        <button
                            type="button"
                            onClick={() => setMenuMobileOuvert((precedent) => !precedent)}
                            className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition hover:border-brand/50 hover:text-brand xl:hidden xl:p-3.5"
                            aria-label="Menu"
                            aria-expanded={menuMobileOuvert}
                        >
                            {menuMobileOuvert ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Bouton burger desktop : CV / LANGUE apparaissent à sa gauche, en surimpression (la barre ne bouge pas) */}
                        <div className="relative hidden xl:block">
                            <AnimatePresence>
                                {menuDroiteOuvert && (
                                    <motion.div
                                        key="rangee-droite"
                                        initial={{ opacity: 0, x: 36, y: '-50%' }}
                                        animate={{ opacity: 1, x: 0, y: '-50%' }}
                                        exit={{ opacity: 0, x: 36, y: '-50%' }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        className="absolute right-full top-1/2 z-[60] mr-3 flex items-center gap-3 whitespace-nowrap"
                                    >
                                        <a
                                            href={lienCV}
                                            download="CVHachemmy.pdf"
                                            onClick={() => setMenuDroiteOuvert(false)}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
                                        >
                                            CV <FaArrowDown />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={changerLangue}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-brand/50 hover:text-brand"
                                            aria-label="Changer de langue"
                                            title="EN / FR"
                                        >
                                            <FaGlobe className="text-brand" />
                                            {langue === 'fr' ? 'EN' : 'FR'}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <button
                                type="button"
                                onClick={() => setMenuDroiteOuvert((precedent) => !precedent)}
                                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-white transition hover:border-brand/50 hover:text-brand"
                                aria-label="Menu"
                                aria-expanded={menuDroiteOuvert}
                            >
                                {menuDroiteOuvert ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
                            </button>
                        </div>

                        {/* Contact : toujours visible sur desktop, hors du menu burger */}
                        <Link
                            to="/contact"
                            className="hidden items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black xl:inline-flex"
                        >
                            {t('Contact')}
                        </Link>
                    </div>
                </div>
            </div>

            <motion.nav
                initial="closed"
                animate={menuMobileOuvert ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="w-full overflow-y-auto border-t border-white/10 bg-black/95 backdrop-blur-xl xl:hidden"
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
                            {t(lien.label)}
                        </Link>
                    ))}
                    <a
                        href={lienCV}
                        download="CVHachemmy.pdf"
                        className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
                        onClick={fermerMenu}
                    >
                        {t('Télécharger le CV')} <FaArrowDown />
                    </a>
                </div>
            </motion.nav>
        </header>
    );
}

export default BarreNavigation;