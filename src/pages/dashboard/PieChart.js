import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PieChart(props) {

    const { values } = props;

    const options = {
        title: {
            text: `Progreso - ${values.title}`
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.if}%'
                }
            }
        },
        chart: {
            type: "pie"
        },
        series: [{
            type: "pie",
            name: "Porcentaje",
            data: values.data
        }],
        tooltip: {
            pointFormat: `{series.name}: <b>{point.percentage:.1f}%</b>`
        },

    }

    return (
        <div>
            <HighchartsReact data-testid="piechart" highcharts={Highcharts} options={options} />
        </div>

    )
}

export default PieChart;