import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/solid";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const pricing = {
  tiers: [
    {
      title: "Starter",
      price: "1,000",
      frequency: "",
      description: "Template WordPress Website",
      features: [
        "3 pages",
        "Free 1hr Consultation",
        "Mobile responsive",
        "Contact form",
        "2 revisions",
      ],
      cta: "Due at Signing",
      mostPopular: false,
    },
    {
      title: "Pro",
      price: "2,500",
      frequency: "",
      description: "Customizable WordPress Theme",
      features: [
        "5 pages",
        "Free 1hr Consultation",
        "Mobile responsive",
        "Contact form",
        "2 revisions",
        "On page SEO",
        "XML sitemap",
        "Google Analytics",
      ],
      cta: "Due at Signing",
      mostPopular: true,
    },
    {
      title: "Premium",
      price: "5,000+",
      frequency: "",
      description: "Fully Customizable WordPress Theme",
      features: [
        "5 pages",
        "Free 1hr Consultation",
        "Mobile responsive",
        "Contact form",
        "2 revisions",
        "On page SEO",
        "XML sitemap",
        "Google Analytics",
        "Full Design Mock-ups",
        "2 post-launch content updates",
        "Branding guide based on website",
      ],
      cta: "Due at Signing",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-900">
        <Nav />

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-center lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Package Options
              </h2>
              <p className="mt-5 text-xl text-yellow-400">
                We offer a variety of packages to suit your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8 mb-12">
        {/* Tiers */}
        <div className="mt-10 md:mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-yellow-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p>Additional pages are $200</p>
              </div>

              <Link
                to={`/checkout?plan=${tier.title}&price=${tier.price}`}
                className={classNames(
                  tier.mostPopular
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : "bg-yellow-200 text-black hover:bg-yellow-300",
                  "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                )}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
