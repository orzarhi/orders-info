import {
    BarElement,
    CategoryScale, Chart as ChartJS, Legend, LinearScale,
    Tooltip
} from 'chart.js'
import React from 'react'

import { Bar } from 'react-chartjs-2'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

import mockData from '../../mockData'
import ChartLine_copy from './ChartLine_copy'

const ChartColumn = () => {

    const data = {
        labels: mockData.map(m => m.name),
        datasets: [
            {
                label: 'Salary',
                data: mockData.map(m => m.salary),
                backgroundColor: '#5BC0F8',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }

    const options = {

    }

    return (
        <div style={{ padding: '20px', width: '60%' }}>
            <Bar data={data} options={options} />
            <ChartLine_copy />

        </div>
    )
}

export default ChartColumn