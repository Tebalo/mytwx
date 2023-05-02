import { useState, useEffect } from 'react';
import TopNavigation from './TopNavigation';

interface Prop{
    username: string;
}

const OfferList = ({username}:Prop) => {
    const [applications, setApplications] = useState<ApiResponse>({success: false, message: ''});
    const [response, setResponse] = useState<ApiResponse>({success: false, message: ''});
                useEffect(() => {
                    const fetchData = async () => {
                    const cachedResponse = localStorage.getItem('username');
        
                    if(cachedResponse){
                     setResponse(JSON.parse(cachedResponse));
                    }else{
                        const response = await getUser(username);
                        setResponse(response);
                        localStorage.setItem('username', JSON.stringify(response));
                    }
                    //console.log(courses);
                    const cachedApplications = localStorage.getItem('applications'+'username');
                    if(cachedApplications){
                        setApplications(JSON.parse(cachedApplications));
                    }else{
                        const applications = await getApplications(response.id);
                        setApplications(applications);
                        localStorage.setItem('applications'+'username', JSON.stringify(applications));
                    }
                }
    }, []);
  return (
    <div className='content-container'>
    <TopNavigation title='Offers'/>
    <div className='min-h-screen bg-white dark:bg-gray-700 m-1 mx-2'>
                        <ul>
                            {Array.isArray(applications) && applications.map((application) => (
                                <li key={application.id} className='text-lg mb-2'>
                                    <div className='flex justify-between'>
                                        <button  className="text-gray-700 hover:bg-green-700 bg-slate-600 w-full" 
                                        onClick={() => {
                                            const serializedApplication = JSON.stringify(application);
                                            console.log(serializedApplication);
                                            window.open(
                                              `/OfferLetter?application=${encodeURIComponent(
                                                serializedApplication
                                              )}`,
                                              "popup",
                                              "width=800,height=400"
                                            );
                                          }}
                                        >
                                                    {application.program_name}
                                            </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                   
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
    candidate_number: string;
    center_number: string;
    success: boolean;
    message: string;
    token?: string;
}
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2'/>;
// Create a function that POST data to an api endpoint
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

export default OfferList;


