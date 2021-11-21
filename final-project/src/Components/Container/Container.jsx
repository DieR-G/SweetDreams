import React from 'react';
import Card from './Card/Card'

//Container component, only purpose is to keep in order all the mess inside

const Container = () => {

    return (

        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center p-6">
            <div className="flex flex-row flex-wrap justify-center justify-items-center content-evenly grid grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </main>
    )
}

export default Container;