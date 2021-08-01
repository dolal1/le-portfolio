import React from "react";

import image from "../assets/grey wood.jpg";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background Skies"
        className="absolute object-cover w-full h-full"
      />

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-5xl text-green-200 font-bold cursive leading-none lg:leading-snug home-name">
          Olal David Holifield
        </h1>
        <h4 className="text-3xl text-green-200 font-bold mt-auto mb-auto">
          I'm a Web Developer
        </h4>
      </section>
    </main>
  );
}

export default Home;
