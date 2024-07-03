import ProjectImg1 from "../assets/project1.jpeg";
import ProjectImg2 from "../assets/project2.jpeg";
import ProjectImg3 from "../assets/project3.jpeg";
import ProjectImg4 from "../assets/project4.jpeg";

export default function project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full rounded-md">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl mt-10 text-white uppercase font-bold">Projects</h1>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex">
                <div className="p-8">
                  <div className="tracking-wide uppercase text-sm to-indigo-500 font-semibold">Meeting of Creator</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repudiandae nostrum quas.</p>
                </div>
                <div className="md:shrink-0 p-5 ">
                  <img src={ProjectImg1} alt="" width={150} height={150} className="rounded-md" />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex">
                <div className="md:shrink-0 p-5 ">
                  <img src={ProjectImg2} alt="" width={150} height={150} className="rounded-md" />
                </div>
                <div className="p-8">
                  <div className="tracking-wide uppercase text-sm to-indigo-500 font-semibold">Programmer Desk</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repudiandae nostrum quas.</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex">
                <div className="p-8">
                  <div className="tracking-wide uppercase text-sm to-indigo-500 font-semibold">1 Cup of Coffee</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repudiandae nostrum quas.</p>
                </div>
                <div className="md:shrink-0 p-5 ">
                  <img src={ProjectImg3} alt="" width={150} height={150} className="rounded-md" />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="flex">
                <div className="md:shrink-0 p-5 ">
                  <img src={ProjectImg4} alt="" width={150} height={150} className="rounded-md" />
                </div>
                <div className="p-8">
                  <div className="tracking-wide uppercase text-sm to-indigo-500 font-semibold">Feed Section</div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repudiandae nostrum quas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
