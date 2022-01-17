/* This example requires Tailwind CSS v2.0+ */
import {
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Complete Our Questionnaire",
    href: "#",
    description:
      "Fill out our detailed questionnaire so we can get a base understanding of your dream website and specific needs/features.",
    icon: ArrowNarrowRightIcon,
  },
  {
    name: "Consultation",
    href: "#",
    description:
      "Each project will include a free 60 min consultation to review goals, plans, and to ensure we are giving you the website you want.",
    icon: ArrowNarrowRightIcon,
  },
  {
    name: "The Work Begins",
    href: "#",
    description:
      "Once we have a clear vision, the designing process begins. Depending on the package you select, this may be a template or fully custom design mock ups.",
    icon: ArrowNarrowRightIcon,
  },
  {
    name: "Review Design",
    href: "#",
    description:
      "We will meet with you to review the design and discuss any changes you may want to make. This is a great time to ask any questions you may have.",
    icon: ArrowNarrowRightIcon,
  },
  {
    name: "Revisions and Final Touches",
    href: "#",
    description:
      "We are now in the home stretch of the project! Time to address any last details and we will also make sure the website is ready for launch.",
    icon: ArrowNarrowRightIcon,
  },
  {
    name: "Launch Day",
    href: "#",
    description:
      "We will meet once more to discuss next steps moving forward and final to-do items. Time to celebrate! The hard work is over, now it's time to enjoy your killer website.",
    icon: ArrowNarrowRightIcon,
  },
];

export default function TheProcessSection() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Process
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Our Process
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl md:mb-16"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 left-6 p-5 inline-block bg-yellow-400 rounded-xl shadow-lg transform -translate-y-1/2">
                  {/* <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  /> */}
                  <img
                    className="h-8"
                    src={require("../assets/images/1 (1).png")}
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
