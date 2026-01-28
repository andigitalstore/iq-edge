import { useState } from "react";

interface WelcomeScreenProps {
  onStart: (name: string, kelas: string) => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    onStart(name.trim(), kelas.trim());
  };

  const isValid = name.trim().length > 0;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-brutal-pink border-[3px] border-foreground rotate-12 hidden md:block" 
             style={{ boxShadow: "4px 4px 0px hsl(0 0% 0%)" }} />
        <div className="absolute top-20 right-20 w-16 h-16 bg-brutal-cyan border-[3px] border-foreground -rotate-6 hidden md:block"
             style={{ boxShadow: "4px 4px 0px hsl(0 0% 0%)" }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-brutal-lime border-[3px] border-foreground rotate-45 hidden md:block"
             style={{ boxShadow: "4px 4px 0px hsl(0 0% 0%)" }} />
        
        {/* Main card */}
        <div className="brutal-box-xl bg-card p-6 md:p-10 relative">
          {/* Corner accent */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-brutal-pink border-[3px] border-foreground" />
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-brutal-lime border-[3px] border-foreground" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-brutal-cyan border-[3px] border-foreground" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-brutal-orange border-[3px] border-foreground" />
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-brutal-pink px-4 py-2 border-[3px] border-foreground mb-4"
                 style={{ boxShadow: "4px 4px 0px hsl(0 0% 0%)" }}>
              <span className="text-sm font-bold uppercase tracking-wider">Tes Kecerdasan Majemuk</span>
            </div>
            <h1 className="text-display text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              KENALI DIRIMU<br />LEBIH DALAM!
            </h1>
            <p className="font-mono text-sm md:text-base text-foreground/80 max-w-md mx-auto">
              Temukan tipe kecerdasan dominanmu berdasarkan teori Howard Gardner. 
              24 pertanyaan, 5 menit, hasil yang bermanfaat!
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 max-w-md mx-auto">
            {/* Name input */}
            <div className={isShaking ? "animate-shake" : ""}>
              <label className="block text-title text-sm mb-2">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ketik namamu di sini..."
                className="brutal-input"
                maxLength={50}
              />
            </div>

            {/* Class text input */}
            <div>
              <label className="block text-title text-sm mb-2">Kelas</label>
              <input
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Contoh: X IPA 1, XI IPS 2..."
                className="brutal-input"
                maxLength={20}
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`brutal-btn w-full text-lg py-4 ${
                isValid 
                  ? "bg-brutal-lime hover:bg-brutal-cyan" 
                  : "bg-muted cursor-not-allowed"
              }`}
            >
              {isValid ? "MULAI TES →" : "ISI NAMA DULU!"}
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs font-mono text-foreground/60 mt-8">
            * Tes ini untuk mengenal kelebihan diri sendiri, bukan untuk menilai baik atau buruk
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
