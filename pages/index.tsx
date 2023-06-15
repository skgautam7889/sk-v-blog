import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layouts/MainLayout'
import MainLayout from '../components/Layouts/MainLayout'
import Link from 'next/link'
import { Key, ReactChild, ReactFragment, ReactPortal, useState } from 'react'

const Home: NextPage = (allblogs) => {
  const [blogs, setblogs] = useState(allblogs)
  const [end, setEnd] = useState(false)
  return (
    <div className={styles.container}>
      <MainLayout title='send Home page title'>
        <div className="hero">
          <div className="mid-inner">
            <h1>Welcome to S.K. BLOGGER</h1>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus!</h5>
          </div>
        </div>
        <div className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12  mx-auto " >
                
              </div>
            </div>

            <div className="text-center">
              {
                end ? <h5 className="text-center">No Data</h5>
                  : <button className="btn btn-dark" >Load More</button>
              }
            </div>


          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default Home
