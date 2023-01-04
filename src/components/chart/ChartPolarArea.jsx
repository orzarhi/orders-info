import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartPolarArea = () => {
    const [state, setState] = useState({

        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
            chart: {
                type: 'polarArea',
            },
            stroke: {
                colors: ['#fff']
            },
            fill: {
                opacity: 0.8
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    })

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="polarArea"
                height={550}
                width={900}
            />

        </div>
    )
}

export default ChartPolarArea