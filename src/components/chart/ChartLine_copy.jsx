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

const date = mockData.sort((a, b) => new Date(a.date_birth).getTime() - new Date(b.date_birth).getTime());


const ChartLine_copy = () => {

    // const removeComma = () => {
    //     .
    // }
    const data = {
        labels: mockData.map(m => m.name),
        datasets: [
            {
                label: 'Date Birth',
                data: date.map(m => new Date(m.date_birth).getFullYear()),
                backgroundColor: '#FFC93C',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }

    const options = {

    }

    return (
        <div style={{ padding: '20px', width: '90%' }}>
            <Line data={data} options={options} />

        </div>
    )
}

export default ChartLine_copy