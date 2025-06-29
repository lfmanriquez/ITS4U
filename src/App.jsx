import React from "react";
const appName = import.meta.env.VITE_APP_NAME;

export default function App() {
  return (
    <div className="flex min-h-screen bg-primary-500 items-center justify-center">
      <div className="flex flex-col gap 4 rounded bg-white p-2 text-center">
        <h1 className="text-secondary-500 text-4xl font-bold">{appName}</h1>
        <h6 className="text-alternative-500">
          Information Technology Solutions for you!
        </h6>
      </div>
    </div>
  );
}
