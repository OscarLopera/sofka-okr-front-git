import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from "highcharts/modules/export-data";

HC_exporting(Highcharts);
HC_exportData(Highcharts);

function BarChart(props) {

    const { values } = props;

    const options = {
        title: {
            text: `Progreso Objetivo - ${values.title}`
        },
        chart: {
            type: "column"
        },
        series: [{
            type: "line",
            name: "Meta",
            data: [100, 100, 100, 100, 100, 100]
        },

        {
            type: "column",
            name: "Porcentaje Completado",
            data: values.data
        }],
        xAxis: {
            categories: values.dates,
            title: {
                text: `Mes`,
                align: "middle"
            }
        },
        yAxis: {
            title: {
                text: `Porcentaje`
            },
            labels: {
                formatter: function () {
                    return this.value + "%";
                }
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    formatter: function () { return this.y + "%" }
                }
            }
        },
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default BarChart;