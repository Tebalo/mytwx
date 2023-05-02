import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ContentContainer from '@/components/layout/ContentContainer';
import Create from '@/components/layout/Create';
import OfferList from '@/components/layout/OfferList';
import { useState, useEffect } from 'react';


export default function Programmes() {

  return (
    <Layout>
        <OfferList username='abale'/>
    </Layout>
  )
}
