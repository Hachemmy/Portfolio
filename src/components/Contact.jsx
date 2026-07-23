import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { detailsContact } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import emailjs from '@emailjs/browser';

function Contact() {
    const [donneesFormulaire, setDonneesFormulaire] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: '',
    });

    const [etatMessage, setEtatMessage] = useState('');

    const gererChangement = (evenement) => {
        setDonneesFormulaire((precedent) => ({
            ...precedent,
            [evenement.target.name]: evenement.target.value,
        }));
    };

    const gererSoumission = (evenement) => {
        evenement.preventDefault();

        if (
            !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
            !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
            !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ) {
            setEtatMessage(
                "Le formulaire est prêt pour EmailJS. Ajoutez vos identifiants dans les variables d'environnement."
            );
            return;
        }

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                evenement.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setEtatMessage('Message envoyé avec succès.');
                setDonneesFormulaire({
                    nom: '',
                    email: '',
                    sujet: '',
                    message: '',
                });
            })
            .catch(() => {
                setEtatMessage(
                    "Une erreur est survenue. Veuillez réessayer plus tard."
                );
            });
    };

    return (
        <SectionAnimee
            id="contact"
            className="px-6 pt-16 pb-24 lg:px-8 lg:pt-20"
        >
            <div className="mx-auto max-w-7xl">

                <TitreSection
                    etiquette="Contact"
                    titre="Prêt à créer quelque chose d’exceptionnel ?"
                    description="Je suis ouvert aux opportunités professionnelles, aux collaborations et aux projets ambitieux."
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Coordonnées */}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="
                            rounded-[2rem]
                            border border-slate-200
                            bg-white
                            p-8
                            shadow-[0_0_50px_rgba(59,130,246,0.08)]

                            dark:border-slate-800/80
                            dark:bg-slate-900/70
                        "
                    >

                        <div className="space-y-5">

                            {detailsContact.map((detail) => (

                                <a
                                    key={detail.etiquette}
                                    href={detail.href}
                                    className="
                                        flex items-center gap-4
                                        rounded-2xl
                                        border border-slate-200
                                        bg-slate-50
                                        p-4
                                        transition
                                        hover:border-sky-400
                                        hover:text-sky-500

                                        dark:border-slate-800/80
                                        dark:bg-slate-950/60
                                        dark:hover:text-sky-300
                                    "
                                >

                                    <div
                                        className="
                                            flex h-11 w-11
                                            items-center justify-center
                                            rounded-2xl
                                            bg-sky-500/10
                                            text-sky-500

                                            dark:text-sky-300
                                        "
                                    >
                                        {detail.etiquette === 'Email'
                                            ? <FaEnvelope />
                                            : detail.etiquette === 'Téléphone'
                                                ? <FaPhoneAlt />
                                                : <FaMapMarkerAlt />}
                                    </div>

                                    <div>

                                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                                            {detail.etiquette}
                                        </p>

                                        <p className="mt-1 text-base text-slate-700 dark:text-slate-200">
                                            {detail.valeur}
                                        </p>

                                    </div>

                                </a>

                            ))}

                        </div>

                    </motion.div>

                    {/* Formulaire */}

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        onSubmit={gererSoumission}
                        className="
                            rounded-[2rem]
                            border border-slate-200
                            bg-white
                            p-8
                            shadow-[0_0_50px_rgba(59,130,246,0.08)]

                            dark:border-slate-800/80
                            dark:bg-slate-900/70
                        "
                    >

                        <div className="grid gap-5 sm:grid-cols-2">

                            <label className="text-sm text-slate-700 dark:text-slate-300">

                                Nom

                                <input
                                    type="text"
                                    name="nom"
                                    value={donneesFormulaire.nom}
                                    onChange={gererChangement}
                                    required
                                    className="
                                        mt-2
                                        w-full
                                        rounded-2xl
                                        border border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        text-slate-900
                                        outline-none
                                        transition
                                        focus:border-sky-400

                                        dark:border-slate-800
                                        dark:bg-slate-950/80
                                        dark:text-slate-200
                                    "
                                />

                            </label>

                            <label className="text-sm text-slate-700 dark:text-slate-300">

                                Email

                                <input
                                    type="email"
                                    name="email"
                                    value={donneesFormulaire.email}
                                    onChange={gererChangement}
                                    required
                                    className="
                                        mt-2
                                        w-full
                                        rounded-2xl
                                        border border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        text-slate-900
                                        outline-none
                                        transition
                                        focus:border-sky-400

                                        dark:border-slate-800
                                        dark:bg-slate-950/80
                                        dark:text-slate-200
                                    "
                                />

                            </label>

                        </div>

                        <label className="mt-5 block text-sm text-slate-700 dark:text-slate-300">

                            Sujet

                            <input
                                type="text"
                                name="sujet"
                                value={donneesFormulaire.sujet}
                                onChange={gererChangement}
                                required
                                className="
                                    mt-2
                                    w-full
                                    rounded-2xl
                                    border border-slate-300
                                    bg-white
                                    px-4
                                    py-3
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-sky-400

                                    dark:border-slate-800
                                    dark:bg-slate-950/80
                                    dark:text-slate-200
                                "
                            />

                        </label>

                        <label className="mt-5 block text-sm text-slate-700 dark:text-slate-300">

                            Message

                            <textarea
                                rows="6"
                                name="message"
                                value={donneesFormulaire.message}
                                onChange={gererChangement}
                                required
                                className="
                                    mt-2
                                    w-full
                                    rounded-2xl
                                    border border-slate-300
                                    bg-white
                                    px-4
                                    py-3
                                    text-slate-900
                                    outline-none
                                    transition
                                    focus:border-sky-400

                                    dark:border-slate-800
                                    dark:bg-slate-950/80
                                    dark:text-slate-200
                                "
                            />

                        </label>

                        <button
                            type="submit"
                            className="
                                mt-7
                                rounded-full
                                bg-sky-500
                                px-6
                                py-3
                                font-medium
                                text-white
                                transition
                                hover:scale-[1.02]
                                hover:bg-sky-600
                            "
                        >
                            Envoyer le message
                        </button>

                        {etatMessage && (
                            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                                {etatMessage}
                            </p>
                        )}

                    </motion.form>

                </div>

            </div>
        </SectionAnimee>
    );
}

export default Contact;