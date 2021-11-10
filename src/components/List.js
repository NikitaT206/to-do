import React from 'react'
import { ListItem } from './ListItem'

export function List(props) {

  return (
    <div className='list'>
      {props.posts.map((post, index) => <ListItem post={post} key={post.id = index + 1 + '.'} onDelete={props.onDelete}/>)}
    </div>
  )
}