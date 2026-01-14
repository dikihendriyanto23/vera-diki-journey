import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50">
        <div className="relative flex items-center justify-center">
          <div className="absolute size-16 animate-ping rounded-full bg-blue-400 opacity-20"></div>
          <div className="size-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
        </div>
        <h2 className="mt-6 text-sm font-semibold tracking-widest text-slate-600 uppercase animate-pulse">
          Please wait..
        </h2>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
