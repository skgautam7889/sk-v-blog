import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Layouts/MainLayout'
import { Key, ReactChild, ReactFragment, ReactPortal, useState } from 'react'
import Link from 'next/link'
import { db } from '../firebase'
export default function Home(props:any ) {

  const [blogs, setblogs] = useState(props.allblogs)
  const [end, setEnd] = useState(false)
  const loadMore = async () => {
    const last: any = blogs[blogs.length - 1]
    const res = await db.collection('posts')
      .orderBy('createdAt', 'desc')
      .limit(3)
      .startAfter(new Date(last.createdAt))
      .get()
    const newblogs: any = res.docs.map(docSnap => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id
      }
    })
    setblogs(blogs.concat(newblogs))

    if (newblogs.length < 3) {
      setEnd(true)
    }
  }
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
                {
                  blogs?.map((val: any, ind: number) => {
                    return (
                      <div className="card mb-5" key={ind+1}>
                          <img
                            src={val.imageUrl}
                            alt={val.title}
                            className="bimg"
                          />

                          <div className="p-2">
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                            <div className="text-center">
                              <Link href={`/blog/${val.id}`}><a className="btn btn-success"> Read More </a></Link>
                            </div>
                          </div>

                        </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="text-center">
              {
                end ? <h5 className="text-center">No Data</h5>
                  : <button className="btn btn-dark" onClick={loadMore}>Load More</button>
              }
            </div>


          </div>
        </div>
      </MainLayout>
    </div>
  )
}
export async function getServerSideProps(context:any) {
  const res = await db.collection('posts').orderBy('createdAt', 'desc').limit(3).get()
  const allblogs = res.docs.map(snap => {
    return {
      ...snap.data(),
      createdAt: snap.data().createdAt.toMillis(),
      id: snap.id
    }
  })

  return {
    props: {
      allblogs
    }
  }


}


