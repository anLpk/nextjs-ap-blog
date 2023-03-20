'use client'
import {useState, useEffect } from 'react'

export default function Greetings() {
    const greetings = ['Hello', 'Merhaba', 'سلام', 'Ciao', 'مرحبًا', 'Olá', 'ہیلو', 'Përshëndetje', 'Salam', 'Привет' ]

    const [index, setIndex] = useState(0)
    const [greeting, setGreeting] = useState(greetings[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index === greetings.length - 1 ? 0 : index + 1))
        }, 1500)
        return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setGreeting(greetings[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    return (
        <>{greeting}</>
    )
}