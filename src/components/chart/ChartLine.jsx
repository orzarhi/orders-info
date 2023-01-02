import React, { useState } from 'react'
import { Line } from '@ant-design/charts';
import data from "../../data"
import "./ChartLine.css"
const ChartLine = () => {
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")

    data.sort((a, b) => new Date(a.date_birth).getTime() - new Date(b.date_birth).getTime());

    const config = {
        data,
        height: 500,
        xField: 'name',
        yField: 'date_birth',
        point: {
            size: 5,
            shape: 'diamond',
        },
        lineStyle: {
            stroke: 'black',
            lineWidth: 2,
            lineDash: [4, 5],
            strokeOpacity: 0.7,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 20,
            shadowOffsetY: 5,
            cursor: 'pointer',
        }
    };

    return (
        <div className='chartWrapper'>
            <Line {...config} className="chart-line" />
            <div className='filter-dates'>
                <label>From: </label>
                <input type='date' style={{ marginRight: "1rem" }} onChange={e => setDateFrom(e.target.value)} />
                <label >To: </label>
                <input type='date' onChange={e => setDateTo(e.target.value)} />
            </div>
        </div>
    )
}

export default ChartLine