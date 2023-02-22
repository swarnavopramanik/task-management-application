import React from 'react'
import { useOutletContext } from 'react-router-dom'
import MenuBar from '../components/utilitycomponents/menubar'


export default function DashboardHome() {
    const [Nav, setNav] = useOutletContext();
    return (
        <>
            <MenuBar pageName={'Home'}  onClick={() => setNav(!Nav)} />
        </>
    )
}

