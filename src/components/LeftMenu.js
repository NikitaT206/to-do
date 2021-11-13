import arrow from '../images/arrow.png'
import todo from '../images/todo.png'
import { Form } from './Form'
import { useState } from 'react'

export function LeftMenu(props) {

  const [hideLeftMenu, setHideLeftMenu] = useState(true)

  function handleHideLeftMenu() {
    setHideLeftMenu(!hideLeftMenu)
  }

  return (
    <div className={hideLeftMenu ? 'left-menu' : 'left-menu left-menu_hide'}>
      <div className={hideLeftMenu ? 'left-menu__arrow-container' : 'left-menu__arrow-container left-menu__arrow-container_reverse '} onClick={handleHideLeftMenu}>
        <img className={hideLeftMenu ? 'left-menu__arrow' : 'left-menu__arrow left-menu__arrow_reverse'} src={arrow}/>
      </div>
      <div className='left-menu__logo-container'>
        <img className='left-menu__logo' src={todo} alt='todo'/>
      </div>
      <Form onSubmit={props.onSubmitForm} searchValue={props.searchValue} onSearch={props.onSearch}/>
    </div>
  )
}