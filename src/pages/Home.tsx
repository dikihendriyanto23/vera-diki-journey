import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="hidden md:flex md:flex-3 relative bg-white items-center justify-center border-r border-slate-100 overflow-hidden">
        <img
          src="/images/nature.png"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Forest Background"
        />
        <div className="relative z-10 w-[350px] h-[500px] bg-white/60 backdrop-blur-xs border border-white/40 rounded-[50%/40%] shadow-2xl flex flex-col items-center justify-center p-12 text-center">
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <h1 className="text-6xl text-[#2d4a3e] italic mb-4">Vera</h1>
            <span className="text-3xl text-slate-400 font-light italic">&</span>
            <h1 className="text-6xl text-[#2d4a3e] italic mt-4">Diki</h1>
          </div>

          <p className="mt-6 text-[10px] text-slate-500 tracking-[0.2em] font-sans italic">
            #VeraDikiJourney
          </p>
        </div>
      </div>
      <div className="flex-1 md:flex-2 bg-blue-200 overflow-y-auto scroll-smooth overflow-hidden">
        <div className="relative h-[1080px] w-full bg-white">
          <img
            src="/images/page1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 w-[325px] h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-xs border border-white/40 rounded-[50%/40%] shadow-2xl flex flex-col items-center justify-center p-12 text-center">
            <div className="animate-[float_6s_ease-in-out_infinite]"></div>
            <p className="mb-4">Hai Anonim & Partner</p>
            <button className="bg-[#445d3f] text-white px-2 py-2 rounded-md">
              Open Invitation
            </button>
            <p className="mt-2 text-[10px] text-slate-500 tracking-[0.2em] font-sans italic">
              #VeraDikiJourney
            </p>
          </div>
        </div>
        <img src="/images/page2.png" alt="Image 1" />
        <img src="/images/wedding2.png" alt="Image 2" />
      </div>
    </MainLayout>
  );
};

export default Home;
