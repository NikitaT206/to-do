import { useState } from "react"

export function Form(props) {
  const [data, setData] = useState({title: '', description: ''})

  function handleChange(event) {
    const {name, value} = event.target
    setData({
      ...data,
      [name] : value
    })  
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(data)
    setData({title: '', description: ''})
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form__input' name='title' type='text' value={data.title} onChange={handleChange} placeholder='Заголовок'/>
      <input className='form__input' name='description' type='text' value={data.description} onChange={handleChange} placeholder='Описание'/>
      <button type='submit' className='form__button'>Кнопка</button>
    </form>
  )
}