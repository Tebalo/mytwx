import React, { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['Online-application', 'Top-offers'];
const questions = ['How-to-apply?', 'What-are-the-requirements?', 'Common-misconceptions'];
const random = ['Student-center', 'Library'];

const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg min-h-screen'>
            <ChannelBlock />
            <div className='channel-container'>
                <Dropdown header='Topics' selections={topics} />
                <Dropdown header='Questions' selections={questions} />
                <Dropdown header='Random' selections={random} />
            </div>
        </div>
    );
};
interface DropDownProps{
    header:string;
    selections:Array<string>;
}
const Dropdown = ({ header, selections }:DropDownProps) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='dropdown'>
            <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
                <ChevronIcon expanded={expanded} />
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded &&
                selections &&
                selections.map((selection) => <TopicSelection selection={selection} />)}
        </div>
    );
};
interface ChevronIconProps{
    expanded: React.ReactNode;
}
const ChevronIcon = ({ expanded }:ChevronIconProps) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    );
};
interface TopicSelectionProps{
    selection:string;
}
const TopicSelection = ({ selection }:TopicSelectionProps) => (
    <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
);

const ChannelBlock = () => (
    <div className='channel-block'>
        <h5 className='channel-block-text'>Knowledge Articles</h5>
    </div>
);

export default ChannelBar;
