import React from "react";

function Conversation() {
  var datetime = new Date();
  var time = datetime.toISOString().slice(0,10);
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-800 rounded-lg p-2 py-1 cursor-pointer ">
        {/* <button className="btn btn-secondary">Secondary</button> */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className=" flex flex-col flex-1 " >
          <div className=" flex gap-3 justify-between "  >
            <p className="font-bold text-gray-200 " >Satish Ghode</p>
            <span className="text-sm" >{time}</span>
          </div>

        </div>
      </div>
      <div className="divider my-0 py-0 h-1 " />
    </>
  );
}

export default Conversation;
