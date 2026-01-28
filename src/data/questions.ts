export type IntelligenceType = 
  | 'linguistic'
  | 'logical'
  | 'visual'
  | 'kinesthetic'
  | 'musical'
  | 'interpersonal'
  | 'intrapersonal'
  | 'naturalist';

export interface Question {
  id: number;
  text: string;
  type: IntelligenceType;
}

export const questions: Question[] = [
  // Linguistic (3 questions)
  {
    id: 1,
    text: "Saya suka bercerita atau menulis tentang pengalaman sehari-hari, seperti kegiatan di desa atau cerita rakyat.",
    type: 'linguistic'
  },
  {
    id: 2,
    text: "Saat berdiskusi di kelas atau di rumah, saya bisa menyampaikan pendapat dengan jelas.",
    type: 'linguistic'
  },
  {
    id: 3,
    text: "Saya senang membaca buku, majalah, atau mendengarkan cerita dari orang tua dan tetangga.",
    type: 'linguistic'
  },

  // Logical-Mathematical (3 questions)
  {
    id: 4,
    text: "Saya suka menghitung hasil panen, mengatur keuangan, atau memecahkan soal matematika.",
    type: 'logical'
  },
  {
    id: 5,
    text: "Ketika ada masalah di rumah atau sekolah, saya mencoba mencari solusi dengan cara yang teratur.",
    type: 'logical'
  },
  {
    id: 6,
    text: "Saya tertarik memahami cara kerja mesin, alat pertanian, atau teknologi sederhana.",
    type: 'logical'
  },

  // Visual-Spatial (3 questions)
  {
    id: 7,
    text: "Saya suka menggambar, membuat sketsa, atau menata ruangan agar terlihat rapi dan indah.",
    type: 'visual'
  },
  {
    id: 8,
    text: "Saya mudah mengingat jalan atau lokasi tempat-tempat di desa meskipun jarang ke sana.",
    type: 'visual'
  },
  {
    id: 9,
    text: "Saya suka memperhatikan keindahan alam sekitar seperti sawah, gunung, atau sungai.",
    type: 'visual'
  },

  // Bodily-Kinesthetic (3 questions)
  {
    id: 10,
    text: "Saya senang bekerja di ladang, berkebun, atau melakukan pekerjaan yang menggunakan tenaga fisik.",
    type: 'kinesthetic'
  },
  {
    id: 11,
    text: "Saya lebih suka belajar dengan praktik langsung daripada hanya mendengarkan penjelasan.",
    type: 'kinesthetic'
  },
  {
    id: 12,
    text: "Saya suka olahraga, menari tradisional, atau aktivitas fisik lainnya bersama teman-teman.",
    type: 'kinesthetic'
  },

  // Musical (3 questions)
  {
    id: 13,
    text: "Saya suka mendengarkan atau memainkan musik, baik musik modern maupun lagu daerah.",
    type: 'musical'
  },
  {
    id: 14,
    text: "Saya mudah mengingat nada lagu atau suara-suara khas di lingkungan sekitar.",
    type: 'musical'
  },
  {
    id: 15,
    text: "Saya senang bernyanyi, bermain alat musik tradisional, atau ikut kegiatan kesenian di desa.",
    type: 'musical'
  },

  // Interpersonal (3 questions)
  {
    id: 16,
    text: "Saya sering membantu menyelesaikan perselisihan antara teman atau anggota keluarga.",
    type: 'interpersonal'
  },
  {
    id: 17,
    text: "Saya mudah memahami perasaan orang lain dan tahu kapan mereka sedang sedih atau senang.",
    type: 'interpersonal'
  },
  {
    id: 18,
    text: "Saya senang bekerja sama dalam kegiatan gotong royong atau kerja kelompok di sekolah.",
    type: 'interpersonal'
  },

  // Intrapersonal (3 questions)
  {
    id: 19,
    text: "Saya butuh waktu sendiri untuk berpikir dan merenung tentang kehidupan.",
    type: 'intrapersonal'
  },
  {
    id: 20,
    text: "Saya memahami apa yang menjadi kelebihan dan kekurangan diri sendiri.",
    type: 'intrapersonal'
  },
  {
    id: 21,
    text: "Saya suka menetapkan tujuan hidup dan memikirkan masa depan saya.",
    type: 'intrapersonal'
  },

  // Naturalist (3 questions)
  {
    id: 22,
    text: "Saya senang mengamati tanaman, hewan, atau perubahan cuaca di sekitar tempat tinggal.",
    type: 'naturalist'
  },
  {
    id: 23,
    text: "Saya peduli dengan kebersihan lingkungan dan kelestarian alam di desa.",
    type: 'naturalist'
  },
  {
    id: 24,
    text: "Saya bisa membedakan jenis-jenis tanaman, hewan, atau tanda-tanda alam dengan mudah.",
    type: 'naturalist'
  }
];

export interface IntelligenceInfo {
  name: string;
  emoji: string;
  color: string;
  description: string;
  strengths: string[];
  learningStyle: string;
  careers: string[];
}

export const intelligenceInfo: Record<IntelligenceType, IntelligenceInfo> = {
  linguistic: {
    name: "Linguistik-Verbal",
    emoji: "📚",
    color: "bg-brutal-pink",
    description: "Kamu adalah ahli kata-kata! Kecerdasan linguistik berarti kamu memiliki kemampuan luar biasa dalam menggunakan bahasa, baik lisan maupun tulisan. Kamu bisa menyampaikan ide dengan jelas, meyakinkan orang lain, dan memahami nuansa bahasa yang tidak semua orang bisa tangkap. Kemampuan ini sangat berharga untuk menjadi pemimpin di masyarakat, guru, atau penulis yang menginspirasi!",
    strengths: [
      "Pandai bercerita dan menyampaikan informasi",
      "Mudah menghafal dan mengingat informasi berbasis teks",
      "Kemampuan berbicara di depan umum yang baik",
      "Peka terhadap makna dan penggunaan kata-kata"
    ],
    learningStyle: "Kamu belajar paling efektif dengan membaca, menulis, dan berdiskusi. Coba buat rangkuman dengan kata-kata sendiri, bergabung dengan kelompok diskusi, atau ceritakan kembali materi yang dipelajari kepada orang lain.",
    careers: [
      "Guru / Dosen",
      "Jurnalis / Penulis",
      "Penyiar Radio / MC",
      "Pengacara / Diplomat",
      "Pegawai Administrasi"
    ]
  },
  logical: {
    name: "Logis-Matematis",
    emoji: "🧮",
    color: "bg-brutal-cyan",
    description: "Otakmu adalah mesin analisis yang hebat! Kecerdasan logis-matematis membuatmu pandai berpikir sistematis, mengenali pola, dan memecahkan masalah kompleks. Kamu bukan hanya pandai dengan angka, tapi juga ahli dalam penalaran dan berpikir kritis. Kemampuan ini sangat berguna untuk mengelola usaha, mengatur keuangan, atau bekerja di bidang teknik!",
    strengths: [
      "Pemecahan masalah yang sistematis dan efisien",
      "Kemampuan menghitung dan menganalisis dengan baik",
      "Berpikir logis dan objektif dalam mengambil keputusan",
      "Terampil dalam memahami cara kerja sesuatu"
    ],
    learningStyle: "Kamu butuh struktur dan logika dalam belajar. Buat diagram, tabel perbandingan, atau uraikan konsep menjadi langkah-langkah. Praktik langsung dan pemecahan masalah adalah cara terbaik kamu menyerap ilmu!",
    careers: [
      "Akuntan / Bendahara",
      "Teknisi / Mekanik",
      "Programmer / IT",
      "Guru Matematika / IPA",
      "Pengusaha / Manajer"
    ]
  },
  visual: {
    name: "Visual-Spasial",
    emoji: "🎨",
    color: "bg-brutal-lime",
    description: "Kamu punya mata yang artistik dan pikiran yang bisa memvisualisasikan apa saja! Kecerdasan visual-spasial berarti kamu bisa berpikir dalam gambar, memahami hubungan ruang, dan menciptakan gambaran mental yang jelas. Kamu adalah orang yang bisa 'melihat' solusi sebelum orang lain, dan kreativitas visualmu bisa mengubah ide menjadi karya yang indah!",
    strengths: [
      "Kemampuan membayangkan dan menggambar yang kuat",
      "Rasa keindahan dan desain yang tajam",
      "Mudah membaca peta dan memahami arah",
      "Kreativitas dalam menciptakan karya visual"
    ],
    learningStyle: "Kamu adalah pembelajar visual sejati! Gunakan gambar, diagram, dan warna saat belajar. Buat catatan bergambar atau peta konsep. Jangan hanya membaca—gambarkan konsepnya!",
    careers: [
      "Seniman / Pengrajin",
      "Desainer / Dekorator",
      "Fotografer / Videografer",
      "Arsitek / Tukang Bangunan",
      "Penjahit / Pengrajin Batik"
    ]
  },
  kinesthetic: {
    name: "Kinestetik-Jasmani",
    emoji: "🏃",
    color: "bg-brutal-orange",
    description: "Tubuhmu adalah instrumen yang luar biasa! Kecerdasan kinestetik berarti kamu memiliki koordinasi fisik yang sangat baik dan belajar paling efektif lewat gerakan dan pengalaman langsung. Kamu bukan tipe yang bisa duduk diam lama-lama—kamu perlu bergerak, menyentuh, dan merasakan untuk benar-benar memahami sesuatu. Kemampuan fisikmu adalah bakat yang sangat berharga!",
    strengths: [
      "Koordinasi tubuh dan kemampuan motorik yang sangat baik",
      "Kemampuan belajar lewat praktik langsung",
      "Stamina fisik dan keterampilan tangan yang tinggi",
      "Terampil dalam membuat dan memperbaiki barang"
    ],
    learningStyle: "Kamu perlu bergerak untuk fokus! Belajar sambil berjalan, gunakan gerakan tangan saat menghafal, atau buat model dari bahan-bahan yang ada. Praktik langsung di lapangan atau laboratorium adalah cara belajar terbaikmu!",
    careers: [
      "Petani / Peternak Sukses",
      "Atlet / Pelatih Olahraga",
      "Tukang / Pengrajin",
      "Perawat / Bidan",
      "Penari / Seniman Pertunjukan"
    ]
  },
  musical: {
    name: "Musikal-Ritmis",
    emoji: "🎵",
    color: "bg-brutal-purple",
    description: "Telingamu adalah instrumen yang sangat peka! Kecerdasan musikal berarti kamu memiliki sensitivitas luar biasa terhadap suara, ritme, dan melodi. Kamu bisa mendengar nuansa yang orang lain lewatkan, dan musik bukan hanya hiburan tapi juga cara kamu memproses dunia. Kemampuanmu untuk mengenali dan menciptakan pola dalam suara adalah bakat yang langka!",
    strengths: [
      "Kemampuan mengenali nada dan ritme dengan akurat",
      "Mudah menghafal dan menciptakan melodi",
      "Peka terhadap suara-suara di lingkungan",
      "Kemampuan mengekspresikan emosi lewat musik"
    ],
    learningStyle: "Musik adalah cara belajar terbaikmu! Ubah materi menjadi lagu atau nyanyian, belajar dengan musik latar yang tenang, dan gunakan teknik hafalan berbasis ritme. Dengarkan penjelasan berulang-ulang juga efektif untukmu!",
    careers: [
      "Musisi / Penyanyi",
      "Guru Kesenian",
      "Dalang / Seniman Tradisional",
      "Teknisi Audio",
      "Pembuat Alat Musik"
    ]
  },
  interpersonal: {
    name: "Interpersonal",
    emoji: "🤝",
    color: "bg-brutal-pink",
    description: "Kamu adalah orang yang pandai bergaul secara alami! Kecerdasan interpersonal berarti kamu memiliki kemampuan luar biasa untuk memahami, berinteraksi, dan bekerja sama dengan orang lain. Kamu bisa membaca suasana, merasakan perasaan orang, dan menjalin hubungan dengan baik. Kemampuanmu sangat dibutuhkan untuk memimpin dan menggerakkan masyarakat!",
    strengths: [
      "Empati dan kemampuan memahami orang lain",
      "Kepemimpinan dan kemampuan menggerakkan orang",
      "Kemampuan komunikasi dan negosiasi yang baik",
      "Penengah yang adil dalam konflik"
    ],
    learningStyle: "Kamu belajar paling baik bersama orang lain! Kelompok belajar, diskusi, dan mengajar teman adalah cara terbaikmu. Bicarakan materi dengan orang lain untuk memahaminya lebih dalam!",
    careers: [
      "Kepala Desa / Tokoh Masyarakat",
      "Guru / Pendidik",
      "Pekerja Sosial",
      "Pedagang / Pengusaha",
      "Perawat / Tenaga Kesehatan"
    ]
  },
  intrapersonal: {
    name: "Intrapersonal",
    emoji: "🧘",
    color: "bg-brutal-cyan",
    description: "Kamu mengenal dirimu sendiri lebih baik dari siapa pun! Kecerdasan intrapersonal berarti kamu memiliki kesadaran diri yang mendalam dan kemampuan untuk merefleksikan pikiran dan perasaanmu sendiri. Kamu punya pendirian yang kuat dan tidak mudah terpengaruh orang lain. Kemampuanmu untuk introspeksi adalah kebijaksanaan yang langka!",
    strengths: [
      "Kesadaran diri dan pengendalian emosi yang tinggi",
      "Kemampuan menetapkan tujuan dan motivasi diri",
      "Pemikiran mandiri dan pengambilan keputusan",
      "Refleksi mendalam dan bijaksana"
    ],
    learningStyle: "Kamu butuh waktu untuk memproses informasi sendiri. Belajar mandiri, menulis catatan pribadi, dan merenung adalah caramu. Hubungkan materi dengan tujuan hidupmu untuk makna yang lebih dalam!",
    careers: [
      "Penulis / Peneliti",
      "Konselor / Pembimbing",
      "Pengusaha Mandiri",
      "Pemuka Agama",
      "Filsuf / Pemikir"
    ]
  },
  naturalist: {
    name: "Naturalis",
    emoji: "🌿",
    color: "bg-brutal-lime",
    description: "Kamu punya koneksi khusus dengan alam! Kecerdasan naturalis berarti kamu sensitif terhadap dunia alami, bisa mengenali pola di alam, dan memiliki kepedulian terhadap lingkungan. Kamu memperhatikan hal-hal yang orang lain lewatkan—dari perubahan cuaca sampai perilaku hewan. Kemampuanmu sangat berharga untuk pertanian, peternakan, dan pelestarian alam!",
    strengths: [
      "Kemampuan mengenali dan membedakan jenis makhluk hidup",
      "Observasi detail terhadap fenomena alam",
      "Koneksi dengan tanaman, hewan, dan lingkungan",
      "Kesadaran lingkungan dan cuaca yang tinggi"
    ],
    learningStyle: "Bawa pembelajaran ke luar ruangan! Belajar sambil mengamati alam, gunakan contoh dari pertanian atau lingkungan sekitar, dan hubungkan teori dengan praktik di sawah atau kebun!",
    careers: [
      "Petani / Peternak Ahli",
      "Dokter Hewan / Penyuluh Pertanian",
      "Ahli Kehutanan / Konservasi",
      "Peneliti Pertanian",
      "Pemandu Wisata Alam"
    ]
  }
};

export const likertOptions = [
  { value: 1, label: "Tidak Pernah", emoji: "😑" },
  { value: 2, label: "Jarang", emoji: "😕" },
  { value: 3, label: "Kadang", emoji: "😐" },
  { value: 4, label: "Sering", emoji: "😊" },
  { value: 5, label: "Selalu", emoji: "🔥" }
];
