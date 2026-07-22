import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { liensNavigation } from '../data/donneesPortfolio';

const lienCV = process.env.PUBLIC_URL + '/assets/CVHachemmy.pdf';

function BarreNavigation() {
    const [estDefile, setEstDefile] = useState(false);
    const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

    useEffect(() => {
        const gererDefilement = () => setEstDefile(window.scrollY > 20);
        gererDefilement();
        window.addEventListener('scroll', gererDefilement, { passive: true });
        return () => window.removeEventListener('scroll', gererDefilement);
    }, []);

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

    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 }
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${estDefile ? 'bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
                }`}
            style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a
                    href="#accueil"
                    className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-[0.2em] text-slate-50 sm:gap-3 sm:text-lg sm:tracking-[0.3em]"
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 text-sky-300 sm:h-12 sm:w-12">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Hachemmy.jpg'}
                            alt="Logo"
                            className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
                        />
                    </span>
                    <span className="hidden sm:inline">HACHEMMY</span>
                </a>

                <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
                    {liensNavigation.map((lien) => (
                        <a
                            key={lien.label}
                            href={lien.href}
                            className="whitespace-nowrap text-sm text-slate-400 transition hover:text-sky-300"
                        >
                            {lien.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={lienCV}
                    download="CVHachemmy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden shrink-0 items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-500/20 lg:flex"
                >
                    Télécharger CV <FaArrowRight />
                </a>

                <button
                    type="button"
                    onClick={() => setMenuMobileOuvert((precedent) => !precedent)}
                    className="shrink-0 rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-200 lg:hidden"
                    aria-label="Menu"
                    aria-expanded={menuMobileOuvert}
                >
                    {menuMobileOuvert ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <motion.nav
                initial="closed"
                animate={menuMobileOuvert ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="w-full overflow-y-auto border-t border-slate-800/80 bg-slate-950/95 lg:hidden"
                style={{ maxHeight: 'calc(100vh - 80px)' }}
            >
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
                    {liensNavigation.map((lien) => (
                        <a
                            key={lien.label}
                            href={lien.href}
                            className="block w-full rounded-2xl px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-sky-300"
                            onClick={() => setMenuMobileOuvert(false)}
                        >
                            {lien.label}
                        </a>
                    ))}
                    <a
                        href={lienCV}
                        download="CVHachemmy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-3 text-sm font-medium text-sky-300"
                        onClick={() => setMenuMobileOuvert(false)}
                    >
                        Télécharger CV <FaArrowRight />
                    </a>
                </div>
            </motion.nav>
        </header>
    );
}

export default BarreNavigation;