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
      <label>
        Select a faculty:
        <select value={selectedFaculty} onChange={handleFacultyChange}>
          <option value="">All</option>
          <option value="Sciences">Sciences</option>
          <option value="Business">Business</option>
          <option value="Social Sciences">Social Sciences</option>
          <option value="Engineering and Technology">Engineering and Technology</option>
          <option value="Medicine">Medicine</option>
        </select>
      </label>
      <ul>
        {filteredCourses.map((course) => (
          <div key={course.id} className='card'>
            <h2 className='text-lg font-medium'>{course.name}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;


