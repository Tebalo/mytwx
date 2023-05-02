import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ContentContainer from '@/components/layout/ContentContainer';
import Create from '@/components/layout/Create';
import { useEffect } from 'react';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if(!token){
          router.push('/Login');
      }
    }
  }, []);
  return (
    <Layout>
        <Create/>
    </Layout>
  )
}