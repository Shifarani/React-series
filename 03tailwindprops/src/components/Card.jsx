import React from "react";

function Card({username,btnText="do not touch"}) {
    // ye do not touch default value h 
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="img"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-0 p-4 text-white">
        <h1 className="text-lg font-semibold">{username}</h1>

        <p className="mt-2 text-sm text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis.
        </p>

        <button className="mt-3 px-3 py-1 text-sm bg-white text-black rounded-md">
          {btnText}
        </button>
      </div>

    </div>
  );
}

export default Card;