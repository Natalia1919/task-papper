import moment from 'moment'

const Period = () => {
  return (
  <div className='date'>
    <div className="container">
    <p className='date__text'>{moment().format("MMM Do YY")}</p>
    </div>
  </div>
  )
};

export default Period;
