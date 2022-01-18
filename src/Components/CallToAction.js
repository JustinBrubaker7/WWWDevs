/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="bg-white md:flex">
      <div className="max-w-7xl mx-auto md:mr-auto text-center  py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-yellow-400">
            Schedule your free consultation!
          </span>
        </h2>
        <div className="mt-8 flex justify-center ">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-yellow-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="p-12 md:px-24 mr-auto w-1/3 hidden md:block">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dbhJ9knLrCA?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
