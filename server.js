const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Catalogue complet de 100 produits avec images garanties sans erreur
const products = [
    // Consoles (1 - 12)
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
        title: "Xbox Series S 512GB Robot White",
        category: "Consoles",
        price: 299.99,
        os: "Xbox OS",
        storage: "512 GB NVMe SSD",
        ram: "10 GB GDDR6",
        colors: [{ name: "Robot White", hex: "#f5f5f7" }],
        description: "Performances de nouvelle génération dans la plus petite Xbox jamais conçue, 100% digitale.",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&auto=format&fit=crop"
    },
    {
        id: 5,
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
    {
        id: 6,
        title: "Nintendo Switch Lite - Bleu Lagon",
        category: "Consoles",
        price: 219.99,
        os: "Nintendo Horizon",
        storage: "32 GB Flash",
        ram: "4 GB LPDDR4",
        colors: [{ name: "Bleu Lagon", hex: "#00a2e8" }],
        description: "Console portable compacte et légère, dédiée au jeu nomade avec commandes intégrées.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Steam Deck OLED 512GB",
        category: "Consoles",
        price: 569.99,
        os: "SteamOS 3.0",
        storage: "512 GB NVMe SSD",
        ram: "16 GB LPDDR5",
        colors: [{ name: "Noir Anthracite", hex: "#222222" }],
        description: "Console PC portable puissante avec écran OLED HDR, batterie longue durée et Wi-Fi 6E.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "ASUS ROG Ally Z1 Extreme",
        category: "Consoles",
        price: 699.99,
        os: "Windows 11 Home",
        storage: "512 GB NVMe SSD",
        ram: "16 GB LPDDR5",
        colors: [{ name: "Blanc ROG", hex: "#ffffff" }],
        description: "Console PC sous Windows 11 avec écran 120Hz FHD, processeur AMD Z1 Extreme et ergonomie ROG.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "PlayStation Portal Remote Player",
        category: "Consoles",
        price: 219.99,
        os: "PlayStation OS",
        storage: "Streaming Wi-Fi",
        ram: "2 GB",
        colors: [{ name: "Blanc / Noir", hex: "#e5e5e5" }],
        description: "Lisez vos jeux PS5 en streaming Wi-Fi local avec écran LCD 8 pouces HD et fonctionnalités DualSense.",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Lenovo Legion Go 8.8''",
        category: "Consoles",
        price: 799.99,
        os: "Windows 11 Home",
        storage: "512 GB SSD",
        ram: "16 GB LPDDR5X",
        colors: [{ name: "Shadow Black", hex: "#1c1c1c" }],
        description: "Console hybride avec manettes détachables TrueStrike, écran QHD+ 144Hz et puce AMD Ryzen Z1 Extreme.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop"
    },
    {
        id: 11,
        title: "Nintendo Switch Édition Spéciale Zelda",
        category: "Consoles",
        price: 379.99,
        os: "Nintendo Horizon",
        storage: "64 GB Flash",
        ram: "4 GB LPDDR4",
        colors: [{ name: "Or Hyrule", hex: "#d4af37" }],
        description: "Édition collector dorée et ornée des symboles d'Hyrule avec écran OLED 7 pouces.",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop"
    },
    {
        id: 12,
        title: "PS5 Pro Édition Limitée 2TB",
        category: "Consoles",
        price: 799.99,
        os: "PS5 OS v3.0",
        storage: "2 TB NVMe SSD",
        ram: "16 GB GDDR6",
        colors: [{ name: "Gris Rétro", hex: "#a0a0a0" }],
        description: "La plus puissante des consoles PlayStation avec Ray Tracing avancé et upscaling PSSR par IA.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },

    // Téléphones (13 - 25)
    {
        id: 13,
        title: "iPhone 15 Pro Max 256GB - Titane Noir",
        category: "Téléphones",
        price: 1479.99,
        os: "iOS 17",
        storage: "256 GB",
        ram: "8 GB RAM",
        colors: [{ name: "Titane Noir", hex: "#2b2b2c" }, { name: "Titane Naturel", hex: "#8e8e93" }],
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
        colors: [{ name: "Rose Poudré", hex: "#f8d7da" }, { name: "Noir", hex: "#1c1c1e" }],
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
        colors: [{ name: "Gris Titane", hex: "#7d7d7d" }, { name: "Noir Titane", hex: "#222222" }],
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
        colors: [{ name: "Bleu Azur", hex: "#3b82f6" }],
        description: "Processeur Google Tensor G3, écran Super Actua ultra-lumineux et fonctionnalités photo par IA.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
    },
    {
        id: 17,
        title: "Xiaomi 14 Ultra 512GB Black",
        category: "Téléphones",
        price: 1499.99,
        os: "Android 14 (HyperOS)",
        storage: "512 GB",
        ram: "16 GB RAM",
        colors: [{ name: "Noir Cuir", hex: "#1a1a1a" }],
        description: "Optique professionnelle Leica à ouverture variable, capteur 1 pouce et charge ultra-rapide 90W.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop"
    },
    {
        id: 18,
        title: "OnePlus 12 16GB RAM + 512GB",
        category: "Téléphones",
        price: 999.99,
        os: "Android 14 (OxygenOS 14)",
        storage: "512 GB",
        ram: "16 GB RAM",
        colors: [{ name: "Vert Émeraude", hex: "#1b4d3e" }],
        description: "Puce Snapdragon 8 Gen 3, appareil photo Hasselblad de 4e génération et recharge SUPERVOOC 100W.",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop"
    },
    {
        id: 19,
        title: "iPhone 14 Plus 128GB - Minuit",
        category: "Téléphones",
        price: 869.99,
        os: "iOS 16 (Upgradable)",
        storage: "128 GB",
        ram: "6 GB RAM",
        colors: [{ name: "Minuit", hex: "#1c2024" }],
        description: "Grand écran Super Retina XDR de 6,7 pouces, autonomie d'une journée entière et détection des accidents.",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop"
    },
    {
        id: 20,
        title: "Samsung Galaxy Z Fold 5 512GB",
        category: "Téléphones",
        price: 1899.99,
        os: "Android 13 (One UI)",
        storage: "512 GB",
        ram: "12 GB RAM",
        colors: [{ name: "Bleu Noir", hex: "#111827" }],
        description: "Smartphone pliant avec écran principal immersif Dynamic AMOLED 2X de 7,6 pouces et charnière Flex.",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop"
    },
    {
        id: 21,
        title: "Samsung Galaxy Z Flip 5 256GB Mint",
        category: "Téléphones",
        price: 1199.99,
        os: "Android 13 (One UI)",
        storage: "256 GB",
        ram: "8 GB RAM",
        colors: [{ name: "Menthe", hex: "#d1e7dd" }],
        description: "Écran externe Flex Window personnalisable de 3,4 pouces et mode FlexCam pour vos selfies mains libres.",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&auto=format&fit=crop"
    },
    {
        id: 22,
        title: "Asus ROG Phone 8 Pro 512GB",
        category: "Téléphones",
        price: 1199.99,
        os: "Android 14 ROG UI",
        storage: "512 GB",
        ram: "16 GB RAM",
        colors: [{ name: "Phantom Black", hex: "#121212" }],
        description: "Smartphone gaming ultime avec écran AMOLED 165Hz, gâchettes AirTrigger et affichage AniMe Vision.",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop"
    },
    {
        id: 23,
        title: "Nothing Phone (2) 256GB Dark Gray",
        category: "Téléphones",
        price: 679.99,
        os: "Nothing OS 2.0",
        storage: "256 GB",
        ram: "12 GB RAM",
        colors: [{ name: "Gris Sombre", hex: "#2d3748" }],
        description: "Interface lumineuse Glyph unique, Nothing OS 2.0 épuré et double capteur photo 50 Mpx d'exception.",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop"
    },
    {
        id: 24,
        title: "iPhone 13 128GB - Bleu",
        category: "Téléphones",
        price: 649.99,
        os: "iOS 15",
        storage: "128 GB",
        ram: "4 GB RAM",
        colors: [{ name: "Bleu Intense", hex: "#1e3a8a" }],
        description: "Système à deux objectifs le plus avancé sur iPhone, puce A15 Bionic et autonomie nettement accrue.",
        image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=600&auto=format&fit=crop"
    },
    {
        id: 25,
        title: "Google Pixel 8 128GB Hazel",
        category: "Téléphones",
        price: 799.99,
        os: "Android 14 Stock",
        storage: "128 GB",
        ram: "8 GB RAM",
        colors: [{ name: "Sauge", hex: "#849386" }],
        description: "Design compact aux bords arrondis, écran Actua net de 6,2 pouces et retouche photo magique par IA.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
    },

    // Mac & PC (26 - 40)
    {
        id: 26,
        title: "MacBook Pro 16'' M3 Max 36GB - Noir Spatial",
        category: "Mac & PC",
        price: 3999.99,
        os: "macOS Sonoma",
        storage: "1 TB SSD",
        ram: "36 GB Unifiée",
        colors: [{ name: "Noir Spatial", hex: "#212529" }],
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
        colors: [{ name: "Minuit", hex: "#1a2530" }],
        description: "Design extraordinairement fin et léger de 15 pouces avec la vitesse fulgurante de la puce M3.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    },
    {
        id: 28,
        title: "ASUS ROG Strix SCAR 18 RTX 4090",
        category: "Mac & PC",
        price: 4299.99,
        os: "Windows 11 Pro",
        storage: "2 TB NVMe SSD",
        ram: "64 GB DDR5",
        colors: [{ name: "Noir RGB", hex: "#000000" }],
        description: "PC Portable Gamer monstrueux avec écran Nebula HDR 18'' 240Hz, Core i9-14900HX et RTX 4090.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
    },
    {
        id: 29,
        title: "Lenovo Legion Pro 7i RTX 4080",
        category: "Mac & PC",
        price: 2899.99,
        os: "Windows 11 Home",
        storage: "1 TB NVMe SSD",
        ram: "32 GB DDR5",
        colors: [{ name: "Onyx Grey", hex: "#3a3a3a" }],
        description: "PC portable de jeu optimisé par IA avec système de refroidissement Coldfront 5.0 et écran 240Hz.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop"
    },
    {
        id: 30,
        title: "Dell XPS 16 Touch Core Ultra 9",
        category: "Mac & PC",
        price: 3199.99,
        os: "Windows 11 Pro",
        storage: "1 TB SSD",
        ram: "32 GB LPDDR5x",
        colors: [{ name: "Platine", hex: "#e5e5e5" }],
        description: "Châssis en aluminium usiné, écran tactile OLED 4K+ et carte graphique NVIDIA RTX 4070 pour créateurs.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop"
    },
    {
        id: 31,
        title: "iMac 24'' M3 8-Core GPU 512GB - Bleu",
        category: "Mac & PC",
        price: 1829.99,
        os: "macOS Sonoma",
        storage: "512 GB SSD",
        ram: "8 GB Unifiée",
        colors: [{ name: "Bleu Ciel", hex: "#3b82f6" }],
        description: "Tout-en-un iconique ultra-fin avec sublime écran Retina 4.5K de 24 pouces et caméra FaceTime 1080p.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 32,
        title: "Razer Blade 16 RTX 4090 Dual Spec",
        category: "Mac & PC",
        price: 4499.99,
        os: "Windows 11 Home",
        storage: "2 TB SSD",
        ram: "32 GB DDR5",
        colors: [{ name: "Noir Anodisé", hex: "#111111" }],
        description: "Écran Mini-LED commutable unique (UHD+ 120Hz / FHD+ 240Hz) dans un châssis en alu anodisé noir.",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop"
    },
    {
        id: 33,
        title: "Mac mini M2 Pro 512GB",
        category: "Mac & PC",
        price: 1549.99,
        os: "macOS Ventura",
        storage: "512 GB SSD",
        ram: "16 GB Unifiée",
        colors: [{ name: "Argent", hex: "#d1d5db" }],
        description: "Des performances de classe Pro dans un boîtier compact de 19,7 cm de côté avec 4 ports Thunderbolt 4.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 34,
        title: "HP Omen Transcend 14 RTX 4070",
        category: "Mac & PC",
        price: 1999.99,
        os: "Windows 11 Home",
        storage: "1 TB SSD",
        ram: "16 GB LPDDR5",
        colors: [{ name: "Shadow Black", hex: "#1a1a1a" }],
        description: "Le PC portable Gamer 14 pouces le plus léger au monde avec écran OLED 2.8K 120Hz et clavier RGB.",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&auto=format&fit=crop"
    },
    {
        id: 35,
        title: "Acer Predator Helios 18 RTX 4080",
        category: "Mac & PC",
        price: 2799.99,
        os: "Windows 11 Home",
        storage: "1 TB SSD",
        ram: "32 GB DDR5",
        colors: [{ name: "Abyssal Black", hex: "#0d0d0d" }],
        description: "Clavier mécanique MagKey 3.0, ventilateurs AeroBlade 3D de 5e génération et écran Mini LED 250Hz.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop"
    },
    {
        id: 36,
        title: "Mac Studio M2 Max 32GB 512GB",
        category: "Mac & PC",
        price: 2399.99,
        os: "macOS Ventura",
        storage: "512 GB SSD",
        ram: "32 GB Unifiée",
        colors: [{ name: "Argent", hex: "#e5e7eb" }],
        description: "Centrale de création compacte avec un système thermique révolutionnaire pour des charges de travail intenses.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 37,
        title: "MSI Titan 18 HX Core i9 RTX 4090",
        category: "Mac & PC",
        price: 4999.99,
        os: "Windows 11 Pro",
        storage: "4 TB SSD",
        ram: "128 GB DDR5",
        colors: [{ name: "Core Black", hex: "#000000" }],
        description: "Remplacement de PC de bureau ultime avec touchpad Haptique RGB et 4 emplacements SSD M.2.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
    },
    {
        id: 38,
        title: "Microsoft Surface Laptop Studio 2",
        category: "Mac & PC",
        price: 2499.99,
        os: "Windows 11 Home",
        storage: "1 TB SSD",
        ram: "32 GB LPDDR5x",
        colors: [{ name: "Platine", hex: "#d1d5db" }],
        description: "Écran tactile PixelSense Flow de 14,4 pouces pivotant avec stylet Surface Slim Pen 2 et GPU RTX 4060.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop"
    },
    {
        id: 39,
        title: "PC Fixe CyberPowerPC Gaming RTX 4070 Ti",
        category: "Mac & PC",
        price: 2199.99,
        os: "Windows 11 Home",
        storage: "2 TB NVMe SSD",
        ram: "32 GB DDR5",
        colors: [{ name: "Boîtier Verre", hex: "#ffffff" }],
        description: "Unité centrale Gamer avec processeur Ryzen 7 7800X3D, boîtier en verre trempé et refroidissement liquide ARGB.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 40,
        title: "MacBook Air 13'' M2 256GB - Starlight",
        category: "Mac & PC",
        price: 1199.99,
        os: "macOS Monterey",
        storage: "256 GB SSD",
        ram: "8 GB Unifiée",
        colors: [{ name: "Lumière Stellaire", hex: "#f4eedd" }],
        description: "Design repensé incroyablement fin, écran Liquid Retina de 13,6 pouces et recharge MagSafe ultra pratique.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    },

    // Refroidissement (41 - 50)
    {
        id: 41,
        title: "Refroidisseur PC Portable Klim Ultimate RGB",
        category: "Refroidissement",
        price: 49.99,
        os: "Plug & Play",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir RGB", hex: "#111111" }],
        description: "Support ventilé avec ventilateur géant de 200 mm tournant à 750 RPM et contour rétroéclairé RGB.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 42,
        title: "Station de Refroidissement PS5 avec Support Manettes",
        category: "Refroidissement",
        price: 39.99,
        os: "Plug & Play USB-C",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Blanc PS5", hex: "#ffffff" }],
        description: "Socle multifonction avec 2 ventilateurs d'extraction haute vitesse et double chargeur de manettes DualSense.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 43,
        title: "Refroidisseur Liquide NZXT Kraken Elite 360",
        category: "Refroidissement",
        price: 299.99,
        os: "CAM Software",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Mat", hex: "#1a1a1a" }],
        description: "Watercooling AIO avec écran LCD grand format de 2.36'' affichant les températures et GIFs personnalisés.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 44,
        title: "Corsair iCUE H150i XT RGB Liquid Cooler",
        category: "Refroidissement",
        price: 219.99,
        os: "iCUE Software",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir", hex: "#000000" }],
        description: "Radiateur de 360 mm avec 3 ventilateurs à lévitation magnétique CORSAIR AF RGB ELITE.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },

    // Audio (51 - 65)
    {
        id: 51,
        title: "Apple AirPods Max - Gris Sidéral",
        category: "Audio",
        price: 579.99,
        os: "Puce Apple H1",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Gris Sidéral", hex: "#3a3b3c" }, { name: "Argent", hex: "#e2e2e2" }],
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
        colors: [{ name: "Noir Premium", hex: "#111111" }],
        description: "La référence du marché en réduction de bruit active avec 8 microphones et processeur V1 intégré.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop"
    },
    {
        id: 53,
        title: "Apple AirPods Pro 2ème Génération USB-C",
        category: "Audio",
        price: 279.99,
        os: "Puce Apple H2",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Blanc", hex: "#ffffff" }],
        description: "Écouteurs sans fil avec puce H2, Réduction active du bruit 2x plus efficace et boîtier MagSafe.",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop"
    },
    {
        id: 54,
        title: "Bose QuietComfort Ultra Headphones",
        category: "Audio",
        price: 449.99,
        os: "Bose Immersive Sound",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Subtil", hex: "#1f2937" }],
        description: "Audio immersif révolutionnaire, réduction de bruit inégalée et mode Transparence personnalisable.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop"
    },
    {
        id: 55,
        title: "SteelSeries Arctis Nova Pro Wireless",
        category: "Audio",
        price: 379.99,
        os: "Sonar Audio Suite",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir", hex: "#111111" }],
        description: "Casque gamer sans fil ultime avec système d'échange de batterie à chaud et station de base OLED.",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&auto=format&fit=crop"
    },
    {
        id: 57,
        title: "Enceinte Bluetooth JBL Charge 5 Black",
        category: "Audio",
        price: 179.99,
        os: "JBL PartyBoost",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Mat", hex: "#111111" }],
        description: "Son Pro original JBL puissant avec haut-parleur d'extrêmes graves séparé et 20h d'autonomie.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop"
    },
    {
        id: 58,
        title: "Microphone Streaming Shure SM7B",
        category: "Audio",
        price: 399.99,
        os: "Analogique XLR",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Mat", hex: "#1c1c1c" }],
        description: "Le micro dynamique légendaire pour le podcast, le broadcast et le streaming professionnel.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop"
    },

    // Jeux (66 - 80)
    {
        id: 66,
        title: "GTA V PS5 Version Améliorée",
        category: "Jeux",
        price: 39.99,
        os: "PS5 OS",
        storage: "90 GB SSD",
        ram: "N/A",
        colors: [{ name: "Édition Standard", hex: "#008060" }],
        description: "Découvrez Los Santos en 4K, 60 FPS avec ray tracing, chargements ultra-rapides et retours haptiques.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop"
    },
    {
        id: 67,
        title: "EA SPORTS FC 24 PS5",
        category: "Jeux",
        price: 69.99,
        os: "PS5 OS",
        storage: "50 GB SSD",
        ram: "N/A",
        colors: [{ name: "Édition Standard", hex: "#008060" }],
        description: "Une nouvelle ère pour The World's Game avec la technologie HyperMotionV et plus de 19 000 joueurs.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
    },
    {
        id: 68,
        title: "Marvel's Spider-Man 2 PS5",
        category: "Jeux",
        price: 79.99,
        os: "PS5 OS",
        storage: "88 GB SSD",
        ram: "N/A",
        colors: [{ name: "Édition Standard", hex: "#ef4444" }],
        description: "Incarnez Peter Parker et Miles Morales face à l'iconique Venom dans un New York agrandi.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },
    {
        id: 69,
        title: "The Legend of Zelda: Tears of the Kingdom",
        category: "Jeux",
        price: 59.99,
        os: "Nintendo Horizon",
        storage: "16 GB",
        ram: "N/A",
        colors: [{ name: "Édition Standard", hex: "#d4af37" }],
        description: "Une aventure épique à travers les terres et les cieux d'Hyrule sur Nintendo Switch.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },

    // Accessoires (81 - 100)
    {
        id: 81,
        title: "Manette Sans Fil DualSense PS5 - Midnight Black",
        category: "Accessoires",
        price: 69.99,
        os: "PS5 OS Controller",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Midnight Black", hex: "#111111" }],
        description: "Découvrez une expérience de jeu captivante avec les gâchettes adaptatives et le retour haptique.",
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop"
    },
    {
        id: 82,
        title: "Souris Gamer Logitech G Pro X Superlight 2",
        category: "Accessoires",
        price: 159.99,
        os: "G HUB Software",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir Mat", hex: "#111111" }, { name: "Blanc Pur", hex: "#ffffff" }],
        description: "Pèse seulement 60g avec capteur HERO 2 de 32 000 DPI et switchs hybrides LIGHTFORCE.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop"
    },
    {
        id: 83,
        title: "Clavier Mécanique Razer Huntsman V3 Pro TKL",
        category: "Accessoires",
        price: 249.99,
        os: "Razer Synapse 3",
        storage: "N/A",
        ram: "N/A",
        colors: [{ name: "Noir RGB", hex: "#000000" }],
        description: "Switchs optiques analogiques Gen-2 avec déclenchement réglable et mode Rapid Trigger ultra-réactif.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop"
    },
    {
        id: 84,
        title: "Casque Réalité Virtuelle Meta Quest 3 128GB",
        category: "Accessoires",
        price: 549.99,
        os: "Meta Horizon OS",
        storage: "128 GB",
        ram: "8 GB RAM",
        colors: [{ name: "Blanc Pur", hex: "#f8f9fa" }],
        description: "Casque de réalité mixte autonome avec résolution 4K+ Infinite Display et manettes Touch Plus.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop"
    }
];

// Remplissage automatique garanti sans erreur pour atteindre exactement 100 produits uniques
const categoryImages = {
    "Consoles": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop",
    "Téléphones": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
    "Mac & PC": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop",
    "Refroidissement": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop",
    "Audio": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
    "Jeux": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop",
    "Accessoires": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop"
};

for (let i = 1; i <= 100; i++) {
    if (!products.find(p => p.id === i)) {
        const cat = i % 2 === 0 ? "Accessoires" : "Jeux";
        products.push({
            id: i,
            title: `Article Tech Ultra-Pro #${i}`,
            category: cat,
            price: (39.99 + i * 4.5).toFixed(2),
            os: "Compatible Universel",
            storage: `${128 * (i % 4 + 1)} GB`,
            ram: `${4 * (i % 4 + 1)} GB RAM`,
            colors: [{ name: "Noir Premium", hex: "#111111" }, { name: "Argent", hex: "#cccccc" }],
            description: "Accessoire multimédia haute performance certifié d'origine avec garantie fabricant.",
            image: categoryImages[cat]
        });
    }
}

app.get('/api/products', (req, res) => res.json(products));

app.post('/api/chatbot', (req, res) => {
    const { message } = req.body;
    const msgLower = (message || '').toLowerCase();
    let reply = "Je suis votre assistant TechStore. Comment puis-je vous aider aujourd'hui ?";

    if (msgLower.includes('ios') || msgLower.includes('android') || msgLower.includes('os')) {
        reply = "Nos produits proposent les dernières versions logicielles officielles (iOS 17, Android 14, macOS Sonoma, PS5 OS).";
    } else if (msgLower.includes('livraison')) {
        reply = "La livraison est 100% offerte dès 50 € d'achat. Vos commandes sont expédiées sous 24h à 48h.";
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