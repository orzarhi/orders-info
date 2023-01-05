import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { agentsSum } from '../data/agentsSum'
import "./ChartStyle.css"

const ChartPolarArea = () => {
    const name = agentsSum.map(m => m.label);
    const value = agentsSum.map(m => m.value);

    const [state, setState] = useState({

        series: value,
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
                    },
                }
            }],
            labels: name,
        },
    })

    return (
        <div className='chart-polar'>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="polarArea"
                height={290}
            // width={800}
            />
            <hr />
            <div className='chart-polar-info'>
                <div className='sales'>
                    <span>סה"כ מכירות</span>
                    <br />
                    <h3>₪486,710</h3>
                </div >

                <div className='ready'>
                    <span>מוכנים</span>
                    <h3>9</h3>
                </div>
            </div>
        </div>
    )
}

export default ChartPolarArea