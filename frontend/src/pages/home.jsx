import React from "react";
import Sidebar from "../components/Home/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row h-full gap-4">
            <div className="w-full lg:w-1/6 border border-gray-500 rounded-xl p-4 flex flex-col justify-between">
                <Sidebar />
            </div>
            <div className="w-full lg:w-5/6 border border-gray-500 rounded-xl p-4">
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;
