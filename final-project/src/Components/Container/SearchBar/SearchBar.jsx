import React from 'react';
import Button from '../../Button/Button';
import { FaSearch } from 'react-icons/fa'
import SearchIcon from '../../../Assets/Search.svg'


const SearchBar = () => {

    return (
        <div className="flex flex-col flex-wrap justify-center justify-items-center content-evenly ">
            <div className="w-1/2  h-18 bg-lightergreen  p-4 rounded-xl shadow-lg   ">
                <form action="" className="w-auto h-auto flex flex-row flex-wrap justify-center justify-items-center content-evenly">
                    <input type="text" className="w-2/3 h-12 bg-lightgreen  rounded-xl mr-2  my-2 " />
                    <button className="w-12 h-12  ml-4 my-2" style={{ backgroundImage: `url(${SearchIcon})` }}  name="Send"></button>

                </form>
            </div >
        </div>
    )
}

//<button className="w-1/4 h-12 inline ml-2  my-4 rounded-xl" style={{ backgroundImage: SearchIcon }}>Search</button>
//<Button localStyle="w-1/4 h-12 inline ml-2 bg-red-200 my-4 rounded-xl" text="Search" />
export default SearchBar;