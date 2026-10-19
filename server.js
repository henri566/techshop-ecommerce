const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Catalog complet de 100 produits avec images et descriptions 100% cohérentes
const products = [
    // Consoles (1 - 12)
    {
        id: 1,
        title: "PlayStation 5 Slim Digital",
        category: "Consoles",
        price: 449.99,
        description: "Console PS5 édition numérique ultra-compacte avec SSD ultra rapide 1 To et manette DualSense.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "PlayStation 5 Standard avec Lecteur",
        category: "Consoles",
        price: 549.99,
        description: "Console PlayStation 5 originale avec lecteur Blu-ray 4K Ultra HD et retour haptique DualSense.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Xbox Series X 1TB Black",
        category: "Consoles",
        price: 499.99,
        description: "La console Xbox la plus rapide et la plus puissante avec rendu 4K vrai et 120 FPS.",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Xbox Series S 512GB Robot White",
        category: "Consoles",
        price: 299.99,
        description: "Performances de nouvelle génération dans la plus petite Xbox jamais conçue, 100% digitale.",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Nintendo Switch OLED - Blanc",
        category: "Consoles",
        price: 349.99,
        description: "Écran OLED intense de 7 pouces, large support ajustable et station d'accueil avec port Ethernet.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Nintendo Switch Lite - Bleu Lagon",
        category: "Consoles",
        price: 219.99,
        description: "Console portable compacte et légère, dédiée au jeu nomade avec commandes intégrées.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Steam Deck OLED 512GB",
        category: "Consoles",
        price: 569.99,
        description: "Console PC portable puissante avec écran OLED HDR, batterie longue durée et Wi-Fi 6E.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "ASUS ROG Ally Z1 Extreme",
        category: "Consoles",
        price: 699.99,
        description: "Console PC sous Windows 11 avec écran 120Hz FHD, processeur AMD Z1 Extreme et ergonomie ROG.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "PlayStation Portal Remote Player",
        category: "Consoles",
        price: 219.99,
        description: "Lisez vos jeux PS5 en streaming Wi-Fi local avec écran LCD 8 pouces HD et fonctionnalités DualSense.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Lenovo Legion Go 8.8''",
        category: "Consoles",
        price: 799.99,
        description: "Console hybride avec manettes détachables TrueStrike, écran QHD+ 144Hz et puce AMD Ryzen Z1 Extreme.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop"
    },
    {
        id: 11,
        title: "Nintendo Switch Édition Spéciale Zelda",
        category: "Consoles",
        price: 379.99,
        description: "Édition collector dorée et ornée des symboles d'Hyrule avec écran OLED 7 pouces.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },
    {
        id: 12,
        title: "PS5 Pro Édition Limité 2TB",
        category: "Consoles",
        price: 799.99,
        description: "La plus puissante des consoles PlayStation avec Ray Tracing avancé et upscaling PSSR par IA.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },

    // Téléphones (13 - 25)
    {
        id: 13,
        title: "iPhone 15 Pro Max 256GB - Titane Noir",
        category: "Téléphones",
        price: 1479.99,
        description: "Design en titane de qualité spatiale, puce A17 Pro, bouton Action personnalisable et zoom optique 5x.",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop"
    },
    {
        id: 14,
        title: "iPhone 15 128GB - Rose Poudré",
        category: "Téléphones",
        price: 969.99,
        description: "Dynamic Island, appareil photo principal 48 Mpx avec téléobjectif 2x et verre teinté dans la masse.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop"
    },
    {
        id: 15,
        title: "Samsung Galaxy S24 Ultra 512GB",
        category: "Téléphones",
        price: 1469.99,
        description: "Boîtier en titane, stylet S Pen intégré, capteur 200 Mpx et fonctionnalités Galaxy AI avancées.",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop"
    },
    {
        id: 16,
        title: "Google Pixel 8 Pro 256GB",
        category: "Téléphones",
        price: 1099.99,
        description: "Processeur Google Tensor G3, écran Super Actua ultra-lumineux et fonctionnalités photo révolutionnaires par IA.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
    },
    {
        id: 17,
        title: "Xiaomi 14 Ultra 512GB Black",
        category: "Téléphones",
        price: 1499.99,
        description: "Optique professionnelle Leica à ouverture variable, capteur 1 pouce et charge ultra-rapide 90W.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop"
    },
    {
        id: 18,
        title: "OnePlus 12 16GB RAM + 512GB",
        category: "Téléphones",
        price: 999.99,
        description: "Puce Snapdragon 8 Gen 3, appareil photo Hasselblad de 4e génération et recharge SUPERVOOC 100W.",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop"
    },
    {
        id: 19,
        title: "iPhone 14 Plus 128GB - Minuit",
        category: "Téléphones",
        price: 869.99,
        description: "Grand écran Super Retina XDR de 6,7 pouces, autonomie d'une journée entière et détection des accidents.",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop"
    },
    {
        id: 20,
        title: "Samsung Galaxy Z Fold 5 512GB",
        category: "Téléphones",
        price: 1899.99,
        description: "Smartphone pliant avec écran principal immersif Dynamic AMOLED 2X de 7,6 pouces et charnière Flex.",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop"
    },
    {
        id: 21,
        title: "Samsung Galaxy Z Flip 5 256GB Mint",
        category: "Téléphones",
        price: 1199.99,
        description: "Écran externe Flex Window personnalisable de 3,4 pouces et mode FlexCam pour vos selfies mains libres.",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&auto=format&fit=crop"
    },
    {
        id: 22,
        title: "Asus ROG Phone 8 Pro 512GB",
        category: "Téléphones",
        price: 1199.99,
        description: "Smartphone gaming ultime avec écran AMOLED 165Hz, gâchettes AirTrigger et affichage AniMe Vision.",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop"
    },
    {
        id: 23,
        title: "Nothing Phone (2) 256GB Dark Gray",
        category: "Téléphones",
        price: 679.99,
        description: "Interface lumineuse Glyph unique, Nothing OS 2.0 épuré et double capteur photo 50 Mpx d'exception.",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop"
    },
    {
        id: 24,
        title: "iPhone 13 128GB - Bleu",
        category: "Téléphones",
        price: 649.99,
        description: "Système à deux objectifs le plus avancé sur iPhone, puce A15 Bionic et autonomie nettement accrue.",
        image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=600&auto=format&fit=crop"
    },
    {
        id: 25,
        title: "Google Pixel 8 128GB Hazel",
        category: "Téléphones",
        price: 799.99,
        description: "Design compact aux bords arrondis, écran Actua net de 6,2 pouces et retouche photo magique par IA.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
    },

    // Mac & PC (26 - 40)
    {
        id: 26,
        title: "MacBook Pro 16'' M3 Max 36GB - Noir Spatial",
        category: "Mac & PC",
        price: 3999.99,
        description: "La puissance ultime avec puce Apple M3 Max, écran Liquid Retina XDR et jusqu'à 22h d'autonomie.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop"
    },
    {
        id: 27,
        title: "MacBook Air 15'' M3 16GB - Minuit",
        category: "Mac & PC",
        price: 1599.99,
        description: "Design extraordinairement fin et léger de 15 pouces avec la vitesse fulgurante de la puce M3.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    },
    {
        id: 28,
        title: "ASUS ROG Strix SCAR 18 RTX 4090",
        category: "Mac & PC",
        price: 4299.99,
        description: "PC Portable Gamer monstrueux avec écran Nebula HDR 18'' 240Hz, Core i9-14900HX et carte graphique RTX 4090.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
    },
    {
        id: 29,
        title: "Lenovo Legion Pro 7i RTX 4080",
        category: "Mac & PC",
        price: 2899.99,
        description: "PC portable de jeu optimisé par IA avec système de refroidissement Coldfront 5.0 et écran WQXGA 240Hz.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop"
    },
    {
        id: 30,
        title: "Dell XPS 16 Touch Core Ultra 9",
        category: "Mac & PC",
        price: 3199.99,
        description: "Châssis en aluminium usiné, écran tactile OLED 4K+ et carte graphique NVIDIA RTX 4070 pour créateurs.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop"
    },
    {
        id: 31,
        title: "iMac 24'' M3 8-Core GPU 512GB - Bleu",
        category: "Mac & PC",
        price: 1829.99,
        description: "Tout-en-un iconique ultra-fin avec sublime écran Retina 4.5K de 24 pouces et caméra FaceTime 1080p.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 32,
        title: "Razer Blade 16 RTX 4090 Dual Spec Mini-LED",
        category: "Mac & PC",
        price: 4499.99,
        description: "Écran Mini-LED commutable unique (UHD+ 120Hz / FHD+ 240Hz) dans un châssis en alu anodisé noir.",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop"
    },
    {
        id: 33,
        title: "Mac mini M2 Pro 512GB",
        category: "Mac & PC",
        price: 1549.99,
        description: "Des performances de classe Pro dans un boîtier compact de 19,7 cm de côté avec 4 ports Thunderbolt 4.",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop"
    },
    {
        id: 34,
        title: "HP Omen Transcend 14 RTX 4070",
        category: "Mac & PC",
        price: 1999.99,
        description: "Le PC portable Gamer 14 pouces le plus léger au monde avec écran OLED 2.8K 120Hz et clavier RGB.",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&auto=format&fit=crop"
    },
    {
        id: 35,
        title: "Acer Predator Helios 18 RTX 4080",
        category: "Mac & PC",
        price: 2799.99,
        description: "Clavier mécanique MagKey 3.0, ventilateurs AeroBlade 3D de 5e génération et écran Mini LED 250Hz.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop"
    },
    {
        id: 36,
        title: "Mac Studio M2 Max 32GB 512GB",
        category: "Mac & PC",
        price: 2399.99,
        description: "Centrale de création compacte avec un système thermique révolutionnaire pour des charges de travail intenses.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 37,
        title: "MSI Titan 18 HX Core i9 RTX 4090",
        category: "Mac & PC",
        price: 4999.99,
        description: "Remplacement de PC de bureau ultime avec touchpad Haptique RGB et 4 emplacements SSD M.2.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
    },
    {
        id: 38,
        title: "Microsoft Surface Laptop Studio 2",
        category: "Mac & PC",
        price: 2499.99,
        description: "Écran tactile PixelSense Flow de 14,4 pouces pivotant avec stylet Surface Slim Pen 2 et GPU RTX 4060.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop"
    },
    {
        id: 39,
        title: "PC Fixe CyberPowerPC Gaming RTX 4070 Ti",
        category: "Mac & PC",
        price: 2199.99,
        description: "Unité centrale Gamer avec processeur Ryzen 7 7800X3D, boîtier en verre trempé et refroidissement liquide ARGB.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 40,
        title: "MacBook Air 13'' M2 256GB - Starlight",
        category: "Mac & PC",
        price: 1199.99,
        description: "Design repensé incroyablement fin, écran Liquid Retina de 13,6 pouces et recharge MagSafe ultra pratique.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    },

    // Refroidissement (41 - 50)
    {
        id: 41,
        title: "Refroidisseur PC Portable Klim Ultimate RGB",
        category: "Refroidissement",
        price: 49.99,
        description: "Support ventilé avec ventilateur géant de 200 mm tournant à 750 RPM et contour rétroéclairé RGB.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 42,
        title: "Station de Refroidissement PS5 avec Support Manettes",
        category: "Refroidissement",
        price: 39.99,
        description: "Socle multifonction avec 2 ventilateurs d'extraction haute vitesse et double chargeur de manettes DualSense.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 43,
        title: "Refroidisseur Liquide AIO NZXT Kraken Elite 360 RGB",
        category: "Refroidissement",
        price: 299.99,
        description: "Watercooling AIO avec écran LCD grand format de 2.36'' affichant les températures et GIFs personnalisés.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 44,
        title: "Corsair iCUE H150i XT RGB Liquid Cooler",
        category: "Refroidissement",
        price: 219.99,
        description: "Radiateur de 360 mm avec 3 ventilateurs à lévitation magnétique CORSAIR AF RGB ELITE.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 45,
        title: "Ventirad Noctua NH-D15 Chromax.Black",
        category: "Refroidissement",
        price: 119.99,
        description: "Le ventirad double tour légendaire de Noctua dans une finition entièrement noire mat ultra-silencieuse.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 46,
        title: "Razer Phone Cooler Chroma MagSafe",
        category: "Refroidissement",
        price: 69.99,
        description: "Ventilateur pour smartphone compatible MagSafe avec plaque Peltier à effet Peltier et technologie Razer Chroma RGB.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop"
    },
    {
        id: 47,
        title: "Cooler Master MasterLiquid 240L Core",
        category: "Refroidissement",
        price: 89.99,
        description: "Pompe à double chambre de 3e génération renforcée et surface du radiateur élargie pour un transfert thermique optimal.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 48,
        title: "IETS GT500 Refroidisseur PC Portable Turbo",
        category: "Refroidissement",
        price: 79.99,
        description: "Ventilateur de qualité industrielle à 5000 RPM avec joint en mousse d'étanchéité pour abaisser la température de 20°C.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop"
    },
    {
        id: 49,
        title: "Ventilateur PC Lian Li Uni Fan SL-Infinity 120 RGB",
        category: "Refroidissement",
        price: 99.99,
        description: "Pack de 3 ventilateurs chaînables sans câble apparent avec miroir d'infini sur les côtés et le centre.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },
    {
        id: 50,
        title: "Asus ROG Strix LC III 360 ARGB Liquid Cooler",
        category: "Refroidissement",
        price: 249.99,
        description: "Refroidisseur liquide haute efficacité équipé de la nouvelle pompe Asetek Gen7 v2 et ventilateurs ROG ARGB.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop"
    },

    // Audio (51 - 65)
    {
        id: 51,
        title: "Apple AirPods Max - Gris Sidéral",
        category: "Audio",
        price: 579.99,
        description: "Casque circum-auriculaire conçu par Apple avec réduction active du bruit de niveau pro et Audio Spatial.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop"
    },
    {
        id: 52,
        title: "Sony WH-1000XM5 Noir",
        category: "Audio",
        price: 399.99,
        description: "La référence du marché en réduction de bruit active avec 8 microphones et processeur V1 intégré.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop"
    },
    {
        id: 53,
        title: "Apple AirPods Pro 2ème Génération USB-C",
        category: "Audio",
        price: 279.99,
        description: "Écouteurs sans fil avec puce H2, Réduction active du bruit 2x plus efficace et boîtier MagSafe.",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop"
    },
    {
        id: 54,
        title: "Bose QuietComfort Ultra Headphones",
        category: "Audio",
        price: 449.99,
        description: "Audio immersif révolutionnaire, réduction de bruit inégalée et mode Transparence personnalisable.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop"
    },
    {
        id: 55,
        title: "SteelSeries Arctis Nova Pro Wireless",
        category: "Audio",
        price: 379.99,
        description: "Casque gamer sans fil ultime avec système d'échange de batterie à chaud et station de base OLED.",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&auto=format&fit=crop"
    },
    {
        id: 56,
        title: "Logitech G PRO X 2 LIGHTSPEED Wireless",
        category: "Audio",
        price: 269.99,
        description: "Transducteurs en graphène de 50 mm pour un son d'une précision cristalline dans les jeux compétitifs.",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop"
    },
    {
        id: 57,
        title: "Enceinte Bluetooth JBL Charge 5 Black",
        category: "Audio",
        price: 179.99,
        description: "Son Pro original JBL puissant avec haut-parleur d'extrêmes graves séparé et 20h d'autonomie.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop"
    },
    {
        id: 58,
        title: "Microphone Streaming Shure SM7B",
        category: "Audio",
        price: 399.99,
        description: "Le micro dynamique légendaire pour le podcast, le broadcast et le streaming professionnel.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop"
    },
    {
        id: 59,
        title: "Razer BlackShark V2 Pro (2023)",
        category: "Audio",
        price: 199.99,
        description: "Microphone supercardioïde à très large bande et haut-parleurs TriForce en titane de 50 mm.",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&auto=format&fit=crop"
    },
    {
        id: 60,
        title: "Sennheiser HD 660S2 Casque Hi-Fi Open-Back",
        category: "Audio",
        price: 599.99,
        description: "Casque ouvert audiophile offrant une immersion sonore naturelle et des basses étendues d'une grande précision.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop"
    },
    {
        id: 61,
        title: "Marshall Stanmore III Enceinte Bluetooth",
        category: "Audio",
        price: 399.99,
        description: "Design vintage rock emblématique avec une scène sonore encore plus large et équilibrée.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop"
    },
    {
        id: 62,
        title: "Micro USB Elgato Wave:3",
        category: "Audio",
        price: 149.99,
        description: "Microphone à condensateur haut de gamme avec technologie anti-saturation Clipguard et application Wave Link.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop"
    },
    {
        id: 63,
        title: "Sony WF-1000XM5 Écouteurs True Wireless",
        category: "Audio",
        price: 299.99,
        description: "Design ultra-léger et élégant avec réduction de bruit active et qualité d'appel exceptionnelle.",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop"
    },
    {
        id: 64,
        title: "HyperX Cloud III Wireless",
        category: "Audio",
        price: 169.99,
        description: "Confort légendaire HyperX avec mousse à mémoire de forme et jusqu'à 120 heures d'autonomie de batterie.",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&auto=format&fit=crop"
    },
    {
        id: 65,
        title: "Barre de Son Sonos Arc Premium Smart Soundbar",
        category: "Audio",
        price: 899.99,
        description: "Barre de son intelligente avec Dolby Atmos pour un son 3D d'une clarté impressionnante dans votre salon.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop"
    },

    // Jeux (66 - 80)
    {
        id: 66,
        title: "GTA V PS5 Version Améliorée",
        category: "Jeux",
        price: 39.99,
        description: "Découvrez Los Santos en 4K, 60 FPS avec ray tracing, chargements ultra-rapides et retours haptiques.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop"
    },
    {
        id: 67,
        title: "EA SPORTS FC 24 PS5",
        category: "Jeux",
        price: 69.99,
        description: "Une nouvelle ère pour The World's Game avec la technologie HyperMotionV et plus de 19 000 joueurs sous licence.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
    },
    {
        id: 68,
        title: "Marvel's Spider-Man 2 PS5",
        category: "Jeux",
        price: 79.99,
        description: "Incarnez Peter Parker et Miles Morales face à l'iconique Venom dans un New York agrandi.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },
    {
        id: 69,
        title: "The Legend of Zelda: Tears of the Kingdom",
        category: "Jeux",
        price: 59.99,
        description: "Une aventure épique à travers les terres et les cieux d'Hyrule sur Nintendo Switch.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },
    {
        id: 70,
        title: "God of War Ragnarök PS5",
        category: "Jeux",
        price: 69.99,
        description: "Accompagnez Kratos et Atreus dans un voyage mythique avant la bataille prophétisée des neuf royaumes.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 71,
        title: "Elden Ring PS5 Edition GOTY",
        category: "Jeux",
        price: 59.99,
        description: "L'Action-RPG récompensé jeu de l'année par Hidetaka Miyazaki et George R. R. Martin.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
        id: 72,
        title: "Call of Duty: Modern Warfare III PS5",
        category: "Jeux",
        price: 79.99,
        description: "Une campagne explosive, le retour des cartes Multijoueur légendaires et un mode Zombies en monde ouvert.",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop"
    },
    {
        id: 73,
        title: "Super Mario Bros. Wonder Nintendo Switch",
        category: "Jeux",
        price: 49.99,
        description: "Découvrez des transformations surprenantes avec les fleurs prodiges dans ce tout nouveau jeu Mario 2D.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop"
    },
    {
        id: 74,
        title: "Final Fantasy VII Rebirth PS5",
        category: "Jeux",
        price: 79.99,
        description: "Le deuxième volet du projet de remake de Final Fantasy VII offrant un monde vaste et dynamique.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },
    {
        id: 75,
        title: "Cyberpunk 2077: Ultimate Edition PS5",
        category: "Jeux",
        price: 59.99,
        description: "Contient le jeu original complet ainsi que l'extension d'espionnage et de thriller Phantom Liberty.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
    },
    {
        id: 76,
        title: "Resident Evil 4 Remake PS5",
        category: "Jeux",
        price: 49.99,
        description: "La réimagination totale du classique du survival horror de 2005 avec visuels 4K et gameplay modernisé.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop"
    },
    {
        id: 77,
        title: "Mario Kart 8 Deluxe Nintendo Switch",
        category: "Jeux",
        price: 49.99,
        description: "Le jeu de course ultime playable partout jusqu'à 8 joueurs en local ou en ligne.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },
    {
        id: 78,
        title: "Gran Turismo 7 PS5",
        category: "Jeux",
        price: 69.99,
        description: "Le simulateur de conduite réel avec plus de 400 voitures et des conditions météo réalistes.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop"
    },
    {
        id: 79,
        title: "Tekken 8 PS5",
        category: "Jeux",
        price: 79.99,
        description: "Une nouvelle dynamique de combat avec le système Heat et des graphismes spectaculaires sous Unreal Engine 5.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
        id: 80,
        title: "Hogwarts Legacy: L'Héritage de Poudlard PS5",
        category: "Jeux",
        price: 59.99,
        description: "Un RPG d'action en monde ouvert immersif dans l'univers d'Harry Potter dans les années 1800.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop"
    },

    // Accessoires (81 - 100)
    {
        id: 81,
        title: "Manette Sans Fil DualSense PS5 - Midnight Black",
        category: "Accessoires",
        price: 69.99,
        description: "Découvrez une expérience de jeu captivante avec les gâchettes adaptatives et le retour haptique.",
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop"
    },
    {
        id: 82,
        title: "Manette Xbox Wireless Velocity Green",
        category: "Accessoires",
        price: 59.99,
        description: "Boutons de partage dédiés, croix directionnelle hybride et poignées antidérapantes texturées.",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&auto=format&fit=crop"
    },
    {
        id: 83,
        title: "Souris Gamer Logitech G Pro X Superlight 2",
        category: "Accessoires",
        price: 159.99,
        description: "Pèse seulement 60g avec capteur HERO 2 de 32 000 DPI et switchs hybrides LIGHTFORCE.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop"
    },
    {
        id: 84,
        title: "Clavier Mécanique Razer Huntsman V3 Pro TKL",
        category: "Accessoires",
        price: 249.99,
        description: "Switchs optiques analogiques Gen-2 avec déclenchement réglable et mode Rapid Trigger ultra-réactif.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop"
    },
    {
        id: 85,
        title: "Volant de Course Logitech G29 Driving Force",
        category: "Accessoires",
        price: 269.99,
        description: "Volant de simulation avec retour de force à deux moteurs et pédalier en acier inoxydable.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop"
    },
    {
        id: 86,
        title: "Tapis de Souris SteelSeries QcK Prism XL RGB",
        category: "Accessoires",
        price: 59.99,
        description: "Tissu micro-tissé légendaire avec éclairage RGB dynamique sur 2 zones indépendantes.",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop"
    },
    {
        id: 87,
        title: "Elgato Stream Deck MK.2 15 Touches",
        category: "Accessoires",
        price: 159.99,
        description: "15 touches LCD personnalisables pour contrôler vos applications, scènes de streaming et actions audio.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
        id: 88,
        title: "Webcam Logitech BRIO 4K Ultra HD",
        category: "Accessoires",
        price: 189.99,
        description: "Webcam premium avec HDR, cadrage automatique RightLight 3 et reconnaissance faciale Windows Hello.",
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&auto=format&fit=crop"
    },
    {
        id: 89,
        title: "Manette Pro Nintendo Switch",
        category: "Accessoires",
        price: 69.99,
        description: "Design ergonomique premium avec vibrations HD, capteur NFC pour amiibo et longue autonomie.",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop"
    },
    {
        id: 90,
        title: "Apple Magic Mouse - Surface Multi-Touch Noir",
        category: "Accessoires",
        price: 89.99,
        description: "Souris sans fil et rechargeable avec surface Multi-Touch pour balayer vos documents et faire défiler les pages.",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop"
    },
    {
        id: 91,
        title: "Apple Magic Keyboard avec Touch ID",
        category: "Accessoires",
        price: 159.99,
        description: "Clavier ultra-fin avec lecteur d'empreinte Touch ID pour un déverrouillage sécurisé sur votre Mac.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop"
    },
    {
        id: 92,
        title: "Station de Charge Anker MagGo 3-en-1 Qi2 15W",
        category: "Accessoires",
        price: 109.99,
        description: "Chargeur pliable sans fil magnétique certifié Qi2 pour recharger simultanément votre iPhone, Apple Watch et AirPods.",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop"
    },
    {
        id: 93,
        title: "Casque Réalité Virtuelle Meta Quest 3 128GB",
        category: "Accessoires",
        price: 549.99,
        description: "Casque de réalité mixte autonome avec résolution 4K+ Infinite Display et manettes Touch Plus.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop"
    },
    {
        id: 94,
        title: "Disque Dur Externe SSD SanDisk Extreme 2TB USB 3.2",
        category: "Accessoires",
        price: 169.99,
        description: "SSD portable robuste résistant aux chutes et à l'eau (IP65) avec des vitesses de lecture de 1050 Mo/s.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop"
    },
    {
        id: 95,
        title: "Manette Pro DualSense Edge PS5",
        category: "Accessoires",
        price: 239.99,
        description: "Manette PS5 ultra-personnalisable avec modules de stick remplaçables et palettes arrières réassignables.",
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop"
    },
    {
        id: 96,
        title: "Support d'Écran Ergonomique Ergotron LX Aluminum",
        category: "Accessoires",
        price: 179.99,
        description: "Bras articulé robuste pour écran jusqu'à 34 pouces permettant un positionnement optimal au millimètre près.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop"
    },
    {
        id: 97,
        title: "Hub USB-C Satechi Aluminium 9-en-1 Pro",
        category: "Accessoires",
        price: 89.99,
        description: "Adaptateur avec port HDMI 4K 60Hz, Ethernet Gigabit, lecteurs SD/MicroSD et ports USB-A/USB-C PD 100W.",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&auto=format&fit=crop"
    },
    {
        id: 98,
        title: "Carte Mémoire SanDisk microSDXC Nintendo Switch 512GB",
        category: "Accessoires",
        price: 59.99,
        description: "Carte mémoire officielle sous licence Nintendo avec des taux de transfert jusqu'à 100 Mo/s.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop"
    },
    {
        id: 99,
        title: "Chaise Gamer Ergonomique Secretlab TITAN Evo Black",
        category: "Accessoires",
        price: 549.99,
        description: "Le confort de référence avec soutien lombaire L-Adapt à 4 voies et similicuir hybride NEO.",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop"
    },
    {
        id: 100,
        title: "Pliable Chiffon Microfibre Apple",
        category: "Accessoires",
        price: 25.00,
        description: "Conçu en matériau doux et non abrasif pour nettoyer tous les écrans Apple, y compris le verre nano-texturé.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop"
    }
];

// Route API : Obtenir tous les produits
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Route API : Assistant Chatbot IA
app.post('/api/chatbot', (req, res) => {
    const { message } = req.body;
    const msgLower = (message || '').toLowerCase();

    let reply = "Je suis votre assistant TechStore. Comment puis-je vous aider aujourd'hui ?";

    if (msgLower.includes('livraison') || msgLower.includes('frais') || msgLower.includes('delai')) {
        reply = "La livraison est 100% offerte dès 50 € d'achat. Vos commandes sont traitées et expédiées sous 24h à 48h ouvrées.";
    } else if (msgLower.includes('paiement') || msgLower.includes('payer') || msgLower.includes('mvola') || msgLower.includes('paypal') || msgLower.includes('mobile money')) {
        reply = "Nous acceptons Mobile Money (Mvola, Orange Money, Airtel Money), Carte Bancaire, PayPal et les Virements Bancaires.";
    } else if (msgLower.includes('garantie') || msgLower.includes('retour') || msgLower.includes('rembourse')) {
        reply = "Tous nos produits bénéficient d'une garantie de 2 ans et vous disposez de 30 jours 'satisfait ou remboursé'.";
    } else if (msgLower.includes('contact') || msgLower.includes('whatsapp') || msgLower.includes('email')) {
        reply = "Vous pouvez nous contacter directement par WhatsApp au +261 38 99 833 71 ou par email à clhenri153@gmail.com.";
    } else if (msgLower.includes('ps5') || msgLower.includes('iphone') || msgLower.includes('macbook') || msgLower.includes('console')) {
        reply = "Nous avons les derniers modèles en stock ! Utilisez la barre de recherche ou les catégories en haut du site pour les découvrir.";
    }

    res.json({ response: reply });
});

// Route Sitemap XML
app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`;
    xml += `  <url><loc>https://techshop-ecommerce-f9iq.onrender.com/</loc><priority>1.0</priority></url>\n`;
    
    products.forEach(p => {
        xml += `  <url><loc>https://techshop-ecommerce-f9iq.onrender.com/?product=${p.id}</loc><priority>0.8</priority></url>\n`;
    });

    xml += `</urlset>`;
    res.send(xml);
});

// Route robots.txt
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\nSitemap: https://techshop-ecommerce-f9iq.onrender.com/sitemap.xml");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});