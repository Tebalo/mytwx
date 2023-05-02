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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [faculty, setFaculty] = useState("");
  const [qualifying_criteria, setQualifying_criteria] = useState("");
  const [qualifying_points, setQualifying_points] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);


  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFaculty(event.target.value);
  };

  const handleAddProgram = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsModalOpen(true);
  };

const handleEditProgram = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsModalOpen(true);
  };
  const DeleteProgram = async (id:number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/programme-list/?id=${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        //credentials: 'include',
      }); 
      console.log(response);
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const EditProgram = async (id:number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/programme-list/?id=${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        //credentials: 'include',
      }); 
      console.log(response);
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const AddProgram = async () => {
    const url = "http://127.0.0.1:8000/api/programme-list/";
    const qualifying_criteria = {subject1:subject1, subject2:subject2, subject3:subject3};
    const data = {name:name, description:description, faculty:faculty, qualifying_criteria:qualifying_criteria, qualifying_points:totalPoints, carrying_capacity:capacity};
    const method = "POST";
    try{
      const response = await apply(url, data, method);
      console.log(response);
  }catch(error){
      console.error(error);
    }
  };
  const filteredCourses = selectedFaculty
    ? courses.filter((course) => course.faculty === selectedFaculty)
    : courses;

  return (
    <div className='content-container'>
    <TopNavigation title='Programmes'/>
    <div className='min-h-screen bg-white dark:bg-gray-700 m-1'>
      
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white dark:bg-gray-500 rounded-lg shadow-lg p-4 w-2/3 mx-auto"	
      >
        {/*<h2 className="">Add Program</h2>*/}
        <form>
          {/* Add form fields here */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Program Name
          </label>
          <input
              type="text"
              id="name"
              name="name"
              className="border rounded-lg py-2 px-3 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
      <label
        htmlFor="description"
        className="block text-gray-700 font-bold mb-2"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={3}
        className="border rounded-lg py-2 px-3 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="faculty" className="block text-gray-700 font-bold mb-2">
        Faculty
      </label>
      <select
        id="faculty"
        name="faculty"
        className="border rounded-lg py-2 px-3 w-full"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
      >
        <option value="">-- Select Faculty --</option>
        <option value="Arts">Faculty of Arts</option>
        <option value="Science">Faculty of Science</option>
        <option value="Engineering and Technology">Faculty of Engineering</option>
        <option value="Education">Faculty of Education</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Capacity
      </label>
      <input
        type="number"
        id="capacity"
        name="capacity"
        min="1"
        className="border rounded-lg py-2 px-3 w-full"
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
      />
    </div>
    <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Qualifying criteria
      </label>
    <div className="mb-4 grid grid-cols-4">

    <div className="mb-1">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 1
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject1}
        onChange={(e) => setSubject1(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-1 px-2">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 3
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject2}
        onChange={(e) => setSubject2(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-1">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 2
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject3}
        onChange={(e) => setSubject3(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-4 pl-3">
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Total Points
      </label>
      <input
        type="number"
        id="capacity"
        name="capacity"
        min="1"
        className="border rounded-lg py-2 px-3 w-full"
        value={totalPoints}
        onChange={(e) => setTotalPoints(parseInt(e.target.value))}
      />
    </div>

    </div>
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        onClick={AddProgram}
      >
        Add Program
      </button>
      <button
        type="button"
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg ml-4 hover:bg-gray-400"
        onClick={() => setIsModalOpen(false)}
      >
        Cancel
      </button>
    </div>
        </form>
      </ReactModal>



        <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white dark:bg-gray-500 rounded-lg shadow-lg p-4 w-2/3 mx-auto"	
      >
        {/*<h2 className="">Add Program</h2>*/}
        <form>
          {/* Add form fields here */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Program Name
          </label>
          <input
              type="text"
              id="name"
              name="name"
              className="border rounded-lg py-2 px-3 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
      <label
        htmlFor="description"
        className="block text-gray-700 font-bold mb-2"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={3}
        className="border rounded-lg py-2 px-3 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="faculty" className="block text-gray-700 font-bold mb-2">
        Faculty
      </label>
      <select
        id="faculty"
        name="faculty"
        className="border rounded-lg py-2 px-3 w-full"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
      >
        <option value="">-- Select Faculty --</option>
        <option value="Arts">Faculty of Arts</option>
        <option value="Science">Faculty of Science</option>
        <option value="Engineering and Technology">Faculty of Engineering</option>
        <option value="Education">Faculty of Education</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Capacity
      </label>
      <input
        type="number"
        id="capacity"
        name="capacity"
        min="1"
        className="border rounded-lg py-2 px-3 w-full"
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
      />
    </div>
    <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Qualifying criteria
      </label>
    <div className="mb-4 grid grid-cols-4">

    <div className="mb-1">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 1
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject1}
        onChange={(e) => setSubject1(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-1 px-2">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 3
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject2}
        onChange={(e) => setSubject2(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-1">
      <div>
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Subject 2
      </label>
      <select
        id="subject1"
        name="capacity"
        className="border rounded-lg py-2 px-3 w-full"
        value={subject3}
        onChange={(e) => setSubject3(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Computer Studies">Computer Studies</option>

      </select>
      </div>
    </div>

    <div className="mb-4 pl-3">
      <label htmlFor="capacity" className="block text-gray-700 font-bold mb-2">
        Total Points
      </label>
      <input
        type="number"
        id="capacity"
        name="capacity"
        min="1"
        className="border rounded-lg py-2 px-3 w-full"
        value={totalPoints}
        onChange={(e) => setTotalPoints(parseInt(e.target.value))}
      />
    </div>

    </div>
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        onClick={AddProgram}
      >
        Add Program
      </button>
      <button
        type="button"
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg ml-4 hover:bg-gray-400"
        onClick={() => setIsModalOpen(false)}
      >
        Cancel
      </button>
    </div>
        </form>
      </ReactModal>

      <label className='flex mb-4 justify-end'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mx-10' onClick={handleAddProgram}>
              Add
      </button>
      <span className='text-gray-700 mr-5 font-medium'></span>
        <select className='form-select block mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none mx-5' value={selectedFaculty} onChange={handleFacultyChange}>
          <option value="">All Programms</option>
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
              Pre-requisites:
                {Object.entries(course.qualifying_criteria).map(([subject, grade]) => (
                   <span key={subject} >
                     {` ${grade},`}
                  </span>
                ))}
            </p>
            <p className='text-gray-700 mb-2 font-semibold'>Pre-requisites Total Points: {course.qualifying_points}</p>
            <Divider/>
            <button className='text-white px-4 py-2 rounded-lg hover:bg-red-600 bg-red-700' onClick={() => DeleteProgram(course.id)}>
              Delete
            </button>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mx-10' onClick={handleEditProgram}>
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
async function apply(url: string, data: any, method:string): Promise<any> {
  const response = await fetch(url, {
    method: method,
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


