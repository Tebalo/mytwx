//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ContentContainer from '@/components/layout/ContentContainer';
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <ContentContainer/>
    </Layout>
  )
}
