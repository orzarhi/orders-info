import React, { useEffect, useState } from 'react'
import { Line } from '@ant-design/charts';
import data from "../../mockData"
import "./ChartLine.css"
import { FcSearch } from "react-icons/fc";
// import { filterDates } from '../services/filtersEmp';

const ChartLine = () => {
    const [dateFrom, setDateFrom] = useState(new Date)
    const [dateTo, setDateTo] = useState(new Date)
    const [resultsDate, setResultsDate] = useState(data)



    data.sort((a, b) => new Date(a.date_birth).getTime() - new Date(b.date_birth).getTime());

    const filterDates = () => {
        setResultsDate(data.filter(d => (new Date(d.date_birth)?.toISOString() >= new Date(dateFrom)?.toISOString())
            && (new Date(d.date_birth)?.toISOString() <= new Date(dateTo)?.toISOString())));

    }

    console.log(resultsDate);

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

        },
        filter: {

        },
        label: {
            style: {
                fill: 'black',
            },
            content: function content(_ref) {
                return 'Id '.concat(_ref.id);
            }
        }
    };

    return (
        <div className='chartWrapper'>
            <Line {...config} className="chart-line" />
            <div className='filter-dates'>

                <label>From: </label>
                <input
                    type='date'

                    style={{ marginRight: "1rem" }}
                    onChange={e => setDateFrom(e.target.value)}
                />

                <label >To: </label>
                <input
                    type='date'
                    onChange={e => setDateTo(e.target.value)}
                />

                <button
                    type="button"
                    className="btn btn-secondary search"
                    onClick={filterDates}
                >
                    Search <FcSearch />
                </button>
            </div>
        </div>
    )
}

export default ChartLine