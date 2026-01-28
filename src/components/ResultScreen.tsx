import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { 
  questions, 
  intelligenceInfo, 
  IntelligenceType 
} from "@/data/questions";
import ResultChart from "./ResultChart";
import ShareableCard from "./ShareableCard";

interface ResultScreenProps {
  answers: Record<number, number>;
  studentName: string;
  studentClass: string;
  onRestart: () => void;
}

const ResultScreen = ({ answers, studentName, studentClass, onRestart }: ResultScreenProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const shareableRef = useRef<HTMLDivElement>(null);

  const scores = useMemo(() => {
    const scoreMap: Record<IntelligenceType, number> = {
      linguistic: 0,
      logical: 0,
      visual: 0,
      kinesthetic: 0,
      musical: 0,
      interpersonal: 0,
      intrapersonal: 0,
      naturalist: 0,
    };

    questions.forEach((q) => {
      if (answers[q.id]) {
        scoreMap[q.type] += answers[q.id];
      }
    });

    return scoreMap;
  }, [answers]);

  const sortedScores = useMemo(() => {
    return Object.entries(scores)
      .map(([type, score]) => ({
        type: type as IntelligenceType,
        score,
        maxScore: 15,
        percentage: Math.round((score / 15) * 100),
      }))
      .sort((a, b) => b.score - a.score);
  }, [scores]);

  const topIntelligence = sortedScores[0];
  const topInfo = intelligenceInfo[topIntelligence.type];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo Pak/Bu, saya ${studentName} dari kelas ${studentClass || 'tidak disebutkan'}. Berikut hasil tes kecerdasan majemuk saya:\n\n` +
      `Dominan: ${topInfo.name} ${topInfo.emoji}\n` +
      `Skor: ${topIntelligence.score}/15 (${topIntelligence.percentage}%)\n\n` +
      `Detail skor lainnya:\n` +
      sortedScores.map(s => `• ${intelligenceInfo[s.type].name}: ${s.score}/15`).join('\n') +
      `\n\nTerima kasih.`
    );
    window.open(`https://wa.me/6285179876417?text=${message}`, '_blank');
  };

  const handleDownloadImage = async () => {
    if (!shareableRef.current || isGenerating) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(shareableRef.current, {
        scale: 1,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `hasil-tes-kecerdasan-${studentName.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-brutal-lime p-4 md:p-8">
      {/* Hidden shareable card for image generation */}
      <div className="fixed left-[-9999px] top-0">
        <ShareableCard
          ref={shareableRef}
          studentName={studentName}
          topIntelligence={topIntelligence}
          sortedScores={sortedScores}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="brutal-box-xl bg-card p-6 md:p-10 mb-6">
          <div className="text-center mb-8">
            <div className="inline-block bg-brutal-pink px-4 py-2 border-[3px] border-foreground mb-4"
                 style={{ boxShadow: "4px 4px 0px hsl(0 0% 0%)" }}>
              <span className="text-sm font-bold uppercase">Hasil Tes Kecerdasan</span>
            </div>
            <h1 className="text-headline text-xl md:text-2xl mb-2">
              Halo, {studentName}!
            </h1>
            <p className="font-mono text-foreground/70 mb-6">Tipe Otak Lo Adalah...</p>
            
            {/* Top Result */}
            <div className={`${topInfo.color} border-[4px] border-foreground p-6 md:p-10 inline-block`}
                 style={{ boxShadow: "8px 8px 0px hsl(0 0% 0%)" }}>
              <span className="text-6xl md:text-8xl block mb-4">{topInfo.emoji}</span>
              <h2 className="text-display text-3xl md:text-5xl lg:text-6xl">
                {topInfo.name}
              </h2>
              <div className="mt-4 flex items-center justify-center gap-4 font-mono">
                <span className="bg-foreground text-background px-4 py-2 text-lg font-bold">
                  {topIntelligence.percentage}%
                </span>
                <span className="text-sm">({topIntelligence.score}/15 poin)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download for Instagram Story */}
        <div className="brutal-box-xl bg-brutal-purple p-6 md:p-10 mb-6 text-center">
          <h3 className="text-title mb-4 text-card">📸 Share ke Instagram Story</h3>
          <p className="font-mono text-sm mb-6 text-card/80">
            Download hasil lo sebagai gambar (1080x1920) yang pas buat IG Story!
          </p>
          <button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className={`brutal-btn bg-brutal-yellow text-xl py-4 px-8 inline-flex items-center gap-3 ${
              isGenerating ? 'opacity-70 cursor-wait' : ''
            }`}
          >
            {isGenerating ? (
              <>
                <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                </svg>
                GENERATING...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                DOWNLOAD GAMBAR
              </>
            )}
          </button>
        </div>

        {/* Chart */}
        <div className="brutal-box-xl bg-card p-6 md:p-10 mb-6">
          <h3 className="text-title mb-6">Radar Kecerdasan Lo</h3>
          <ResultChart scores={sortedScores} />
        </div>

        {/* Detailed Description */}
        <div className="brutal-box-xl bg-card p-6 md:p-10 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{topInfo.emoji}</span>
            <div>
              <h3 className="text-title mb-2">Tentang Kecerdasan {topInfo.name}</h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/80">
                {topInfo.description}
              </p>
            </div>
          </div>

          {/* Strengths */}
          <div className="brutal-box bg-brutal-yellow p-6 mb-6">
            <h4 className="text-title text-sm mb-4">💪 Kekuatan Lo</h4>
            <ul className="space-y-2">
              {topInfo.strengths.map((strength, i) => (
                <li key={i} className="font-mono text-sm flex items-start gap-2">
                  <span className="text-foreground">→</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Style */}
          <div className="brutal-box bg-brutal-cyan p-6 mb-6">
            <h4 className="text-title text-sm mb-4">📚 Cara Belajar Terbaik</h4>
            <p className="font-mono text-sm leading-relaxed">{topInfo.learningStyle}</p>
          </div>

          {/* Career Recommendations */}
          <div className="brutal-box bg-brutal-pink p-6">
            <h4 className="text-title text-sm mb-4">🎯 Rekomendasi Karir</h4>
            <div className="flex flex-wrap gap-2">
              {topInfo.careers.map((career, i) => (
                <span 
                  key={i}
                  className="bg-card border-[2px] border-foreground px-3 py-1 font-mono text-xs"
                  style={{ boxShadow: "2px 2px 0px hsl(0 0% 0%)" }}
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* All Scores */}
        <div className="brutal-box-xl bg-card p-6 md:p-10 mb-6">
          <h3 className="text-title mb-6">Semua Skor Lo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedScores.map((item, index) => {
              const info = intelligenceInfo[item.type];
              return (
                <div 
                  key={item.type}
                  className={`brutal-box p-4 ${index === 0 ? info.color : 'bg-muted'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{info.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm uppercase font-display">{info.name}</span>
                        <span className="font-mono text-sm">{item.score}/15</span>
                      </div>
                      <div className="h-3 bg-card border-[2px] border-foreground">
                        <div 
                          className="h-full bg-foreground transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="brutal-box-xl bg-brutal-orange p-6 md:p-10 text-center">
          <h3 className="text-title mb-4">📱 Kirim Hasil ke Guru</h3>
          <p className="font-mono text-sm mb-6 text-foreground/80">
            Klik tombol di bawah untuk mengirim hasil tes lo via WhatsApp
          </p>
          <button
            onClick={handleWhatsApp}
            className="brutal-btn bg-brutal-lime text-xl py-4 px-8 inline-flex items-center gap-3"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            KIRIM HASIL KE GURU
          </button>
        </div>

        {/* Restart button */}
        <div className="text-center mt-8">
          <button
            onClick={onRestart}
            className="brutal-btn bg-card"
          >
            ↺ ULANG TES
          </button>
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-xs mt-8 text-foreground/60">
          Tes Kecerdasan Majemuk berdasarkan teori Howard Gardner<br />
          Dibuat dengan ❤️ untuk siswa SMA Indonesia
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;
