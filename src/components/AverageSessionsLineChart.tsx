import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Legend,
} from "recharts";
import type { UserAverageSessionsObj } from "../utils/formatDataTypesDeclaration";
import AverageSessionsLineChartTooltip from "./AverageSessionsLineChartTooltip";

/* 
React component that contain the line chart of user's average sessions
*/
function AverageSessionsLineChart({ chartData }: { chartData: UserAverageSessionsObj[] }) {
    return (
        <article className="average-sessions-chart">
            <ResponsiveContainer width="100%" height={263}>
                <LineChart data={chartData}
                    margin={{ top: 70,bottom: -15 }}>

                    <defs>
                        <linearGradient id="linear" >
                            <stop offset="0%" stopColor="rgba(255,255,255, 0.3)" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="weekDay"
                        tickLine={false}
                        axisLine={false}
                        padding={{ left: 20,right: 20 }}
                        stroke="rgba(255,255,255,0.5"
                        tick={{ fontSize: 12,fontWeight: 500 }}
                        tickMargin={10} />

                    <YAxis dataKey="sessionLength"
                        domain={[0,"dataMax + 10"]}
                        hide={true} />

                    <Tooltip content={<AverageSessionsLineChartTooltip />}
                        cursor={{ stroke: "rgba(0, 0, 0, 0.1)",strokeWidth: 37 }} />

                    <Legend width={147}
                        align="left"
                        iconSize={0}
                        wrapperStyle={{ top: 35,left: 35,fontSize: 15,fontWeight: 500,color: "rgba(255,255,255, 0.5)" }}
                        content={() => "Durée moyenne des sessions"} />

                    <Line dataKey="sessionLength"
                        type="monotone"
                        unit="min"
                        stroke="url(#linear)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ stroke: "rgba(255,255,255, 0.2)",strokeWidth: 9,r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </article>
    );
}

export default AverageSessionsLineChart;