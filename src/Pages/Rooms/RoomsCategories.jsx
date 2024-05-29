import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RoomsCard from '../../Components/RoomsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';

const RoomsCategories = () => {
    const { loding } = UseAuth();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`,)
            setRooms(data)
        }
        getData()
    }, []);


    if (loding) {
        return <div className="text-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }


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


                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>


                        {
                            filterRoomsByCategory('luxury suite').map(room => (
                                <RoomsCard
                                    key={room._id}
                                    room={room} 
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
