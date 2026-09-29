// Data Konfigurasi Terpusat — Warung PKK Desa Dauh Puri Kaja
// Anda dapat mengedit nomor WhatsApp, daftar menu, harga, dan info toko langsung di file ini.

export const STORE_INFO = {
  name: "Warung PKK Desa Dauh Puri Kaja",
  village: "Desa Dauh Puri Kaja",
  district: "Kecamatan Denpasar Utara",
  city: "Kota Denpasar, Bali",
  address: "Kantor / Gerai TP PKK Desa Dauh Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80231",
  phone: "6281234567890", // Ganti dengan nomor WhatsApp resmi pengurus
  phoneDisplay: "+62 812-3456-7890",
  hoursWeekday: "Senin – Sabtu, 08.00 – 17.00 WITA",
  hoursWeekend: "Minggu: Melayani pesanan katering dengan konfirmasi H-1",
  instagram: "@dauhpruikaja.pkk",
  instagramUrl: "https://instagram.com",
  mapsUrl: "https://maps.google.com/?q=Desa+Dauh+Puri+Kaja+Denpasar",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.67499990869!2d115.2037149!3d-8.6477145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24090288820c3%3A0x5030bfbca830db0!2sDauh%20Puri%20Kaja%2C%20Kec.%20Denpasar%20Utara%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
};

export const CATEGORIES = [
  { id: "all", label: "Semua Sajian" },
  { id: "nasi-kotak", label: "Nasi Kotak & Bento" },
  { id: "adat", label: "Tradisi & Adat Bali" },
  { id: "prasmanan", label: "Buffet Prasmanan" },
  { id: "snack", label: "Snack & Jamuan Rapat" },
  { id: "pmt", label: "Program Gizi PMT" }
];

export const MENU_ITEMS = [
  {
    id: "nasi-kotak-premium",
    category: "nasi-kotak",
    name: "Paket Nasi Kotak Premium Komplit",
    price: "IDR 25.000",
    priceNum: 25000,
    unit: "per kotak",
    tag: "Best Seller",
    image: "/assets/Menu_Nasi_Kotak_3.jpeg",
    aspect: "aspect-square",
    description: "Sajian bento kompartemen eksklusif beralas daun pisang segar. Dilengkapi sate lilit Bali batang bambu, ayam rempah serundeng gurih, telur bumbu pindang/balado, mie goreng, perkedel kentang, serundeng kelapa, kerupuk, dan buah jeruk segar.",
    composition: ["Sate Lilit Bambu", "Ayam Serundeng", "Telur Pindang/Balado", "Mie Goreng", "Perkedel", "Buah Jeruk"]
  },
  {
    id: "nasi-yasa-upakara",
    category: "adat",
    name: "Nasi Yasa Tamas Upakara Bali",
    price: "IDR 30.000",
    priceNum: 30000,
    unit: "per porsi",
    tag: "Upacara Adat",
    image: "/assets/Nasi_Yasa.jpeg",
    aspect: "aspect-[4/5]",
    description: "Sajian sakral tradisional beralas wadah tamas janur bulat yang dianyam rapi. Menyajikan nasi kuning gurih beraroma kunyit alami, sate lilit batang bambu lebar, ayam bumbu Bali, udang krispi renyah, telur pindang, sambal embe, dan hiasan bunga jepun segar.",
    composition: ["Nasi Kuning Gurih", "Sate Lilit Tamas", "Ayam Bumbu Bali", "Udang Krispi", "Sambal Embe Khas"]
  },
  {
    id: "nasi-kotak-reguler",
    category: "nasi-kotak",
    name: "Nasi Kotak Reguler Ayam Lengkuas",
    price: "IDR 18.000",
    priceNum: 18000,
    unit: "per kotak",
    tag: "Eco-Kraft",
    image: "/assets/Menu_Nasi_Kotak_1.jpeg",
    aspect: "aspect-square",
    description: "Nasi putih pulen hangat beralas daun pisang, potongan ayam goreng bumbu lengkuas meresap gurih, tahu & tempe goreng renyah bumbu kuning, lalapan segar (timun & selada air), serta cup sambal terasi terpisah.",
    composition: ["Ayam Lengkuas", "Tahu & Tempe Kuning", "Lalapan Segar", "Sambal Cup Terpisah", "Wadah Eco-Kraft"]
  },
  {
    id: "nasi-kotak-official-box",
    category: "nasi-kotak",
    name: "Paket Nasi Kotak Boks Putih Bersegel",
    price: "IDR 22.000",
    priceNum: 22000,
    unit: "per kotak",
    tag: "Standar Kedinasan",
    image: "/assets/Menu_Nasi_Kotak_2.jpeg",
    aspect: "aspect-[4/3]",
    description: "Boks scalloped putih bersih berstempel segel resmi Warung PKK. Higienitas terstandar untuk konsumsi rapat dinas kantor, seminar pemerintahan, dan musyawarah desa dengan jaminan mutu sanitasi pangan.",
    composition: ["Kemasan Segel Resmi", "Ayam Ungkep Rempah", "Sayur Tumis Segar", "Sambal Cup Higienis", "Sendok & Tisu"]
  },
  {
    id: "nasi-kotak-spesial-rapat",
    category: "nasi-kotak",
    name: "Nasi Kotak Rapat & Syukuran Desa",
    price: "IDR 20.000",
    priceNum: 20000,
    unit: "per kotak",
    tag: "Pilihan Rapat",
    image: "/assets/Menu_Nasi_Kotak_4.jpeg",
    aspect: "aspect-square",
    description: "Porsi mantap mengenyangkan dengan racikan lauk rumahan khas ibu PKK: ayam suwir pedas manis gurih, oseng tempe kacang, telur dadar iris / balado, sambal terasi, dan lalapan segar beralas daun pisang.",
    composition: ["Ayam Suwir Gurih", "Oseng Tempe Kacang", "Telur Balado", "Kerupuk Udang", "Sambal Khas"]
  },
  {
    id: "nasi-jinggo-autentik",
    category: "adat",
    name: "Nasi Jinggo Autentik Daun Pisang",
    price: "IDR 8.000",
    priceNum: 8000,
    unit: "per bungkus",
    tag: "Tradisi Bali",
    image: "/assets/Nasi_Jinggo.jpeg",
    aspect: "aspect-square",
    description: "Nasi bungkus daun pisang asli dengan aroma asap daun khas Denpasar. Dilengkapi suwiran ayam rempah ketumbar, telur rebus bumbu, serundeng kelapa manis gurih, mie goreng kampung, dan sambal ulek pedas mantap.",
    composition: ["Nasi Daun Pisang", "Ayam Suwir Ketumbar", "Serundeng Gurih", "Mie Kampung", "Sambal Ulek Pedas"]
  },
  {
    id: "prasmanan-tradisional-bali",
    category: "prasmanan",
    name: "Buffet Prasmanan Tradisional Bali",
    price: "IDR 45.000",
    priceNum: 45000,
    unit: "per pax (min. 30 pax)",
    tag: "Katering Acara",
    image: "/assets/Menu_Prasmanan_1.jpeg",
    aspect: "aspect-[16/11]",
    description: "Penyajian piring gerabah etnik beralas selada segar. Komposisi hidangan lengkap: sate lilit batang bambu melingkar, ayam suwir pelalah (sisit), perkedel kentang rempah, urap jukut kacang panjang, telur bumbu, serta sambal matah & embe segar.",
    composition: ["Sate Lilit Melingkar", "Ayam Suwir Sisit", "Urap Jukut Kacang", "Sambal Matah & Embe", "Wadah Gerabah Etnik"]
  },
  {
    id: "prasmanan-selera-nusantara",
    category: "prasmanan",
    name: "Buffet Prasmanan Selera Nusantara",
    price: "IDR 40.000",
    priceNum: 40000,
    unit: "per pax (min. 30 pax)",
    tag: "Hajatan & Resepsi",
    image: "/assets/Menu_Prasmanan_2.jpeg",
    aspect: "aspect-square",
    description: "Variasi menu jamuan pesta dan hajatan warga: ayam goreng renyah saus manis oriental, mie goreng hajatan wortel sawi, tumis capcay sayur segar, telur balado cabai merah, mangkuk acar timun wortel segar, dan kerupuk kaleng renyah.",
    composition: ["Ayam Saus Oriental", "Capcay Sayur Segar", "Telur Balado", "Acar Timun Segar", "Peralatan Buffet Bersih"]
  },
  {
    id: "snack-box-rapat",
    category: "snack",
    name: "Snack Box Rapat Kedinasan",
    price: "IDR 12.000",
    priceNum: 12000,
    unit: "per boks",
    tag: "Rapat Kantor",
    image: "/assets/Snack_Box_2.jpeg",
    aspect: "aspect-square",
    description: "Kemasan boks kardus rapi dan higienis: botol air mineral 330ml, risoles ragout ayam gurih dengan cabai rawit hijau, bakpao mini kukus putih lembut, kue basah talam pandan gurih santan, dan camilan kacang bawang renyah.",
    composition: ["Air Mineral 330ml", "Risoles Ragout Ayam", "Bakpao Mini Kukus", "Kue Talam Pandan", "Kacang Bawang"]
  },
  {
    id: "jamuan-coffee-break",
    category: "snack",
    name: "Paket Jamuan Meja Coffee Break",
    price: "IDR 15.000",
    priceNum: 15000,
    unit: "per peserta",
    tag: "Buffet Break",
    image: "/assets/Snack_Box_1.jpeg",
    aspect: "aspect-[16/11]",
    description: "Penataan meja panjang beralas mika rapi untuk rapat kantor desa/instansi. Menyajikan aneka jajan pasar tradisional Bali beralas daun, dispenser air panas/dingin, gula, teh celup, dan varian kopi saset.",
    composition: ["Aneka Jajan Pasar", "Kopi & Teh Hangat", "Gula & Creamer", "Penataan Meja Rapi"]
  },
  {
    id: "pmt-nutrisi-posyandu",
    category: "pmt",
    name: "Paket PMT Nutrisi Posyandu Lengkap",
    price: "IDR 18.000",
    priceNum: 18000,
    unit: "per porsi",
    tag: "Program Gizi Desa",
    image: "/assets/Menu_PMT_Posyandu_1.jpeg",
    aspect: "aspect-square",
    description: "Paket konsumsi gizi seimbang berbasis pangan lokal: olahan ikan/daging bumbu rempah lembut, tempe bacem gurih, sayur bening segar dalam wadah mika tertutup rapat, telur rebus utuh, dan pendamping susu bernutrisi tinggi.",
    composition: ["Olahan Protein Hewani", "Tempe Bacem", "Sayur Bening Segar", "Telur Rebus Utuh", "Susu Nutrisi"]
  },
  {
    id: "sup-kaldu-segar-cup",
    category: "pmt",
    name: "Sup Kaldu Sayur Segar Porsi Cup",
    price: "IDR 8.000",
    priceNum: 8000,
    unit: "per cup",
    tag: "Porsi Praktis",
    image: "/assets/Menu_PMT_Posyandu_2.jpeg",
    aspect: "aspect-square",
    description: "Penyajian wadah cup higienis tertutup rapat: sup kaldu ayam/ikan bening hangat kaya rempah dengan irisan wortel manis, tomat segar, dan taburan daun seledri harum untuk balita & lansia.",
    composition: ["Kaldu Asli Hangat", "Wortel & Tomat Manis", "Seledri Harum", "Cup Higienis Food-Grade"]
  }
];

export const HIGHLIGHTS = [
  {
    number: "01",
    title: "100% Olahan Tangan Ibu PKK",
    desc: "Seluruh sajian diracik segar oleh ibu-ibu penggerak TP PKK Desa Dauh Puri Kaja dengan ketulusan dan ketelitian resep warisan keluarga."
  },
  {
    number: "02",
    title: "Higienitas & Segel Mutu Resmi",
    desc: "Setiap boks dan kemasan dilindungi stempel segel jaminan mutu makanan bersih dan aman sesuai standar sanitasi pangan dinas."
  },
  {
    number: "03",
    title: "Kapasitas Ratusan Porsi & Faktur Resmi",
    desc: "Siap melayani pesanan katering skala besar hingga 500+ porsi per hari dengan kelengkapan administrasi/nota resmi untuk instansi."
  }
];
