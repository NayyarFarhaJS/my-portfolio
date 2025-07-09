import React from 'react';
import avatarImg from '../../assets/Farah_Img.jpg';
import TextChange from '../../TextChange';

function Home() {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center gap-10 p-10 md:p-20">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
        I'm a passionate Front-End Developer with over 7 years of experience.
        I specialize in creating responsive and user-friendly web interfaces using React and Tailwind CSS.
        I focus on writing clean, maintainable code and delivering smooth user experiences.
        </p>
        <button
          className="mt-6 text-white px-4 text-sm md:text-lg py-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-2/5 flex justify-end">
        <img className="w-72 h-72 object-cover rounded-full" src={avatarImg} alt="Nayyar" />
      </div>
    </div>
  );
}

export default Home;
