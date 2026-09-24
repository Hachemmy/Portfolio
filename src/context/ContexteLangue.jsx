import { createContext, useContext, useEffect, useState } from 'react';
import { traductionsAnglais } from '../traductions';

const LeContexteLangue = createContext(null);

const CLE_STOCKAGE = 'langue-hachemmy';

export function FournisseurLangue({ children }) {
    const [langue, setLangue] = useState(() => {
        try {
            return localStorage.getItem(CLE_STOCKAGE) || 'fr';
        } catch {
            return 'fr';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(CLE_STOCKAGE, langue);
        } catch {
            // stockage indisponible : on ignore
        }
    }, [langue]);

    const changerLangue = () => {
        setLangue((precedente) => (precedente === 'fr' ? 'en' : 'fr'));
    };

    const t = (texteFrancais) => {
        if (langue === 'en' && traductionsAnglais[texteFrancais]) {
            return traductionsAnglais[texteFrancais];
        }
        return texteFrancais;
    };

    return (
        <LeContexteLangue.Provider value={{ langue, changerLangue, t }}>
            {children}
        </LeContexteLangue.Provider>
    );
}

export function useLangue() {
    const contexte = useContext(LeContexteLangue);
    if (!contexte) {
        throw new Error('useLangue doit être utilisé à l’intérieur de FournisseurLangue.');
    }
    return contexte;
}