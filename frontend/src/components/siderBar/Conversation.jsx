import React from "react";

function Conversation(  {conversation, lastIdx } ) {
  
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-800 rounded-lg p-2 py-1 cursor-pointer ">
        {/* <button className="btn btn-secondary">Secondary</button> */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className=" flex flex-col flex-1 " >
          <div className=" flex gap-3 justify-between "  >
            <p className="font-bold text-gray-200 " >{ conversation.userName }</p>
            <span className="text-sm" >{  }</span>
          </div>

        </div>
      </div>
      <div className="divider my-0 py-0 h-1 " />
    </>
  );
}

export default Conversation;
