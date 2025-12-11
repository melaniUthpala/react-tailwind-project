import React from "react";

import breadcrumb from "../assets/images/aboutsec.jpg";
import blog1 from "../assets/images/blogt.jpg";
import blog2 from "../assets/images/blogset.jpg";
import blog3 from "../assets/images/vdo.jpg";  // fixed path
import blog5 from "../assets/images/key.jpg";

import recent1 from "../assets/images/imgspect.jpg";
import recent2 from "../assets/images/imglonghr.jpg";
import recent3 from "../assets/images/imgsideby.jpg";  // fixed path

import userImg1 from "../assets/images/author.jpg";

const BlogPage = () => {
  return (
    <div className="w-full bg-white">

      {/* TOP BANNER */}
      <div
        className="relative w-full h-72 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumb})` }}  // fixed here
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold">Blog</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-200">Home</span>
            <span>/</span>
            <span className="text-orange-500 font-semibold">Blog</span>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SIDE – BLOG POSTS */}
        <div className="lg:col-span-8 space-y-12">

          {/* BLOG 1 */}
          <div className="bg-white rounded-xl shadow p-4">
            <img src={blog1} alt="blog" className="w-full rounded-lg" />

            <div className="flex items-center gap-3 mt-5">
              <img src={userImg1} className="w-10 h-10 rounded-full" alt="user" />
              <p className="text-gray-700">
                By <span className="text-orange-500 font-semibold">Lily Anne</span> |
                <span className="ml-2">October 12, 2018</span>
              </p>
            </div>

            <h2 className="text-xl font-bold mt-3">How to get more traffic in your website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't
            </p>
            <button className="mt-3 text-orange-600 font-semibold">READ MORE..</button>
          </div>

          {/* BLOG 2 */}
          <div className="bg-white rounded-xl shadow p-4">
            <img src={blog2} alt="blog" className="w-full rounded-lg" />

            <div className="flex items-center gap-3 mt-5">
              <img src={userImg1} className="w-10 h-10 rounded-full" alt="user" />
              <p className="text-gray-700">
                By <span className="text-orange-500 font-semibold">Lily Anne</span> |
                <span className="ml-2">September 04, 2018</span>
              </p>
            </div>

            <h2 className="text-xl font-bold mt-3">25 Rules to be successful in your business.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't
            </p>
            <button className="mt-3 text-orange-600 font-semibold">READ MORE..</button>
          </div>

          {/* BLOG 3 (Video) */}
          <div className="bg-white rounded-xl shadow p-4">
            <a
              href="https://youtu.be/7e90gBu4pas?si=IU3X5Hz-0cn65Pvy"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <img src={blog3} alt="blog video" className="w-full rounded-lg" />

              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex justify-center items-center shadow-xl">
                  <span className="text-3xl text-orange-600">▶</span>
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 mt-5">
              <img src={userImg1} className="w-10 h-10 rounded-full" alt="user" />
              <p className="text-gray-700">
                By <span className="text-orange-500 font-semibold">Lily Anne</span> |
                <span className="ml-2">October 12, 2018</span>
              </p>
            </div>

            <h2 className="text-xl font-bold mt-3">
              SEO can be the best solution for your business problems.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't
            </p>

            <button className="mt-3 text-orange-600 font-semibold">READ MORE..</button>
          </div>

          <div className="bg-[#fcebe6] p-8 rounded-lg">

            {/* TOP AREA (Avatar + Name + Date + Quote Icon) */}
            <div className="flex justify-between items-start mb-4">

              {/* LEFT – Author */}
              <div className="flex items-center gap-3">
                <img
                  src={userImg1}
                  alt="author"
                  className="w-12 h-12 rounded-full object-cover border border-white shadow"
                />
                <div>
                  <p className="text-gray-700 font-semibold">By Lily Anne</p>
                  <p className="text-gray-500 text-sm">October 12, 2018</p>
                </div>
              </div>

              {/* RIGHT – Quote Icon */}
              <i className="fa-solid fa-quote-right text-orange-500 text-4xl"></i>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              25 Rules to be successful in your business.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't
            </p>

            {/* READ MORE */}
            <a
              href="#"
              className="text-orange-600 font-semibold hover:underline tracking-wide"
            >
              READ MORE..
            </a>
          </div>

          {/* BLOG 5 */}
          <div className="bg-white rounded-xl shadow p-4">
            <img src={blog5} alt="blog" className="w-full rounded-lg" />

            <div className="flex items-center gap-3 mt-5">
              <img src={userImg1} className="w-10 h-10 rounded-full" alt="user" />
              <p className="text-gray-700">
                By <span className="text-orange-500 font-semibold">Lily Anne</span> |
                <span className="ml-2">October 12, 2018</span>
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-3">
              How to get more traffic in your website
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't
            </p>
            <button className="mt-4 text-orange-600 font-semibold">READ MORE..</button>
          </div>

          {/* PAGINATION */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-4 py-2 bg-[#fce7e3] rounded-md"
            >
              ←
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-4 py-2 bg-orange-600 text-white rounded-md"
            >
              1
            </button>

            <button className="px-4 py-2 bg-[#fce7e3] rounded-md">2</button>
            <button className="px-4 py-2 bg-[#fce7e3] rounded-md">3</button>

            <button className="px-4 py-2 bg-[#fce7e3] rounded-md">→</button>
          </div>

        </div>

        {/* RIGHT SIDE – SIDEBAR */}
        <div className="lg:col-span-4 space-y-10">

          {/* SEARCH */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Search <span className="text-orange-500">―</span>
            </h3>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 outline-none"
              />

              <button className="bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 flex items-center justify-center">
                {/* BOLD WHITE SEARCH ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Categories <span className="text-orange-500">―</span>
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "Engine Repair",
                "Tires Replacement",
                "Transmission",
                "Diagnostic",
                "Batteries Replacement",
                "Break Repair",
              ].map((item) => (
                <li key={item} className="pb-2 border-b border-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RECENT POSTS */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Recent Posts <span className="text-orange-500">―</span>
            </h3>

            <div className="space-y-4">
              {[recent1, recent2, recent3].map((img, i) => (
                <div key={i} className="flex gap-3">
                  <img src={img} className="w-20 h-16 object-cover rounded" alt={`recent post ${i + 1}`} />
                  <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet...</p>
                </div>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Tags <span className="text-orange-500">―</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Repair",
                "Tires",
                "Car",
                "Replacement",
                "Online",
                "Clean",
                "Break",
                "Battery",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 bg-[#ffe7e7] text-gray-700 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
