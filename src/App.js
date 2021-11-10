import './App.css';
import { List } from './components/List';
import { Form } from './components/Form';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Создать задачу', description: 'Задача'}
  ])

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      const cache = localStorage.getItem('posts')
      const oldPosts = JSON.parse(cache)
      setPosts(oldPosts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify([...posts]))
  }, [posts])

  function submit(data) {
    setPosts([...posts, data])
  }

  function handleDelete(post) {
    const newPosts = posts.filter(item => item !== post)
    localStorage.removeItem('posts')
    setPosts(newPosts)
  }

  const searchPosts = useMemo(() => {
    return posts.filter(post => post.title.toLowerCase().includes(search) || post.description.toLowerCase().includes(search))
  }, [search, posts])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Form onSubmit={submit}/>
      <h1>Список дел</h1>
      <input className='form__input' placeholder='Поиск по задачам' value={search} type='text' name='search' onChange={handleSearch}></input>
      {searchPosts.length ? <List posts={searchPosts} onDelete={handleDelete}/> : <p>Задач нет</p>}
    </div>
  );
}

export default App;
