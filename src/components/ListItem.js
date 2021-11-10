export function ListItem(props) {

  function handleDelete() {
    props.onDelete(props.post)
  }
  
  return (
    <div className='list-item'>
      <div className='list-item__container'>
        <h3 className='list-item__title'>
          <span className='list-item__id'>{props.post.id}</span>
          {props.post.title}
        </h3>
        <p className='list-item__description'>{props.post.description}</p>
        <span className='list-item__time'>{props.post.date}</span>
      </div>
      <button className='list-item__delete-button' onClick={handleDelete}></button>
    </div>
  )
}