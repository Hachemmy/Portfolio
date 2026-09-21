import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CERCLES = [
    { couleur: 'linear-gradient(180deg,#E387FF 0%,#A913FF 100%)', taille: 44, gauche: '28%', haut: '6%' },
    { couleur: 'linear-gradient(180deg,#87FFC7 0%,#13FFA9 100%)', taille: 38, gauche: '58%', haut: '14%' },
    { couleur: 'linear-gradient(180deg,#FFF987 0%,#FFBC13 100%)', taille: 48, gauche: '38%', haut: '48%' },
    { couleur: 'linear-gradient(180deg,#87E9FF 0%,#13ACFF 100%)', taille: 34, gauche: '64%', haut: '54%' },
];

function BoutonPilule({
    enfants,
    href,
    vers,
    type,
    onClick,
    variante = 'blanc',
    classeOrigine = '',
    telecharger,
    nouvelOnglet = false,
}) {
    const [survol, setSurvol] = useState(false);
    const [deplacement, setDeplacement] = useState({ x: 0, y: 0 });

    const gererSouris = (evenement) => {
        const rectangle = evenement.currentTarget.getBoundingClientRect();
        setDeplacement({
            x: (evenement.clientX - rectangle.left) / rectangle.width - 0.5,
            y: (evenement.clientY - rectangle.top) / rectangle.height - 0.5,
        });
    };

    const classesBase =
        variante === 'blanc'
            ? 'bg-white text-black border-white'
            : variante === 'brand'
                ? 'bg-brand text-black border-brand'
                : 'border-white bg-white/5 text-white hover:bg-white hover:text-black hover:border-white';

    const animerCercles = variante !== 'contour';

    const contenu = (
        <>
            {animerCercles && (
                <span className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-full overflow-hidden rounded-full">
                    {CERCLES.map((cercle, index) => (
                        <motion.span
                            key={index}
                            className="absolute"
                            style={{
                                width: cercle.taille,
                                height: cercle.taille,
                                left: cercle.gauche,
                                top: cercle.haut,
                                background: cercle.couleur,
                                borderRadius: '9999px',
                            }}
                            animate={{
                                x: survol ? deplacement.x * 140 : 0,
                                y: survol ? deplacement.y * 100 : 0,
                                opacity: survol ? 1 : 0,
                            }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        />
                    ))}
                </span>
            )}
            <span className="relative z-10 inline-flex items-center gap-2">{enfants}</span>
        </>
    );

    const classesCommune = `group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-8 py-4 text-base font-medium transition-colors duration-300 sm:px-10 sm:py-5 sm:text-lg ${classesBase} ${classeOrigine}`;

    if (vers) {
        return (
            <Link
                to={vers}
                onClick={(evenement) => {
                    if (onClick) onClick(evenement);
                }}
                onMouseEnter={() => setSurvol(true)}
                onMouseLeave={() => setSurvol(false)}
                onMouseMove={gererSouris}
                className={classesCommune}
            >
                {contenu}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                download={telecharger}
                target={nouvelOnglet ? '_blank' : undefined}
                rel={nouvelOnglet ? 'noreferrer' : undefined}
                onClick={(evenement) => {
                    if (onClick) onClick(evenement);
                }}
                onMouseEnter={() => setSurvol(true)}
                onMouseLeave={() => setSurvol(false)}
                onMouseMove={gererSouris}
                className={classesCommune}
            >
                {contenu}
            </a>
        );
    }

    return (
        <button
            type={type || 'button'}
            onClick={(evenement) => {
                if (onClick) onClick(evenement);
            }}
            onMouseEnter={() => setSurvol(true)}
            onMouseLeave={() => setSurvol(false)}
            onMouseMove={gererSouris}
            className={classesCommune}
        >
            {contenu}
        </button>
    );
}

export default BoutonPilule;