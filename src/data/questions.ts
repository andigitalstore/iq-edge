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
    text: "Gue sering nulis caption panjang di Instagram yang bikin orang pada nge-like dan komen.",
    type: 'linguistic'
  },
  {
    id: 2,
    text: "Debat sama temen soal film atau isu sosial? Gue jago banget nyusun argumen biar menang!",
    type: 'linguistic'
  },
  {
    id: 3,
    text: "Baca novel atau nonton series yang dialognya bagus bikin gue excited banget.",
    type: 'linguistic'
  },

  // Logical-Mathematical (3 questions)
  {
    id: 4,
    text: "Main game strategi kayak Chess atau puzzle logic itu hobi gue, otak langsung nyala!",
    type: 'logical'
  },
  {
    id: 5,
    text: "Kalo ada masalah, gue suka banget breakdown jadi langkah-langkah kecil biar gampang diselesaiin.",
    type: 'logical'
  },
  {
    id: 6,
    text: "Pelajaran Matematika atau coding tuh challenging, tapi somehow gue ngerasa satisfied pas berhasil.",
    type: 'logical'
  },

  // Visual-Spatial (3 questions)
  {
    id: 7,
    text: "Feed Instagram gue harus aesthetic, gue mikirin banget warna dan layout-nya.",
    type: 'visual'
  },
  {
    id: 8,
    text: "Gue gampang banget ngebayangin ruangan atau desain sebelum beneran dibuat.",
    type: 'visual'
  },
  {
    id: 9,
    text: "Nonton video essay atau film dengan sinematografi keren bikin gue terpesona.",
    type: 'visual'
  },

  // Bodily-Kinesthetic (3 questions)
  {
    id: 10,
    text: "Olahraga, dance, atau aktivitas fisik bikin gue energized dan happy.",
    type: 'kinesthetic'
  },
  {
    id: 11,
    text: "Gue lebih suka praktek langsung daripada cuma dengerin teori di kelas.",
    type: 'kinesthetic'
  },
  {
    id: 12,
    text: "Bikin DIY craft, masak, atau utak-atik barang itu fun banget buat gue.",
    type: 'kinesthetic'
  },

  // Musical (3 questions)
  {
    id: 13,
    text: "Playlist Spotify gue super curated, dan gue bisa bedain genre musik dengan mudah.",
    type: 'musical'
  },
  {
    id: 14,
    text: "Denger lagu baru sekali aja, gue udah bisa hafal melody atau beat-nya.",
    type: 'musical'
  },
  {
    id: 15,
    text: "Main alat musik atau nyanyi itu salah satu cara gue express feelings.",
    type: 'musical'
  },

  // Interpersonal (3 questions)
  {
    id: 16,
    text: "Di grup, gue sering jadi penengah kalau ada drama atau konflik.",
    type: 'interpersonal'
  },
  {
    id: 17,
    text: "Gue gampang banget ngebaca mood orang dari gestur atau ekspresinya.",
    type: 'interpersonal'
  },
  {
    id: 18,
    text: "Kerja kelompok atau project bareng temen-temen bikin gue lebih produktif.",
    type: 'interpersonal'
  },

  // Intrapersonal (3 questions)
  {
    id: 19,
    text: "Me-time itu sacred buat gue, di situ gue bisa reflect dan recharge.",
    type: 'intrapersonal'
  },
  {
    id: 20,
    text: "Gue paham banget kelebihan dan kekurangan diri sendiri.",
    type: 'intrapersonal'
  },
  {
    id: 21,
    text: "Journaling atau nulis diary tentang perasaan itu helpful banget buat mental gue.",
    type: 'intrapersonal'
  },

  // Naturalist (3 questions)
  {
    id: 22,
    text: "Hiking, camping, atau sekadar jalan-jalan ke taman bikin gue calm dan happy.",
    type: 'naturalist'
  },
  {
    id: 23,
    text: "Gue concern banget sama isu lingkungan dan suka follow akun tentang sustainability.",
    type: 'naturalist'
  },
  {
    id: 24,
    text: "Gue bisa notice perbedaan kecil di alam, kayak jenis tanaman atau perubahan cuaca.",
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
    description: "Lo adalah master kata-kata! Kecerdasan linguistik berarti lo punya kemampuan luar biasa dalam menggunakan bahasa, baik lisan maupun tulisan. Lo bisa menyampaikan ide dengan jelas, meyakinkan orang lain, dan memahami nuansa bahasa yang nggak semua orang bisa tangkap. Di era digital ini, skill lo super valuable—dari bikin content viral sampai jadi public speaker yang inspiratif!",
    strengths: [
      "Jago storytelling dan bikin narasi yang engaging",
      "Mudah menghafal quotes, lirik, atau informasi berbasis teks",
      "Skill debat dan persuasi yang kuat",
      "Peka terhadap makna dan ritme kata-kata"
    ],
    learningStyle: "Lo belajar paling efektif dengan membaca, menulis, dan diskusi. Coba bikin rangkuman dengan kata-kata sendiri, join club debat, atau rekam diri lo jelasin materi ke diri sendiri. Podcast dan audiobook juga cocok banget buat lo!",
    careers: [
      "Content Creator / Copywriter",
      "Jurnalis / Editor",
      "Lawyer / Diplomat",
      "Public Relations Specialist",
      "Author / Scriptwriter"
    ]
  },
  logical: {
    name: "Logis-Matematis",
    emoji: "🧮",
    color: "bg-brutal-cyan",
    description: "Otak lo adalah mesin analisis yang powerful! Kecerdasan logis-matematis bikin lo jago banget dalam berpikir sistematis, mengenali pola, dan memecahkan masalah kompleks. Lo nggak cuma jago angka, tapi juga ahli dalam reasoning dan critical thinking. Di dunia yang makin data-driven, skill lo adalah goldmine yang dicari banyak perusahaan top!",
    strengths: [
      "Problem-solving yang sistematis dan efisien",
      "Kemampuan analisis data dan pattern recognition",
      "Berpikir logis dan objektif dalam mengambil keputusan",
      "Jago dalam eksperimen dan metode scientific"
    ],
    learningStyle: "Lo butuh struktur dan logic dalam belajar. Bikin flowchart, mind map dengan hubungan sebab-akibat, atau breakdown konsep jadi formula. Coding projects, puzzle, dan case studies adalah cara terbaik lo menyerap ilmu!",
    careers: [
      "Software Engineer / Data Scientist",
      "Financial Analyst / Actuary",
      "Research Scientist",
      "Architect / Urban Planner",
      "Doctor / Medical Researcher"
    ]
  },
  visual: {
    name: "Visual-Spasial",
    emoji: "🎨",
    color: "bg-brutal-lime",
    description: "Lo punya mata yang artistik dan pikiran yang bisa visualize anything! Kecerdasan visual-spasial berarti lo bisa berpikir dalam gambar, memahami hubungan ruang, dan menciptakan mental images yang vivid. Lo adalah orang yang bisa 'melihat' solusi sebelum orang lain, dan kreativitas visual lo bisa transform ide jadi realita yang stunning!",
    strengths: [
      "Kemampuan visualisasi 3D yang kuat",
      "Sense of aesthetics dan design yang tajam",
      "Mudah membaca peta, diagram, dan representasi visual",
      "Kreativitas dalam menciptakan karya visual"
    ],
    learningStyle: "Lo adalah visual learner sejati! Gunakan diagram, infografis, dan video tutorials. Highlighter warna-warni, sketch notes, dan vision board adalah tools lo. Jangan cuma baca—gambar konsepnya!",
    careers: [
      "Graphic Designer / UI-UX Designer",
      "Architect / Interior Designer",
      "Photographer / Videographer",
      "Art Director / Creative Director",
      "Game Designer / Animator"
    ]
  },
  kinesthetic: {
    name: "Kinestetik-Jasmani",
    emoji: "🏃",
    color: "bg-brutal-orange",
    description: "Tubuh lo adalah instrumen yang powerful! Kecerdasan kinestetik berarti lo punya koordinasi fisik yang excellent dan belajar paling baik lewat gerakan dan pengalaman hands-on. Lo bukan tipe yang bisa duduk diam lama-lama—lo perlu bergerak, menyentuh, dan merasakan untuk truly understand sesuatu. Physical intelligence lo adalah gift yang underrated tapi super valuable!",
    strengths: [
      "Koordinasi tubuh dan motor skills yang excellent",
      "Kemampuan belajar lewat praktik langsung",
      "Physical stamina dan body awareness tinggi",
      "Skill dalam crafting, building, dan aktivitas hands-on"
    ],
    learningStyle: "Lo perlu gerak untuk fokus! Belajar sambil jalan, gunakan gestur tangan saat menghafal, atau bikin model fisik dari konsep yang lo pelajari. Lab experiments, role-playing, dan field trips adalah surga belajar lo!",
    careers: [
      "Athlete / Sports Coach",
      "Surgeon / Physical Therapist",
      "Chef / Culinary Artist",
      "Dance Choreographer / Actor",
      "Craftsperson / Mechanical Engineer"
    ]
  },
  musical: {
    name: "Musikal-Ritmis",
    emoji: "🎵",
    color: "bg-brutal-purple",
    description: "Telinga lo adalah instrument yang perfectly tuned! Kecerdasan musikal berarti lo punya sensitivitas luar biasa terhadap suara, ritme, dan melodi. Lo bisa mendengar nuansa yang orang lain miss, dan musik bukan cuma entertainment tapi juga cara lo memproses dunia. Kemampuan lo untuk recognize dan create patterns dalam suara adalah skill yang rare dan berharga!",
    strengths: [
      "Perfect pitch atau kemampuan mengenali nada dengan akurat",
      "Mudah menghafal dan menciptakan melodi",
      "Sense of rhythm dan timing yang kuat",
      "Kemampuan mengekspresikan emosi lewat musik"
    ],
    learningStyle: "Musik adalah memory hack lo! Ubah materi jadi lagu atau rap, belajar dengan background music yang tepat, dan gunakan mnemonics berbasis ritme. Podcast dan audio learning juga sangat efektif buat lo!",
    careers: [
      "Musician / Music Producer",
      "Sound Engineer / Audio Designer",
      "Music Therapist",
      "DJ / Radio Broadcaster",
      "Composer / Songwriter"
    ]
  },
  interpersonal: {
    name: "Interpersonal",
    emoji: "🤝",
    color: "bg-brutal-pink",
    description: "Lo adalah people person yang natural! Kecerdasan interpersonal berarti lo punya kemampuan luar biasa untuk memahami, berinteraksi, dan bekerja sama dengan orang lain. Lo bisa baca ruangan, sense mood orang, dan navigate social dynamics dengan smooth. Di dunia yang butuh collaboration dan emotional intelligence, skill lo adalah superpower yang dicari semua organisasi!",
    strengths: [
      "Empati dan kemampuan memahami perspektif orang lain",
      "Leadership dan kemampuan memotivasi tim",
      "Skill komunikasi dan negosiasi yang kuat",
      "Natural mediator dalam konflik"
    ],
    learningStyle: "Lo belajar paling baik dengan orang lain! Study groups, peer tutoring, dan collaborative projects adalah zona nyaman lo. Diskusi, role-playing, dan teaching others membantu lo internalize knowledge dengan deeper!",
    careers: [
      "HR Manager / Recruiter",
      "Counselor / Psychologist",
      "Sales Director / Marketing Manager",
      "Teacher / Education Specialist",
      "Social Worker / Community Organizer"
    ]
  },
  intrapersonal: {
    name: "Intrapersonal",
    emoji: "🧘",
    color: "bg-brutal-cyan",
    description: "Lo kenal diri sendiri better than anyone else! Kecerdasan intrapersonal berarti lo punya self-awareness yang deep dan kemampuan untuk merefleksikan pikiran dan perasaan lo sendiri. Lo nggak butuh validasi eksternal karena lo punya inner compass yang kuat. Di era yang penuh distraction, kemampuan lo untuk introspect dan stay true to yourself adalah wisdom yang langka!",
    strengths: [
      "Self-awareness dan emotional intelligence tinggi",
      "Kemampuan goal-setting dan self-motivation",
      "Independent thinking dan decision-making",
      "Deep reflection dan philosophical thinking"
    ],
    learningStyle: "Lo butuh space untuk process information sendiri. Solo study sessions, journaling, dan self-paced learning cocok buat lo. Sebelum belajar, connect materi dengan personal goals dan values lo untuk deeper meaning!",
    careers: [
      "Psychologist / Life Coach",
      "Writer / Philosopher",
      "Entrepreneur / Solopreneur",
      "Researcher / Academic",
      "Spiritual Leader / Counselor"
    ]
  },
  naturalist: {
    name: "Naturalis",
    emoji: "🌿",
    color: "bg-brutal-lime",
    description: "Lo punya koneksi special dengan alam! Kecerdasan naturalis berarti lo sensitive terhadap dunia natural, bisa recognize patterns di alam, dan punya passion untuk environmental awareness. Lo notice things yang orang lain lewatkan—dari perubahan cuaca sampai perilaku hewan. Di era climate crisis, perspektif dan kepedulian lo terhadap bumi adalah exactly what we need!",
    strengths: [
      "Kemampuan klasifikasi dan kategorisasi yang kuat",
      "Observasi detail terhadap fenomena alam",
      "Connection dengan living things dan ecosystems",
      "Environmental awareness dan sustainability mindset"
    ],
    learningStyle: "Bring learning ke outdoor! Field trips, nature walks sambil belajar, dan real-world examples dari alam membantu lo connect dengan materi. Analogi dengan sistem natural juga effective untuk understand abstract concepts!",
    careers: [
      "Environmental Scientist / Ecologist",
      "Veterinarian / Marine Biologist",
      "Landscape Architect / Urban Farmer",
      "Wildlife Photographer / Documentary Filmmaker",
      "Sustainability Consultant / Green Tech Developer"
    ]
  }
};

export const likertOptions = [
  { value: 1, label: "Gak Banget", emoji: "😑" },
  { value: 2, label: "Kurang", emoji: "😕" },
  { value: 3, label: "Biasa Aja", emoji: "😐" },
  { value: 4, label: "Lumayan", emoji: "😊" },
  { value: 5, label: "Gue Banget!", emoji: "🔥" }
];

export const classOptions = [
  "X IPA 1", "X IPA 2", "X IPA 3", "X IPA 4",
  "X IPS 1", "X IPS 2", "X IPS 3", "X IPS 4",
  "XI IPA 1", "XI IPA 2", "XI IPA 3", "XI IPA 4",
  "XI IPS 1", "XI IPS 2", "XI IPS 3", "XI IPS 4",
  "XII IPA 1", "XII IPA 2", "XII IPA 3", "XII IPA 4",
  "XII IPS 1", "XII IPS 2", "XII IPS 3", "XII IPS 4"
];
