import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from "highcharts/modules/export-data";

HC_exporting(Highcharts);
HC_exportData(Highcharts);
function BurnDownChart(props) {

    const { values, title } = props;

    const options = {
        title: {
            text: `BurnDownChart - ${title}`
        },
        chart: {
            type: "spline"
        },
        series: [{
            type: "line",
            name: `Avance Actual [%]`,
            data: values.actualPercentage
        },
        {
            type: "line",
            name: `Avance Esperado [%]`,
            data: values.expectedPercentage
        }],
        xAxis: {
            categories: values.labels,
            title: {
                text: "Mes"
            }
        },
        yAxis: {
            title: {
                text: "Avance Remanente [%]"
            }
        }
    }

    return (
        <HighchartsReact  highcharts={Highcharts} options={options} />
    )
}
export default BurnDownChart;