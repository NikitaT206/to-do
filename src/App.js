import './App.css';
import { List } from './components/List';
import { Form } from './components/Form';
import { useEffect, useMemo, useState } from 'react';
import todo from '../src/images/todo.png'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Создать задачу', description: 'Задача', date: ''}
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
      <div className='grid-container'>
        <div className='left-menu'>
          <div className='left-menu__logo-container'>
            <img className='left-menu__logo' src={todo}/>
          </div>
        <Form onSubmit={submit} search={search} handleSearch={handleSearch}/>
        </div>
        <div className='right-menu'>
          <h1 className='right-menu__title'>Список дел</h1>
          {searchPosts.length ? <List posts={searchPosts} onDelete={handleDelete}/> : <p>Задач нет</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
