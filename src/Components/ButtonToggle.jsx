import { useState } from "react";


const ButtonToggle = () => {
    const [selectedList, setSelectedList] = useState('luxury');

    const toggleList = (listType) => {
        setSelectedList(listType);
    };

    return (
        <div>
            <div className="w-[1240px] mx-auto text-center  font-Cormorrant text-white text-xl  my-5">

                <button
                    onClick={() => toggleList('luxury')}
                    className={`p-4 border
                                 bg-[#d8ad5d] text-white text-xl ${selectedList === 'luxury' ? 'bg-[#937131] border-b-4 border-b-black' : ''}`}>
                    LUXURY SUITE
                </button>

                <button
                    onClick={() => toggleList('presidential')}
                    className={`p-4 border
                                 bg-[#d8ad5d] text-white text-xl ${selectedList === 'presidential' ? 'bg-[#937131] border-b-4 border-b-black' : ''}`}>
                    PRESIDENTIAL SUITE
                </button>

                <button
                    onClick={() => toggleList('family')}
                    className={`p-4 border
                                 bg-[#d8ad5d] text-white text-xl ${selectedList === 'family' ? 'bg-[#937131] border-b-4 border-b-black' : ''}`}>
                    FAMILY SUITE
                </button>
                <button
                    onClick={() => toggleList('premier')}
                    className={`p-4 border
                                 bg-[#d8ad5d] text-white text-xl ${selectedList === 'premier' ? 'bg-[#937131] border-b-4 border-b-black' : ''}`}>
                    PREMIER SUITE
                </button>
            </div>
        </div>
    );
};

export default ButtonToggle;