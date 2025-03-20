
import SingleSms from '../../Components/SingleSms'
import GroupCard from '../../Components/HomeComponents/GroupCard'
import users from '../../fetch/fetch'
import Search from '../../Components/Search'

const Message = () => {
  const groupUsers=users;
  return (
    <div className='flex justify-between items-center'>
      
     <div className='messageLeft h-screen w-[40%] mx-auto md:p-10 '>
     <div className=" h-full  flex flex-col  ">
      <div className="search relative w-[92%] mx-auto ">
      <Search/>
      </div>
        <div className='w-full flex flex-col md:gap-y-16  py-4 rounded-2xl '>
        <div  className='px-3  bg-gray-100 shadow-2xl rounded-3xl border'>
        <GroupCard groupUsers={groupUsers} heading={" Group"} button={""} style={""}/>
       </div>
       <div className='w-full  rounded-3xl bg-gray-100 shadow-2xl border '>
        <GroupCard groupUsers={groupUsers} heading={"Friends"} button={""} style={""}/>
        </div>
        </div>
       

      </div>
     </div>
      <div className="messageRight mx-auto w-[60%] h-screen  p-10   ">
            <div className='h-full  rounded-3xl bg-gray-100 shadow-2xl'>
            <SingleSms/>  
            </div>  
        </div>
    </div>
  )
}

export default Message