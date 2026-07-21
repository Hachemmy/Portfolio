import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { pointsFortAccueil, personalInfo, detailsContact } from '../data/donneesPortfolio';

function Accueil() {
    const emailContact = detailsContact.find((d) => d.etiquette === 'Email')?.href || 'mailto:hachejoven@gmail.com';

    const reseauxSociaux = [
        { icone: <FaGithub />, href: 'https://github.com/Hachemmy/', etiquette: 'GitHub' },
        { icone: <FaLinkedin />, href: 'https://www.linkedin.com/in/hachemmy-jovenno-325149420/', etiquette: 'LinkedIn' },
        { icone: <FaFacebook />, href: 'https://www.facebook.com/hachemmyjovenno/', etiquette: 'Facebook' },
        { icone: <FaEnvelope />, href: emailContact, etiquette: 'Email' },
    ];

    return (
        <section id="accueil" className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_40%)]" />
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-400">Bonjour, je suis</p>
                    <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-7xl">
                        {personalInfo.nom}
                    </h1>
                    <p className="mt-5 text-xl font-medium text-sky-300">{personalInfo.titre}</p>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">{personalInfo.aPropos}</p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projets"
                            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                        >
                            Voir mes projets <FaArrowRight className="transition group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-sky-400/40 bg-slate-900/70 px-6 py-3 font-medium text-slate-100 transition hover:border-sky-300 hover:text-sky-300"
                        >
                            Me contacter
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {reseauxSociaux.map((reseau) => (
                            <a
                                key={reseau.etiquette}
                                href={reseau.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-200 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-300"
                                aria-label={reseau.etiquette}
                            >
                                {reseau.icone}
                            </a>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {pointsFortAccueil.map((pointFort) => (
                            <span key={pointFort} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-sm text-slate-300">
                                {pointFort}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    className="relative mx-auto w-full max-w-xl"
                >
                    <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-sky-500/20 blur-3xl" />
                    <div className="absolute inset-0 w-[500px] rounded-[2rem] border border-sky-400/20" />
                    <img
                        src={personalInfo.photo || process.env.PUBLIC_URL + '/assets/Hachemmy.jpg'}
                        alt={personalInfo.nom}
                        className="relative h-[500px] w-[500px] rounded-[2rem] object-cover shadow-[0_0_100px_rgba(59,130,246,0.15)]"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Accueil;
