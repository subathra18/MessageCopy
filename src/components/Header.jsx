import React from "react";
import { LuClipboardCopy } from "react-icons/lu";

const Header = () => {
  return (
    <div>
      <div className="pt-8 flex items-center justify-center gap-2">
        <LuClipboardCopy className="w-5 h-5 opacity-50"></LuClipboardCopy>
        <h1 className="flex justify-center align-center text-3xl font-bold tracking-wide">
          Message copy
        </h1>
      </div>
      <div className="pt-2 ml-14 flex items-center justify-center text-slate-400">
        For all your messaging needs...
      </div>
    </div>
  );
};

export default Header;
