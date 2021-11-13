export function ConfirmDelete(props) {
  return (
    <div className='confirm-delete'>
      <p className='confirm-delete__title'>Удалить задачу?</p>
      <div className='confirm-delete__buttons-container'>
      <button className='confirm-delete__button confirm-delete__button_yes' onClick={props.onDelete}>Да</button>
      <button className='confirm-delete__button confirm-delete__button_no' onClick={props.onCancelDelete}>Нет</button>
      </div>
    </div>
  )
}