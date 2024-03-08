import React from "react";
import SideBar from "../../components/siderBar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-full rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50  ">
     <SideBar />
     <MessageContainer />
    </div>
  );
}

export default Home;
