import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const ChartArea = () => {

    const [state, setState] = useState({
        series: [{
            name: "STOCK ABC",
            data: [44, 55, 13, 43, 22],
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            labels: ['A', 'B', 'C', 'D', 'E'],
            xaxis: {
                type: 'number',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        },
    });

    return (
        <div className='chart-area'>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={500}
            />
        </div>
    )
}

export default ChartArea