import { forwardRef } from "react";
import { intelligenceInfo, IntelligenceType } from "@/data/questions";

interface ScoreItem {
  type: IntelligenceType;
  score: number;
  percentage: number;
}

interface ShareableCardProps {
  studentName: string;
  topIntelligence: ScoreItem;
  sortedScores: ScoreItem[];
}

const ShareableCard = forwardRef<HTMLDivElement, ShareableCardProps>(
  ({ studentName, topIntelligence, sortedScores }, ref) => {
    const topInfo = intelligenceInfo[topIntelligence.type];

    return (
      <div
        ref={ref}
        className="w-[1080px] h-[1920px] bg-brutal-yellow p-12 flex flex-col"
        style={{
          fontFamily: '"Archivo Black", "Arial Black", sans-serif',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div 
            className="inline-block bg-brutal-pink px-6 py-3 border-[4px] border-black mb-6"
            style={{ boxShadow: "6px 6px 0px black" }}
          >
            <span className="text-2xl font-bold uppercase tracking-wider text-black">
              Tes Kecerdasan Majemuk
            </span>
          </div>
          <h1 
            className="text-5xl uppercase mb-4 text-black"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Hasil Tes {studentName}
          </h1>
        </div>

        {/* Main Result */}
        <div 
          className={`${topInfo.color} border-[6px] border-black p-12 text-center flex-shrink-0`}
          style={{ boxShadow: "10px 10px 0px black" }}
        >
          <span className="text-[120px] block mb-4">{topInfo.emoji}</span>
          <h2 
            className="text-6xl uppercase text-black leading-tight mb-6"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            {topInfo.name}
          </h2>
          <div 
            className="inline-block bg-black text-white px-8 py-4 text-4xl font-bold"
          >
            {topIntelligence.percentage}% MATCH
          </div>
        </div>

        {/* All Scores */}
        <div className="flex-1 mt-10">
          <h3 
            className="text-3xl uppercase mb-6 text-black"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Semua Skor:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {sortedScores.map((item, index) => {
              const info = intelligenceInfo[item.type];
              return (
                <div 
                  key={item.type}
                  className={`${index === 0 ? info.color : 'bg-white'} border-[4px] border-black p-4 flex items-center gap-4`}
                  style={{ boxShadow: "4px 4px 0px black" }}
                >
                  <span className="text-4xl">{info.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span 
                        className="font-bold text-xl uppercase text-black"
                        style={{ fontFamily: '"Archivo Black", sans-serif' }}
                      >
                        {info.name.split("-")[0]}
                      </span>
                      <span 
                        className="text-xl font-bold text-black"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-4 bg-gray-200 border-[2px] border-black">
                      <div 
                        className="h-full bg-black"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t-[4px] border-black">
          <p 
            className="text-2xl text-black mb-2"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            Teori Howard Gardner
          </p>
          <div 
            className="inline-block bg-brutal-cyan px-6 py-3 border-[4px] border-black"
            style={{ boxShadow: "4px 4px 0px black" }}
          >
            <span 
              className="text-xl font-bold uppercase text-black"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              Scan & Coba Tes Ini!
            </span>
          </div>
        </div>
      </div>
    );
  }
);

ShareableCard.displayName = "ShareableCard";

export default ShareableCard;
