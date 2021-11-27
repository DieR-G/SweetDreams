import { React, useState, useEffect } from 'react';
import Button from '../../Button/Button';
import { FaSearch } from 'react-icons/fa'
import SearchIcon from '../../../Assets/Search.svg'


const SearchBar = ({ searchFunction = () => { } },) => {
    const [search, SetSearch] = useState("")

    useEffect(() => {
        console.log(search);
    }, [search])

    return (
        <div className="flex flex-col flex-wrap justify-center justify-items-center content-evenly ">
            <div className="w-1/2  h-18 bg-purple-500  p-4 rounded-xl shadow-lg   ">
                <form action="" className="w-auto h-auto flex flex-row flex-wrap justify-center justify-items-center content-evenly">
                    <input type="text" className="w-2/3 h-12 bg-purple-300  rounded-xl mr-2  my-2 font-normal" onChange={(e) => { SetSearch(e.target.value) }} />
                    <Button localStyle="w-12 h-12  ml-4 my-2" background={SearchIcon} onClick={searchFunction} />

                </form>
            </div >
        </div>
    )
}

//<button className="w-12 h-12  ml-4 my-2" style={{ backgroundImage: `url(${SearchIcon})` }}  name="Send"></button>
export default SearchBar;




