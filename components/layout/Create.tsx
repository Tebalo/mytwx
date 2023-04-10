import TopNavigation from './TopNavigation';
import { useState } from 'react';
import RecommendedCourses from './RecommendedCourses';
const Create = () => {
    const [section, setSection] = useState(1); // initialize state to show the first section
    const first_name = "Micah";
    const last_name = "Krebs";
    const studentID = "199006";
    const nationalID = "440516214";
    const age = "1983/09/08";
    const verified = "Yes";

    const maths = "A";
    const english = "B";
    const chemistry = "B";
    const geography = "B";
    const history = "C";
    const biology = "A";
    const computer_studies = "A";
    const social_studies = "C";
    const music = "D";

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
                {section == 1 &&( // show section 1 if section state is 1
                    <section className='bg-gray-200 my-5 mx-5'>
                        <div className='mx-5 my-3'>
                            <div className='text-2xl font-bold text-blue-900 mb-2'>Please Confirm Your Personal Details</div>
                            <Divider/>
                            
                            <div className='grid grid-cols-2 gap-4'>
                                <Label label='First Name' value={first_name}/>
                                <Label label='Last Name' value={last_name}/>
                                <Label label='Student ID' value={studentID}/>
                                <Label label='National ID' value={nationalID}/>
                                <Label label='Date Of Birth' value={age}/>
                                <Label label='Verified' value={verified ? "Yes":"No"}/>
                            </div>
                            <div className='flex justify-end mx-96'>
                                <button className='hover:text-2x1 text-blue-800 font-bold py-1 px-4'>Edit</button>
                            </div>
                            <div className='flex justify-end mt-5 mb-5'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center' onClick={nextSection}>Next</button>
                            </div>
                        </div>
                    </section>
                )}
                {section === 2 &&(
                    <section className='bg-gray-200 my-5 mx-5 shrink-0'>
                        <div className='mx-5 my-3'>
                            <div className='text-2xl font-bold text-blue-900 mb-2'>Your Results</div>
                            <Divider/>
                            <div className='grid grid-cols-3 gap-4'>
                                <Label label='Maths' value={maths}/>
                                <Label label='English Language' value={english}/>
                                <Label label='Biology' value={biology}/>
                                <Label label='Chemistry' value={chemistry}/>
                                <Label label='Geography' value={geography}/>
                                <Label label='Computer Studies' value={computer_studies}/>
                                <Label label='Social Studies' value={social_studies}/>
                                <Label label='History' value={history}/>
                                <Label label='Music' value={music}/>
                            </div>
                            <div className='flex justify-end mt-5'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center mx-2' onClick={prevSection}>Prev</button>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center' onClick={nextSection}>Submit</button>
                            </div>
                        </div>
                    </section>
                )}
                {section === 3 &&(
                    <section className='bg-gray-200 my-5 mx-5 shrink-0'>
                        <div className='mx-5 my-3'>
                            <RecommendedCourses/>
                        </div>
                    </section>
                )}
                <div className='mx-5 grid grid-cols-2 gap-5'>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Scholarships</div>
                        <Divider/>
                    </section>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Top Offers</div>
                        <Divider/>
                    </section>
                </div>
            </div>
        </div>
    );
};


const Label = ({label,value}:{label:string,value:string}) =>{
return(
<div className='flex items-center mb-4'>
    <div className='w-1/3 font-medium text-gray-600'>{label}:</div>
    <div className='w-2/3 text-gray-800'>{value}</div> 
</div>)};
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2'/>;

export default Create;