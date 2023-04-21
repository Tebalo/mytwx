import TopNavigation from './TopNavigation';
import { useState } from 'react';
import RecommendedCourses from './RecommendedCourses';
const ProgrammeList = () => {
    const [section, setSection] = useState(1); // initialize state to show the first section
    const nextSection = () => {
        setSection(section + 1); // update state to show the next section
    }
    const prevSection = () => {
        setSection(section - 1);
    }
    return (
        <div className='content-container'>
            <TopNavigation />
            <div className='h-screen flex flex-col bg-white dark:bg-gray-900 mx-1 my-1'>
                <section className='bg-gray-300 my-5 mx-5 shrink-0'>
                    <div className='mx-5 my-3'>
                        <RecommendedCourses />
                    </div>
                </section>
                <div className='mx-5 grid grid-cols-2 gap-5'>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Scholarships</div>
                        <Divider />
                    </section>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Top Offers</div>
                        <Divider />
                    </section>
                </div>
            </div>
        </div>
    );
};


const Label = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className='flex items-center mb-4'>
            <div className='w-1/3 font-medium text-gray-600'>{label}:</div>
            <div className='w-2/3 text-gray-800'>{value}</div>
        </div>)
};
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2' />;

export default ProgrammeList;