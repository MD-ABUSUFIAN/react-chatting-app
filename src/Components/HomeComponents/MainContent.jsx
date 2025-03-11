import React from 'react'
import GroupCard from './GroupCard'

const MainContent = () => {
  return (
    <div className='bg-red-300 w-full h-dvh grid grid-cols-2 items-center  justify-between' >
        {/* top left group content  */}
        <div>
        <GroupCard/>
        </div>
        {/* top right group content  */}

        <div>
        <GroupCard/>
        </div>
        {/* bottom left group content  */}

        <div>
        <GroupCard/>
        </div>
        {/* bottom right group content  */}

        <div>
        <GroupCard/>
        </div>
    </div>
  )
}

export default MainContent