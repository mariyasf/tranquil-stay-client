import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RoomsCard from '../../Components/RoomsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';

const RoomsCategories = () => {
    const { loding } = UseAuth();
    const [rooms, setRooms] = useState([]);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
            setRooms(data)

        }
        getData()
    }, []);

    // console.log(rooms.length);

    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };

    const filterRoomsByCategory = (category) => {
        return rooms.filter(room => room.category === category);
    };

    return (
        <div className='lg:max-w-[1240px] bg-white mx-auto my-10 px-10 lg:px-5'>
            <Tabs>
                <TabList>
                    <Tab>Luxury</Tab>
                    <Tab>Presidential</Tab>
                    <Tab>Family</Tab>
                    <Tab>Premier</Tab>
                </TabList>
                <div className="flex justify-end mt-3">
                    {/* <Button className="bg-green-600">Sort By</Button> */}


                    <select name="" id="" onChange={handleSortBy}
                        className="p-4 rounded-2xl text-white bg-[#23BE0A]">

                        <option className="bg-white text-black" value="">Short By</option> 
                        <option className="bg-white text-black" value="price">Price</option> 

                    </select>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>


                        {
                            filterRoomsByCategory('luxury suite').map(room => (
                                <RoomsCard
                                    key={room._id}
                                    room={room}
                                    sortBy={sortBy}
                                />
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                        {
                            filterRoomsByCategory('presidential suite').map(room => (
                                <RoomsCard
                                    key={room._id}
                                    room={room}
                                    sortBy={sortBy}
                                />
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                        {
                            filterRoomsByCategory('family suite').map(room => (
                                <RoomsCard
                                    key={room._id}
                                    room={room}
                                    sortBy={sortBy}
                                />
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                        {
                            filterRoomsByCategory('premier suite').map(room => (
                                <RoomsCard
                                    key={room._id}
                                    room={room}
                                    sortBy={sortBy}
                                />
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RoomsCategories;
