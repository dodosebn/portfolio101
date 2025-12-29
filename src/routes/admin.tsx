import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  const [userLocation, setUserLocation] = useState<{ city: string; region: string; country: string } | null>(null);
  const FetchUserApi = async () => {
    try{
    const response = await fetch("https://ipinfo.io/json?token=5c6ea39b920f38")
    const data = await response.json();
    setUserLocation(data)
  }catch(err){
    console.error('Error Fetching location : ', err)
  }
}
useEffect(() => {
  FetchUserApi();
}, [])
const keys = ['city', 'region', 'country'] as const;

  return <div className='pt-60'> <p>Hello "/admin"!</p>

    <div>
{
  userLocation ? (
    <div>
      <ul>
        {keys.map(item => (
          <li><span className='capitalize'>{item} : </span>
          {userLocation[item]}</li>
        ))
        }

      </ul>
    </div>
  ): (
    <p>Loading Location .....</p>
  )
}
    </div>
  </div>
}
