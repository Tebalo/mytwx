import TopNavigation from './TopNavigation';

const Create = () => {
    const first_name = "Micah";
    const last_name = "Krebs";
    const studentID = "199006";
    const nationalID = "440516214";
    const age = "1983/09/08";
    const verified = "Yes";
    return (
        <div className='content-container'>
            <TopNavigation />
            <div className='h-screen flex flex-col bg-white dark:bg-gray-900 mx-1 my-1'>
                <section className='bg-gray-200 h-80 my-5 mx-5 shrink-0'>
                    <div className='mx-5 my-3'>
                        <div className='text-2xl font-bold text-blue-900 mb-2'>Confirm Your Information</div>
                        <Divider/>
                        <div className='grid grid-cols-2 gap-4'>
                            <Label label='First Name' value={first_name}/>
                            <Label label='Last Name' value={last_name}/>
                            <Label label='Student ID' value={studentID}/>
                            <Label label='National ID' value={nationalID}/>
                            <Label label='Age' value={age}/>
                            <Label label='Verified' value={verified ? "Yes":"No"}/>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center'>Next</button>
                        </div>
                    </div>
                </section>
                <div className='flex flex-row mx-5'>
                    <section className='bg-white h-48 w-1/2 left-0 my-5 bg-gray-200'>
                        <div>Past Interactions</div>
                        <Divider/>
                    </section>
                    <section>
                    <section className='bg-white h-48 w-fit my-5 mx-5 bg-gray-200'>
                        <div>Recommendations</div>
                    </section>
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
</div>
)

};
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2'/>;

export default Create;