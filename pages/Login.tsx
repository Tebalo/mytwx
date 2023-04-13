import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//import {login, LoginData, ApiResponse} from '../api/auth';
import axios from 'axios';

const LoginPage = () => {


  const [formData, setFormData] = useState<LoginData>({username: '', password: ''});
  const [response, setResponse] = useState<ApiResponse>({success: false, message: ''});
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(formData);
    setResponse(response);
    if(response.success){
      router.push("/Collect");
    }else{
      router.push("/Collect");
      //alert(response.message);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                <h1 className="text-purple-600 hover:text-purple-700">Forgot Password?</h1>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <Link href="/Signup" className="text-purple-600 hover:text-purple-700">
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

export const login = async (data: LoginData): Promise<ApiResponse> => {
  try{
      const response = await axios.post('http://192.168.0.100:8000/api/login', data);
      return response.data;
  }catch(e){      
      console.error(e);
      const errorMessage = 'Something went wrong';
      return {success: false,message: errorMessage};
  }
};

export default LoginPage;
