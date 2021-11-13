import { useEffect, useState } from "react"
import { ConfirmDelete } from "./ConfirmDelete"

export function ListItem(props) {

  const [confirmDelete, setConfirmDelete] = useState(false)

  function handleConfirmDelete() {
    setConfirmDelete(!confirmDelete)
  }

  function handleDelete() {
    props.onDelete(props.post)
    setConfirmDelete(false)
  }

  return (
    <div className='list-item'>
      <div className={!confirmDelete ? 'list-item__container' : 'list-item__container_hide'}>
        <div className='list-item__item-container'>
          <h3 className='list-item__title'>
            <span className='list-item__id'>{props.post.id}</span>
            {props.post.title}
          </h3>
          <p className='list-item__description'>{props.post.description}</p>
          <span className='list-item__time'>{props.post.date}</span>
        </div>
        <button className='list-item__delete-button' onClick={handleConfirmDelete}></button>
      </div>
      {confirmDelete ? <ConfirmDelete onCancelDelete={handleConfirmDelete} onDelete={handleDelete}/> : ''}

    </div>
  )
}