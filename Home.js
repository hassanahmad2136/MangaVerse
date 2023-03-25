import React from 'react'
import './Home.css'
import Navbar from './index'
import { useEffect } from 'react';
export default function Home() {
  return (
    <>
    <head>
        <Title title='Home'></Title>
    </head>
    <body>
        <Navbar />
    </body>
    </>
  )
}
function Title({title="Title"})
{
    useEffect(() => {
        document.title = title;
      }, []);
}
