import './App.css';
import { List } from './components/List';
import { Form } from './components/Form';
import { useEffect, useMemo, useState } from 'react';
import todo from '../src/images/todo.png'
import { Sorting } from './components/Sorting';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Создать задачу', description: 'Задача', date: ''}
  ])

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [list, setList] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      const cache = localStorage.getItem('posts')
      const oldPosts = JSON.parse(cache)
      setPosts(oldPosts)
    }
    if (localStorage.getItem('sort')) {
      const oldSort = localStorage.getItem('sort')
      setSort(oldSort)
    }
    if (localStorage.getItem('list')) {
      const oldList = localStorage.getItem('list')
      setList(oldList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify([...posts]))
    localStorage.setItem('sort', sort)
    localStorage.setItem('list', list)
  }, [posts, sort, list])

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

  function handleSort(sort) {
    setSort(sort)
    if (sort === 'title-reverse') {
      sort = 'title'
      return  setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])).reverse())
    }
    if (sort === 'date-reverse') {
      sort = 'date'
      return setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])).reverse())
    }
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))   
  }

  function handleClick() {
    setList(true)
  }

  function handleList() {
    setList(false)
  }

  return (
    <div className="App">
      <div className='grid-container'>
        <div className='left-menu'>
          <div className='left-menu__logo-container'>
            <img className='left-menu__logo' src={todo} alt='todo'/>
          </div>
        <Form onSubmit={submit} search={search} handleSearch={handleSearch}/>
        </div>
        <div className='right-menu'>
          <div className='right-menu__container'>
            <h1 className='right-menu__title'>Список дел</h1>
            <Sorting value={sort} list={list} onChange={handleSort} onList={handleClick} onNotList={handleList}/>
            {searchPosts.length ? <List posts={searchPosts} onDelete={handleDelete} list={list}/> : <p>Задач нет</p>}
          </div>
          <div className='right-menu__transparent-gradient'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
