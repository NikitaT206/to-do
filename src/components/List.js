import React from 'react'
import { ListItem } from './ListItem'

export function List(props) {

  return (
    <div className={props.list ? 'list2' : 'list'}>
      {props.posts.map((post, index) => <ListItem 
        post={post} 
        key={post.id = index + 1 + '. '} 
        onDelete={props.onDelete}
        />)}
    </div>
  )
}