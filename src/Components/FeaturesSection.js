/* This example requires Tailwind CSS v2.0+ */
import {
  RefreshIcon,
  ServerIcon,
  GlobeIcon,
  CubeTransparentIcon,
  CollectionIcon,
  BadgeCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const features = [
    {
        name: 'Custom Built Websites',
        icon: GlobeIcon,
        description: 'Our websites are custom built to meet the needs of your business.',
    },
    {
        name: 'Web Applications',
        icon: CubeTransparentIcon,
        description: "Have an idea for an application but don't know where to start? We can help.",
    },
    {
        name: 'Custom Software Solutions',
        icon: BadgeCheckIcon,
        description: 'Have a problem? We can create a software solution to solve it.',
    },
    {
        name: 'Streamlined Process',
        icon: RefreshIcon,
        description: 'We make it easy to get started with your project, from start to finish.',
    },
    {
        name: 'Ecommerce Store Setup',
        icon: CollectionIcon,
        description: 'Sell products online? We can help you set up and design a store that sells.',
    },
    {
        name: 'Outstanding Custom Service',
        icon: UserCircleIcon,
        description: 'We will be by your side from start to finish. During and beyond, we are here for you.',
    },
];

export default function FeaturesSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32 bg-gray-100">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-yellow-600 uppercase">
          Get Your Business on the Web
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need from a website or web application
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          We know how difficult and time consuming it can be to get a website or software up and running. 
          That's why we have a team who cares just as much as you do to handle the heavy lifting. We've got everything you need to make your vision a 
          reality and we will be with you every step of the way.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
