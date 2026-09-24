import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, animate, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaTimes } from 'react-icons/fa';
import {
    experiencesProfessionnelles,
    formations,
    langues,
} from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import { useLangue } from '../context/ContexteLangue';

const languesAvecDrapeaux = [
    { nom: 'Malagasy', drapeau: '🇲🇬' },
    { nom: 'Français', drapeau: '🇫🇷' },
    { nom: 'English', drapeau: '🇬🇧' },
    { nom: 'Deutsch', drapeau: '🇩🇪' },
];

function Compteur({ fin }) {
    const reference = useRef(null);
    const dansVue = useInView(reference, { once: true, amount: 0.5 });
    const [valeur, setValeur] = useState(0);

    useEffect(() => {
        if (!dansVue) return;
        const controles = animate(0, fin, {
            duration: 1.8,
            ease: 'easeOut',
            onUpdate: (miseAJour) => setValeur(Math.round(miseAJour)),
        });
        return () => controles.stop();
    }, [dansVue, fin]);

    return <span ref={reference}>{valeur}</span>;
}

function CarteLangues({ index }) {
    const [retourne, setRetourne] = useState(false);
    const { t } = useLangue();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            className="block h-full w-full"
        >
            <button
                type="button"
                aria-label={t('Voir les langues parlées')}
                onClick={() => setRetourne((precedent) => !precedent)}
                className="block h-full w-full text-left"
                style={{ perspective: '1200px', WebkitPerspective: '1200px' }}
            >
                <span
                    className={`flip-contenu relative block h-full w-full ${retourne ? 'flip-retourne' : ''}`}
                >
                {/* Face avant : compteur */}
                <span
                    className="flip-face carte-verre-forte absolute inset-0 flex h-full w-full flex-col p-8 lg:p-10"
                >
                    <span className="text-5xl font-bold tracking-[-0.04em] text-white lg:text-[56px]">
                        <Compteur fin={langues.length} />
                    </span>
                    <span className="mt-3 text-lg text-white/60">
                        {t('Langues parlées')}
                    </span>
                </span>

                {/* Face arrière : langues avec drapeaux */}
                <span
                    className="flip-face flip-face-arriere carte-verre-forte absolute inset-0 flex w-full flex-col justify-center gap-3 p-5 lg:p-8"
                >
                    <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                        {t('Langues parlées')}
                    </span>
                    <span className="grid grid-cols-2 gap-2">
                        {languesAvecDrapeaux.map((langue) => (
                            <span
                                key={langue.nom}
                                className="flex flex-col items-center justify-center gap-1 rounded-[14px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center"
                            >
                                <span className="text-xl leading-none">{langue.drapeau}</span>
                                <span className="text-xs font-semibold text-white">
                                    {langue.nom}
                                </span>
                            </span>
                        ))}
                    </span>
                </span>
                </span>
            </button>
        </motion.div>
    );
}

function CarteDetail({ index, fin, label, type, surOuverture, vers }) {
    const { t } = useLangue();
    const contenu = (
        <motion.button
            type="button"
            onClick={vers ? undefined : () => surOuverture(type)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="carte-verre-forte block h-full w-full p-8 text-left lg:p-10"
            aria-label={`${t('Détail')} : ${label}`}
        >
            <p className="text-5xl font-bold tracking-[-0.04em] text-white lg:text-[56px]">
                <Compteur fin={fin} />
            </p>
            <p className="mt-3 text-lg text-white/60">
                {label}
            </p>
        </motion.button>
    );

    if (vers) {
        return (
            <Link to={vers} className="block h-full w-full">
                {contenu}
            </Link>
        );
    }
    return contenu;
}

function FenetreDetails({ type, surFermer }) {
    const { t } = useLangue();
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const gestionEchap = (e) => {
            if (e.key === 'Escape') surFermer();
        };
        window.addEventListener('keydown', gestionEchap);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', gestionEchap);
        };
    }, [surFermer]);

    const estFormation = type === 'formation';
    const donnees = estFormation ? formations : experiencesProfessionnelles;
    const etiquette = estFormation
        ? t('Formations & certifications')
        : t('Expériences & challenges');

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm sm:py-16"
            onClick={surFermer}
        >
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl"
            >
                <div className="carte-verre-forte overflow-hidden rounded-[40px]">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-7 py-5 sm:px-10">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                                {t('Détail')}
                            </p>
                            <h3 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                                {etiquette}
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={surFermer}
                            aria-label={t('Fermer')}
                            className="shrink-0 rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-brand/50 hover:text-brand"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="space-y-4 px-5 py-6 sm:px-10 sm:py-8">
                        {donnees.length === 0 && (
                            <p className="text-white/60">{t('Aucune donnée.')}</p>
                        )}

                        {!estFormation &&
                            donnees.map((element, index) => (
                                <motion.div
                                    key={element.poste || index}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                                >
                                    <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                                        {element.date}
                                    </span>
                                    <h4 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white">
                                        {t(element.poste)}
                                    </h4>
                                    {element.structure && (
                                        <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/60">
                                            <FaBuilding className="shrink-0 text-brand" />
                                            {element.structure}
                                        </p>
                                    )}
                                    {element.details && (
                                        <p className="mt-3 text-sm leading-6 text-white/70">
                                            {t(element.details)}
                                        </p>
                                    )}
                                </motion.div>
                            ))}

                        {estFormation &&
                            donnees.map((element, index) => (
                                <motion.div
                                    key={element.titre || index}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                                >
                                    <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                                        {element.periode}
                                    </span>
                                    <h4 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white">
                                        {t(element.titre)}
                                    </h4>
                                    <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/60">
                                        <FaBuilding className="shrink-0 text-brand" />
                                        {element.etablissement}
                                    </p>
                                    {(element.mention || element.niveau) && (
                                        <p className="mt-1.5 text-sm font-semibold text-brand">
                                            {t(element.mention || element.niveau)}
                                        </p>
                                    )}
                                    {element.details && (
                                        <p className="mt-3 text-sm leading-6 text-white/70">
                                            {t(element.details)}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

function Statistiques() {
    const [fenetreOuverte, setFenetreOuverte] = useState(null);
    const { t } = useLangue();

    const carteEntiere = (index, fin, label, type, vers) =>
        type === 'langues' ? (
            <CarteLangues index={index} />
        ) : (
            <CarteDetail
                index={index}
                fin={fin}
                label={label}
                type={type}
                vers={vers}
                surOuverture={setFenetreOuverte}
            />
        );

    return (
        <SectionAnimee
            id="statistiques"
            className="relative px-6 pt-8 pb-36 lg:px-8"
        >
            <div className="halo-blu -left-56 -top-20 h-[34rem] w-[34rem] opacity-45" />

            <div className="relative mx-auto max-w-[1480px]">

                <TitreSection
                    etiquette={t('Chiffres')}
                    titre={t('Des résultats concrets et mesurables')}
                    description={t('Des projets livrés, des expériences cumulées et une curiosité qui ne s’arrête jamais.')}
                />

                <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
                    <CarteDetail
                        index={0}
                        fin={19}
                        label={t('Projets réalisés')}
                        type="projets"
                        vers="/projets"
                        surOuverture={setFenetreOuverte}
                    />

                    {carteEntiere(1, experiencesProfessionnelles.length, t('Expériences & challenges'), 'experience')}
                    {carteEntiere(2, formations.length, t('Formations & certifications'), 'formation')}
                    {carteEntiere(3, langues.length, t('Langues parlées'), 'langues')}
                </div>

            </div>

            {fenetreOuverte && (
                <FenetreDetails
                    type={fenetreOuverte}
                    surFermer={() => setFenetreOuverte(null)}
                />
            )}
        </SectionAnimee>
    );
}

export default Statistiques;