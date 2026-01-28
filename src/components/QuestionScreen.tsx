import { useState } from "react";
import { questions, likertOptions, Question } from "@/data/questions";

interface QuestionScreenProps {
  onComplete: (answers: Record<number, number>) => void;
  studentName: string;
}

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

  return (
    <div className={`min-h-screen ${currentBg} p-4 md:p-8 transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="brutal-box bg-card px-4 py-2">
            <span className="font-mono text-sm">Halo, <span className="font-bold">{studentName}</span>!</span>
          </div>
          <div className="brutal-box bg-card px-4 py-2">
            <span className="font-mono text-sm font-bold">{currentIndex + 1}/{questions.length}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="brutal-box bg-card p-1 mb-8">
          <div 
            className="h-4 bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question card */}
        <div className={`brutal-box-xl bg-card p-6 md:p-10 mb-6 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-200`}>
          <div className="mb-8">
            <div className="inline-block bg-brutal-cyan px-3 py-1 border-[2px] border-foreground mb-4 text-xs font-bold uppercase">
              Pertanyaan {currentIndex + 1}
            </div>
            <h2 className="text-headline text-xl md:text-2xl lg:text-3xl leading-tight">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Likert options */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {likertOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`brutal-btn text-center p-4 transition-all ${
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
                <span className="text-2xl mb-2 block">{option.emoji}</span>
                <span className="text-xs font-mono font-bold block">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="brutal-btn bg-card flex-shrink-0"
            >
              ← BACK
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selectedValue === null}
            className={`brutal-btn flex-1 text-lg ${
              selectedValue !== null
                ? "bg-brutal-lime"
                : "bg-muted opacity-50 cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "LIHAT HASIL →" : "NEXT →"}
          </button>
        </div>

        {/* Tips */}
        <p className="text-center font-mono text-xs mt-6 text-foreground/70">
          💡 Tip: Jawab dengan jujur, gak ada jawaban benar atau salah!
        </p>
      </div>
    </div>
  );
};

export default QuestionScreen;
