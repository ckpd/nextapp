import { faLightbulb, faWater, faWind, faCloud, faChevronRight, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import { MainLayout } from '../layouts/MainLayout';
import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';


const SERVER = "http://192.168.0.14:3009";



function Index() {
    const [humidity, setHumidity] = useState(0);
    const [temperature, setTemperature] = useState(0);


    useEffect(() => {
        const socket = socketIOClient(SERVER);
        socket.on("changed", data => {
            console.log(data)
            if (data) {
                setHumidity(data.humidity)
                setTemperature(data.temp)
            }

        })
        // return () => {
        //     cleanup
        // }
    }, [])



    return (
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 capitalize" >
            <div className="rounded grid py-8 bg-gray-100">
                <div className="grid w-full text-center  items-center align-items cursor-pointer">
                    <div className="p-8">
                        <div className="p-4">
                            <FontAwesomeIcon
                                className="text-5xl text-gray-800"
                                icon={faWind} />
                        </div>
                        <div className="p-4">
                            <LinearProgress variant="determinate" value={50} />
                        </div>

                        <div className="p-4 ">
                            <h1 className="text-1xl font-bold">50%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded grid py-8 bg-gray-100">
                <div className="grid w-full text-center  items-center align-items cursor-pointer">
                    <div className="p-8">
                        <h1>humidity</h1>
                        <div className="p-4">

                            <FontAwesomeIcon
                                className="text-5xl text-gray-800"
                                icon={faWater} />
                        </div>
                        <div className="p-4">
                            <LinearProgress variant="determinate" value={humidity} />
                        </div>

                        <div className="p-4 ">
                            <h1 className="text-1xl font-bold">{humidity}%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded grid py-8 bg-gray-100">
                <div className="grid w-full text-center  items-center align-items cursor-pointer">
                    <div className="p-8">
                        <h1>temperature</h1>
                        <div className="p-4">
                            <FontAwesomeIcon
                                className="text-5xl text-gray-800"
                                icon={faSun} />
                        </div>
                        <div className="p-4">
                            <LinearProgress variant="determinate" value={temperature} />
                        </div>

                        <div className="p-4 ">
                            <h1 className="text-1xl font-bold">{temperature}&#176;C</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded grid py-8 bg-gray-100">
                <div className="grid w-full text-center  items-center align-items cursor-pointer">
                    <div className="p-8">
                        <div className="p-4">
                            <FontAwesomeIcon
                                className="text-5xl text-gray-800"
                                icon={faCloud} />
                        </div>
                        <div className="p-4">
                            <LinearProgress variant="determinate" value={50} />
                        </div>

                        <div className="p-4 ">
                            <h1 className="text-1xl font-bold">50%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.Layout = MainLayout;

export default Index;