import React from 'react'
import useCurrentUser from '../../Hooks/useCurrentUser';

export default function AboutUs() {
  
  const { currentUser } = useCurrentUser()
  console.log(currentUser);
  return (
    <div>AboutUs</div>
  )
}
