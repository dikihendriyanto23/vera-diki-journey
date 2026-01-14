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
        <div className="relative h-[720px] w-full bg-white">
          <img
            src="/images/first_header.png"
            alt="First Header"
            className="absolute top-[-8px]"
          />
          <img
            src="/images/first_mountain.png"
            alt="First Mountain"
            className="w-[120%] max-w-none left-1/2 -translate-x-1/2 absolute z-1"
          />
          <img
            src="/images/first_tree_left.png"
            alt="First Tree Left"
            className="absolute z-2 w-[425px] left-[-170px] top-[90px]"
          />
          <img
            src="/images/first_tree_right.png"
            alt="First Tree Left"
            className="absolute z-2 w-[425px] right-[-170px] top-[90px]"
          />
          <img
            src="/images/first_house.png"
            alt="First House"
            className="absolute z-3 top-[250px] left-1/2 -translate-x-1/2 w-[80%]"
          />
        </div>
        <img src="/images/wedding1.png" alt="Image 1" />
        <img src="/images/wedding2.png" alt="Image 2" />
      </div>
    </MainLayout>
  );
};

export default Home;
