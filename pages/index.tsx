//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Default from '@/components/layout/Default';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
      <Default/>
    </Layout>
  )
}
