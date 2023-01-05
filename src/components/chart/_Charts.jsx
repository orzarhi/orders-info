import React from 'react'
import Information from '../information/Information'
import ChartArea from './ChartArea'
import ChartColumn from './ChartColumn'
import ChartLine from './ChartLine'
import ChartPie from './ChartPie'
import ChartPolar from './ChartPolar'
import ChartScatter from './ChartScatter'
import ChartStacked from './ChartStacked'

const Charts = () => {
    return (
        <>
            <Information />
            <ChartLine />
            <ChartPolar />
            <ChartColumn />
            <ChartStacked />
            <ChartPie />
            <ChartArea />
            <ChartScatter />
        </>
    )
}

export default Charts