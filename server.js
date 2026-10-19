const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Catalog 100 produits avec Fiche Technique Enrichie (OS, Mémoire/Stockage, Couleurs)
const products = [
    // Consoles
    {
        id: 1,
        title: "PlayStation 5 Slim Digital",
        category: "Consoles",
        price: 449.99,
        os: "PS5 OS v2.0",
        storage: "1 TB SSD",
        ram: "16 GB GDDR6",
        colors: [{ name: "Blanc pur", hex: "#ffffff" }, { name: "Noir mat", hex: "#1c1c1e" }],
        description: "Console PS5 édition numérique ultra-compacte avec SSD ultra rapide 1 To et manette DualSense.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "PlayStation 5 Standard avec Lecteur",
        category: "Consoles",
        price: 549.99,
        os: "PS5 OS v2.0",
        storage: "1 TB SSD",
        ram: "16 GB GDDR6",
        colors: [{ name: "Blanc pur", hex: "#ffffff" }],
        description: "Console PlayStation 5 originale avec lecteur Blu-ray 4K Ultra HD et retour haptique DualSense.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Xbox Series X 1TB Black",
        category: "Consoles",
        price: 499.99,
        os: "Xbox OS",
        storage: "1 TB NVMe SSD",
        ram: "16 GB GDDR6",
        colors: [{ name: "Noir mat", hex: "#111111" }],
        description: "La console Xbox la plus rapide et la plus puissante avec rendu 4K vrai et 120 FPS.",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Nintendo Switch OLED - Blanc",
        category: "Consoles",
        price: 349.99,
        os: "Nintendo Horizon",
        storage: "64 GB Flash",
        ram: "4 GB LPDDR4",
        colors: [{ name: "Blanc OLED", hex: "#f8f9fa" }, { name: "Rouge / Bleu", hex: "#ff3b30" }],
        description: "Écran OLED intense de 7 pouces, large support ajustable et station d'accueil avec port Ethernet.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },

    // Téléphones
    {
        id: 13,
        title: "iPhone 15 Pro Max 256GB - Titane Noir",
        category: "Téléphones",
        price: 1479.99,
        os: "iOS 17",
        storage: "256 GB",
        ram: "8 GB RAM",
        colors: [{ name: "Titane Noir", hex: "#2b2b2c" }, { name: "Titane Naturel", hex: "#8e8e93" }, { name: "Titane Bleu", hex: "#2c3e50" }],
        description: "Design en titane de qualité spatiale, puce A17 Pro, bouton Action personnalisable et zoom optique 5x.",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop"
    },
    {
        id: 14,
        title: "iPhone 15 128GB - Rose Poudré",
        category: "Téléphones",
        price: 969.99,
        os: "iOS 17",
        storage: "128 GB",
        ram: "6 GB RAM",
        colors: [{ name: "Rose", hex: "#f8d7da" }, { name: "Noir", hex: "#1c1c1e" }, { name: "Vert", hex: "#d1e7dd" }],
        description: "Dynamic Island, appareil photo principal 48 Mpx avec téléobjectif 2x et verre teinté dans la masse.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop"
    },
    {
        id: 15,
        title: "Samsung Galaxy S24 Ultra 512GB",
        category: "Téléphones",
        price: 1469.99,
        os: "Android 14 (One UI 6.1)",
        storage: "512 GB",
        ram: "12 GB RAM",
        colors: [{ name: "Gris Titane", hex: "#7d7d7d" }, { name: "Noir Titane", hex: "#222222" }, { name: "Violet Titane", hex: "#5b4b8a" }],
        description: "Boîtier en titane, stylet S Pen intégré, capteur 200 Mpx et fonctionnalités Galaxy AI avancées.",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop"
    },
    {
        id: 16,
        title: "Google Pixel 8 Pro 256GB",
        category: "Téléphones",
        price: 1099.99,
        os: "Android 14 Stock",
        storage: "256 GB",
        ram: "12 GB RAM",
        colors: [{ name: "Bleu Azur", hex: "#3b82f6" }, { name: "Noir Volcanique", hex: "#18181b" }],
        description: "Processeur Google Tensor G3, écran Super Actua ultra-lumineux et fonctionnalités photo révolutionnaires par IA.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
    },

    // Mac & PC
    {
        id: 26,
        title: "MacBook Pro 16'' M3 Max 36GB - Noir Spatial",
        category: "Mac & PC",
        price: 3999.99,
        os: "macOS Sonoma",
        storage: "1 TB SSD",
        ram: "36 GB Unifiée",
        colors: [{ name: "Noir Spatial", hex: "#212529" }, { name: "Argent", hex: "#e9ecef" }],
        description: "La puissance ultime avec puce Apple M3 Max, écran Liquid Retina XDR et jusqu'à 22h d'autonomie.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop"
    },
    {
        id: 27,
        title: "MacBook Air 15'' M3 16GB - Minuit",
        category: "Mac & PC",
        price: 1599.99,
        os: "macOS Sonoma",
        storage: "512 GB SSD",
        ram: "16 GB Unifiée",
        colors: [{ name: "Minuit", hex: "#1a2530" }, { name: "Lumière Stellaire", hex: "#f4eedd" }],
        description: "Design extraordinairement fin et léger de 15 pouces avec la vitesse fulgurante de la puce M3.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    },

    // Audio
    {
        id: 51,
        title: "Apple AirPods Max - Gris Sidéral",
        category: "Audio",
        price: 579.99,
        os: "Puce Apple H1",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Gris Sidéral", hex: "#3a3b3c" }, { name: "Argent", hex: "#e2e2e2" }, { name: "Bleu Ciel", hex: "#a4c2d6" }],
        description: "Casque circum-auriculaire conçu par Apple avec réduction active du bruit de niveau pro et Audio Spatial.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop"
    },
    {
        id: 52,
        title: "Sony WH-1000XM5 Noir",
        category: "Audio",
        price: 399.99,
        os: "Processeur V1",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Premium", hex: "#111111" }, { name: "Argent Poudré", hex: "#e5e5e5" }],
        description: "La référence du marché en réduction de bruit active avec 8 microphones et processeur V1 intégré.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop"
    }
];

// Complétion automatique pour les 100 produits
for (let i = 5; i <= 100; i++) {
    if (!products.find(p => p.id === i)) {
        products.push({
            id: i,
            title: `Produit High-Tech Pro #${i}`,
            category: i % 2 === 0 ? "Accessoires" : "Jeux",
            price: (29.99 + i * 5).toFixed(2),
            os: i % 2 === 0 ? "Propriétaire" : "Multiplateforme",
            storage: `${128 * (i % 4 + 1)} GB`,
            ram: `${4 * (i % 4 + 1)} GB RAM`,
            colors: [{ name: "Standard", hex: "#333333" }, { name: "Edition Silver", hex: "#cccccc" }],
            description: "Article multimédia haut de gamme vérifié avec toutes les garanties constructeurs.",
            image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop"
        });
    }
}

app.get('/api/products', (req, res) => res.json(products));

app.post('/api/chatbot', (req, res) => {
    const { message } = req.body;
    const msgLower = (message || '').toLowerCase();
    let reply = "Je suis votre assistant TechStore. Comment puis-je vous aider aujourd'hui ?";

    if (msgLower.includes('ios') || msgLower.includes('android') || msgLower.includes('os')) {
        reply = "Nos smartphones disposent des dernières versions logicielles officielles (iOS 17 pour Apple, Android 14 pour Samsung/Google).";
    } else if (msgLower.includes('memoire') || msgLower.includes('stockage') || msgLower.includes('go') || msgLower.includes('tb')) {
        reply = "Vous trouverez la mémoire exacte (128 Go, 256 Go, 512 Go ou 1 To SSD) directement affichée sur la fiche de chaque produit.";
    } else if (msgLower.includes('livraison')) {
        reply = "La livraison est 100% offerte dès 50 € d'achat. Expédition sous 24h à 48h.";
    }

    res.json({ response: reply });
});

app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`;
    xml += `  <url><loc>https://techshop-ecommerce-f9iq.onrender.com/</loc><priority>1.0</priority></url>\n`;
    products.forEach(p => { xml += `  <url><loc>https://techshop-ecommerce-f9iq.onrender.com/?product=${p.id}</loc><priority>0.8</priority></url>\n`; });
    xml += `</urlset>`;
    res.send(xml);
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\nSitemap: https://techshop-ecommerce-f9iq.onrender.com/sitemap.xml");
});

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));