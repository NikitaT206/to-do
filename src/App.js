import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { LeftMenu } from './components/LeftMenu';
import { RightMenu } from './components/RightMenu';

function App() {
  const [posts, setPosts] = useState([{id: 1, title: 'Создать задачу', description: 'Задача', date: ''}])

  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')

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
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify([...posts]))
    localStorage.setItem('sort', sort)
  }, [posts, sort])

  function handleSubmitForm(data) {
    setPosts([data, ...posts])
  }

  function handleDeleteItem(post) {
    const newPosts = posts.filter(item => item !== post)
    localStorage.removeItem('posts')
    setPosts(newPosts)
  }

  function handleSearch(e) {
    setSearch(e.target.value)    
  }

  const searchPosts = useMemo(() => {
    return posts.filter(post => post.title.toLowerCase().includes(search) || post.description.toLowerCase().includes(search))
  }, [search, posts])

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

  return (
    <div className="app">
        <LeftMenu
          onSubmitForm={handleSubmitForm}
          onSearch={handleSearch}
          searchValue={search}
        />
        <RightMenu
          optionsValue={sort}
          onSort={handleSort}
          searchPosts={searchPosts}
          onDeleteItem={handleDeleteItem}
        />
    </div>
  );
}

export default App;
