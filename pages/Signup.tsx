import { useState } from "react";
import {useRouter} from "next/router";
import Link from 'next/link';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [centerNumber, setCenterNumber] = useState("");
  const [candidateNumber, setCandidateNumber] = useState("");
  const [coursePreferences, setCoursePreferences] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [qualificationYear, setQualificationYear] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [otherQualifications, setOtherQualifications] = useState("");
  const router = useRouter();
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try{
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email,
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName,
          birth_date: birthDate,
          center_number: centerNumber,
          candidate_number: candidateNumber,
          course_preferences: coursePreferences,
          highest_qualification: highestQualification,
          highest_qualification_year: qualificationYear,
          national_id: nationalID,
          languages: "English",
          other_qualifications: otherQualifications,
        }),
      });
      if(!response.ok){
        const message = await response.text();
        alert(message); 
        //router.push("/Login");
      }else{
        //alert("User registered");
        router.push("/Login");
      }
    }catch(err) {
      console.log(err);
      //router.push("/Login");
      alert("Error registering user");
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-500">
    <div className="w-full px-4 py-8 mx-auto dark:bg-gray-500 mx-56">
    <h1 className="text-3xl font-bold mb-4">Registration</h1>
    <form onSubmit={handleSubmit}>
    <div className="flex pr-4">
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      </div>


      <div className="flex pr-4">
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          User Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
 
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherValue">
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>
      </div>


      <div className="flex pr-4">
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
        Birth Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthDate"
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>


      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          Candidate Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="candidateNumber"
          type="text"
          placeholder="Candidate Number"
          value={candidateNumber}
          onChange={(e) => setCandidateNumber(e.target.value)}
        />
      </div>
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Center number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="centerNumber"
          type="text"
          placeholder="Center Number"
          value={centerNumber}
          onChange={(e) => setCenterNumber(e.target.value)}
        />
      </div>
      </div>

      <div className="flex pr-4">
      <div className="mb-4 mr-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coursePreferences">
             Course Preferences
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coursePreferences"  
            placeholder="Course Preferences"
            value={coursePreferences}
            onChange={(e) => setCoursePreferences(e.target.value)}
          />
      </div>

 
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Highest qualification
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="highestQualification"
          type="text"
          placeholder="Highest qualification"
          value={highestQualification}
          onChange={(e) => setHighestQualification(e.target.value)}
        />
      </div>
      <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherValue">
          Qualification year
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="qualificationYear"
          type="text"
          placeholder="Qualification year"
          value={qualificationYear}
          onChange={(e) => setQualificationYear(e.target.value)}
          />
          </div>
          </div>

        <div className="flex">
        <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherValue">
          National ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nationalID"
          type="text"
          placeholder="National ID"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
          />
          </div>
          <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherValue">
          Other Qualifications
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="OtherQualifications"
          type="text"
          placeholder="Other Qualifications"
          value={otherQualifications}
          onChange={(e) => setOtherQualifications(e.target.value)}
          />
          </div>
          </div>
          <div className="flex items-center justify-end w-40">
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
              Sign up
            </button>
          </div>
        </form>
        <Link href="/Login" className="text-blue-600 hover:text-blue-700">
            Sign in
          </Link>
        </div>
    </div>
      );
    };
    
    export default SignupForm;
    