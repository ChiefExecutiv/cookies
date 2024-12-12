'use client'

import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import Image from 'next/image'



function TimeDiv() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Africa/Nairobi',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }

    const formatter = new Intl.DateTimeFormat('en-US', options)
    const [
      { value: month },,
      { value: day },,
      { value: year },,
      { value: hour },,
      { value: minute },,
      { value: dayPeriod }
    ] = formatter.formatToParts(date)

    return `${day}/${month}/${year} ${hour}:${minute}${dayPeriod.toLowerCase()} K'LA`
  }

  return (
    <div className={`${styles.navTimeDiv}`}>
      <h2 className={`${styles.timeDiv}`}>{formatDateTime(currentDateTime)}</h2>
    </div>
  )
}


export default function HomeNav() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Africa/Nairobi',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }

    const formatter = new Intl.DateTimeFormat('en-US', options)
    const [{ value: hour },,{ value: minute },,{ value: dayPeriod }] = formatter.formatToParts(date)

    return `hour: ${hour}:${minute}${dayPeriod.toLowerCase()}`
  }

  return (
    <nav className={`${styles.navigationBar}`}>
      <a href="#" className={`${styles.navLink}`}>
        <div className="max-w-[300px] mx-auto">
          <Image
            src="/cookies.jpg"
            alt="Supreme"
            width={200}
            height={70}
            quality={100}
            className="w-full"
          />
        </div>
      </a>
      <TimeDiv />
    </nav>
  )
}

