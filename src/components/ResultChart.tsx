import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { intelligenceInfo, IntelligenceType } from "@/data/questions";

interface ScoreItem {
  type: IntelligenceType;
  score: number;
  maxScore: number;
  percentage: number;
}

interface ResultChartProps {
  scores: ScoreItem[];
}

const ResultChart = ({ scores }: ResultChartProps) => {
  const chartData = scores.map((item) => ({
    subject: intelligenceInfo[item.type].emoji + " " + intelligenceInfo[item.type].name.split("-")[0],
    fullName: intelligenceInfo[item.type].name,
    score: item.score,
    percentage: item.percentage,
    fullMark: 15,
  }));

  return (
    <div className="w-full h-[350px] md:h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
          <PolarGrid 
            stroke="hsl(0 0% 0%)"
            strokeWidth={2}
          />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ 
              fill: 'hsl(0 0% 0%)', 
              fontSize: 10,
              fontFamily: '"Archivo Black", sans-serif'
            }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 15]}
            tick={{ fill: 'hsl(0 0% 0%)', fontSize: 10 }}
            stroke="hsl(0 0% 0%)"
          />
          <Radar
            name="Skor"
            dataKey="score"
            stroke="hsl(0 0% 0%)"
            strokeWidth={3}
            fill="hsl(330 100% 60%)"
            fillOpacity={0.6}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(0 0% 100%)',
              border: '3px solid hsl(0 0% 0%)',
              boxShadow: '4px 4px 0px hsl(0 0% 0%)',
              fontFamily: '"Space Mono", monospace',
              borderRadius: 0,
            }}
            formatter={(value: number, name: string, props: { payload?: { fullName: string; percentage: number } }) => [
              `${value}/15 (${props.payload?.percentage}%)`,
              props.payload?.fullName
            ]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
