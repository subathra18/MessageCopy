import React from "react";

const Filter = () => {
  return (
    <div className="flex align-center justify-center gap-5 pt-7  text-3xl font-bold text-slate-900">
      <div className="hover:underline  decoration-red-600 underline-offset-8 ">
        Hi's
      </div>
      <div className="hover:underline  decoration-purple-600 underline-offset-8 ">
        GM's
      </div>
      <div className="hover:underline  decoration-lime-600 underline-offset-8 ">
        GN's
      </div>
      <div className="hover:underline  decoration-yellow-400 underline-offset-8 ">
        Love
      </div>
      <div className="hover:underline  decoration-sky-500  underline-offset-8 ">
        Sorry
      </div>
    </div>
  );
};

export default Filter;
