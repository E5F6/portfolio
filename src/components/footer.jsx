import React from "react";

const Footer = () => {
  const name = "Priyanshu Chahar";
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="mt-10 py-3 flex justify-center items-center footer">
      <h1 className="font-medium text-slate-300">
        {name} @{year}
      </h1>
    </footer>
  );
};

export default Footer;