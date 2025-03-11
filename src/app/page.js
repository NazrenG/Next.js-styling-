import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3"
          >
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

      <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-between items-center pt-24">
        <div className="w-auto h-auto max-w-full">
          <Image
            src="/image_second.png"
            width={600}
            height={356}
            className="object-cover"
          />
        </div>
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
      </div>
    </div>
  );
}
