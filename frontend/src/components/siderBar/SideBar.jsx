import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

function SideBar() {
  return (
    <div>
      <SearchInput />

      <div className='divider px-3' ></div>
      <Conversations />
      {/* <LogOutButton /> */}

    </div>
  )
}

export default SideBar