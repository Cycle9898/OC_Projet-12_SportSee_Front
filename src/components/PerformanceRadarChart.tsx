import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar
} from "recharts";
import type { UserPerformanceObj } from "../utils/formatDataTypesDeclaration";

/* 
React component that contain the radar chart of user's performance
*/
function PerformanceRadarChart({ chartData }: { chartData: UserPerformanceObj[] }) {
    return (
        <article className="performance-chart">
            <ResponsiveContainer width="100%" height={263}>
                <RadarChart data={chartData} outerRadius={window.innerWidth > 1370 ? "67%" : "55%"} >
                    <PolarGrid radialLines={false} />

                    <PolarAngleAxis dataKey="formattedKind"
                        stroke="white"
                        tick={{ fontSize: "0.625rem",fontWeight: 500 }}
                        dy={3}
                        tickLine={false} />

                    <Radar dataKey="value"
                        fill="rgba(255, 1, 1, 0.7)" />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    );
}

export default PerformanceRadarChart;