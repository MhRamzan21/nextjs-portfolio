import React from "react";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <section className="w-full px-4 py-20">
      <div>
        <p className="text-[var(--brand)] text-center font-semibold">
          Get In Touch
        </p>
        <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold dark:text-zinc-300 text-zinc-700 mb-4">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-zinc-600 text-sm dark:text-zinc-400 mb-8">
            I&apos;d love to hear about your project and how I can help. Feel free to
            reach out through any of the following contact methods or by using
            the form.
          </p>
          <ContactInfo />
        </div>
        {/* Right side */}
        <ContactForm />
      </div>
    </section>
  );
};

export { Contact };
