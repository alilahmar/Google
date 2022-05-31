import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
    <div
      // the diff between lg:pl-52 && lg:pl-50
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 
    lg:pl-52 border-b-[1px]"
    >
      {/* leftSection */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* rightSection */}
      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools </p>
      </div>
    </div>
  );
};

export default HeaderOptions;
