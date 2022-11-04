if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
        // reg worked
        console.log('Enregistrement réussi');
    }).catch((error) => {
        // reg failed
        console.log('Erreur : ' + error);
    })
}