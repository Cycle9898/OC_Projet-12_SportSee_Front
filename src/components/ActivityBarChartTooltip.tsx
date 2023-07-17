/* React element that represent the tooltip on user's activity bar chart */
function ActivityBarChartTooltip({ active,payload }: any) {
    if (active && payload) {
        return (
            <div className="activity-BC-tooltip">
                <div>{`${payload[0].value}${payload[0].unit}`}</div>
                <div>{`${payload[1].value}${payload[1].unit}`}</div>
            </div>
        )
    }
    return null;
}

export default ActivityBarChartTooltip;