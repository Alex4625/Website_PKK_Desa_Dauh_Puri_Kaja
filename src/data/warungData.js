// Data Konfigurasi Terpusat — Warung PKK Desa Dauh Puri Kaja
// Anda dapat mengedit nomor WhatsApp, daftar menu, harga, dan info toko langsung di file ini.

export const STORE_INFO = {
  name: "Warung PKK Desa Dauh Puri Kaja",
  village: "Desa Dauh Puri Kaja",
  district: "Kecamatan Denpasar Utara",
  city: "Kota Denpasar, Bali",
  address: "Kantor / Gerai TP PKK Desa Dauh Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80231",
  phone: "6285237158836",
  phoneDisplay: "+62 852-3715-8836",
  hoursWeekday: "Senin – Sabtu, 08.00 – 17.00 WITA",
  hoursWeekend: "Minggu: Melayani pesanan katering dengan konfirmasi H-1",
  instagram: "@dauhpruikaja.pkk",
  instagramUrl: "https://instagram.com",
  mapsUrl: "https://maps.app.goo.gl/DuRzdiBP3Y1EftWV6?g_st=aw",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.2!2d115.2141113!3d-8.6412729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f00768f4717%3A0x74f4e169c148d89c!2sWarung%20PKK%20Desa%20Dauh%20Puri%20Kaja!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
};

export const CATEGORIES = [
  { id: "all", label: "Semua Sajian" },
  { id: "nasi-kotak", label: "Nasi Kotak" },
  { id: "prasmanan", label: "Prasmanan" },
  { id: "snack", label: "Snack Box" },
  { id: "tradisi", label: "Tradisi Bali" },
  { id: "pmt", label: "Program Gizi PMT" }
];

export const MENU_ITEMS = [
  {
    id: "nasi-kotak",
    category: "nasi-kotak",
    name: "Nasi Kotak",
    price: "Rp15.000",
    priceNum: 15000,
    unit: "per kotak",
    tag: "Best Seller",
    images: [
      "/assets/Menu_Nasi_Kotak_1.jpeg",
      "/assets/Menu_Nasi_Kotak_2.jpeg",
      "/assets/Menu_Nasi_Kotak_3.jpeg",
      "/assets/Menu_Nasi_Kotak_4.jpeg"
    ]
  },
  {
    id: "pmt-posyandu",
    category: "pmt",
    name: "PMT Posyandu",
    price: "Gratis untuk Banjar-Banjar",
    priceNum: 0,
    unit: "",
    tag: "Program Gizi Desa",
    images: [
      "/assets/Menu_PMT_Posyandu_1.jpeg",
      "/assets/Menu_PMT_Posyandu_2.jpeg"
    ]
  },
  {
    id: "prasmanan",
    category: "prasmanan",
    name: "Prasmanan",
    price: "Rp40.000",
    priceNum: 40000,
    unit: "Untuk info lebih lanjut hubungi Admin",
    tag: "Katering Acara",
    images: [
      "/assets/Menu_Prasmanan_1.jpeg",
      "/assets/Menu_Prasmanan_2.jpeg"
    ]
  },
  {
    id: "nasi-jinggo",
    category: "tradisi",
    name: "Nasi Jinggo",
    price: "Rp8.000",
    priceNum: 8000,
    unit: "per bungkus",
    tag: "Tradisi Bali",
    images: [
      "/assets/Nasi_Jinggo.jpeg"
    ]
  },
  {
    id: "nasi-yasa",
    category: "tradisi",
    name: "Nasi Yasa",
    price: "Rp20.000",
    priceNum: 20000,
    unit: "per porsi",
    tag: "Upacara Adat",
    images: [
      "/assets/Nasi_Yasa.jpeg"
    ]
  },
  {
    id: "snack-box",
    category: "snack",
    name: "Snack Box",
    price: "Rp7.000",
    priceNum: 7000,
    unit: "per boks",
    tag: "Rapat Kantor",
    images: [
      "/assets/Snack_Box_1.jpeg",
      "/assets/Snack_Box_2.jpeg"
    ]
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
