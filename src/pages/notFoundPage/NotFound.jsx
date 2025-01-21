import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Notfound.module.scss'

const NotFound = () => {


    const navigate = useNavigate()

  return (
    <div className={style.section}>
      <h1>Not Found Page</h1>
      <button onClick={() => navigate(-1)} >Go Back</button>
    </div>
  )
}

export default NotFound
