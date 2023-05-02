import { useState, useEffect } from 'react';
interface Course {
  id: number;
  name: string;
  faculty: string;
  qualifying_criteria: QualifyingCriteria;
  qualifying_points: number;
  carrying_capacity: number;
  number_of_admitted: number;
}
interface QualifyingCriteria {
  subject1: string;
  subject2: string;
  subject3: string;
}
interface Candidate {
  id: number;
  name: string;
  candidate_id: string;
  center_number: string;
  email: string;
  phone_number: string;
  status: string;
  created_at: string;
  updated_at: string;
  grades: {
    [subject: string]: string;
  };
}
interface CourseList{
  courses: Course[];
  id: number
}
const SCALE = {
  A: 8,
  B: 7,
  C: 6,
  D: 5,
  E: 4,
  F: 3,
};

const CourseList = ({courses, id}:CourseList) => {
  //const [courses, setCourses] = useState<Course[]>(coursesData);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [filteredProgrammes, setFilteredProgrammes] = useState<Course[]>([]);

  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFaculty(event.target.value);
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
    // Get user from local storage
    const user = localStorage.getItem('user');
  useEffect(() => {
  setCandidate(JSON.parse(user));
  console.log('candidate/',candidate);
  }, []);
  const filteredCourses = selectedFaculty
    ? courses.filter((course) => course.faculty === selectedFaculty)
    : courses;

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 flex'>Recommended Programmes For You</h2>
      <label className='flex mb-4 justify-end'>
      <span className='text-gray-700 mr-5'>Select a faculty:</span>
        <select className='form-select block mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none' value={selectedFaculty} onChange={handleFacultyChange}>
          <option value="">All</option>
          <option value="Science">Science</option>
          <option value="Business">Business</option>
          <option value="Social Sciences">Social Sciences</option>
          <option value="Engineering and Technology">Engineering and Technology</option>
          <option value="Medicine">Medicine</option>
        </select>
      </label>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredCourses.map((course) => (
          <div key={course.id} className='card p-4 bg-white dark:bg-gray-500 rounded-lg shadow-md'>
            <h2 className='text-lg font-medium mb-4'>{course.name}</h2>
            <Divider />
            <p className='text-gray-700 mb-2'>Faculty: {course.faculty}</p>
            <p className="text-gray-700 mb-2">
              Qualifying Criteria:
                {Object.entries(course.qualifying_criteria).map(([subject, grade]) => (
                   <span key={subject}>
                     {` ${grade}`}
                  </span>
                ))}
            </p>
            <p className='text-gray-700 mb-2'>Qualifying Points: {course.qualifying_points}</p>
            <Divider />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600' onClick={() => handleApplication(course.id, id)}>
              Apply
            </button>
          </div>
        ))}
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


