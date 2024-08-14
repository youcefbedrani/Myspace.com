import React from "react";
import "./Lines.scss";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover video-blur"
        src="../../../public/663aff2f69bcc533c9a6ec61_andhuman_homes-for-tribes-transcode.mp4"
        autoPlay
        loop
        muted
        style={{ zIndex: -3 }}
      />
      <div className="relative z-12 flex items-center justify-center h-full w-full">
        <ul className="Words">
          <li className="Words-line">
            <p>&nbsp;</p>
            <p>Hi</p>
          </li>
          <li className="Words-line">
            <p>Hi There</p>
            <p>my name</p>
          </li>
          <li className="Words-line">
            <p>my name</p>
            <p>Bedrani Mohammed</p>
          </li>
          <li className="Words-line">
            <p>Bedrani Mohammed</p>
            <p>Adel</p>
          </li>
          <li className="Words-line">
            <p>Adel</p>
            <p>Fullstack</p>
          </li>
          <li className="Words-line">
            <p>Fullstack</p>
            <p>developer</p>
          </li>
          <li className="Words-line">
            <p>developer</p>
            <p>&</p>
          </li>
          <li className="Words-line">
            <p>&</p>
            <p>Software</p>
          </li>
          <li className="Words-line">
            <p>Software</p>
            <p>Engineer</p>
          </li>
          <li className="Words-line">
            <p>Engineer</p>
            <p>&nbsp;</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackgroundVideo;
