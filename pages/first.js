import React, { useState } from 'react'
import styles from '../styles/first.module.css'
import Image from 'next/image'

const first = () => {
  let [count, setCount] = useState(0)
  return (
    <>
      <h1 className={styles.h1} >First Page</h1>
      <h2>This is first page.</h2>

      count={count}
      <button className='btn btn-primary' onClick={() => setCount(++count)} >increase</button>
      <button className='btn btn-primary' onClick={() => setCount(--count)} >decrease</button>


    <div className="h-96 position-relative ">
    <Image
        src="/a.jpg"
        alt="Picture of the author"
        // width={500}
        // height={500}
        //height width compulsory
        fill

      />

    </div>
      

    </>
  )
}

export default first;