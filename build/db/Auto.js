"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auto = [
    {
        brand: 'BMW Serie 3',
        image: 'https://www.bmw.it/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.980.medium.time1651158408008.jpg',
        category: 'Auto',
        subcategory: 'Berlina',
        year: '2022',
        price: 40000,
        reviews: "La BMW Serie 3 offre un'esperienza di guida sportiva e di lusso. Il suo design elegante, le prestazioni potenti e le tecnologie all'avanguardia la rendono una scelta eccellente per gli appassionati di automobili."
    },
    {
        brand: 'Mercedes-Benz Classe C',
        image: 'https://www.patentati.it/listini-auto/foto/mercedes-c-class-40310_sedan-4-doors-mercedes-benz-c-class-sedan-2021-front-side-1.jpg',
        category: 'Auto',
        subcategory: 'Berlina',
        year: '2023',
        price: 45000,
        reviews: "La Mercedes-Benz Classe C è sinonimo di lusso e raffinatezza. Con il suo design elegante, gli interni di alta qualità e le tecnologie all'avanguardia, offre un'esperienza di guida premium che si distingue dalla concorrenza."
    },
    {
        brand: 'Audi A4',
        image: 'https://thedriver.it/listini/foto/audi-a4-38590_berlina-3-vol-4-porte-audi-a4-sedan-2019-front-view-1.jpg',
        category: 'Auto',
        subcategory: 'Berlina',
        year: '2022',
        price: 8000,
        reviews: "L'Audi A4 combina uno stile sofisticato con prestazioni sportive. Con il suo motore potente, la trazione integrale e gli interni di alta qualità, offre una guida raffinata e confortevole."
    },
    {
        brand: 'Honda Accord',
        image: 'https://www.motorisumotori.it/wp-content/uploads/2022/11/Honda-Accord-2023-2.jpg',
        category: 'Auto',
        subcategory: 'Berlina',
        year: '2023',
        price: 25000,
        reviews: "La Honda Accord è un'opzione affidabile e conveniente nel segmento delle berline. Con la sua spaziosità interna, la buona economia di carburante e le caratteristiche di sicurezza avanzate, rappresenta un ottimo rapporto qualità-price."
    },
    {
        brand: 'Toyota Camry',
        image: 'https://www.lautomobile.aci.it/fileadmin/_processed_/b/5/csm_Camry_1_c063ea0f8f.jpg',
        category: 'Auto',
        subcategory: 'Berlina',
        year: '2021',
        price: 27000,
        reviews: "La Toyota Camry è rinomata per la sua affidabilità e praticità. Con un design elegante, una guida confortevole e una vasta gamma di opzioni di trazione, è una scelta popolare tra gli acquirenti di berline."
    },
    {
        brand: 'Toyota RAV4',
        image: 'https://mondointasca.it/wp-content/uploads/2022/07/Rav4-Hybrid.jpg',
        category: 'Auto',
        subcategory: 'SUV',
        year: '2022',
        price: 32000,
        reviews: "Il Toyota RAV4 è un SUV compatto e versatile. Con la sua affidabilità leggendaria, una spaziosa cabina e ottime prestazioni su strada, è una scelta intelligente per coloro che cercano comfort e praticità."
    },
    {
        brand: 'Jeep Grand Cherokee',
        image: 'https://cdn.motor1.com/images/mgl/mMP3r4/s4/foto---jeep-grand-cherokee-4x3-2023---prova.webp',
        category: 'Auto',
        subcategory: 'SUV',
        year: '2023',
        price: 40000,
        reviews: "Il Jeep Grand Cherokee è un SUV robusto e capace. Con un design iconico, una trazione 4x4 eccezionale e una vasta gamma di opzioni di motore, offre prestazioni straordinarie sia su strada che fuoristrada."
    },
    {
        brand: 'Honda CR-V',
        image: 'https://www.motorimagazine.it/wp-content/uploads/2021/10/honda-cr-v.jpg.webp',
        category: 'Auto',
        subcategory: 'SUV',
        year: '2020',
        price: 28000,
        reviews: "L'Honda CR-V è uno dei migliori SUV compatti sul mercato. Con un'eccellente economia di carburante, una cabina spaziosa e una guida confortevole, è una scelta ideale per le famiglie e i pendolari."
    },
    {
        brand: 'BMW X5',
        image: 'https://www.motorionline.com/wp-content/uploads/2022/08/BMW-X5-M-2023-render-Kolesa-1-1024x576.jpg',
        category: 'Auto',
        subcategory: 'SUV',
        year: '2023',
        price: 60000,
        reviews: "La BMW X5 combina lusso, prestazioni e versatilità. Con un interno di alta qualità, motori potenti e tecnologie all'avanguardia, offre un'esperienza di guida premium per coloro che cercano il massimo comfort e stile."
    },
    {
        image: "https://tdrpmimages.azureedge.net/photos/import/202212/0412/5007/07180fad-be35-4d9a-9dbd-cf8caba9e28f.jpg",
        category: "Auto",
        subcategory: "Coupé",
        brand: "BMW",
        year: "2023",
        price: 65000,
        reviews: "Scelta eccellente per un'esperienza di guida sportiva e di lusso."
    },
    {
        image: "https://archibalds.co.nz/wp-content/uploads/2022/12/audi-rs-6-avant-1920x1080-1.jpg",
        category: "Auto",
        subcategory: "Coupé",
        brand: "Audi",
        year: "2022",
        price: 58000,
        reviews: "Una coupé elegante e potente con tecnologia avanzata e interni confortevoli."
    },
    {
        image: "https://edge.pxcrush.net/car/dealer/7b326038735a1a0dce827c9b9470f3bf.jpg?pxc_expires=20230829080949&pxc_clear=1&pxc_signature=370ac3c50c4df67d98b4a61b864f4b90&pxc_size=1795%2C1195&pxc_method=fit",
        category: "Auto",
        subcategory: "Pick-up",
        brand: "Ford",
        year: "2023",
        price: 45000,
        reviews: "Un robusto e affidabile pick-up con ampio spazio di carico e ottime capacità di traino."
    },
    {
        image: "https://trucksales.pxcrush.net/cars/dealer/1hkq34p9dpetjicrcoj2tsl7d.jpg",
        category: "Auto",
        subcategory: "Pick-up",
        brand: "Chevrolet",
        year: "2022",
        price: 42000,
        reviews: "Un versatile pick-up adatto sia al lavoro che alle avventure all'aria aperta, offrendo un comfort di guida e caratteristiche moderne."
    },
];
exports.default = Auto;
