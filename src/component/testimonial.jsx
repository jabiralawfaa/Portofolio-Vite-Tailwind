import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";
import T4 from "../assets/T4.jpeg";

export default function testimonial() {
  return (
    <>
      <div className="grid justify-items-center mb-0 bg-indigo-800 m-20 ssm:flex-col lg:flex-row rounded-md">
        <h1 className="text-3xl mt-10 text-white uppercase font-bold">Testimonial</h1>
      </div>
      <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row rounded-md mt-0">
        <div className="relative overflow-auto rounded-xl p-8 hover:animate-pulse">
          <div className="relative overflow-hidden max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:">
            <img src={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Irellia Bourton</div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Member / Support</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-auto rounded-xl p-8 hover:animate-pulse">
          <div className="relative overflow-hidden max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:">
            <img src={T2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Ronald Astra</div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Helper</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-auto rounded-xl p-8 hover:animate-pulse">
          <div className="relative overflow-hidden max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:">
            <img src={T3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Jeena Negan</div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Mentor</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-auto rounded-xl p-8 hover:animate-pulse">
          <div className="relative overflow-hidden max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:">
            <img src={T4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Lilia Bourton</div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Member / Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
