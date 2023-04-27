import { useState } from "react";
import {useRouter} from "next/router";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try{
      const response = await fetch("http://192.168.0.100:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email,
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
      });
      if(!response.ok){
        const message = await response.text();
        router.push("/Login");
        //alert(message); 
      }else{
        alert("User registered");
        router.push("/Login");
      }
    }catch(err) {
      console.log(err);
      router.push("/Login");
      //alert("Error registering user");
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 mx-56">
    <div className="w-full px-4 py-8 mx-auto">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Birth Date
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
          Candidate number
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
          Center number
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
          Course preferences
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
          Highest qualification
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
          Qualification year
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
          
        <div className="flex">
        <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherValue">
          National ID
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
          <div className="flex items-center justify-end w-40">
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
              Sign up
            </button>
          </div>
          
        </form>
        </div>
    </div>
      );
    };
    
    export default SignupForm;
    