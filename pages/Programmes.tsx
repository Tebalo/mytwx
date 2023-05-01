import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ContentContainer from '@/components/layout/ContentContainer';
import Create from '@/components/layout/Create';
import CourseList from '@/components/layout/CourseList';
import { useState, useEffect } from 'react';


export default function Programmes() {
  const [courses, setCourses] = useState<ApiResponse>({success: false, message: ''});
  useEffect(() => {
    const fetchData = async () => {

        //console.log(results);
        const courses = await getProgrammes();
        setCourses(courses);
    };
    fetchData();
}, []);
  return (
    <Layout>
        <CourseList courses={courses}/>
    </Layout>
  )
}
// Create a function to get program recommendations
export const getProgrammes = async (): Promise<ApiResponse> => {
  try{
      const response = await fetch('http://127.0.0.1:8000/api/programme-list',{
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          //credentials: 'include',
      }); 
      const data = await response.json();
      return data;
  }catch(e){
      console.error(e);
      throw new Error('Results not found');
  }
}
interface ApiResponse{
  id: number;
  first_name: string;
  last_name: string;
  status: string;
  national_id: string;
  grades: { [s: string]: unknown; } | ArrayLike<unknown>;
  candidate_number: string;
  center_number: string;
  success: boolean;
  message: string;
  token?: string;
}