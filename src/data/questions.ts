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
    text: "Saya suka menulis caption panjang di media sosial dan senang ketika banyak yang merespons.",
    type: 'linguistic'
  },
  {
    id: 2,
    text: "Saat berdiskusi tentang film atau isu sosial, saya bisa menyusun argumen dengan baik.",
    type: 'linguistic'
  },
  {
    id: 3,
    text: "Membaca novel atau menonton series dengan dialog yang bagus membuat saya tertarik.",
    type: 'linguistic'
  },

  // Logical-Mathematical (3 questions)
  {
    id: 4,
    text: "Saya menikmati permainan strategi seperti catur atau puzzle yang membutuhkan logika.",
    type: 'logical'
  },
  {
    id: 5,
    text: "Ketika ada masalah, saya suka memecahnya menjadi langkah-langkah kecil agar lebih mudah diselesaikan.",
    type: 'logical'
  },
  {
    id: 6,
    text: "Pelajaran Matematika atau coding terasa menantang, tapi saya puas ketika berhasil menyelesaikannya.",
    type: 'logical'
  },

  // Visual-Spatial (3 questions)
  {
    id: 7,
    text: "Saya peduli dengan tampilan feed media sosial dan memikirkan warna serta layout-nya.",
    type: 'visual'
  },
  {
    id: 8,
    text: "Saya mudah membayangkan desain atau ruangan sebelum benar-benar dibuat.",
    type: 'visual'
  },
  {
    id: 9,
    text: "Menonton video atau film dengan visual yang bagus membuat saya kagum.",
    type: 'visual'
  },

  // Bodily-Kinesthetic (3 questions)
  {
    id: 10,
    text: "Olahraga, menari, atau aktivitas fisik lainnya membuat saya bersemangat dan senang.",
    type: 'kinesthetic'
  },
  {
    id: 11,
    text: "Saya lebih suka praktik langsung daripada hanya mendengarkan teori di kelas.",
    type: 'kinesthetic'
  },
  {
    id: 12,
    text: "Membuat kerajinan tangan, memasak, atau mengutak-atik barang adalah hal yang menyenangkan bagi saya.",
    type: 'kinesthetic'
  },

  // Musical (3 questions)
  {
    id: 13,
    text: "Saya punya playlist musik yang tertata rapi dan bisa membedakan berbagai genre musik.",
    type: 'musical'
  },
  {
    id: 14,
    text: "Setelah mendengar lagu baru sekali saja, saya sudah bisa mengingat melodinya.",
    type: 'musical'
  },
  {
    id: 15,
    text: "Bermain alat musik atau bernyanyi adalah salah satu cara saya mengekspresikan perasaan.",
    type: 'musical'
  },

  // Interpersonal (3 questions)
  {
    id: 16,
    text: "Di kelompok, saya sering menjadi penengah jika ada perselisihan.",
    type: 'interpersonal'
  },
  {
    id: 17,
    text: "Saya mudah mengenali suasana hati orang lain dari gestur atau ekspresinya.",
    type: 'interpersonal'
  },
  {
    id: 18,
    text: "Bekerja sama dalam kelompok atau mengerjakan proyek bersama teman membuat saya lebih produktif.",
    type: 'interpersonal'
  },

  // Intrapersonal (3 questions)
  {
    id: 19,
    text: "Waktu sendiri sangat penting bagi saya untuk merenung dan mengisi ulang energi.",
    type: 'intrapersonal'
  },
  {
    id: 20,
    text: "Saya memahami kelebihan dan kekurangan diri sendiri dengan baik.",
    type: 'intrapersonal'
  },
  {
    id: 21,
    text: "Menulis jurnal atau catatan tentang perasaan membantu kesehatan mental saya.",
    type: 'intrapersonal'
  },

  // Naturalist (3 questions)
  {
    id: 22,
    text: "Mendaki, berkemah, atau sekadar jalan-jalan ke taman membuat saya tenang dan bahagia.",
    type: 'naturalist'
  },
  {
    id: 23,
    text: "Saya peduli dengan isu lingkungan dan suka mengikuti informasi tentang keberlanjutan.",
    type: 'naturalist'
  },
  {
    id: 24,
    text: "Saya bisa mengenali perbedaan kecil di alam, seperti jenis tanaman atau perubahan cuaca.",
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
    description: "Kamu adalah ahli kata-kata! Kecerdasan linguistik berarti kamu memiliki kemampuan luar biasa dalam menggunakan bahasa, baik lisan maupun tulisan. Kamu bisa menyampaikan ide dengan jelas, meyakinkan orang lain, dan memahami nuansa bahasa yang tidak semua orang bisa tangkap. Di era digital ini, kemampuanmu sangat berharga—dari membuat konten menarik sampai menjadi pembicara yang menginspirasi!",
    strengths: [
      "Pandai bercerita dan membuat narasi yang menarik",
      "Mudah menghafal kutipan, lirik, atau informasi berbasis teks",
      "Kemampuan debat dan persuasi yang kuat",
      "Peka terhadap makna dan ritme kata-kata"
    ],
    learningStyle: "Kamu belajar paling efektif dengan membaca, menulis, dan berdiskusi. Coba buat rangkuman dengan kata-kata sendiri, ikut klub debat, atau rekam dirimu menjelaskan materi. Podcast dan audiobook juga cocok untukmu!",
    careers: [
      "Content Creator / Copywriter",
      "Jurnalis / Editor",
      "Pengacara / Diplomat",
      "Public Relations Specialist",
      "Penulis / Scriptwriter"
    ]
  },
  logical: {
    name: "Logis-Matematis",
    emoji: "🧮",
    color: "bg-brutal-cyan",
    description: "Otakmu adalah mesin analisis yang hebat! Kecerdasan logis-matematis membuatmu pandai berpikir sistematis, mengenali pola, dan memecahkan masalah kompleks. Kamu bukan hanya pandai dengan angka, tapi juga ahli dalam penalaran dan berpikir kritis. Di dunia yang semakin berbasis data, kemampuanmu sangat dicari oleh banyak perusahaan!",
    strengths: [
      "Pemecahan masalah yang sistematis dan efisien",
      "Kemampuan analisis data dan pengenalan pola",
      "Berpikir logis dan objektif dalam mengambil keputusan",
      "Terampil dalam eksperimen dan metode ilmiah"
    ],
    learningStyle: "Kamu butuh struktur dan logika dalam belajar. Buat diagram alur, peta konsep dengan hubungan sebab-akibat, atau uraikan konsep menjadi formula. Proyek coding, puzzle, dan studi kasus adalah cara terbaik kamu menyerap ilmu!",
    careers: [
      "Software Engineer / Data Scientist",
      "Analis Keuangan / Aktuaris",
      "Peneliti Sains",
      "Arsitek / Perencana Kota",
      "Dokter / Peneliti Medis"
    ]
  },
  visual: {
    name: "Visual-Spasial",
    emoji: "🎨",
    color: "bg-brutal-lime",
    description: "Kamu punya mata yang artistik dan pikiran yang bisa memvisualisasikan apa saja! Kecerdasan visual-spasial berarti kamu bisa berpikir dalam gambar, memahami hubungan ruang, dan menciptakan gambaran mental yang jelas. Kamu adalah orang yang bisa 'melihat' solusi sebelum orang lain, dan kreativitas visualmu bisa mengubah ide menjadi karya yang menakjubkan!",
    strengths: [
      "Kemampuan visualisasi 3D yang kuat",
      "Rasa estetika dan desain yang tajam",
      "Mudah membaca peta, diagram, dan representasi visual",
      "Kreativitas dalam menciptakan karya visual"
    ],
    learningStyle: "Kamu adalah pembelajar visual sejati! Gunakan diagram, infografis, dan video tutorial. Stabilo warna-warni, catatan bergambar, dan papan visi adalah alatmu. Jangan hanya membaca—gambarkan konsepnya!",
    careers: [
      "Graphic Designer / UI-UX Designer",
      "Arsitek / Interior Designer",
      "Fotografer / Videografer",
      "Art Director / Creative Director",
      "Game Designer / Animator"
    ]
  },
  kinesthetic: {
    name: "Kinestetik-Jasmani",
    emoji: "🏃",
    color: "bg-brutal-orange",
    description: "Tubuhmu adalah instrumen yang luar biasa! Kecerdasan kinestetik berarti kamu memiliki koordinasi fisik yang sangat baik dan belajar paling efektif lewat gerakan dan pengalaman langsung. Kamu bukan tipe yang bisa duduk diam lama-lama—kamu perlu bergerak, menyentuh, dan merasakan untuk benar-benar memahami sesuatu. Kecerdasan fisikmu adalah bakat yang sangat berharga!",
    strengths: [
      "Koordinasi tubuh dan kemampuan motorik yang sangat baik",
      "Kemampuan belajar lewat praktik langsung",
      "Stamina fisik dan kesadaran tubuh tinggi",
      "Terampil dalam membuat, membangun, dan aktivitas praktis"
    ],
    learningStyle: "Kamu perlu bergerak untuk fokus! Belajar sambil berjalan, gunakan gerakan tangan saat menghafal, atau buat model fisik dari konsep yang dipelajari. Eksperimen laboratorium, role-playing, dan kunjungan lapangan adalah cara belajar terbaikmu!",
    careers: [
      "Atlet / Pelatih Olahraga",
      "Dokter Bedah / Fisioterapis",
      "Chef / Seniman Kuliner",
      "Koreografer / Aktor",
      "Pengrajin / Insinyur Mekanik"
    ]
  },
  musical: {
    name: "Musikal-Ritmis",
    emoji: "🎵",
    color: "bg-brutal-purple",
    description: "Telingamu adalah instrumen yang sangat peka! Kecerdasan musikal berarti kamu memiliki sensitivitas luar biasa terhadap suara, ritme, dan melodi. Kamu bisa mendengar nuansa yang orang lain lewatkan, dan musik bukan hanya hiburan tapi juga cara kamu memproses dunia. Kemampuanmu untuk mengenali dan menciptakan pola dalam suara adalah bakat yang langka dan berharga!",
    strengths: [
      "Kemampuan mengenali nada dengan akurat",
      "Mudah menghafal dan menciptakan melodi",
      "Rasa ritme dan waktu yang kuat",
      "Kemampuan mengekspresikan emosi lewat musik"
    ],
    learningStyle: "Musik adalah cara belajar terbaikmu! Ubah materi menjadi lagu atau rap, belajar dengan musik latar yang tepat, dan gunakan teknik hafalan berbasis ritme. Podcast dan pembelajaran audio juga sangat efektif untukmu!",
    careers: [
      "Musisi / Produser Musik",
      "Sound Engineer / Audio Designer",
      "Terapis Musik",
      "DJ / Penyiar Radio",
      "Komposer / Penulis Lagu"
    ]
  },
  interpersonal: {
    name: "Interpersonal",
    emoji: "🤝",
    color: "bg-brutal-pink",
    description: "Kamu adalah orang yang pandai bergaul secara alami! Kecerdasan interpersonal berarti kamu memiliki kemampuan luar biasa untuk memahami, berinteraksi, dan bekerja sama dengan orang lain. Kamu bisa membaca suasana ruangan, merasakan mood orang, dan menavigasi dinamika sosial dengan lancar. Di dunia yang membutuhkan kolaborasi dan kecerdasan emosional, kemampuanmu dicari oleh semua organisasi!",
    strengths: [
      "Empati dan kemampuan memahami perspektif orang lain",
      "Kepemimpinan dan kemampuan memotivasi tim",
      "Kemampuan komunikasi dan negosiasi yang kuat",
      "Mediator alami dalam konflik"
    ],
    learningStyle: "Kamu belajar paling baik bersama orang lain! Kelompok belajar, tutor sebaya, dan proyek kolaboratif adalah zona nyamanmu. Diskusi, role-playing, dan mengajar orang lain membantumu memahami materi lebih dalam!",
    careers: [
      "HR Manager / Recruiter",
      "Konselor / Psikolog",
      "Direktur Sales / Manajer Marketing",
      "Guru / Spesialis Pendidikan",
      "Pekerja Sosial / Penggerak Komunitas"
    ]
  },
  intrapersonal: {
    name: "Intrapersonal",
    emoji: "🧘",
    color: "bg-brutal-cyan",
    description: "Kamu mengenal dirimu sendiri lebih baik dari siapa pun! Kecerdasan intrapersonal berarti kamu memiliki kesadaran diri yang mendalam dan kemampuan untuk merefleksikan pikiran dan perasaanmu sendiri. Kamu tidak butuh validasi eksternal karena kamu punya kompas dalam yang kuat. Di era yang penuh distraksi, kemampuanmu untuk introspeksi dan tetap setia pada diri sendiri adalah kebijaksanaan yang langka!",
    strengths: [
      "Kesadaran diri dan kecerdasan emosional tinggi",
      "Kemampuan menetapkan tujuan dan motivasi diri",
      "Pemikiran mandiri dan pengambilan keputusan",
      "Refleksi mendalam dan pemikiran filosofis"
    ],
    learningStyle: "Kamu butuh ruang untuk memproses informasi sendiri. Sesi belajar mandiri, menulis jurnal, dan pembelajaran sesuai kecepatan sendiri cocok untukmu. Sebelum belajar, hubungkan materi dengan tujuan dan nilai pribadimu untuk makna yang lebih dalam!",
    careers: [
      "Psikolog / Life Coach",
      "Penulis / Filsuf",
      "Entrepreneur / Solopreneur",
      "Peneliti / Akademisi",
      "Pemimpin Spiritual / Konselor"
    ]
  },
  naturalist: {
    name: "Naturalis",
    emoji: "🌿",
    color: "bg-brutal-lime",
    description: "Kamu punya koneksi khusus dengan alam! Kecerdasan naturalis berarti kamu sensitif terhadap dunia alami, bisa mengenali pola di alam, dan memiliki kepedulian terhadap lingkungan. Kamu memperhatikan hal-hal yang orang lain lewatkan—dari perubahan cuaca sampai perilaku hewan. Di era krisis iklim, perspektif dan kepedulianmu terhadap bumi sangat dibutuhkan!",
    strengths: [
      "Kemampuan klasifikasi dan kategorisasi yang kuat",
      "Observasi detail terhadap fenomena alam",
      "Koneksi dengan makhluk hidup dan ekosistem",
      "Kesadaran lingkungan dan pola pikir keberlanjutan"
    ],
    learningStyle: "Bawa pembelajaran ke luar ruangan! Kunjungan lapangan, jalan-jalan di alam sambil belajar, dan contoh nyata dari alam membantumu terhubung dengan materi. Analogi dengan sistem alam juga efektif untuk memahami konsep abstrak!",
    careers: [
      "Ilmuwan Lingkungan / Ekolog",
      "Dokter Hewan / Biolog Kelautan",
      "Arsitek Lanskap / Urban Farmer",
      "Fotografer Satwa Liar / Pembuat Dokumenter",
      "Konsultan Keberlanjutan / Pengembang Teknologi Hijau"
    ]
  }
};

export const likertOptions = [
  { value: 1, label: "Tidak Sama Sekali", emoji: "😑" },
  { value: 2, label: "Jarang", emoji: "😕" },
  { value: 3, label: "Kadang-kadang", emoji: "😐" },
  { value: 4, label: "Sering", emoji: "😊" },
  { value: 5, label: "Sangat Sering", emoji: "🔥" }
];
