import React from 'react'
import mockList from '../misc/mock-places'
import ListItem from '../components/ListItem'

export default function List() {
  const itemsList = mockList.places.map(place => {
    return <ListItem {...place} key={place.name} />
  })

  return <div style={{ maxWidth: '1200px', margin: 'auto', padding: 10 }}>
    {itemsList}
  </div>
}
