import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <nav className="bg-white fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <Image
              src="/eos-(eos).png"
              alt="LaslesVPN Logo"
              width={24}
              height={24}
            />
            <span className="font-rubik text-xl">
              Lasles<span className="font-bold">VPN</span>
            </span>
          </a>
          <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-black font-rubik font-normal">
              Sign in
            </button>
            <button
              type="button"
              className="text-red-600 rounded-full border-red-600 border-2 px-4 py-2 font-rubik font-normal ml-4"
            >
              Sign up
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white">
              <li>
                <a
                  href="#"
                  className="font-rubik font-normal self-center whitespace-nowrap block py-2 px-3"
                  aria-current="page"
                >
                  features
                </a>
              </li>
              <li>
                <a href="#" className="font-rubik font-normal block py-2 px-3">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="font-rubik font-normal block py-2 px-3">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="font-rubik font-normal block py-2 px-3">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-between items-center pt-24">
        <div className="max-w-2xl p-6 bg-white">
          <h5 className="mb-4 font-rubik font-normal text-6xl text-gray-900 leading-tight">
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN</span>
          </h5>
          <p className="mb-6 text-[16px] leading-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 w-48 justify-center text-lg font-medium text-white bg-red-700 rounded-full hover:bg-red-800"
          >
            Get Started
          </a>
        </div>

        <div className="w-auto h-auto max-w-full">
          <Image
            src="/image_first.png"
            width={600}
            height={356}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[800px] max-w-screen-xl mx-auto px-6 flex justify-around items-center pt-10 pb-10 shadow-md mt-[50px] shadow-[#00000017] rounded-[20px] bg-white">
        <div className="flex flex-row items-center gap-2.5">
          <Image width={37} height={37} src="/user_icon.png" />
          <div>
            <p className="font-bold font-rubik text-[20px] mt-2">90+</p>
            <p className="text-gray-600 text-[16px]">User</p>
          </div>
        </div>

        <div className="w-[2px] h-[50px] bg-gray-300"></div>

        <div className="flex flex-row items-center gap-2.5">
          <Image width={37} height={37} src="/location.png" />
          <div>
            <p className="font-bold font-rubik text-[20px] mt-2">30+</p>
            <p className="text-gray-600 text-[16px]">Location</p>
          </div>
        </div>

        <div className="w-[2px] h-[50px] bg-gray-300"></div>

        <div className="flex flex-row items-center gap-2.5">
          <Image width={37} height={37} src="/server_icon.png" />
          <div>
            <p className="font-bold font-rubik text-[20px] mt-2">50+</p>
            <p className="text-gray-600 text-[16px]">Server</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-between items-center pt-24">
        <div className="w-auto h-auto max-w-full">
          <Image
            src="/image_second.png"
            width={600}
            height={356}
            className="object-cover"
          />
        </div>
        <div className="max-w-[400px] p-6 bg-white mt-3 ">
          <h5 className="mb-4 font-rubik font-[800] text-[30px] text-gray-900 leading-tight">
            We provide many features you can use
          </h5>
          <p className="mb-6 font-rubik text-[16px] font-[400] leading-6 text-gray-700 mt-5">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <div className="flex items-center gap-x-2 mt-5 mt-7">
            <Image src="/tick.svg" width={24} height={24} alt="tick" />
            <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
              Powerfull online protection.
            </p>
          </div>
          <div className="flex items-center gap-x-2   mt-5">
            <Image src="/tick.svg" width={24} height={24} alt="tick" />
            <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
              Internet with borders
            </p>
          </div>
          <div className="flex items-center gap-x-2   mt-5">
            <Image src="/tick.svg" width={24} height={24} alt="tick" />
            <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
              Supercharged VPN
            </p>
          </div>
          <div className="flex items-center gap-x-2  mt-5">
            <Image src="/tick.svg" width={24} height={24} alt="tick" />
            <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
              No specific time limits
            </p>
          </div>
        </div>
      </div>

      <div className="w-[560px] max-w-screen-xl mx-auto px-6 flex flex-col justify-center items-center text-center pt-24">
        <p className="mb-4 font-rubik font-[800] text-[30px] text-gray-900 leading-tight">
          Choose your plan
        </p>
        <p className="mb-6 font-rubik text-[16px] font-[400] leading-6 text-gray-700 mt-2">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>

      <div className="w-full h-[830px] max-w-screen-xl mx-auto px-6 flex justify-center items-center">
        <div className="w-full h-[830px] max-w-sm p-8 bg-white border border-gray-200 rounded-[20px] shadow-sm text-center flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <Image src="/box.png" width={146} height={167} />
            <h5 className="text-xl font-rubik font-[800] text-[#2B2B2B]  mt-10">
              Free
            </h5>

            <div className="flex flex-col gap-y-6 my-6 mt-10">
              <div className="flex items-center gap-x-2 mt-5 ">
                <Image src="/tick.svg" width={24} height={24} alt="tick" />
                <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                  Unlimited bandwidth
                </p>
              </div>
              <div className="flex items-center gap-x-2 mt-5 ">
                <Image src="/tick.svg" width={24} height={24} alt="tick" />
                <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                  Encrypted connection
                </p>
              </div>
              <div className="flex items-center gap-x-2 mt-5 ">
                <Image src="/tick.svg" width={24} height={24} alt="tick" />
                <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                  Yes trafic logs
                </p>
              </div>
            </div>
          </div>

          <div className="gap-5 flex flex-col">
            <h5 className="text-3xl font-rubik font-[900] text-[#2B2B2B]">
              Free
            </h5>

            <button
              type="button"
              className="mt-auto px-6 py-3 w-48 text-lg font-medium text-white bg-red-700 rounded-full hover:bg-red-800"
            >
              Select
            </button>
          </div>
        </div>
        <div className="w-full h-[830px] max-w-screen-xl mx-auto px-6 flex justify-center items-center">
          <div className="w-full h-[830px] max-w-sm p-8 bg-white border border-gray-200 rounded-[20px] shadow-sm text-center flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <Image src="/box.png" width={146} height={167} />

              <h5 className="text-xl font-rubik font-[800] text-[#2B2B2B]  mt-10">
                Standart Plan
              </h5>

              <div className="flex flex-col gap-y-6 my-6">
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-bold text-[16px] text-gray-900 leading-tight">
                    Unlimited bandwidth
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Encrypted connection
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Yes trafic logs
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Works on all devices
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Connect anyware
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-5 flex flex-col">
              <h5 className="text-3xl font-rubik font-[900] text-[#2B2B2B]">
                $ 12
                <span className="text-2xl font-rubik font-[600] text-[#646464]">
                  /mo
                </span>
              </h5>

              <button
                type="button"
                className="mt-auto px-6 py-3 w-48 text-lg font-medium text-white bg-red-700 rounded-full hover:bg-red-800"
              >
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[830px] max-w-screen-xl mx-auto px-6 flex justify-center items-center">
          <div className="w-full h-[830px] max-w-sm p-8 bg-white border border-gray-200 rounded-[20px] shadow-sm text-center flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <Image src="/box.png" width={146} height={167} />

              <h5 className="text-xl font-rubik font-[800] text-[#2B2B2B]  mt-10">
                Premium Plan
              </h5>

              <div className="flex flex-col gap-y-6 my-6">
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Unlimited bandwidth
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Encrypted connection
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Yes trafic logs
                  </p>
                </div>

                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Works on all devices
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Connect anyware
                  </p>
                </div>
                <div className="flex items-center gap-x-2 mt-5">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  <p className="font-rubik font-[600] text-[16px] text-gray-900 leading-tight">
                    Get new features
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-5 flex flex-col">
              <h5 className="text-3xl font-rubik font-[900] text-[#2B2B2B]">
                $ 9
                <span className="text-2xl font-rubik font-[600] text-[#646464]">
                  /mo
                </span>
              </h5>

              <button
                type="button"
                className="mt-auto px-6 py-3 w-48 text-lg font-medium text-white bg-red-700 rounded-full hover:bg-red-800"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[830px] max-w-screen-xl mx-auto px-6  justify-center items-center mt-[90px]">
        <Image src="/map.png" height={742} width={1060} />
        <Image src="/sponsors.png" height={210} width={1136} />
      </div>

      <div className="w-[560px] max-w-screen-xl mx-auto px-6 flex flex-col justify-center items-center text-center pt-24">
        <p className="mb-4 font-rubik font-[800] text-[30px] text-gray-900 leading-tight">
          Trusted by thousands of happy customer
        </p>
        <p className="mb-6 font-rubik text-[16px] font-[400] leading-6 text-gray-700 mt-2">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>

      <div className="w-full h-[830px] max-w-screen-xl mx-auto px-6  justify-between items-center mt-[30px]">
        <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-between items-center ">
          <div className="w-full max-w-sm bg-white border border-[#F53838] rounded-[20px] shadow-sm p-7.5">
            <div className="flex items-center justify-between">
              <Image
                className="w-16 h-16 rounded-full shadow-lg"
                src="/profile.png"
                alt="Profile Image"
                width={64}
                height={64}
              />

              <div className="flex flex-col ">
                <h5 className="text-lg font-rubik font-[800] text-[#2B2B2B]">
                  Brooklyn Simmons
                </h5>
                <span className="text-sm text-gray-500">Warsaw, Poland</span>
              </div>

              <div className="flex items-center gap-1 align-text-bottom">
                <p className="text-sm font-bold text-[#2B2B2B]">4.5</p>
                <Image src="/star.png" width={16} height={16} alt="Star" />
              </div>
            </div>

            <p className="mt-4 text-[16px] font-[400] leading-6 text-[#5A5A5A]">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best.”
            </p>
          </div>
          <div className="w-full max-w-sm bg-white border border-[#CCCCCC] rounded-[20px] shadow-sm p-7.5">
            <div className="flex items-center justify-between">
              <Image
                className="w-16 h-16 rounded-full shadow-lg"
                src="/profile1.png"
                alt="Profile Image"
                width={64}
                height={64}
              />

              <div className="flex flex-col ">
                <h5 className="text-lg font-rubik font-[800] text-[#2B2B2B]">
                  Darlene Robertson
                </h5>
                <span className="text-sm text-gray-500">Warsaw, Poland</span>
              </div>

              <div className="flex items-center gap-1 align-text-bottom">
                <p className="text-sm font-bold text-[#2B2B2B]">4.5</p>
                <Image src="/star.png" width={16} height={16} alt="Star" />
              </div>
            </div>

            <p className="mt-4 text-[16px] font-[400] leading-6 text-[#5A5A5A]">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best.”
            </p>
          </div>
          <div className="w-full max-w-sm bg-white border border-[#CCCCCC] rounded-[20px] shadow-sm p-7.5">
            <div className="flex items-center justify-between">
              <Image
                className="w-16 h-16 rounded-full shadow-lg"
                src="/profile3.png"
                alt="Profile Image"
                width={64}
                height={64}
              />

              <div className="flex flex-col ">
                <h5 className="text-lg font-rubik font-[800] text-[#2B2B2B]">
                  Darrell Steward
                </h5>
                <span className="text-sm text-gray-500">Warsaw, Poland</span>
              </div>

              <div className="flex items-center gap-1 align-text-bottom">
                <p className="text-sm font-bold text-[#2B2B2B]">4.5</p>
                <Image src="/star.png" width={16} height={16} alt="Star" />
              </div>
            </div>

            <p className="mt-4 text-[16px] font-[400] leading-6 text-[#5A5A5A]">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best.”
            </p>
          </div>
        </div>

        <div className="w-full h-[100px] max-w-screen-xl mx-auto px-6  flex justify-between items-center ">
          <div className="flex flex-row w-[130px] justify-between">
            <div className="w-[58px] h-3 bg-[#F53838] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D8D8D8] rounded-full"></div>
          </div>
          <div className="flex flex-row w-[132px] justify-between">
            <div className="w-[45px] h-[45px] bg-[#D8D8D8] rounded-full relative">
              <Image
                src="/left_arrow.svg"
                width={30}
                height={30}
                className="absolute top-1/6 left-1/10"
              />
            </div>
            <div className="w-[45px] h-[45px] bg-[#F53838] rounded-full relative">
              <Image
                src="/right_arrow.svg"
                width={30}
                height={30}
                className="absolute top-1/6 left-1/5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1146px] max-w-screen-xl mx-auto px-6 flex justify-between items-center pt-10 pb-10 shadow-md mt-[50px] shadow-[#00000017] rounded-[20px] bg-white">
        <div className="flex flex-col items-center  gap-2.5 w-[250px]">
          <p className=" font-rubik font-[800] text-[25px] text-gray-900 leading-tight">
            Subscribe now for get special features!
          </p>
          <p className=" font-rubik text-[16px] font-[400] leading-6 text-gray-700 ">
            Lorem ipsum dolor sit amet
          </p>
        </div>

        <button
          type="button"
          className="mt-auto px-6 py-3 w-48 text-lg font-medium text-white bg-[#F53838] rounded-2xl hover:bg-red-800"
        >
          Subcribe now
        </button>
      </div>

      <footer class="bg-[#F4F4F4] w-full">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="w-[340px] flex flex-col gap-[15px]">
              <a href="#" className="flex items-center space-x-3">
                <Image
                  src="/eos-(eos).png"
                  alt="LaslesVPN Logo"
                  width={24}
                  height={24}
                />
                <span className="font-rubik text-xl">
                  Lasles<span className="font-bold">VPN</span>
                </span>
              </a>
              <p className="text-[#5A5A5A] font-normal text-[15px]">
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
                arcu id purus ullamcorper. Vel vel erat semper augue.
              </p>
              <Image src="/social_media.png" width={150} height={37} />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black">Product</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Server
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Countries
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-black uppercase ">
                  Engage
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      LaslesVPN?
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms of service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-black">
                  Earn money
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Become partner
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Afifilite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
