import React from 'react';
import Card from './Card/Card'
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';

//Container component, only purpose is to keep in order all the mess inside

const Container = () => {

    return (

        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center content-evenly">
            <Menu/>
            <SearchBar />
            <div className="flex flex-row flex-wrap justify-center justify-items-center content-evenly ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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