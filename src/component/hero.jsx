import { BsInstagram, BsYoutube, BsGoogle } from "react-icons/bs";
import HeroPic from "../assets/racoon.jpeg";

const hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit pt-10 ssm:pt-16">
        <p className="text-3xl text-slate-200 mb-5 font-light">My name Is</p>
        <h1 className="text-6xl font-bold mb-1">Rusydi Jabir Alawfa</h1>
        <hr className="w-1/3 border-white border-2 rounded-full" />
        <p className="text-slate-300 mt-10 font-sans">Scope of projects, ranging from web applications to enterprise-scale software solutions.</p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit flex justify-center pt-10">
        <img src={HeroPic} alt="Gua" width={250} height={250} className="rounded-full lg:w-2/3 ssm:w-full border-8 border-white" />
      </div>
      <div className="w-1/3 ssm:w-fit pt-10">
        <h2 className="text-4xl mb-4 ">About Me</h2>
        <p className="text-slate-300">Ayo bangun teknologi website kita menjadi teknologi yang maju!</p>
        <button className="bg-white text-indigo-800 mt-4 px-3 py-1 rounded-full hover:bg-indigo-900 hover:text-white transition-all">Selengkapnya....</button>

        <div className="flex cursor-pointer mt-5 space-x-4">
          <BsGoogle size={40} className="border-4 hover:border-indigo-600 rounded-full transition-all p-1" />
          <BsYoutube size={40} className="border-4 hover:border-indigo-600 rounded-full transition-all p-1" />
          <BsInstagram size={40} className="border-4 hover:border-indigo-600 rounded-full transition-all p-1" />
        </div>
      </div>
    </section>
  );
};

export default hero;
