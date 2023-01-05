import React, { useState } from 'react'
import { HiOutlineDocumentText } from "react-icons/hi"
import { BiCoinStack } from "react-icons/bi"
import { GiWeight } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import SquareInfo from './SquareInfo'
import InputSelect from '../inputs/InputSelect'
import { agentsSum } from "../data/agentsSum"
import { reducer } from "../utils/reduce/reduceArray"
import orders from "../data/orders"
import "./Information.css"

const Information = () => {
    const [customer, setCustomer] = useState('');
    const [agents, setAgents] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');

    const ordersData = orders.map(o => o.data.topItemsLeftInStock)
    const reduceData = reducer(ordersData);

    return (
        <>
            <header className='inputs-select'>
                <InputSelect title={'תקופה'} arr={agentsSum} value={time} setValue={setTime} />
                <InputSelect title={'קטגוריה'} arr={agentsSum} value={category} setValue={setCategory} />
                <InputSelect title={'סוכן'} arr={agentsSum} value={agents} setValue={setAgents} />
                <InputSelect title={'לקוח'} arr={agentsSum} value={customer} setValue={setCustomer} />

                <SquareInfo title={'סך מכירות'} sum={'₪486,710'} icon={<AiOutlineShoppingCart />} style={'#F3CCFF'} />
                <SquareInfo title={'כמות'} sum={'85,590 ק"ג'} icon={<GiWeight />} style={'#FFF6BD'} />
                <SquareInfo title={'ממוצע לעסקה'} sum={'₪25,392'} icon={<BiCoinStack />} style={'#91D8E4'} />
                <SquareInfo title={'מספר עסקאות'} sum={'316'} icon={<HiOutlineDocumentText />} style={'#00ff6e3a'} />
            </header>
        </>
    )
}

export default Information