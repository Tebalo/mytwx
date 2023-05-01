import { useState, useEffect } from 'react';
import TopNavigation from './TopNavigation';
import ReactModal from 'react-modal';
interface Course {
  id: number;
  name: string;
  faculty: string;
  qualifying_criteria: {
    [subject: string]: string;
  };
  qualifying_points: number;
}

interface CourseList{
  courses: Course[];
  id: number
}

const CourseList = ({courses, id}:CourseList) => {
  //const [courses, setCourses] = useState<Course[]>(coursesData);
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFaculty(event.target.value);
  };

  const handleAddProgram = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsModalOpen(true);
  };

  // Create a fucntion to handle the application
  const handleApplication = async (programme:number,user:number) => {
    const url = "http://127.0.0.1:8000/api/my-applications/";
    const data = {programme:programme, user: user};
    const ourl = "http://127.0.0.1:8000/api/offers/";
    
    //console.log(data);
    try {
      const response = await apply(url, data);
      console.log(response);
      //const offer = {application:application, user: user};
      //const oresponse = await apply(ourl, offer);
      //console.log(oresponse);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredCourses = selectedFaculty
    ? courses.filter((course) => course.faculty === selectedFaculty)
    : courses;

  return (
    <div className='content-container'>
    <TopNavigation title='Programmes'/>
    <div className='min-h-screen bg-white dark:bg-gray-900 m-1'>
      
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h2>Add Program</h2>
        <form>
          {/* Add form fields here */}
        </form>
      </ReactModal>
      <h2 className='text-2xl font-bold mb-4 flex m-2 text-gray-500'>Programmes</h2>
      <Divider />
      <label className='flex mb-4 justify-end'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mx-10' onClick={handleAddProgram}>
              Add
      </button>
      <span className='text-gray-700 mr-5 font-medium'></span>
        <select className='form-select block mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none mx-5' value={selectedFaculty} onChange={handleFacultyChange}>
          <option value="">All</option>
          <option value="Science">Science</option>
          <option value="Business">Business</option>
          <option value="Social Sciences">Social Sciences</option>
          <option value="Engineering and Technology">Engineering and Technology</option>
          <option value="Medicine">Medicine</option>
        </select>
      </label>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
      {Array.isArray(filteredCourses) && filteredCourses.map((course) => (
          <div key={course.id} className='card p-4 bg-white dark:bg-gray-500 rounded-lg shadow-md'>
            <h2 className='text-lg font-medium mb-1 font-semibold'>{course.name}</h2>
            <Divider/>
            <p className='text-gray-700 mb-2 font-semibold'>Faculty: {course.faculty}</p>
            <p className="text-gray-700 mb-2 font-semibold">
              Qualifying Criteria:
                {Object.entries(course.qualifying_criteria).map(([subject, grade]) => (
                   <span key={subject} >
                     {` ${subject}: ${grade},`}
                  </span>
                ))}
            </p>
            <p className='text-gray-700 mb-2 font-semibold'>Qualifying Points: {course.qualifying_points}</p>
            <Divider/>
            <button className='text-white px-4 py-2 rounded-lg hover:bg-red-600 bg-red-700' onClick={() => handleApplication(course.id, id)}>
              Delete
            </button>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mx-10' onClick={() => handleApplication(course.id, id)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
const Divider = () => <hr className='border-t-2 border-gray-300 mb-2'/>;
// Create a function that POST data to an api endpoint
async function apply(url: string, data: any): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
export default CourseList;


