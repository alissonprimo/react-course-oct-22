import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-red-500 h-screen w-screen flex">
      <div id="left" className="w-[233px] bg-slate-800 px-5 py-3 ">
        <p className="text-white">left</p>
      </div>
      <div id="top-center" className="w-full h-full bg-blue-400 flex flex-col">
        <div
          id="top"
          className="w-full h-[55px] bg-slate-800 flex items-center px-3 saturate-50 gap-2 justify-between"
        >
          <div id="left" className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <h3 className="text-slate-200">Título da página</h3>
          </div>
          <div id="right" className="flex gap-2 items-center mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div
              id="user-name-institution"
              className="flex flex-col text-slate-200"
            >
              <span className="text-sm">Nome sobrenome</span>
              <span className="text-[0.6rem] text-slate-400">ÓRGÃO</span>
            </div>
          </div>
        </div>
        <div id="center" className="bg-neutral-200 flex flex-col flex-1 p-3">
          <div className="bg-white flex-1 p-2">central</div>
        </div>
      </div>
    </div>
  );
}

export default App;
