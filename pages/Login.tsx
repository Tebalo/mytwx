import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
require('text-encoder');

const LoginPage = () => {


  const [formData, setFormData] = useState<LoginData>({username: '', password: ''});
  const [response, setResponse] = useState<ApiResponse>({success: false, message: ''});
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //alert(formData.password)
    const response = await login(formData);
    setResponse(response);
  
    if(response.success){
      localStorage.setItem('token', response.token!);
      const user = await getUser(formData.username);
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      router.push({
       pathname: "/Collect",
       query: { username: formData.username, user: JSON.stringify(user) },
      });
    }else{
      alert(response.message);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-700">
      <div className="w-full px-4 py-8 mx-auto max-w-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <Link href="/forgot-password">
                <h1 className="text-blue-600 hover:text-blue-700">Forgot Password?</h1>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <Link href="/Signup" className="text-blue-600 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
interface LoginData{
  username: string;
  password: string;
}

interface ApiResponse{
  success: boolean;
  message: string;
  token?: string;
}
interface User{
  username: string;
}
export const getUser = async (username: String): Promise<User> => {
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
      return {username: ''};
  }
}
export const login = async (data: LoginData): Promise<ApiResponse> => {
  try{
    //alert(data)
      const response = await axios.post('http://127.0.0.1:8000/api/token/', data);
      return response.status === 200 ? {success: true, message: 'Login successful', token: response.data.access} : {success: false, message: 'Login failed'};
  }catch(e){      
      console.error(e);
      const errorMessage = 'Login failed';
      return {success: false,message: errorMessage};
  }
};
export default LoginPage;
