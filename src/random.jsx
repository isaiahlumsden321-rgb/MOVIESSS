import { useNavigate } from "react-router-dom";

function RandomPage() {
  const navigate = useNavigate();
  const i = () => {
    navigate("/fruits");
  };

  return (
    <div className="relative w-full min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/Test1.mp4" type="video/mp4" />
      </video>
      <div class="p-4">
        <div class="border-2 border-slate-300 h-13 rounded-md">
          {" "}
          <nav>
            {" "}
            <ul class="flex items-center w-full">
              <li class=" font-bartle text-slate-100 px-5 py-3  ">FEC</li>

              <li class=" ml-auto font-bartle text-slate-100 px-5 py-3">
                Home
              </li>
              <li class=" font-bartle text-slate-100 px-5 py-3">Demo</li>
              <li>
                <button
                  onClick={() => i()}
                  class=" hover:bg-sky-200 cursor-pointer flex items-center  justify-center bg-slate-100 rounded-xl font-bartle  text-[8px] text-black my-2 mx-2 px-7 py-2"
                >
                  Launch
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default RandomPage;
