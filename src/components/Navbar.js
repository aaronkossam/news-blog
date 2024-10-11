import React from "react";
import propType from "prop-types";
const Navbar = (props) => {
  return (
    <div className="  gap lg:mt-16    ">
      <div className=" lg:flex justify-between align-baseline mb-4">
        <p className="text-4xl font-extrabold mt-3 ml-4 lg:mb-2 "> W.</p>
        <ul className="hidden lg:flex gap-7   ">
          <li>
            {" "}
            <a href="#"> Home</a>
          </li>
          <li>
            {" "}
            <a href="#"> New</a>
          </li>
          <li>
            {" "}
            <a href="#"> Popular</a>
          </li>
          <li>
            {" "}
            <a href="#"> Trending</a>
          </li>
          <li>
            {" "}
            <a href="#"> Categories</a>
          </li>
        </ul>
      </div>

      <img
        src="/assets/images/image-web-3-mobile.jpg"
        alt=""
        className=" lg:hidden p-2"
      />

      {/* desktop view  */}

      <div>
        <div className=" lg:grid  grid-cols-2 gap-2 ">
          <div>
            <img
              src="/assets/images/image-web-3-desktop.jpg"
              alt=""
              className="  hidden lg:flex"
              style={{ width: "50rem" }}
            />

            <div className=" lg:grid grid-cols-2">
              <h1
                // style={{ lineHeight: "1.6rem" }}
                className=" text-3xl pt-3 pl-2 font-extrabold "
              >
                {" "}
                The Bright <br></br>
                Future Of Web<br></br>
                3.0 ?
              </h1>
              <p className=" p-2  ">
                {props.text}
                <button className=" border-2  pt-2  pb-2 pr-6 pl-6  font-extrabold  bg-orange-600  border-orange-600  mt-3 ml-3 hidden lg:flex">
                  {" "}
                  READ MORE{" "}
                </button>
              </p>
            </div>

            <button className=" border-2  pt-2  pb-2 pr-6 pl-6  font-extrabold  bg-orange-600  border-orange-600  mt-3 ml-2 lg:hidden">
              {" "}
              READ MORE{" "}
            </button>
          </div>

          <div>
            <div className=" p-2  bg-primary mt-6 ml-2 mr-2 mb-2 lg:-mt-1 lg:mr-72  ">
              <h2 className=" font-bold text-4xl text-yellow-500 pt-4 pb-10">
                {" "}
                New
              </h2>
              <p className=" text-xl font-extrabold text-white">
                {" "}
                Hydrogen Vs Electric Cars{" "}
              </p>
              <p className=" pt-2 pb-6 text-white">
                {" "}
                Sunt magna culpa fugiat quis exercitation fugiat sunt nostrud et
              </p>
              <hr></hr>
              <p className=" text-xl font-extrabold pt-6 text-white">
                {" "}
                The Downside Of Ai Artistry{" "}
              </p>
              <p className=" pt-2 pb-6  text-white">
                {" "}
                Sunt magna culpa fugiat quis exercitation fugiat sunt nostrud et
              </p>
              <hr></hr>

              <p className=" text-xl font-extrabold pt-6 text-white">
                {" "}
                Is Vc Funding Drying up{" "}
              </p>
              <p className=" pt-2 pb-6  text-white">
                {" "}
                Sunt magna culpa fugiat quis exercitation fugiat sunt nostrud et
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex gap-5">
        <div className=" grid grid-cols-2  m-2 mt-8 mb-3">
          <img
            src="/assets/images/image-retro-pcs.jpg"
            className=" w-32 h-40"
            alt=""
          />

          <div className=" ">
            <p className=" text-4xl font-extrabold mb-1 text-orange-600">01</p>
            <p className=" text-sm font-extrabold mb-1 "> Reviving Retro Pcs</p>
            <p className=" text-sm  ">
              {" "}
              What happens when old Pcs<br></br>
              are given modern upgrades?
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2  m-2 mt-8 mb-3">
          <img
            src="/assets/images/image-top-laptops.jpg"
            className="  w-32 h-40"
            alt=""
          />
          <div className=" ">
            <p className=" text-4xl font-extrabold mb-2 text-orange-600">02</p>
            <p className=" text-sm font-extrabold mb-2">
              {" "}
              Top 10 Laptops Of 2022{" "}
            </p>
            <p className=" text-sm mt-1 leading-6">
              {" "}
              Our best picks various<br></br>
              needs and Budget
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-1 m-2 mt-8 mb-3">
          <img
            src="/assets/images/image-gaming-growth.jpg"
            className="  w-32 h-40"
            alt=""
          />
          <div className="">
            <p className=" text-4xl font-extrabold   text-orange-600">03</p>
            <p className=" text-sm font-extrabold "> The Growth Of Gaming</p>
            <p className=" text-sm mt-1 leading-6">
              {" "}
              How the pandemic<br></br>
              sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Navbar.prototype = {
  text: propType.string,
};
export default Navbar;
