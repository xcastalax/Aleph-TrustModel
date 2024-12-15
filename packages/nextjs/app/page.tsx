"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  /*const { address: connectedAddress } =*/ useAccount();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text drop-shadow-lg">
          Unlock Your Business Potential with TrustModel
        </h1>
        <p className="mt-4 text-lg text-white text-center max-w-2xl opacity-90 hover:opacity-100 transition-opacity duration-300">
          Discover insights and forecasts tailored to drive your business forward. TrustModel empowers you to make
          data-driven decisions and shape a brighter future.
        </p>
      </div>
    </>
  );
};

export default Home;
