import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TRACES_H = [
    { d: 'M25,15 L25,105', delai: 0 },
    { d: 'M95,15 L95,105', delai: 0.14 },
    { d: 'M25,60 L95,60', delai: 0.28 },
];

const ACHES = 'achemmy'.split('');

function AnimationDeDebut({ onTermine }) {
    const [etape, setEtape] = useState(0);
    const [termine, setTermine] = useState(false);
    const [cible, setCible] = useState(null);
    const [decalageH, setDecalageH] = useState(0);
    const [trajet, setTrajet] = useState(null);
    const logoRef = useRef(null);
    const hRef = useRef(null);
    const motRef = useRef(null);

    useEffect(() => {
        if (hRef.current) {
            setDecalageH(hRef.current.getBoundingClientRect().width + 8);
        }
    }, []);

    useEffect(() => {
        const chronos = [
            setTimeout(() => setEtape(1), 400),
            setTimeout(() => setEtape(2), 900),
            setTimeout(() => setEtape(3), 2100),
            setTimeout(() => setEtape(4), 3550),
            setTimeout(() => setEtape(5), 4150),
            setTimeout(() => setTermine(true), 4600),
        ];
        return () => chronos.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        if (termine && onTermine) {
            onTermine();
        }
    }, [termine, onTermine]);

    useEffect(() => {
        if (etape === 4 && !cible && logoRef.current) {
            const destination = document.querySelector('header a[aria-label="Accueil"]');
            const origine = logoRef.current.getBoundingClientRect();
            if (destination) {
                const arrivee = destination.getBoundingClientRect();
                setCible({
                    x: arrivee.left - origine.left,
                    y: arrivee.top - origine.top,
                });
            }
        }
    }, [etape, cible]);

    useEffect(() => {
        if (
            etape !== 3 ||
            trajet ||
            !logoRef.current ||
            !motRef.current ||
            !decalageH
        ) return;
        const logoRect = logoRef.current.getBoundingClientRect();
        const base = logoRect.left;
        const elements = motRef.current.children;
        const xs = [decalageH];
        const ts = [0];
        Array.from(elements).forEach((el, i) => {
            const r = el.getBoundingClientRect();
            xs.push(r.left + r.width / 2 - logoRect.width / 2 - base + decalageH);
            ts.push((0.04 + 0.14 * i) / 1.4);
        });
        xs.push(0);
        ts.push(0.97);
        setTrajet({ xs, ts });
    }, [etape, trajet, decalageH]);

    if (termine) {
        return null;
    }

    return (
        <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: etape >= 5 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
                {/* Logo : apparaît en premier, dessine le H en se déplaçant */}
                <motion.img
                    ref={logoRef}
                    src={process.env.PUBLIC_URL + '/assets/Hachemmy.jpg'}
                    alt="Logo Hachemmy"
                    className="h-16 w-16 rounded-full border border-white/10 object-cover sm:h-20 sm:w-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: etape >= 1 ? 1 : 0,
                        scale: 1,
                        x: cible
                            ? cible.x
                            : trajet
                                ? trajet.xs
                                : etape >= 3
                                    ? decalageH
                                    : etape >= 1
                                        ? decalageH
                                        : 0,
                        y: cible ? cible.y : 0,
                    }}
                    transition={{
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.5, ease: 'easeOut' },
                        x: trajet
                            ? {
                                duration: 1.4,
                                times: trajet.ts,
                                ease: 'easeInOut',
                            }
                            : {
                                duration: cible ? 0.8 : 0.5,
                                ease: cible ? 'easeInOut' : [0.34, 1.4, 0.64, 1],
                            },
                        y: { duration: 0.8, ease: 'easeInOut' },
                    }}
                />

                {/* H stylisé tracé par le logo */}
                <motion.svg
                    ref={hRef}
                    viewBox="0 0 120 120"
                    className="h-20 w-20 sm:h-28 sm:w-28"
                    fill="none"
                    animate={{ opacity: etape >= 4 ? 0 : 1 }}
                    transition={{ duration: 0.35 }}
                    style={{ filter: 'drop-shadow(0 0 16px rgba(174,208,252,0.55))' }}
                >
                    {TRACES_H.map((trace) => (
                        <motion.path
                            key={trace.d}
                            d={trace.d}
                            stroke="#aed0fc"
                            strokeWidth="18"
                            strokeLinecap="round"
                            pathLength={1}
                            style={{ strokeDasharray: 1 }}
                            initial={{ strokeDashoffset: 1 }}
                            animate={{ strokeDashoffset: etape >= 2 ? 0 : 1 }}
                            transition={{
                                duration: 0.5,
                                delay: etape >= 2 ? trace.delai : 0,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </motion.svg>

                {/* "achemmy" s'écrit lettre par lettre, comme à la main */}
                <motion.span
                    ref={motRef}
                    className="-ml-3 flex items-center text-[clamp(30px,6.5vw,52px)] font-black leading-none tracking-[-0.02em] sm:-ml-4"
                    style={{ fontFamily: "'Unbounded', system-ui, sans-serif" }}
                    animate={{ opacity: etape >= 3 && etape < 4 ? 1 : 0 }}
                    transition={{ duration: 0.05 }}
                >
                    {ACHES.map((lettre, index) => {
                        const enCours = etape >= 3 && etape < 4;
                        const delai = enCours ? 0.04 + index * 0.14 : 0;
                        const duree = 0.45;
                        return (
                            <span key={index} className="relative inline-block">
                                {/* silhouette de la lettre en attente */}
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 select-none"
                                    style={{ color: 'rgba(255,255,255,0.16)' }}
                                >
                                    {etape >= 2 ? lettre : ''}
                                </span>
                                {/* lettre dévoilée par un balayage gauche → droite */}
                                <motion.span
                                    className="relative z-10 inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(135deg, #aed0fc, #ffffff 48%, #aed0fc)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        WebkitMaskImage: 'linear-gradient(90deg, #000, #000 49.5%, transparent 50.5%)',
                                        WebkitMaskSize: '200% 100%',
                                    }}
                                    animate={{
                                        WebkitMaskPosition: enCours ? ['100% 0%', '0% 0%'] : '100% 0%',
                                        opacity: enCours ? [0.15, 1] : 0,
                                    }}
                                    transition={{
                                        WebkitMaskPosition: { duration: duree, delay: delai, ease: 'easeInOut' },
                                        opacity: { duration: duree * 0.5, delay: delai },
                                    }}
                                >
                                    {lettre}
                                </motion.span>
                            </span>
                        );
                    })}
                </motion.span>
            </div>
        </motion.div>
    );
}

export default AnimationDeDebut;