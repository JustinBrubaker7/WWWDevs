import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/solid";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const pricing = {
  tiers: [
    {
      title: "Gatsby Landing Page",
      price: "1,000",
      frequency: "",
      description: "Super fast landing page with great SEO",
      features: [
        "Single page",
        "Super fast landing page",
        "Custom Designed",
        "If you need a fast website that cares about SEO but doesn't need alot of pages this is for you",
      ],
      cta: "Select this package",
      mostPopular: false,
    },
    {
      title: "Ecommerce Store Setup",
      price: "2,500",
      frequency: "",
      description: "Partially Customized WordPress Template",
      features: ["5 pages"],
      cta: "Select this package",
      mostPopular: false,
    },
    {
      title: "Ongoing webiste support",
      price: "50",
      frequency: "/hr",
      description: "Continued support after website launch",
      features: [
        "Hourly Rate",
        "Update Content",
        "New Feature to existing site",
        "Anything else you need done",
      ],
      cta: "Checkout",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingBlock() {
  return (
    <div className="bg-white">
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
                <p className="mt-4 flex items-baseline text-gray-900 justify-center">
                  <span className="text-4xl font-extrabold tracking-tight ">
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
    </div>
  );
}
