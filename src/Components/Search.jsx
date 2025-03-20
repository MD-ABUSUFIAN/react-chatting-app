
import { CiSearch } from 'react-icons/ci'
import { HiDotsVertical } from 'react-icons/hi'

const Search = () => {
  return (
    <div>
         <input className='px-8 py-2 shadow w-full rounded-2xl  text-xl' type="text" name="search" placeholder='search '  id="" />
      <span className='text-2xl font-bold text-blue-600 absolute top-[30%] cursor-po right-[5%]'><HiDotsVertical /></span>
      <span className='text-2xl font-bold text-gray-400 cursor-pointer absolute top-[25%] cursor-po left-[4%]'><CiSearch /></span>
    </div>
  )
}

export default Search