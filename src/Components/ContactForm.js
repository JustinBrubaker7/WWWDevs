import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ formSubmitted, setFormSubmitted }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iriqc0b",
        "template_6vc98ht",
        form.current,
        "user_xF3MdRKmYKXj2RWfGtlrS"
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormSubmitted(true);
          console.log(formSubmitted);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {/* Header */}
      <div className="py-24 bg-gray-900    sm:py-32">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-white text-center sm:text-5xl sm:leading-none lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-yellow-400 text-center">
            We are always happy to hear from you. Send us a message and we'll
            get back to you as soon as possible.
          </p>
        </div>
      </div>
      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 l ">
          <div className="l">
            <div className="mx-auto sm:max-w-lg ">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form
                below and we’ll get back to you as soon as possible.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                //   action="#"
                //   method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="how-did-you-hear-about-us"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      className="shadow-sm focus:ring-grape-500 focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-gray-400 shadow-sm text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
