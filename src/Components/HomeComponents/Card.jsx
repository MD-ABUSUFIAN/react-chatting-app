import PropTypes from 'prop-types';

const Card = ({user,button,style,border}) => {
  return (
    <>
<div className={`groupContentWrapper ${border} px-4 py-1 border-gray-300  rounded-2xl flex justify-between items-center w-[100%] cursor-pointer`}>

<div className="groupContentLeft flex justify-between items-center">
    <div className="groupContentPhoto  h-[70px] w-[70px] rounded-full">
        <picture>
            <img className='h-full w-full object-cover rounded-full' src={user?.img} alt="" />
        </picture>
    </div>
    <div className="groupContentUser">
        <h1 className='font-bold'>{user?.name}</h1>
        <p className='text-gray-400'>{user?.message}</p>
    </div>

</div>
<div className="groupContentRight">
        <button className={style?style:"text-gray-400"}>{button}</button>
</div>
</div>
    </>
  )
}
Card.propTypes={
    user:PropTypes.object.isRequired,
    border:PropTypes.string.isRequired,
    button:PropTypes.string.isRequired,
    style:PropTypes.string.isRequired,
   
}
export default Card