
import {
    FaCode,
    FaCss3Alt,
    FaLock,
    FaMicrochip,
    FaNetworkWired,
    FaRocket,
    FaUserAstronaut,
} from 'react-icons/fa';
import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPhp,
    SiPython,
    SiMysql,
    SiGit,
    SiGithub,
    SiLinux,
    SiArduino,
    SiCisco,
} from 'react-icons/si';

export const liensNavigation = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Expérience', href: '#parcours' },
    { label: 'Contact', href: '#contact' },
];

export const pointsFortAccueil = [
    'Administrateur de systèmes et réseaux',
    'Développeur Web (FULL STACK)',
    'Curieux des systèmes embarqués et de l’IoT',
];

export const elementsAPropos = [
    {
        titre: 'Profil',
        corps: 'RAZAFINTIAMASY Hachemmy Jovenno. Nationalité Malagasy.',
        icone: FaUserAstronaut,
    },
    {
        titre: 'Études',
        corps: 'Étudiant en informatique de E.N.I. Licence 2 Administration des Systèmes et Reseaux.',
        icone: FaCode,
    },
    {
        titre: 'Objectifs',
        corps: 'Homme responsable, Travail bien fait, satisfaction du client et de l’employeur.',
        icone: FaRocket,
    },
    {
        titre: 'Disponibilité',
        corps: 'Ouvert aux stages et missions INFORMATIQUES.',
        icone: FaLock,
    },
    {
        titre: 'Passions',
        corps: 'Réseaux, systèmes embarqués, IoT, web immersif et Sport.',
        icone: FaNetworkWired,
    },
    {
        titre: 'Focus',
        corps: 'Architecture des Systèmes et Reseaux informatiques.',
        icone: FaMicrochip,
    },
];

export const competences = [
    { nom: 'HTML', icone: SiHtml5, description: 'Structure sémantique & qualité de rendu' },
    { nom: 'CSS', icone: FaCss3Alt, description: 'Design moderne et responsive' },
    { nom: 'JavaScript', icone: SiJavascript, description: 'Logique et interactivité' },
    { nom: 'React', icone: SiReact, description: 'Interfaces dynamiques et performantes' },
    { nom: 'Tailwind CSS', icone: SiTailwindcss, description: 'UI rapide, propre et scalable' },
    { nom: 'PHP', icone: SiPhp, description: 'Back-end et intégrations web' },
    { nom: 'Python', icone: SiPython, description: 'Automatisation et scripts' },
    { nom: 'MySQL', icone: SiMysql, description: 'Gestion de bases de données' },
    { nom: 'Git', icone: SiGit, description: 'Versioning propre et collaboratif' },
    { nom: 'GitHub', icone: SiGithub, description: 'Déploiement et collaboration' },
    { nom: 'Linux', icone: SiLinux, description: 'Environnement de développement' },
    { nom: 'Arduino', icone: SiArduino, description: 'Prototypage embarqué' },
    { nom: 'ESP32', icone: FaMicrochip, description: 'Connectivité IoT et firmware' },
    { nom: 'MQTT', icone: FaNetworkWired, description: 'Communication machine-to-machine' },
    { nom: 'Cisco', icone: SiCisco, description: 'Réseaux et protocoles' },
];

export const projets = [
    {
        titre: 'Messagerie Web',
        image:
            'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmessagerie.infinityfree.me%2F?w=900',
        description: 'Système de messagerie web complet avec PHP et MySQL, offrant une interface utilisateur intuitive et des fonctionnalités de communication sécurisées.',
        technologies: ['PHP', 'HTML', 'CSS', 'SQL', 'JavaScript'],
        github: 'https://github.com/Hachemmy/messagerie/',
        demo: 'https://messagerie.infinityfree.me/',
    },
    {
        titre: 'Storage Manager',
        image:
            'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fstorage-manager-sigma.vercel.app?w=900',
        description: 'Application React de monitoring de stockage simulé avec une interface moderne et responsive.',
        technologies: ['React', 'Tailwind', 'Material UI',],
        github: 'https://github.com/Hachemmy/Storage-Manager',
        demo: 'https://storage-manager-sigma.vercel.app',
    },
    {
        titre: 'Quiz-Madagascar',
        image:
            'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhachemmy.github.io%2FQuiz-Madagascar-de-Hachemmy%2F?w=900',
        description: 'Divetissement et apprentissage sur Madagascar avec un quiz interactif, responsive et animé.',
        technologies: ['HTML5', 'CSS3', 'JavaScript',],
        github: 'https://github.com/Hachemmy/Quiz-Madagascar-de-Hachemmy',
        demo: 'https://hachemmy.github.io/Quiz-Madagascar-de-Hachemmy/',
    },
    {
        titre: 'Routage IP',
        image: process.env.PUBLIC_URL + '/images/RoutageIP.png',
        description:
            'Simulation de routage IP avec protocoles RIP et OSPF, démontrant la configuration et la gestion des réseaux.',
        technologies: ['RIP', 'OSPF', 'GNS3', 'Wireshark'],
        github: 'https://github.com/Hachemmy/RoutageIP/',
        demo: '/assets/RoutageIP.gns3',
        telecharger: true,
    },
    {
        titre: 'Portfolio Personnel',
        image: 'https://image.thum.io/get/width/900/https://portfolio-hachemmy.vercel.app',
        description: 'Site vitrine personnel présentant mon profil, mes compétences et mes projets, conçu avec une interface moderne et responsive.',
        technologies: ['React', 'JavaScript', 'CSS', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/Hachemmy/portfolio',
        demo: 'https://portfolio-hachemmy.vercel.app',
    },

];

export const parcours = [
    {
        periode: '2024 — Aujourd’hui',
        titre: 'Développement Web & Interfaces',
        entreprise: 'Projets personnels',
        description: 'Conception d’interfaces React haut de gamme, intégration responsive et animations soignées.',
    },
    {
        periode: '2023 — 2024',
        titre: 'Systèmes embarqués & IoT',
        entreprise: 'Projets techniques',
        description: 'Exploration des protocoles MQTT, ESP32, Arduino et communication entre objets connectés.',
    },
    {
        periode: '2022 — 2023',
        titre: 'Fondamentaux informatiques',
        entreprise: 'Formation',
        description: 'Approfondissement en réseau, cybersécurité, bases de données et développement applicatif.',
    },
];

export const detailsContact = [
    { etiquette: 'Email', valeur: 'hachejoven@gmail.com', href: 'mailto:hachejoven@gmail.com' },
    { etiquette: 'Téléphone', valeur: '+261386465898', href: 'tel:+261386465898' },
    { etiquette: 'Adresse', valeur: '301 Fianarantsoa, MG', href: 'https://maps.google.com' },
];

export const personalInfo = {
    nom: 'Hachemmy J. RAZAFINTIAMASY',
    titre: 'Administrateur Systèmes & Réseaux | Développeur Full Stack',
    photo:
        'https://modele-cv.com/app/uploads/doc-builder-v2/photos/Hachemmy_1784555302_0fBfBbje.JPG',
    aPropos:
        "Administrateur Système et Réseau issu d'un parcours informatique orienté projets. Compétences clés en réseaux TCP/IP (VLAN, routage RIP/OSPF) et en scripting/développement web (Shell, JavaScript, PHP). Motivé par les environnements réseau et l'IoT.",
};

export const competencesDetaillees = {
    tresBien: ['HTML5', 'CSS3', 'C'],
    bien: ['JavaScript', 'PHP', 'SQL', 'C++', 'Shell'],
    notion: ['Python', 'C#', 'Java'],
    reseau: ['TCP/IP', 'VLAN', 'Routage (RIP/OSPF)'],
};

export const langues = ['Malagasy', 'Français', 'Anglais', 'Deutsch'];

export const centresInterets = ['Basketball', 'Football', 'Bricolage & circuits électriques', 'Voyage & Photographie', 'Mécanique auto'];

export const experiencesProfessionnelles = [
    {
        date: 'mars 2025',
        poste: 'Développeur Frontend',
        structure: 'DevHunt 4.0 (E.N.I.)',
        details: '3ème place — participation au challenge frontend.',
    },
    {
        date: 'Mai 2025',
        poste: 'JavaScript (JS)',
        structure: "École Nationale d'Informatique (E.N.I.)",
        details:
            'Dynamisme Page Web',
    },
    {
        date: 'juin 2025',
        poste: 'Développeur Front-end',
        structure: 'DevHunt 5.0 (E.N.I.)',
        details: 'Contribution aux interfaces',
    },
    {
        date: 'Novembre 2025',
        poste: 'Système embarqué (Arduino)',
        structure: "École Nationale d'Informatique (E.N.I.)",
        details:
            'Système de freinage automatique',
    },
    {
        date: 'Avril 2026',
        poste: 'PHP/MySQL',
        structure: "École Nationale d'Informatique (E.N.I.)",
        details:
            'Système de messagerie ',
    },
    {
        date: 'Mai 2026',
        poste: 'RIP/OSPF',
        structure: "École Nationale d'Informatique (E.N.I.)",
        details:
            'Routage réseau ',
    },
    {
        date: 'Juillet 2026',
        poste: 'Projets React.js',
        structure: "École Nationale d'Informatique (E.N.I.)",
        details:
            ' Monitoring de stockage ',
    },


];

export const formations = [
    { periode: 'août 2023', titre: 'Baccalauréat', etablissement: 'Lycée Montfort Saint Gabriel (Mahajanga)', mention: 'Mention Bien' },
    {
        periode: 'décembre 2023 — août 2024',
        titre: "Licence Professionnelle I en Informatique",
        etablissement: 'ESSGAM (Mahajanga)',
    },
    { periode: 'novembre 2024', titre: "DELF (Diplôme d'études en langue française)", etablissement: 'Alliance Française (Mahajanga)', niveau: 'Niveau B2' },
    {
        periode: 'janvier 2025 — novembre 2025',
        titre: 'Licence Professionnelle I',
        etablissement: "École Nationale d'Informatique (E.N.I.) (Fianarantsoa)",
    },
    { periode: 'juillet 2025 — août 2025', titre: 'Réseau Pro', etablissement: 'Spray Info (Fianarantsoa)' },
    { periode: 'janvier 2026 — En cours', titre: 'Licence Professionnelle II', etablissement: "École Nationale d'Informatique (E.N.I.) (Fianarantsoa)" },
    {
        periode: 'avril 2026 — mai 2026',
        titre: 'Attestation de Fin de Formation — Orange Digital Center',
        etablissement: 'Orange Digital Center (Fianarantsoa)',
        details: 'Création de solutions IoT utiles et connectées, sécurité des projets.',
    },
];

