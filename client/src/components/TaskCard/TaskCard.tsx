import React, { Fragment } from 'react'
import Bin from "../../assets/trash-svgrepo-com.svg"

const TaskCard = () => {
  return (
    <Fragment>
        <main>
            <div className='container'>
                {/* cards */}
                <div className='w-[20rem] h-auto shadow-xl rounded-md bg-white'>
  <div className='mx-2  p-5 flex flex-col justify-between h-full'>
    <div>
      <p className='font-sans font-semibold text-xl capitalized'>
        Go Shopping
      </p>
      <div className='mt-3'>
        <p className='font-sans font-normal text-lg'>
          Before going shoty...
        </p>
      </div>
    </div>

    <div className='mt-auto pt-5 flex justify-between items-center'>
      <p className='font-sans text-sm text-gray-500'>4min ago</p>
      <div>
        <img src={Bin} alt="bin" className='w-5 h-5'/>
      </div>
    </div>
  </div>
</div>

            </div>
        </main>
    </Fragment>
  )
}

export default TaskCard