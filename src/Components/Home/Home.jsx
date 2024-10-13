import React from 'react'
import Slider from '../Slider/Slider'
import Products from '../Products/Products'
import './Home.css'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>يورك</title>

            </Helmet>
            <Slider />
            <h2 className='mt-5 h1 text-end'>الاكثر مبيعا</h2>
            <Products />

        </div>
    )
}
