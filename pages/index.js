import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio illo, placeat ullam voluptate ducimus tenetur quibusdam maxime asperiores recusandae soluta, in totam ipsum, rerum voluptates. Qui ipsa earum veniam sunt?</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio illo, placeat ullam voluptate ducimus tenetur quibusdam maxime asperiores recusandae soluta, in totam ipsum, rerum voluptates. Qui ipsa earum veniam sunt?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
