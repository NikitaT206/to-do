import { useState } from "react"

export function Form(props) {
  const [data, setData] = useState({title: '', description: '', date: []})
  const [search, setSearch] = useState('')

  function handleChange(event) {
    const {name, value} = event.target
    setData({
      ...data,
      [name] : value,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    })  
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(data)
    setData({title: '', description: ''})
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='left-menu__title'>Создайте задачу</label>
      <input className='form__input' name='title' type='text' value={data.title} onChange={handleChange} placeholder='Заголовок'/>
      <textarea className='form__input-area' name='description' type='text' value={data.description} onChange={handleChange} placeholder='Описание'/>
      <button className='form__button' type='submit'>Создать</button>
      <label className='left-menu__title'>Найдите задачу</label>
      <input className='form__input' placeholder='Поиск по задачам' value={props.searchValue} type='text' name='search' onChange={props.onSearch}></input>
    </form>
  )
}