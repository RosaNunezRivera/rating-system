import { FaStar } from 'react-icons/fa'

function Star({ selected, onClick }) {
    return (
      <div className='container-star' onClick={onClick}>
        <FaStar className={`star ${selected ? 'star-selected' : 'star-unselected'}`} />
      </div>
    );
  }
  
  export default Star;


