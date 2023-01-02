import React from 'react'
import { Pie } from '@ant-design/plots';
import ChartLine from './ChartLine';
import ChartColumn from './ChartColumn';

const ChartPie = () => {
    const data = [
        {
            type: 'test1',
            value: 27,
        },
        {
            type: 'test2',
            value: 25,
        },
        {
            type: 'test3',
            value: 18,
        },
        {
            type: 'test4',
            value: 15,
        },
        {
            type: 'test5',
            value: 10,
        },
        {
            type: 'test6',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <>
            <ChartLine />
            {/* <ChartColumn />
            <Pie {...config} /> */}

        </>
    )

}

export default ChartPie