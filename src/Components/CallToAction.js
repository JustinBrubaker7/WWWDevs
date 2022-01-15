/* This example requires Tailwind CSS v2.0+ */
export default function CallToAction() {
  return (
    <div className="bg-white md:flex">
      <div className="max-w-7xl mx-auto md:mr-auto text-center md:text-left py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="p-12 md:px-24 mr-auto w-1/3 hidden md:block">
        <iframe
          width="690"
          height="400"
          src="https://www.youtube.com/embed/dbhJ9knLrCA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
