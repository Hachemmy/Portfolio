import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
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

    const classeChamp =
        'mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-brand';

    return (
        <SectionAnimee
            id="contact"
            className="relative px-6 pt-16 pb-28 lg:px-8 lg:pt-20"
        >
            <div className="halo-blu -right-40 bottom-0 h-[36rem] w-[36rem] opacity-50" />

            <div className="relative mx-auto max-w-[1480px]">

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
                        className="carte-verre-forte p-8"
                    >

                        <div className="space-y-5">

                            {detailsContact.map((detail) => (

                                <a
                                    key={detail.etiquette}
                                    href={detail.href}
                                    className="
                                        flex items-center gap-4
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                        transition
                                        hover:border-brand/50
                                        hover:text-brand
                                    "
                                >

                                    <div
                                        className="
                                            flex h-11 w-11
                                            items-center justify-center
                                            rounded-2xl
                                            bg-brand/10
                                            text-brand
                                        "
                                    >
                                        {detail.etiquette === 'Email'
                                            ? <FaEnvelope />
                                            : detail.etiquette === 'Téléphone'
                                                ? <FaPhoneAlt />
                                                : <FaMapMarkerAlt />}
                                    </div>

                                    <div>

                                        <p className="text-sm uppercase tracking-[0.24em] text-white/50">
                                            {detail.etiquette}
                                        </p>

                                        <p className="mt-1 text-base text-white">
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
                        className="carte-verre-forte p-8"
                    >

                        <div className="grid gap-5 sm:grid-cols-2">

                            <label className="text-sm text-white/70">

                                Nom

                                <input
                                    type="text"
                                    name="nom"
                                    value={donneesFormulaire.nom}
                                    onChange={gererChangement}
                                    required
                                    className={classeChamp}
                                />

                            </label>

                            <label className="text-sm text-white/70">

                                Email

                                <input
                                    type="email"
                                    name="email"
                                    value={donneesFormulaire.email}
                                    onChange={gererChangement}
                                    required
                                    className={classeChamp}
                                />

                            </label>

                        </div>

                        <label className="mt-5 block text-sm text-white/70">

                            Sujet

                            <input
                                type="text"
                                name="sujet"
                                value={donneesFormulaire.sujet}
                                onChange={gererChangement}
                                required
                                className={classeChamp}
                            />

                        </label>

                        <label className="mt-5 block text-sm text-white/70">

                            Message

                            <textarea
                                rows="6"
                                name="message"
                                value={donneesFormulaire.message}
                                onChange={gererChangement}
                                required
                                className={classeChamp}
                            />

                        </label>

                        <div className="mt-7">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
                            >
                                Envoyer <FaArrowRight />
                            </button>
                        </div>

                        {etatMessage && (
                            <p className="mt-4 text-sm text-white/60">
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