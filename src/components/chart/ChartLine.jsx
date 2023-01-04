import {
    Chart as ChartJS, LineElement, PointElement, CategoryScale,
    LinearScale
} from 'chart.js'
import React from 'react'

import { Line } from 'react-chartjs-2'
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
)

import mockData from '../../mockData'

const ChartLine = () => {

    const data = {
        labels: mockData.map(m => m.name),
        datasets: [
            {
                label: 'Age',
                data: mockData.map(m => new Date().getFullYear() - new Date(m.date_birth).getFullYear()),
                backgroundColor: '#FFC93C',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }
    const options = {}

    return (
        <div style={{ padding: '20px', width: '90%' }}>
            <Line data={data} options={options} />

        </div>
    )
}

export default ChartLine