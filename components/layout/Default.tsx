import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';

const Default = () => {
    return (
        <div className='content-container'>
            <TopNavigation title='Home'/>
            <div className='content-list h-screen'>
                 {/* Add Home Content Here*/}
            </div>
        </div>
    );
};

export default Default;
