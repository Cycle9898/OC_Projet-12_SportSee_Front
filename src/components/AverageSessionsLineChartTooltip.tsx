/* React element that represent the tooltip on user's average sessions line chart */
function AverageSessionsLineChartTooltip({ active,payload }: any) {
    if (active && payload) {
        return (
            <div className="average-sessions-LC-tooltip">
                {`${payload[0].value} ${payload[0].unit}`}
            </div>
        );
    }
    return null;
}

export default AverageSessionsLineChartTooltip;