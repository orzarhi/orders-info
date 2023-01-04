import React from 'react'
import Information from '../information/Information'
import ChartColumn from './ChartColumn'
import ChartLineDemo from './ChartLine'
import ChartPolarArea from './ChartPolarArea'
import ChartStacked from './ChartStacked'

const Charts = () => {
    return (
        <>

            <Information />
            <ChartLineDemo />
            <ChartPolarArea />
            <ChartColumn />
            <ChartStacked />
        </>
    )
}

export default Charts