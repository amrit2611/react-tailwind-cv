import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <div className=" fixed flex-col flex nav-container gap-4 align-middle bottom-20 right-10">
                <Link to="/">
                <button className=" basis-1/3 hover:text-white hover:bg-blue-500 border-blue-500 border-4 border-solid  px-4 py-1 ">Page 1</button>
                </Link>
                <Link to="/page2">
                <button className=" basis-1/3 hover:text-white hover:bg-blue-500 border-blue-500 border-4 border-solid  px-4 py-1 ">Page 2</button>
                </Link>
                <Link to="/page3">
                <button className=" basis-1/3 hover:text-white hover:bg-blue-500 border-blue-500 border-4 border-solid  px-4 py-1 ">Page 3</button>
                </Link>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation