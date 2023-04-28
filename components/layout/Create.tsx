import TopNavigation from './TopNavigation';
import { useState, useEffect } from 'react';
import RecommendedCourses from './RecommendedCourses';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Create = () => {
    const [section, setSection] = useState(1); // initialize state to show the first section
    const [response, setResponse] = useState<ApiResponse>({success: false, message: ''});
    const [results, setResults] = useState<ApiResponse>({success: false, message: ''});
    const [courses, setCourses] = useState<ApiResponse>({success: false, message: ''});
    const [applications, setApplications] = useState<ApiResponse>({success: false, message: ''});

    const router = useRouter();
    const username = router.query.username as string;

    const nextSection = () => {
        setSection(section + 1); // update state to show the next section
    }
    const prevSection = () => {
        setSection(section - 1);
    }
    useEffect(() => {
        const fetchData = async () => {
            //alert(username);
            const response = await getUser(username);
            //alert(response.username);
            console.log(response);
            setResponse(response);

            const results = await getResults(response.candidate_number, response.center_number);
            setResults(results);
            //console.log(results);
            const courses = await getRecommendations();
            setCourses(courses);
            console.log(courses);

            const applications = await getApplications(response.id);
            setApplications(applications);
            console.log(applications);
        };
        fetchData();
    }, []);

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
                                <Label label='First Name' value={response.first_name}/>
                                <Label label='Last Name' value={response.last_name}/>
                                <Label label='Candidate ID' value={response.candidate_number}/>
                                <Label label='National ID' value={response.national_id}/>
                                <Label label='Center Number' value={response.center_number}/>
                                <Label label='Verified' value={response.status}/>
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
                                {Object.entries(results.grades).map(([subject, grade]) => (
                                    <Label key={subject} label={subject} value={grade} />
                                ))}
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
                            <RecommendedCourses courses={courses} id={response.id}/>
                        </div>
                    </section>
                )}
                <div className='mx-5 grid grid-cols-2 gap-5'>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Applications</div>
                        <Divider/>
                        <ul>
                            {Array.isArray(applications) && applications.map((application) => (
                                <li key={application.id} className='text-lg mb-2'>
                                    <div className='flex justify-between'>
                                        <Link href="#" className="text-blue-500 hover:text-blue-700" onClick={() => window.open('/OfferLetter', 'popup', 'width=400,height=400')}>{application.program_name}</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className='bg-gray-200 h-80 my-5 bg-gray-200 px-4 py-2'>
                        <div className='text-lg font-medium text-gray-800 mb-2'>Offers</div>
                        <Divider/>
                        <ul>
                            {Array.isArray(applications) && applications.map((application) => (
                                <li key={application.id} className='text-lg mb-2'>
                                    <div className='flex justify-between'>
                                        <Link href="#" className="text-blue-500 hover:text-blue-700" onClick={() => window.open(`/OfferLetter?application=${application}`, 'popup', 'width=800,height=400')}>{application.program_name}</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

interface ApiResponse{
    id: number;
    first_name: string;
    last_name: string;
    status: string;
    national_id: string;
    grades: { [s: string]: unknown; } | ArrayLike<unknown>;
    candidate_number: String;
    center_number: String;
    success: boolean;
    message: string;
    token?: string;
}
const Label = ({label,value}:{label:string,value:string}) =>{
return(
<div className='flex items-center mb-4'>
    <div className='w-1/3 font-medium text-gray-600'>{label}:</div>
    <div className='w-2/3 text-gray-800'>{value}</div> 
</div>)};
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2'/>;

export const getUser = async (username: String): Promise<ApiResponse> => {
    try{
        const response = await fetch(`http://127.0.0.1:8000/api/user?username=${username}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
        });
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e);
        return {success: false,message: 'User not found'};
    }
  }
// Create a function to get the user's results
export const getResults = async (candidate_id: String,center_number: String): Promise<ApiResponse> => {
    try{
        const response = await fetch(`http://127.0.0.1:8000/api/candidate?candidate_id=${candidate_id}&center_number=${center_number}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
        }); 
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e);
        return {success: false,message: 'Results not found'};
    }
}
// Create a function to get program recommendations
export const getRecommendations = async (): Promise<ApiResponse> => {
    try{
        const response = await fetch('http://127.0.0.1:8000/api/programme-list',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
        }); 
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e);
        return {success: false,message: 'Programme not found'};
    }
}
export const getApplications = async (id:number): Promise<ApiResponse> => {
    try{
        const response = await fetch(`http://127.0.0.1:8000/api/applications?user_id=${id}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
        }); 
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e);
        return {success: false,message: 'Applications not found'};
    }
}

export default Create;