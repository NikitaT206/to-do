import { Sorting } from "./Sorting"
import { List } from "./List"
import { useState } from "react"

export function RightMenu(props) {
  const [list, setList] = useState(true)

  function handleListSort() {
    setList(true)    
  }

  function handleIconsSort() {
    setList(false)
  }

  return (
    <div className='right-menu'>
      <div className='right-menu__container'>
        <h1 className='right-menu__title'>Список дел</h1>
        <Sorting 
          optionsValue={props.optionsValue} 
          onChange={props.onSort}
          list={list}
          handleListSort={handleListSort}
          handleIconsSort={handleIconsSort}/>

          {props.searchPosts.length ? <List 
          posts={props.searchPosts} 
          onDelete={props.onDeleteItem}
          list={list}
          /> : <p>Задач нет</p>}
          
      </div>
    <div className='right-menu__transparent-gradient'></div>
    </div>
  )
}