import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

type Screen = "welcome" | "test" | "result";

interface StudentData {
  name: string;
  kelas: string;
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [studentData, setStudentData] = useState<StudentData>({ name: "", kelas: "" });
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = (name: string, kelas: string) => {
    setStudentData({ name, kelas });
    setCurrentScreen("test");
  };

  const handleTestComplete = (testAnswers: Record<number, number>) => {
    setAnswers(testAnswers);
    setCurrentScreen("result");
  };

  const handleRestart = () => {
    setStudentData({ name: "", kelas: "" });
    setAnswers({});
    setCurrentScreen("welcome");
  };

  return (
    <>
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStart} />
      )}
      {currentScreen === "test" && (
        <QuestionScreen 
          onComplete={handleTestComplete} 
          studentName={studentData.name}
        />
      )}
      {currentScreen === "result" && (
        <ResultScreen 
          answers={answers}
          studentName={studentData.name}
          studentClass={studentData.kelas}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Index;
