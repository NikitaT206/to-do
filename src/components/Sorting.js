import listIcon from '../images/list.png'
import notListIcon from '../images/notList.png'

export function Sorting(props) {
  
  return (
    <div className='sorting'>
      <div className='sorting__icons'>
        <div className={!props.list ? 'sorting__image-container' : 'sorting__image-container sorting__image-container_active'} onClick={props.handleListSort}>
          <img className='sorting__image' src={listIcon}/>
        </div>
        <div className={props.list ? 'sorting__image-container' : 'sorting__image-container sorting__image-container_active'} onClick={props.handleIconsSort}>
          <img className='sorting__image' src={notListIcon}/>
        </div>
      </div>
      <div>
        <span className='sorting__description'>Сортировать по: </span>
        <select className='sorting__options' onChange={e => props.onChange(e.target.value)} value={props.optionsValue}>
          <option className='sorting__option' value='title'>Алфавиту</option>
          <option className='sorting__option' value='title-reverse' >Алфавиту в обратном порядке</option>
          <option className='sorting__option' value='date-reverse'>Дате создания: сначала новые</option>
          <option className='sorting__option' value='date'>Дате создания: сначала старые</option>
        </select>
      </div>
    </div>
  )
}