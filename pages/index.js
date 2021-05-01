import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>      
      <Head>
        <title>Contact List</title>
        <meta name="keywords" content="contacts"></meta>
      </Head>  
      <div>
          <h1 className={styles.title}>Home</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <Link href="/contacts"><a className={styles.btn}>See Contact Listing</a></Link>
        </div>
      </React.Fragment>

  )
}
