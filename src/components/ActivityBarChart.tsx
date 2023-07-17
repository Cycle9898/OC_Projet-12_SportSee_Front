import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import type { UserActivityObj } from "../utils/formatDataTypesDeclaration";
import ActivityBarChartTooltip from "./ActivityBarChartTooltip";

/* 
React component that contain the bar chart of user's activity
*/
function ActivityBarChart({ chartData }: { chartData: UserActivityObj[] }) {
    return (
        <article className="activity-chart">
            <div className="chart-header">
                <h2 className="chart-header__title">Activité quotidienne</h2>

                <div className="chart-header__legend">
                    <div className="legend">
                        <span className="legend__dot legend__dot--black"></span><p>Poids (kg)</p>
                    </div>

                    <div className="legend">
                        <span className="legend__dot legend__dot--red"></span><p>Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}
                    margin={{ top: 60,right: 40,bottom: 65,left: 45 }}
                    barCategoryGap="40%"
                    barGap={8}>

                    <CartesianGrid strokeDasharray="2 2"
                        vertical={false} />

                    <XAxis dataKey="day"
                        tickLine={false}
                        tick={{ fontSize: 14,fontWeight: 500 }}
                        padding={{ left: -47,right: -47 }}
                        tickMargin={20} />

                    <YAxis yAxisId="kilogram"
                        dataKey="kilogram"
                        orientation="right"
                        domain={["dataMin - 2","dataMax + 2"]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14,fontWeight: 500 }}
                        tickMargin={45} />

                    <YAxis yAxisId="calories"
                        dataKey="calories"
                        domain={["dataMin - 20","dataMax + 20"]}
                        hide={true} />

                    <Tooltip content={<ActivityBarChartTooltip />}
                        offset={30}
                        position={{ y: 23 }}
                        cursor={{ fill: "rgba(196, 196, 196, 0.50)" }} />

                    <Bar yAxisId="kilogram"
                        dataKey="kilogram"
                        unit=" kg"
                        fill="#020203"
                        maxBarSize={7}
                        radius={[50,50,0,0]} />

                    <Bar yAxisId="calories"
                        dataKey="calories"
                        unit=" kCal"
                        fill="#FF0101"
                        maxBarSize={7}
                        radius={[50,50,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </article>
    );
}

export default ActivityBarChart;