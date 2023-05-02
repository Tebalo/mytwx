import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding, faComment, faUserGraduate, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import {ReactNode} from 'react';
import * as React from 'react';
import SideBar from "./SideBar";
import ChannelBar from "./ChannelBar";
import ContentContainer from "./ContentContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";
interface LayoutProps{
    children: ReactNode;
}

export default function Layout({children}:LayoutProps){
    const router = useRouter();
    useEffect(() => {
      const fetchData = async () => {
        const token = localStorage.getItem('token');
        if(!token){
            router.push('/Login');
        }
      }
    }, []);
    return(
        <>
            <div className="flex">
                <Head>
                    <title>Course Finder</title>
                </Head>
                <SideBar/>
                <ChannelBar/>
                {children}
            </div>
        </>
    );
}