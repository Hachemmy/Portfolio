
import { motion } from 'framer-motion';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import { competencesDetaillees } from '../data/donneesPortfolio';
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiPhp,
    SiCplusplus,
    SiPython,
    SiSharp,
    SiMysql,
    SiReact,
    SiCisco,
    SiWireshark,
    SiVirtualbox,
    SiGit,
    SiGithub,
} from 'react-icons/si';
import { FaCode, FaTerminal, FaJava, FaNetworkWired, FaSitemap, FaRoute, FaMicrochip } from 'react-icons/fa';

// --- Association nom exact -> logo ---
const ICONES = {
    HTML5: SiHtml5,
    CSS3: SiCss,
    C: FaCode,
    JavaScript: SiJavascript,
    PHP: SiPhp,
    SQL: SiMysql,
    'C++': SiCplusplus,
    Shell: FaTerminal,
    Python: SiPython,
    'C#': SiSharp,
    Java: FaJava,
    'React.js': SiReact,
    'TCP/IP': FaNetworkWired,
    VLAN: FaSitemap,
    'Routage (RIP/OSPF)': FaRoute,
    GNS3: FaNetworkWired,
    'Cisco Packet Tracer': SiCisco,
    Wireshark: SiWireshark,
    VirtualBox: SiVirtualbox,
    Tinkercard: FaMicrochip,
    Git: SiGit,
    GitHub: SiGithub,
};

function getIcone(nom) {
    return ICONES[nom] || FaCode;
}

// --- Intensité de l'accent "sky" (couleur de base du site) selon le niveau ---
// On garde une seule teinte (sky) pour rester fidèle à la charte du site,
// et on fait varier l'opacité/la luminosité pour distinguer les niveaux.
const INTENSITE_NIVEAU = {
    4: {
        bordureCarte: 'border-sky-400/40 dark:border-sky-400/40',
        fondCarte: 'bg-sky-500/[0.05] dark:bg-sky-500/[0.07]',
        badgeTexte: 'text-sky-600 dark:text-sky-200',
        badgeFond: 'bg-sky-500/10 dark:bg-sky-500/20',
        badgeBordure: 'border-sky-400/40',
        icone: 'text-sky-500 dark:text-sky-200',
        point: 'bg-sky-300',
    },

    3: {
        bordureCarte: 'border-sky-400/25',
        fondCarte: 'bg-sky-500/[0.04] dark:bg-sky-500/[0.05]',
        badgeTexte: 'text-sky-600 dark:text-sky-300',
        badgeFond: 'bg-sky-500/10 dark:bg-sky-500/15',
        badgeBordure: 'border-sky-400/30',
        icone: 'text-sky-500 dark:text-sky-300',
        point: 'bg-sky-400',
    },

    2: {
        bordureCarte: 'border-slate-200 dark:border-slate-700/70',
        fondCarte: 'bg-white dark:bg-slate-900/60',
        badgeTexte: 'text-sky-600 dark:text-sky-400',
        badgeFond: 'bg-sky-500/10',
        badgeBordure: 'border-sky-400/20',
        icone: 'text-sky-500 dark:text-sky-400',
        point: 'bg-sky-500',
    },

    reseau: {
        bordureCarte: 'border-slate-200 dark:border-slate-800/80',
        fondCarte: 'bg-white dark:bg-slate-900/70',
        badgeTexte: 'text-sky-600 dark:text-sky-300',
        badgeFond: 'bg-sky-500/10',
        badgeBordure: 'border-sky-400/20',
        icone: 'text-sky-500 dark:text-sky-300',
        point: 'bg-sky-400',
    },

    outils: {
        bordureCarte: 'border-slate-200 dark:border-slate-800/80',
        fondCarte: 'bg-white dark:bg-slate-900/70',
        badgeTexte: 'text-sky-600 dark:text-sky-300',
        badgeFond: 'bg-sky-500/10',
        badgeBordure: 'border-sky-400/20',
        icone: 'text-sky-500 dark:text-sky-300',
        point: 'bg-sky-400',
    },
};

const sectionsCompetences = (() => {
    if (!competencesDetaillees) {
        return [
            {
                titre: 'Langages de programmation',
                elements: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'C', 'C++', 'Java', 'Python', 'React.js'],
                niveau: null,
                cle: 'reseau',
            },
            { titre: 'Base de données', elements: ['MySQL'], niveau: null, cle: 'reseau' },
            {
                titre: 'Systèmes d’exploitation',
                elements: ['Windows : Serveur et Desktop', 'Linux : Ubuntu Server, Desktop et Distribution Debian'],
                niveau: null,
                cle: 'reseau',
            },
            {
                titre: 'Outils',
                elements: ['Tinkercad', 'Wireshark', 'GNS3', 'VirtualBox', 'Cisco Packet Tracer', 'Arduino', 'Git', 'GitHub'],
                niveau: null,
                cle: 'outils',
            },
        ];
    }

    return [
        { titre: 'Très bien', elements: competencesDetaillees.tresBien, niveau: 4, cle: 4 },
        { titre: 'Bien', elements: [...competencesDetaillees.bien, 'React.js'], niveau: 3, cle: 3 },
        { titre: 'Notions', elements: competencesDetaillees.notion, niveau: 2, cle: 2 },
        { titre: 'Réseau', elements: competencesDetaillees.reseau, niveau: null, cle: 'reseau' },
        {
            titre: 'Outils',
            elements: ['GNS3', 'Cisco Packet Tracer', 'Wireshark', 'VirtualBox', 'Tinkercad', 'Git', 'GitHub'],
            niveau: null,
            cle: 'outils',
        },
    ];
})();

// --- Petits points indiquant le niveau ---
function IndicateurNiveau({ niveau, style }) {
    if (!niveau) return null;
    return (
        <span className="ml-2 inline-flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
                <span
                    key={i}
                    className={`h-[6px] w-[6px] rounded-full ${i < niveau ? style.point : 'bg-slate-300 dark:bg-slate-600/50'
                        }`}
                />
            ))}
        </span>
    );
}

function Competences() {
    return (
        <SectionAnimee id="competences" className="flex min-h-screen items-center px-6 pt-16 pb-24 lg:px-8 lg:pt-20">
            <div className="mx-auto w-full max-w-7xl">
                <TitreSection
                    etiquette="Compétences"
                    titre="Un socle technique solide, moderne et polyvalent"
                    description="Je développe avec des technologies récentes, tout en gardant une approche claire, durable et orientée performance."
                />

                <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {sectionsCompetences.map((section, index) => {
                        const style = INTENSITE_NIVEAU[section.cle];
                        return (
                            <motion.article
                                key={section.titre}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                                whileHover={{ y: -6, scale: 1.01, borderColor: '#60A5FA' }}
                                className={`rounded-[2rem] border p-9 shadow-[0_0_40px_rgba(59,130,246,0.05)] lg:p-10 ${style.bordureCarte} ${style.fondCarte} ${section.titre === 'Outils' ? 'lg:col-span-2' : ''}`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 lg:text-3xl">{section.titre}</h3>
                                    {section.niveau && (
                                        <span
                                            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${style.badgeTexte} ${style.badgeFond} ${style.badgeBordure}`}
                                        >
                                            Niveau {section.niveau}/4
                                        </span>
                                    )}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                                    {section.elements.map((element) => {
                                        const Icon = getIcone(element);
                                        return (
                                            <span
                                                key={element}
                                                className="inline-flex items-center gap-2.5 text-base text-slate-700 dark:text-slate-200"
                                            >
                                                <Icon className={`h-5 w-5 shrink-0 ${style.icone}`} />
                                                {element}
                                                <IndicateurNiveau niveau={section.niveau} style={style} />
                                            </span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </SectionAnimee>
    );
}

export default Competences;

