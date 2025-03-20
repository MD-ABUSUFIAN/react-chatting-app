
import { HiDotsVertical } from "react-icons/hi";
import Card from './Card';


const GroupCard = ({heading,button,style,groupUsers}) => {
   
    return (
       <div className='inset-shadow-2xs rounded-2xl px-5 mb-1 '>
         <div className="groupHeading px-4 flex justify-between items-center ">
                <h1 className='text-2xl font-bold'>{heading}</h1>
                <span className='text-xl font-bold text-blue-600'><HiDotsVertical /></span>
            </div>
         <div className='  p-3 rounded overflow-y-auto md:h-[350px] '>
           
            <div className="cardWrapper py-3">
                {
                    groupUsers.map((user,index)=>
                    groupUsers.length-1==index?(<Card button={button} style={style} user={user} key={user?.id} border={"border-b-0"}/>)
                    :(<Card button={button} style={style} user={user} key={user?.id} border={"border-b-2"}/>)
                    )
                }
                <Card/>
            </div>
        </div>
       </div>
    )
}

export default GroupCard