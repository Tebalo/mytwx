import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding, faComment, faUserGraduate, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import {ReactNode} from 'react';
import * as React from 'react';
import SideBar from "./SideBar";

interface LayoutProps{
    children: ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <div className="flex">
                <Head>
                    <title>Course Finder</title>
                </Head>
                <SideBar/>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}