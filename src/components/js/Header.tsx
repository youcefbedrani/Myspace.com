import React from "react";

const Header: React.FC = () => {
  const arr = [
    { Work: "#" },
    { Services: "#" },
    { About: "#" },
    { Blogs: "#" },
    { Contact: "#" },
  ];
  return (
    <div className="flex justify-end fixed items-center space-x-6 mt-2 text-lg top-8 right-14">
      {arr.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        return (
          <a key={index} href={value} className="" style={{ color: "#100f0f" }}>
            {key}
          </a>
        );
      })}
    </div>
  );
};

export default Header;
