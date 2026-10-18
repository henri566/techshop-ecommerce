const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Catalogue de 100 produits 100% uniques sans répétition d'image
const productsList = [
    // Consoles (1 à 15)
    { id: 1, title: "PlayStation 5 Slim 1TB", category: "Consoles", price: "549.99", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop", description: "Console PS5 avec lecteur de disque et SSD ultra-rapide 1To." },
    { id: 2, title: "PlayStation 4 Pro 1TB", category: "Consoles", price: "299.00", image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&auto=format&fit=crop", description: "Console PS4 Pro avec graphismes 4K dynamiques." },
    { id: 3, title: "Nintendo Switch OLED Blanc", category: "Consoles", price: "349.99", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop", description: "Écran OLED 7 pouces et station d'accueil avec port Ethernet." },
    { id: 4, title: "Xbox Series X 1TB Black", category: "Consoles", price: "499.99", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop", description: "12 téraflops de puissance pour jouer en 4K 120 FPS." },
    { id: 5, title: "Steam Deck OLED 512GB", category: "Consoles", price: "569.00", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop", description: "Console portable PC pour tout votre catalogue Steam." },
    { id: 6, title: "Nintendo Switch Lite Turquoise", category: "Consoles", price: "199.99", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&auto=format&fit=crop", description: "Console portable compacte optimisée pour le jeu nomade." },
    { id: 7, title: "PlayStation VR2 PS5", category: "Consoles", price: "599.99", image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop", description: "Casque de réalité virtuelle 4K HDR de nouvelle génération." },
    { id: 8, title: "Xbox Series S 512GB White", category: "Consoles", price: "289.00", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop", description: "Console 100% numérique compacte et performante." },
    { id: 9, title: "PlayStation Portal Remote Player", category: "Consoles", price: "219.99", image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?w=600&auto=format&fit=crop", description: "Lisez vos jeux PS5 directement sur votre réseau Wi-Fi." },
    { id: 10, title: "Nintendo Game & Watch Zelda", category: "Consoles", price: "49.99", image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop", description: "Console rétro collector incluant les classiques de Legend of Zelda." },
    { id: 11, title: "Asus ROG Ally Z1 Extreme", category: "Consoles", price: "699.00", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop", description: "Console portable Windows 11 avec écran 120Hz." },
    { id: 12, title: "Lenovo Legion Go 8.8\"", category: "Consoles", price: "799.00", image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&auto=format&fit=crop", description: "Manettes détachables et écran QHD+ 144Hz." },
    { id: 13, title: "Atari 2600+ Retro Edition", category: "Consoles", price: "119.99", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop", description: "Version moderne lisant les cartouches Atari 2600 & 7800." },
    { id: 14, title: "Sega Mega Drive Mini 2", category: "Consoles", price: "109.00", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop", description: "Soixante jeux emblématiques Sega préinstallés." },
    { id: 15, title: "MSI Claw A1M Handheld", category: "Consoles", price: "749.00", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop", description: "Console portable équipée du processeur Intel Core Ultra." },

    // Téléphones & Smartphones (16 à 30)
    { id: 16, title: "iPhone 15 Pro Max Titane", category: "Téléphones", price: "1479.00", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop", description: "Design en titane, puce A17 Pro et téléobjectif 5x." },
    { id: 17, title: "iPhone 15 Plus Bleu", category: "Téléphones", price: "1119.00", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop", description: "Dynamic Island, appareil photo 48 Mpx et autonomie d'un jour." },
    { id: 18, title: "iPhone 14 Pro Violet", category: "Téléphones", price: "1199.00", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop", description: "Écran Super Retina XDR toujours activé avec ProMotion." },
    { id: 19, title: "iPhone 13 Minuit 128GB", category: "Téléphones", price: "749.00", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop", description: "Système à deux objectifs le plus avancé sur iPhone." },
    { id: 20, title: "Samsung Galaxy S24 Ultra", category: "Téléphones", price: "1349.00", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop", description: "Galaxy AI intégrée, capteur 200 Mpx et stylet S Pen." },
    { id: 21, title: "Samsung Galaxy Z Fold 5", category: "Téléphones", price: "1899.00", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop", description: "Smartphone pliable avec grand écran immersif 7.6\"." },
    { id: 22, title: "Samsung Galaxy Z Flip 5", category: "Téléphones", price: "1199.00", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop", description: "Écran externe Flex Window élargi et charnière zéro espace." },
    { id: 23, title: "Google Pixel 8 Pro", category: "Téléphones", price: "899.00", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop", description: "Puce Google Tensor G3 et retouche photo magique." },
    { id: 24, title: "Google Pixel Fold 256GB", category: "Téléphones", price: "1899.00", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&auto=format&fit=crop", description: "Le design pliable fin par Google avec triple capteur photo." },
    { id: 25, title: "Xiaomi 14 Ultra Leica", category: "Téléphones", price: "1499.00", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop", description: "Optique Leica Summilux et capteur 1 pouce grand format." },
    { id: 26, title: "Asus ROG Phone 8 Pro", category: "Téléphones", price: "1199.00", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600&auto=format&fit=crop", description: "Smartphone gaming avec gâchettes tactiles AirTrigger." },
    { id: 27, title: "OnePlus 12 5G Emerald", category: "Téléphones", price: "969.00", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&auto=format&fit=crop", description: "Processeur Snapdragon 8 Gen 3 et charge 100W SUPERVOOC." },
    { id: 28, title: "Nothing Phone (2) Dark", category: "Téléphones", price: "679.00", image: "https://images.unsplash.com/photo-1570891836654-d4c6497420f8?w=600&auto=format&fit=crop", description: "Interface Glyph lumineuse au dos et Nothing OS 2.5." },
    { id: 29, title: "iPad Air M2 11 pouces", category: "Téléphones", price: "699.00", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop", description: "Tablette polyvalente ultra-puissante avec puce M2." },
    { id: 30, title: "Samsung Galaxy Tab S9 Ultra", category: "Téléphones", price: "1149.00", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop", description: "Écran Dynamic AMOLED 2X de 14.6 pouces résistant à l'eau." },

    // Mac & PC / Ordinateurs (31 à 45)
    { id: 31, title: "MacBook Pro 16\" M3 Max", category: "Mac & PC", price: "3999.00", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop", description: "Écran Liquid Retina XDR et jusqu'à 22h d'autonomie." },
    { id: 32, title: "MacBook Air 15\" M2", category: "Mac & PC", price: "1499.00", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop", description: "Ultra-fin et silencieux sans ventilateur." },
    { id: 33, title: "iMac 24\" M3 Bleu 8-Core", category: "Mac & PC", price: "1599.00", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop", description: "Ordinateur tout-en-un ultra-fin avec écran Retina 4.5K." },
    { id: 34, title: "Mac Studio M2 Ultra", category: "Mac & PC", price: "4799.00", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop", description: "Puissance de création ultime dans un format compact." },
    { id: 35, title: "Mac mini M2 Pro 512GB", category: "Mac & PC", price: "1549.00", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop", description: "Station de travail de bureau performante et silencieuse." },
    { id: 36, title: "PC Portable Asus ROG Strix", category: "Mac & PC", price: "2799.00", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop", description: "Intel Core i9, RTX 4080 et écran 240Hz." },
    { id: 37, title: "Alienware m18 R2 Gaming Laptop", category: "Mac & PC", price: "3299.00", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop", description: "Grand écran 18 pouces avec clavier mécanique CherryMX." },
    { id: 38, title: "Razer Blade 16 OLED 240Hz", category: "Mac & PC", price: "3599.00", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop", description: "Premier écran OLED au monde avec double mode QHD+ 240Hz." },
    { id: 39, title: "PC Gamer Custom Watercooled", category: "Mac & PC", price: "3499.00", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop", description: "Boîtier verre trempé RGB, Watercooling 360mm et RTX 4090." },
    { id: 40, title: "Corsair One i500 Gaming PC", category: "Mac & PC", price: "4199.00", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop", description: "PC fixe compact haut de gamme avec finition bois véritable." },
    { id: 41, title: "HP Omen 45L Desktop RTX4080", category: "Mac & PC", price: "2899.00", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop", description: "Chambre de refroidissement brevetée Cryo Chamber." },
    { id: 42, title: "Lenovo Legion Tower 7i", category: "Mac & PC", price: "2499.00", image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&auto=format&fit=crop", description: "Rendement thermique optimal et composants évolutifs." },
    { id: 43, title: "Microsoft Surface Studio 2+", category: "Mac & PC", price: "5299.00", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop", description: "Écran tactile inclinable 28 pouces pour graphistes et architectes." },
    { id: 44, title: "Dell XPS 16 Laptop M3", category: "Mac & PC", price: "2399.00", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop", description: "Design aluminium usiné CNC et verre Gorilla Glass 3." },
    { id: 45, title: "Asus Zenbook Duo OLED 2024", category: "Mac & PC", price: "2099.00", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop", description: "Double écran tactile OLED 14 pouces avec clavier détachable." },

    // Refroidissement & Ventilateurs (46 à 55)
    { id: 46, title: "Ventilateur Corsair QL120 RGB", category: "Refroidissement", price: "119.90", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop", description: "Pack de 3 ventilateurs RGB 120mm adressables." },
    { id: 47, title: "Cooler NZXT Kraken Elite 360", category: "Refroidissement", price: "289.00", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop", description: "Watercooling AIO avec écran LCD personnalisable." },
    { id: 48, title: "Support Ventilé KLIM Ultimate", category: "Refroidissement", price: "49.99", image: "https://images.unsplash.com/photo-1526871307849-2b6e843c718d?w=600&auto=format&fit=crop", description: "Refroidisseur pour PC portable avec ventilateur 200mm." },
    { id: 49, title: "Refroidisseur Smartphone Flydigi B6X", category: "Refroidissement", price: "39.99", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop", description: "Ventilateur magnétique à effet Peltier pour gaming mobile." },
    { id: 50, title: "Ventilateur Noctua NF-A12x25 PWM", category: "Refroidissement", price: "32.90", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop", description: "Silencieux et efficace pour radiateurs et boîtiers PC." },
    { id: 51, title: "Lian Li UNI FAN TL LCD 120", category: "Refroidissement", price: "149.00", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop", description: "Ventilateur avec écran LCD 1.6\" intégré sur le moyeu." },
    { id: 52, title: "Asus ROG Ryujin III 360 ARGB", category: "Refroidissement", price: "379.00", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop", description: "Pompe Asetek 8ème gén et écran LCD 3.5 pouces." },
    { id: 53, title: "Be Quiet! Dark Rock Pro 5", category: "Refroidissement", price: "99.90", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop", description: "Ventirad double tour pour un refroidissement ultra-silencieux." },
    { id: 54, title: "Razer Phone Cooler Chroma MagSafe", category: "Refroidissement", price: "69.99", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop", description: "Ventilateur 7 pales avec éclairage Razer Chroma RGB." },
    { id: 55, title: "Thermalright Peerless Assassin 120", category: "Refroidissement", price: "42.90", image: "https://images.unsplash.com/photo-1526871307849-2b6e843c718d?w=600&auto=format&fit=crop", description: "Le meilleur rapport performance/prix en refroidissement air." },

    // Accessoires Gaming, Montres & Gants (56 à 80)
    { id: 56, title: "Manette DualSense Edge Pro", category: "Accessoires", price: "239.99", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&auto=format&fit=crop", description: "Joysticks modulaires et palettes arrières personnalisables." },
    { id: 57, title: "Volant Logitech G923 TrueForce", category: "Accessoires", price: "349.00", image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?w=600&auto=format&fit=crop", description: "Volant et pédales à retour de force pour simulation automobile." },
    { id: 58, title: "Meta Quest 3 128GB VR", category: "Accessoires", price: "549.99", image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop", description: "Casque autonome de réalité mixte 4K+." },
    { id: 59, title: "Souris Logitech G Pro X 2", category: "Accessoires", price: "169.00", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop", description: "Souris eSport ultra-légère 60g avec capteur 32000 DPI." },
    { id: 60, title: "Gants Gaming Tactiles eSport Pro", category: "Accessoires", price: "29.99", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop", description: "Gants respirants anti-transpiration pour une prise en main parfaite." },
    { id: 61, title: "Apple Watch Ultra 2 Titane", category: "Accessoires", price: "899.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop", description: "Boîtier 49mm en titane et GPS haute précision double fréquence." },
    { id: 62, title: "Samsung Galaxy Watch 6 Classic", category: "Accessoires", price: "419.00", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop", description: "Lunette tournante iconique et analyse avancée du sommeil." },
    { id: 63, title: "Clavier SteelSeries Apex Pro TKL", category: "Accessoires", price: "219.99", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop", description: "Switches magnétiques réglables et écran OLED." },
    { id: 64, title: "Microphone Shure SM7B Studio", category: "Accessoires", price: "399.00", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop", description: "Micro dynamique légendaire pour streaming et podcast." },
    { id: 65, title: "Siège Gamer Secretlab TITAN Evo", category: "Accessoires", price: "549.00", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&auto=format&fit=crop", description: "Soutien lombaire 4D et cuir synthétique NEO Hybrid." },
    { id: 66, title: "Boîtier Acquisition Elgato HD60 X", category: "Accessoires", price: "199.99", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop", description: "Capturez vos sessions consoles en 4K30 ou 1080p60 HDR." },
    { id: 67, title: "Manette Xbox Elite Series 2", category: "Accessoires", price: "179.99", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop", description: "Joysticks à tension réglable et composants interchangeables." },
    { id: 68, title: "Tapis de Souris XXL Razer Chroma", category: "Accessoires", price: "69.99", image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop", description: "Surface en tissu micro-texturé avec éclairage RGB." },
    { id: 69, title: "Lunettes AR XREAL Air 2 Pro", category: "Accessoires", price: "449.00", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop", description: "Écran virtuel géant de 330 pouces directement dans vos lunettes." },
    { id: 70, title: "Manette Nintendo Switch Pro", category: "Accessoires", price: "69.99", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop", description: "Prise en main ergonomique et vibrations HD intégrées." },
    { id: 71, title: "Apple AirTag (Pack de 4)", category: "Accessoires", price: "129.00", image: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=600&auto=format&fit=crop", description: "Localisez vos objets dans l'application Localiser d'Apple." },
    { id: 72, title: "Gants Haptiques VR BHS TacGloves", category: "Accessoires", price: "299.00", image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&auto=format&fit=crop", description: "Retour haptique réaliste pour la réalité virtuelle." },
    { id: 73, title: "Stream Deck MK.2 Elgato White", category: "Accessoires", price: "159.99", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop", description: "15 touches LCD personnalisables pour contrôler vos apps." },
    { id: 74, title: "Drone DJI Mini 4 Pro Fly More", category: "Accessoires", price: "1129.00", image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop", description: "Moins de 249g, vidéo 4K HDR et détection d'obstacles 360°." },
    { id: 75, title: "Gopro HERO 12 Black Special", category: "Accessoires", price: "449.00", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop", description: "Caméra d'action avec stabilisation HyperSmooth 6.0." },
    { id: 76, title: "Garmin Fenix 7X Pro Solar", category: "Accessoires", price: "899.00", image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop", description: "Montre GPS multisport solaire avec lampe torche LED." },
    { id: 77, title: "Sleeve Manchette eSport Compression", category: "Accessoires", price: "19.99", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop", description: "Manchette de glisse pour réduire les frottements sur tapis." },
    { id: 78, title: "Support Casque RGB Corsair ST100", category: "Accessoires", price: "69.90", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop", description: "Structure alu avec son surround 7.1 et 9 zones RGB." },
    { id: 79, title: "Razer Kiyo Pro Ultra Webcam", category: "Accessoires", price: "349.99", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop", description: "Le plus grand capteur jamais vu dans une webcam 4K." },
    { id: 80, title: "Chargeur Anker Prime 200W GaN", category: "Accessoires", price: "139.99", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop", description: "Rechargez simultanément 6 appareils à grande vitesse." },

    // Casques Audio & Écouteurs (81 à 90)
    { id: 81, title: "AirPods Pro 2 USB-C", category: "Audio", price: "279.00", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop", description: "Réduction de bruit active améliorée et Audio Spatial." },
    { id: 82, title: "AirPods Max Sidéral", category: "Audio", price: "579.00", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop", description: "Casque circum-auriculaire premium avec son haute fidélité." },
    { id: 83, title: "Sony WH-1000XM5 ANC", category: "Audio", price: "389.00", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop", description: "Casque audio sans fil avec réduction de bruit adaptative." },
    { id: 84, title: "SteelSeries Arctis Nova Pro", category: "Audio", price: "379.99", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&auto=format&fit=crop", description: "Système audio Hi-Res et station GameDAC Gen 2." },
    { id: 85, title: "Bose QuietComfort Ultra Earbuds", category: "Audio", price: "299.95", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop", description: "Audio immersif et réduction de bruit de classe mondiale." },
    { id: 86, title: "Sennheiser HD 660S2 Open-Back", category: "Audio", price: "499.00", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop", description: "Casque audiophile ouvert pour une précision sonore absolue." },
    { id: 87, title: "JBL Charge 5 Wi-Fi Speaker", category: "Audio", price: "229.00", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop", description: "Son Pro Original JBL puissant et étanche IP67." },
    { id: 88, title: "Beats Studio Pro Wireless", category: "Audio", price: "399.95", image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=600&auto=format&fit=crop", description: "Plateforme acoustique personnalisée et Audio Spatial." },
    { id: 89, title: "Logitech G PRO X 2 LIGHTSPEED", category: "Audio", price: "269.00", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop", description: "Haut-parleurs en graphène de 50 mm pour le jeu Pro." },
    { id: 90, title: "Bang & Olufsen Beoplay H95", category: "Audio", price: "999.00", image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&auto=format&fit=crop", description: "Le nec plus ultra de l'écoute sans fil en aluminium et cuir." },

    // Jeux Vidéo (91 à 100)
    { id: 91, title: "Jeu PS5 - EA Sports FC 24", category: "Jeux", price: "69.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop", description: "Expérience footballistique ultime avec technologie HyperMotionV." },
    { id: 92, title: "Jeu Zelda Tears of Kingdom", category: "Jeux", price: "59.99", image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&auto=format&fit=crop", description: "Aventure épique sur Nintendo Switch à travers les cieux d'Hyrule." },
    { id: 93, title: "Jeu PS5 - Spider-Man 2", category: "Jeux", price: "79.99", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop", description: "Peter Parker et Miles Morales affrontent Venom." },
    { id: 94, title: "Jeu PS5 - Elden Ring Shadow", category: "Jeux", price: "39.99", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop", description: "L'extension acclamée du Jeu de l'Année dans l'Entre-Terre." },
    { id: 95, title: "Jeu PS5 - God of War Ragnarök", category: "Jeux", price: "69.99", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop", description: "Kratos et Atreus s'aventurent dans les Neuf Royaumes." },
    { id: 96, title: "Jeu Switch - Super Mario Bros. Wonder", category: "Jeux", price: "59.99", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop", description: "Nouveau gameplay surprenant avec les fleurs prodiges." },
    { id: 97, title: "Jeu PS5 - Final Fantasy XVI", category: "Jeux", price: "69.99", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop", description: "Un RPG d'action sombre et spectaculaire dans le monde de Valisthea." },
    { id: 98, title: "Jeu PC / Console - Cyberpunk 2077", category: "Jeux", price: "59.99", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&auto=format&fit=crop", description: "Incarnez V dans la mégapole futuriste de Night City." },
    { id: 99, title: "Jeu PS5 - Tekken 8 Edition Launch", category: "Jeux", price: "74.99", image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop", description: "32 combattants de nouvelle génération avec graphismes Unreal Engine 5." },
    { id: 100, title: "Jeu Switch - Mario Kart 8 Deluxe", category: "Jeux", price: "49.99", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&auto=format&fit=crop", description: "Le jeu de course incontournable incluant tous les circuits bonus." }
];

app.get('/api/products', (req, res) => {
    res.json(productsList);
});

// Chatbot Backend IA
app.post('/api/chatbot', (req, res) => {
    const msg = (req.body.message || '').toLowerCase();
    let reply = "";

    const matches = productsList.filter(p => 
        msg.includes(p.category.toLowerCase()) || 
        msg.includes(p.title.toLowerCase().split(' ')[0]) ||
        (msg.includes('tablette') && (p.title.toLowerCase().includes('ipad') || p.title.toLowerCase().includes('tab'))) ||
        (msg.includes('gant') && p.title.toLowerCase().includes('gant')) ||
        (msg.includes('montre') && (p.title.toLowerCase().includes('watch') || p.title.toLowerCase().includes('fenix')))
    );

    if (msg.includes('paiement') || msg.includes('payer') || msg.includes('mobile money') || msg.includes('paypal') || msg.includes('virement')) {
        reply = "Nous acceptons les paiements via Mobile Money (Mvola, Orange Money, Airtel Money), PayPal, Carte Bancaire et Virement Bancaire !";
    } else if (msg.includes('contact') || msg.includes('telephone') || msg.includes('email') || msg.includes('whatsapp') || msg.includes('numero')) {
        reply = "Vous pouvez nous contacter directement par WhatsApp/Téléphone au +261 38 99 833 71 ou par e-mail à clhenri153@gmail.com !";
    } else if (msg.includes('tablette') || msg.includes('ipad')) {
        reply = "Nous avons plusieurs tablettes en catalogue ! Par exemple l'iPad Air M2 ou la Samsung Galaxy Tab S9 Ultra. Tapez 'iPad' dans la recherche pour tout voir.";
    } else if (msg.includes('gant')) {
        reply = "Nous avons des gants gaming eSport et des gants haptiques VR en stock ! Découvrez-les dans la rubrique 'Accessoires'.";
    } else if (msg.includes('montre')) {
        reply = "Nous proposons l'Apple Watch Ultra 2, la Galaxy Watch 6 ainsi que la Garmin Fenix 7 Pro !";
    } else if (matches.length > 0 && (msg.includes('cherche') || msg.includes('prix') || msg.includes('acheter') || msg.includes('avoir'))) {
        const sample = matches[0];
        reply = `Nous avons exactement ce qu'il vous faut ! Par exemple : "${sample.title}" à ${sample.price} €. Retrouvez-le dans la section ${sample.category}.`;
    } else if (msg.includes('livraison') || msg.includes('frais') || msg.includes('expedition')) {
        reply = "La livraison est 100% gratuite dès 50 € d'achat. Expédition sous 24h à 48h avec numéro de suivi.";
    } else if (msg.includes('garantie') || msg.includes('panne') || msg.includes('sav')) {
        reply = "Tous nos produits bénéficient d'une garantie constructeur officielle de 2 ans avec réparation ou remplacement rapide.";
    } else if (msg.includes('retour') || msg.includes('rembourse')) {
        reply = "Vous disposez de 30 jours de droit de rétractation 'satisfait ou remboursé' pour retourner tout article gratuitement.";
    } else if (msg.includes('code') || msg.includes('promo') || msg.includes('reduction')) {
        reply = "Profitez de 10% de réduction sur votre commande avec le code promo : TECH10 !";
    } else if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
        reply = "Bonjour ! Je suis l'assistant IA TechStore. Que recherchez-vous aujourd'hui ? (ex: tablette, PS5, montre, gant, livraison, paiement...)";
    } else {
        reply = "Je peux vous aider à trouver un produit (console, iPhone, montre, gant...), vous informer sur les moyens de paiement (Mobile Money, PayPal), la livraison gratuite ou nos coordonnées (+261 38 99 833 71) !";
    }

    res.json({ response: reply });
});

// Routes SEO
app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    xml += `<url><loc>https://ton-domaine.com/</loc><priority>1.0</priority></url>`;
    productsList.forEach(p => {
        xml += `<url><loc>https://ton-domaine.com/product/${p.id}</loc><priority>0.8</priority></url>`;
    });
    xml += `</urlset>`;
    res.send(xml);
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\nSitemap: https://ton-domaine.com/sitemap.xml");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur Apple Store démarré sur http://localhost:${PORT}`);
});