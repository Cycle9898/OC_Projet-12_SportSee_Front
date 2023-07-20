import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    Legend
} from "recharts";

/* 
React component that contain the radial bar chart of user's score
*/
function ScoreRadialBarChart({ chartData }: { chartData: [{ dailyScore: number }] }) {
    return (
        <article className="score-chart">
            <h2 className="score-chart__title">Score</h2>

            <ResponsiveContainer width="100%" height={263}>
                <RadialBarChart data={chartData}
                    innerRadius="100%"
                    outerRadius="120%"
                    startAngle={90}
                    endAngle={-270}
                    barSize={10} >

                    <circle cx="50%" cy="50%" fill="white" r="80"></circle>

                    <PolarAngleAxis type="number"
                        domain={[0,1]}
                        tick={false}
                    />

                    <RadialBar dataKey="dailyScore"
                        cornerRadius="50%"
                        fill="red" />

                    <Legend width={70}
                        wrapperStyle={{ top: "40%",left: "40%",fontSize: "1rem",fontWeight: 500,color: "#74798C" }}
                        content={() => <><span className="score-percent">{chartData[0].dailyScore * 100} %</span> de votre objectif</>} />
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    );
}

export default ScoreRadialBarChart;