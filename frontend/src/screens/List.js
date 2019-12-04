import React from 'react'
import mockList from '../misc/mock-places'
import ListItem from '../components/ListItem'; 

export default function List() {
  return mockList.places.map(place => {
    return (
      <ListItem {...place} key={place.name} />
    )
  })
}
