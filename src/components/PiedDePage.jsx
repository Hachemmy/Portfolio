import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { detailsContact } from '../data/donneesPortfolio';

const iconesContact = {
    Email: <FaEnvelope />,
    Téléphone: <FaPhoneAlt />,
    Adresse: <FaMapMarkerAlt />,
};

const reseaux = [
    { icone: <FaGithub />, href: 'https://github.com/Hachemmy/', etiquette: 'GitHub' },
    { icone: <FaLinkedin />, href: 'https://www.linkedin.com/in/hachemmy-jovenno-325149420/', etiquette: 'LinkedIn' },
    { icone: <FaFacebook />, href: 'https://www.facebook.com/hachemmyjovenno/', etiquette: 'Facebook' },
    { icone: <FaEnvelope />, href: 'mailto:hachejoven@gmail.com', etiquette: 'Email' },
];

function PiedDePage() {
    return (
        <footer className="border-t border-white/10 px-6 pt-14 pb-8 lg:px-8">
            <div className="mx-auto max-w-[1480px]">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

                    {/* Marque */}
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 p-1">
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/Hachemmy.jpg'}
                                    alt="Logo"
                                    className="h-full w-full rounded-lg object-cover"
                                />
                            </span>
                            <span className="text-lg font-bold tracking-[-0.02em] text-white">
                                Mr HACHEMMY
                            </span>
                        </Link>
                        <p className="mt-5 text-sm leading-6 text-white/50">
                            Profil technique, création soignée et résultat
                            fiable.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {reseaux.map((item) => (
                                <a
                                    key={item.etiquette}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.etiquette}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand/50 hover:text-brand"
                                >
                                    {item.icone}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                            Contact
                        </p>
                        <ul className="mt-6 space-y-3">
                            {detailsContact.map((detail) => (
                                <li key={detail.etiquette}>
                                    <a
                                        href={detail.href}
                                        className="group flex items-center gap-3 text-sm text-white/50 transition hover:text-brand"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:border-brand/50 group-hover:text-brand">
                                            {iconesContact[detail.etiquette]}
                                        </span>
                                        {detail.valeur}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Position */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                            Profil
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li className="text-sm text-white/50">
                                Administration Systèmes & Réseaux
                            </li>
                            <li className="text-sm text-white/50">
                                Développeur Full Stack
                            </li>
                            <li className="text-sm text-white/50">
                                Systèmes embarqués & IoT
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                    <p className="text-sm text-white/40">
                        © 2026 Hachemmy Jovenno. Professionnalisme est le
                        meilleur chemin.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default PiedDePage;