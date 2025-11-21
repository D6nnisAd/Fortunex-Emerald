document.addEventListener('DOMContentLoaded', () => {
    // Global WhatsApp Link Logic
    const db = window.db;
    if (db) {
        const settingsRef = db.collection('settings').doc('payment');
        settingsRef.get().then((doc) => {
            if (doc.exists) {
                const whatsappLink = doc.data().whatsappLink;
                if (whatsappLink) {
                    document.querySelectorAll('.dynamic-wa-link').forEach(link => {
                        link.href = whatsappLink;
                    });
                }
            }
        }).catch((error) => {
            console.error("Error getting settings:", error);
        });
    }
});