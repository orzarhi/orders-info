import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import mockData from "../../mockData"
import ChartPolarArea from './ChartPolarArea';
const ChartLineDemo = () => {

    const name = mockData.map(m => m.name);
    const salary = mockData.map(m => m.salary);

    const [state, setState] = useState({
        series: [
            {
                name: 'series-1',
                data: salary
            },
        ],
        options: {
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Dynamic Updating Chart',
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: name

            },
            yaxis: {
                categories: salary
            },
            legend: {
                show: false
            },
        },

    })

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="line"
                height={550}
                width={900}
            />
            <div cl>
                <ChartPolarArea />
            </div>
        </div>
    )
}

export default ChartLineDemo