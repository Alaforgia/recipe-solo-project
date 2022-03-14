import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BottomMenu() {
  return (
    <div className="p-4 w-full sticky left-0 bottom-0 bg-white flex flex-row justify-center items-center ">
      <Link to="#" className="flex flex-col justify-center items-center px-2 py-1 rounded-lg border-2 border-[#171515]">
        <FontAwesomeIcon icon={faPlus} className="h-6" />
        <h4 className="text-xs ">Create</h4>
      </Link>
    </div>
  );
}

export default BottomMenu;
