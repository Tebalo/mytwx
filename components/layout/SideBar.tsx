import {BsPlus, BsGearFill} from 'react-icons/bs';
import {FaHandHoldingWater, FaBookReader} from 'react-icons/fa';
import {RiChat1Fill, RiHome4Fill} from 'react-icons/ri';
import React, {ReactElement} from 'react';
import { IconType } from 'react-icons/lib';

const SideBar = () => {
    return (
        <div className="fixed top-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
            <SideBarIcon icon={<RiHome4Fill size="28"/> } text={'Home'}/>
            <Divider/>
            <SideBarIcon icon={<BsPlus size="32"/>} text={'Create'}/>
            <SideBarIcon icon={<FaBookReader size="25"/>} text={'Programmes'}/>
            <SideBarIcon icon={<FaHandHoldingWater size="25"/>} text={'Offers'}/>
            <SideBarIcon icon={<RiChat1Fill size="28"/>} text={'Chat'}/>
            <Divider/>
            <SideBarIcon icon={<BsGearFill size="22"/>} text={'Settings'}/>
        </div>
    );
}
interface MyComponentProps{
    icon: React.ReactNode;
    text:string;
}
const SideBarIcon = ({icon, text}:MyComponentProps) =>(
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const Divider = () => <hr className='sidebar-hr'/>

export default SideBar;