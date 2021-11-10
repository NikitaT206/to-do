export function ListItem(props) {

  function handleDelete() {
    props.onDelete(props.post)
  }
  
  return (
    <div className='list-item'>
      <span className='list-item__id'>{props.post.id}</span>
      <div>
        <h3 className='list-item__title'>{props.post.title}</h3>
        <p className='list-item__description'>{props.post.description}</p>
      </div>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  )
}