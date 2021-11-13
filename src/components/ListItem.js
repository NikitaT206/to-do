import { useState } from "react"

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
      <div className={!confirmDelete ? 'list-item__container' : 'list-item__container list-item__container_hide'}>
        <div className='list-item__item-container'>
          <h3 className='list-item__title'>
            <span className='list-item__id'>{props.post.id}</span>
            {props.post.title}
          </h3>
          <p className='list-item__description'>{props.post.description}</p>
          <span className='list-item__time'>{props.post.date}</span>
        </div>
        <div className='list-item__buttons'>
          <div className='list-item__button list-item__button_delete' onClick={handleConfirmDelete}></div>
          <div className='list-item__button list-item__button_edit' onClick={handleConfirmDelete}></div>
        </div>
      </div>
      <div className={confirmDelete ? 'confirm-delete' : 'confirm-delete confirm-delete_hide '}>
        <p className='confirm-delete__title'>Удалить задачу?</p>
          <div className='confirm-delete__buttons-container'>
          <div className='confirm-delete__button confirm-delete__button_yes' onClick={handleDelete}>Да</div>
          <div className='confirm-delete__button confirm-delete__button_no' onClick={handleConfirmDelete}>Нет</div>
        </div>
      </div>
    </div>
  )
}

      {/* {confirmDelete ? <ConfirmDelete confirmDelete={confirmDelete} onCancelDelete={handleConfirmDelete} onDelete={handleDelete}/> : ''} */}
