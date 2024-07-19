import React from 'react'

import Cars from '../components/Cars'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Stats from '../components/Stats'

function Home() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
            <Hero />
            <Cars />
            <Stats />
            <Footer />
        </section>
    )
}

export default Home