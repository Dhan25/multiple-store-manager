import users from "../../assets/icons/users.svg";
import brands from "../../assets/icons/brands.svg";
import doors from "../../assets/icons/doors.svg";

import React from "react";

const FeaturedCards = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full p-4 mx-auto">
        <div className="block">
          <h1 className="text-center text-3xl font-semibold mb-12 tracking-normal leading-none font-font-roboto text-gray-950">
            Our Track Record
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 place-items-center w-full xl-bg-slate-100">
          <div className="flex flex-col h-full w-full items-center justify-center p-12 bg-slate-100 rounded-2xl hover:bg-slate-50 xl:rounded-none">
            <img src={users} alt="" className="w-full h-12 md:h-16 mb-5 " />
            <span className="text-gray-900 font-semibold text-xl">6M+</span>
            <p>Registered Users</p>
          </div>
          <div className="flex flex-col h-full w-full items-center justify-center p-12 bg-slate-100 rounded-2xl hover:bg-slate-50 xl:rounded-none">
            <img src={brands} alt="" className="w-full h-12 md:h-16 mb-5" />
            <span className="text-gray-900 font-semibold text-xl">1,000+</span>
            <p>Brands</p>
          </div>
          <div className="flex flex-col h-full w-full items-center justify-center p-12 bg-slate-100 rounded-2xl hover:bg-slate-50 xl:rounded-none">
            <img src={doors} alt="" className="w-full h-12 md:h-16 mb-5" />
            <span className="text-gray-900 font-semibold text-xl">7,000+</span>
            <p>Doors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
