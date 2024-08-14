import icon from "../../../public/waving-hand.png";

function Macos() {
  return (
    <div className="macos-window">
      <div className="macos-controls">
        <a className="close"></a>
        <a className="minimize"></a>
        <a className="maximize"></a>
      </div>
      <h1 className="font-bold mt-2" style={{ color: "color: #232f3e;" }}>
        About Me
      </h1>
      <div
        className="text-base md:text-lg text-center mx-4 my-6"
        style={{ color: "#232f3e" }}
      >
        <img
          src={icon}
          alt="Icon"
          className="w-8 h-8 mx-auto mb-4" /* Adjust size, center image, and add margin below image */
        />
        <p className="text-wrap">
          Hi Bedrani Mohammed Adel with you. I'm a fullstack web developer,
          software engineer, and DevOps enthusiast. I have extensive experience
          in building fullstack web and mobile applications. Currently, I’m
          deepening my expertise in DevOps and preparing to build great
          projects. My passion lies in creating scalable, efficient, and
          impactful software solutions.
        </p>
      </div>
    </div>
  );
}

export default Macos;
