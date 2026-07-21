import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function PiedDePage() {
    return (
        <footer className="border-t border-slate-800/80 px-6 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">© 2026 Hachemmy Jovenno. Professionnalisme est le meilleur chemin.</p>
                <div className="flex gap-3">
                    {[
                        { icone: <FaGithub />, href: 'https://github.com/Hachemmy/' },
                        { icone: <FaLinkedin />, href: 'https://www.linkedin.com/in/hachemmy-jovenno-325149420/' },
                        { icone: <FaFacebook />, href: 'https://www.facebook.com/hachemmyjovenno/' },
                        { icone: <FaEnvelope />, href: 'mailto:hachejoven@gmail.com' },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
                        >
                            {item.icone}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default PiedDePage;
