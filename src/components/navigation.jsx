import React from "react";

const navigation = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="">
        <img src="/images/logo.png"alt="" className=" h-20" />
      </div>

      <ul className=" flex gap-10 px-4 font-serif font-extrabold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default navigation;
