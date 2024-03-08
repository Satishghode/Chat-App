import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

function MessageContainer() {
  return (
    <div className="md:min-w-[600px] flex flex-col ">
      <>
       {/* <Header /> */}
        {/* bg-slate-900 px-4 py-4 mb-2 flex flex-col */}
        <div className="flex justify-between bg-slate-900 px-5 py-4 mb-2 ">
          <div className="flex gap-5" >
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="justify-start mt-3 ">
              <span className="label-text font-bold  ">Satish Ghode</span>
            </div>
          </div>
          <div className="flex gap-12 mt-3  justify-self-center  ">
            <CiVideoOn className="h-6 w-6 hover:bg-gray-800 text-white " />
            <IoCallOutline className="h-6 w-6" />
            <CiSearch className="h-6 w-6" />
          </div>
        </div>

        {/* this is an messages Components  */}
        <Messages />

        {/* take the input from the user  */}
        <MessagesInput />
      </>
    </div>
  );
}

export default MessageContainer;
