import { useState, useEffect } from 'react';
interface Course {
  id: number;
  name: string;
  faculty: string;
  level: number;
}

const coursesData: Course[] = [
  {
    id: 1,
    name: "Bachelor of Accountancy",
    faculty: "Business",
    level: 100
  },
  {
    id: 2,
    name: "Bachelor of Business Administration(Management)",
    faculty: "Business",
    level: 100
  },
  {
    id: 3,
    name: "Bachelor of Finance",
    faculty: "Business",
    level: 100
  },
  {
    id: 4,
    name: "Bachelor of Arts",
    faculty: "Social Sciences",
    level: 100
  },
  {
    id: 5,
    name: "Bachelor of Laws",
    faculty: "Social Sciences",
    level: 100
  },
  {
    id: 6,
    name: "Bachelor of Arts in Economics",
    faculty: "Social Sciences",
    level: 100
  },
  {
    id: 7,
    name: "Bachelor of Medicine Bachelor of Surgery",
    faculty: "Medicine",
    level: 100
  },
  {
    id: 8,
    name: "Bachelor of Science (Biological Sciences)",
    faculty: "Sciences",
    level: 100
  },
  {
    id: 9,
    name: "Bachelor of Science (Computer Science)",
    faculty: "Sciences",
    level: 100
  },
  {
    id: 10,
    name: "Bachelor of Science (Computing with Finance)",
    faculty: "Sciences",
    level: 100
  },
  {
    id: 11,
    name: "Bachelor of Geomatics",
    faculty: "Engineering and Technology",
    level: 100
  },
];

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFaculty(event.target.value);
  };

  const filteredCourses = selectedFaculty
    ? courses.filter((course) => course.faculty === selectedFaculty)
    : courses;

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 flex'>Recommended courses for you</h2>
      <label className='flex mb-4 justify-end'>
      <span className='text-gray-700 mr-5'>Select a faculty:</span>
        <select className='form-select block mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none' value={selectedFaculty} onChange={handleFacultyChange}>
          <option value="">All</option>
          <option value="Sciences">Sciences</option>
          <option value="Business">Business</option>
          <option value="Social Sciences">Social Sciences</option>
          <option value="Engineering and Technology">Engineering and Technology</option>
          <option value="Medicine">Medicine</option>
        </select>
      </label>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredCourses.map((course) => (
          <div key={course.id} className='card p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-lg font-medium mb-4'>{course.name}</h2>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
              Apply
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;


