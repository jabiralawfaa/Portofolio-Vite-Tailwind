import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { useState } from "react";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }
  return (
    <div className="fixed top-0 w-full bg-indigo-700 shadow-md z-10">
      <div className="flex items-center justify-between p-7 lg:flex-row text-white">
        <div>
          <a href="" className="font-mono text-3xl tracking-wider flex items-center">
            <RiAccountPinCircleFill /> JabirAlawfaa
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a href="" className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase">
              Skill
            </a>
            <a href="" className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase">
              Project
            </a>
            <a href="" className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase">
              Testimonials
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <RiArrowRightDoubleLine size={30} onClick={closeMenu} className="text-white hover:right-4 transition-all cursor-pointer" />
            ) : (
              <RiArrowLeftDoubleLine size={30} onClick={openMenu} className="text-white hover:right-4 transition-all cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10 text-white p-5 transition-all ">
            <ul className="float-right">
              <li className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase cursor-pointer mb-2">Skill</li>
              <li className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase cursor-pointer mb-2">Project</li>
              <li className="hover:bg-indigo-900 rounded-full px-5 py-2 transition-all text-xl font-semibold uppercase cursor-pointer mb-2">Testimonials</li>
            </ul>
          </div>
        ) : (
          <div className="transition-all"></div>
        )}
      </div>
    </div>
  );
};

export default nav;
