import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* 替换logo */}
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://3d.khtain.com", "_blank")
          }
          className='black_btn'
        >
          Khtain
        </button>
      </nav>

      <h1 className='head_text'>
        总结文章 Powered By <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      使用开源文章摘要器 | 简化您的阅读
         将冗长的文章转化为清晰简洁的摘要
      </h2>
    </header>
  );
};

export default Hero;
