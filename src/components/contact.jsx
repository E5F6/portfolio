import { FaLinkedinIn , FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import Link from "next/link";

const Contact = () => {
  const contacts = [
    {
        name: "Linkedin",
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/priyannxhuu"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        url: "https://github.com/priyannxhuu"
    },
    {
        name: "Twitter",
        icon: <FaXTwitter />,
        url: "https://twitter.com/priyannxhuu"
    },
    {
        name: "More Links",
        icon: <PiLinkSimpleBold />,
        url: "https://priyannxhuu.vercel.app"
    },
  ];

  return (
    <section className="px-10 mb-10 flex justify-center items-center w-full" id="contact">
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-3xl md:text-4xl text-slate-200 font-medium self-start">
          Contact Me
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-7 rounded-full px-7 py-3 links">
        {contacts.map((contact , index) => (
            <Link key={index} href={contact.url} className="text-slate-300 text-4xl hover:text-cyan-600 hover:translate-y-1 transition ease-in-out">
            {contact.icon}
            </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;