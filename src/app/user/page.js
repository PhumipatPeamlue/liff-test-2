'use client'
import {useEffect, useState} from "react";
export default function UserHome() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        const fetchProfile = async () => {
            const resp = await fetch("http://localhost:8081/user/profile", {
                'method': 'GET',
                'credentials': 'include'
            })
            return resp.json()
        }

        const handleSetProfile = async () => {
            const profile = await fetchProfile()
            setProfile(profile)
        }

        handleSetProfile()

    }, [])

    console.log(profile)
    return (
        <>
            <h1>User page</h1>
            <p>{profile.displayName}</p>
            <img src={profile.pictureUrl}  alt={"user's profile"}/>
            <p>{profile.userId}</p>
        </>
    )
}