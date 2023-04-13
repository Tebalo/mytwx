import {BsPlus, BsGearFill} from 'react-icons/bs';
import {FaHandHoldingWater, FaBookReader} from 'react-icons/fa';
import {RiChat1Fill, RiHome4Fill} from 'react-icons/ri';
import React, {ReactElement} from 'react';
import {useRouter} from 'next/router';

const SideBar = () => {
    const router = useRouter();
    const handleClick = (path: string) =>{
        router.push(path);
    }
    return (
        <div className="fixed top-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
            <SideBarIcon icon={<RiHome4Fill size="28"/> } text={'Home'} onClick={() => handleClick('/')}/>
            <Divider/>
            <SideBarIcon icon={<BsPlus size="32"/>} text={'Create'} onClick={() => handleClick('/Collect')}/>
            <SideBarIcon icon={<FaBookReader size="25"/>} text={'Programmes'} onClick={() => handleClick('/Programmes')}/>
            <SideBarIcon icon={<FaHandHoldingWater size="25"/>} text={'Offers'} onClick={() => handleClick('/')}/>
            <SideBarIcon icon={<RiChat1Fill size="28"/>} text={'Chat'} onClick={() => handleClick('/chat')}/>
            <Divider/>
            <SideBarIcon icon={<BsGearFill size="22"/>} text={'Settings'} onClick={() => handleClick('/')}/>
        </div>
    );
}
interface MyComponentProps{
    icon: React.ReactNode;
    text:string;
    onClick?: () => void;
}
const SideBarIcon = ({icon, text, onClick}:MyComponentProps) =>(
    <div className='sidebar-icon group' onClick={onClick}>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const Divider = () => <hr className='sidebar-hr'/>

export default SideBar;