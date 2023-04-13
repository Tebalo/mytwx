import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ContentContainer from '@/components/layout/ContentContainer';
import Create from '@/components/layout/Create';
import ProgrammeList from '@/components/layout/ProgrammeList';

export default function Programmes() {
  return (
    <Layout>
        <ProgrammeList/>
    </Layout>
  )
}