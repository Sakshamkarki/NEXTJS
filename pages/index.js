
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/hello.module.css'
import anotherStyles from '../styles/first.module.css'
// import '@/styles/dev.css'


export default function Home() {
  return (
    <>

    <Head>
      <title>MAIN</title>
    </Head>
      <h2 className='text-3xl text-center' >hello world</h2>

    <h1 className={anotherStyles.h1} id="idsel" >Homepage</h1>


    <h3 class={styles.hello} >css without module</h3>

   


    </>
  );
}
