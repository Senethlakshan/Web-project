import React from "react";
import { Header, Sidebar } from "./components";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full">
        <Header />
      </div>
      <div className="flex min-h-screen pt-20">
        <Sidebar />
        <div className="flex-1 bg-red-200">Home</div>
      </div>
    </div>
  );
};

export default App;
