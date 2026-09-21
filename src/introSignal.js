let premiere = true;
let forcer = false;

export function etatIntro() {
    if (premiere) {
        premiere = false;
        return true;
    }
    if (forcer) {
        forcer = false;
        return true;
    }
    return false;
}

export function demanderIntro() {
    forcer = true;
    window.dispatchEvent(new Event('forcer-intro'));
}

export function ecouterIntro(callback) {
    window.addEventListener('forcer-intro', callback);
    return () => window.removeEventListener('forcer-intro', callback);
}