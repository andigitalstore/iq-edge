import { useState } from "react";
import { questions, likertOptions, Question } from "@/data/questions";

interface QuestionScreenProps {
  onComplete: (answers: Record<number, number>) => void;
  studentName: string;
}

const progressColors = [
  "bg-brutal-pink",
  "bg-brutal-cyan", 
  "bg-brutal-lime",
  "bg-brutal-orange",
  "bg-brutal-purple",
  "bg-brutal-yellow",
];

const QuestionScreen = ({ onComplete, studentName }: QuestionScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion: Question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  const handleNext = () => {
    if (selectedValue === null) return;

    setIsAnimating(true);
    const newAnswers = { ...answers, [currentQuestion.id]: selectedValue };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setCurrentIndex(currentIndex + 1);
        setSelectedValue(null);
        setIsAnimating(false);
      }
    }, 300);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setSelectedValue(answers[questions[currentIndex - 1].id] || null);
        setIsAnimating(false);
      }, 200);
    }
  };

  const bgColors = [
    "bg-brutal-yellow",
    "bg-brutal-pink", 
    "bg-brutal-lime",
    "bg-brutal-cyan",
    "bg-brutal-orange",
  ];
  
  const currentBg = bgColors[currentIndex % bgColors.length];
  const currentProgressColor = progressColors[currentIndex % progressColors.length];

  return (
    <div className={`min-h-screen ${currentBg} p-3 md:p-8 transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="brutal-box bg-card px-3 py-1.5 md:px-4 md:py-2">
            <span className="font-mono text-xs md:text-sm">Halo, <span className="font-bold">{studentName}</span>!</span>
          </div>
          <div className="brutal-box bg-card px-3 py-1.5 md:px-4 md:py-2">
            <span className="font-mono text-sm md:text-base font-bold">{currentIndex + 1}/{questions.length}</span>
          </div>
        </div>

        {/* Animated Progress bar */}
        <div className="brutal-box bg-card p-1 mb-5 md:mb-8 relative overflow-hidden">
          {/* Background segments */}
          <div className="absolute inset-1 flex">
            {Array.from({ length: questions.length }).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 ${i < currentIndex + 1 ? progressColors[i % progressColors.length] : 'bg-muted'} 
                  ${i > 0 ? 'border-l border-foreground/20' : ''} 
                  transition-all duration-500`}
              />
            ))}
          </div>
          {/* Progress overlay */}
          <div 
            className={`h-6 md:h-7 ${currentProgressColor} relative z-10 transition-all duration-500 ease-out flex items-center justify-end pr-2`}
            style={{ width: `${progress}%` }}
          >
            <span className="text-xs md:text-sm font-bold text-foreground/80">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Question card */}
        <div className={`brutal-box-xl bg-card p-5 md:p-10 mb-5 md:mb-6 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-200`}>
          <div className="mb-6 md:mb-8">
            <div className={`inline-block ${currentProgressColor} px-2.5 py-1 md:px-3 md:py-1 border-[2px] border-foreground mb-3 md:mb-4 text-xs font-bold uppercase`}>
              Pertanyaan {currentIndex + 1}
            </div>
            <h2 className="text-headline text-lg md:text-2xl lg:text-3xl leading-snug md:leading-tight">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Likert options - Stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 md:gap-3">
            {likertOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`brutal-btn text-center p-3 md:p-4 transition-all ${
                  selectedValue === option.value
                    ? "bg-foreground text-background translate-x-1 translate-y-1"
                    : "bg-card hover:bg-brutal-lime"
                }`}
                style={{
                  boxShadow: selectedValue === option.value 
                    ? "0px 0px 0px hsl(0 0% 0%)" 
                    : "4px 4px 0px hsl(0 0% 0%)"
                }}
              >
                <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2">
                  <span className="text-2xl md:text-2xl">{option.emoji}</span>
                  <span className="text-sm md:text-xs font-mono font-bold">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 md:gap-4">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="brutal-btn bg-card flex-shrink-0 text-sm md:text-base px-4 md:px-6 py-3 md:py-4"
            >
              ← KEMBALI
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selectedValue === null}
            className={`brutal-btn flex-1 text-base md:text-lg py-4 md:py-5 ${
              selectedValue !== null
                ? "bg-brutal-lime"
                : "bg-muted opacity-50 cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "LIHAT HASIL →" : "LANJUT →"}
          </button>
        </div>

        {/* Tips */}
        <p className="text-center font-mono text-xs mt-4 md:mt-6 text-foreground/70 px-2">
          💡 Jawab dengan jujur sesuai kondisimu, tidak ada jawaban benar atau salah!
        </p>
      </div>
    </div>
  );
};

export default QuestionScreen;
