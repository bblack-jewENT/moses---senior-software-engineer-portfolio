import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-effect rounded-[3rem] overflow-hidden border border-gray-800 flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 bg-indigo-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Let's build something{" "}
                <span className="opacity-70">together</span>.
              </h2>
              <p className="text-indigo-100 text-lg mb-12">
                Whether you have a specific project in mind or just want to say
                hi, I'm always open to discussing new opportunities.
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon="fa-envelope"
                  label="Email"
                  value="hello@moses.dev"
                />
                <ContactInfo
                  icon="fa-location-dot"
                  label="Location"
                  value="San Francisco, CA"
                />
              </div>
            </div>

            <div className="flex space-x-6 mt-12">
              <SocialLink icon="fa-github" label="GitHub" />
              <SocialLink icon="fa-linkedin" label="LinkedIn" />
              <SocialLink icon="fa-twitter" label="Twitter" />
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <InputGroup label="Name" placeholder="John Doe" />
                <InputGroup
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <InputGroup label="Subject" placeholder="How can I help you?" />
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 rounded-2xl p-4 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-white text-gray-900 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-transform active:scale-95 shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<{ icon: string; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
      <i className={`fas ${icon} text-white`}></i>
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">
        {label}
      </p>
      <p className="font-medium text-lg">{value}</p>
    </div>
  </div>
);

const SocialLink: React.FC<{ icon: string; label?: string }> = ({
  icon,
  label = "Social Link",
}) => (
  <a
    href="#"
    aria-label={label}
    title={label}
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all duration-300"
  >
    <i className={`fab ${icon}`}></i>
  </a>
);

const InputGroup: React.FC<{
  label: string;
  placeholder: string;
  type?: string;
}> = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
