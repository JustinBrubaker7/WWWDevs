import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-gray-900">
      <Nav />
      <main>
        {formSubmitted ? (
          <div className="py-80 bg-gray-100">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Thank you for contacting us</span>
              <span className="block text-yellow-400">
                We will reach out to you soon!
              </span>
            </h1>
          </div>
        ) : (
          <ContactForm
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
          />
        )}
        {/* CTA Section */}
        <Footer />
      </main>
    </div>
  );
}
