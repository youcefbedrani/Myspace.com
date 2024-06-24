import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="../../../public/663aff2f69bcc533c9a6ec61_andhuman_homes-for-tribes-transcode.mp4"
        autoPlay
        loop
        muted
        style={{zIndex : -3}}
      />
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <h1 className="text-4xl text-bold" style={{color: "#100f0f"}}>I am Fullstack developer & Software Engineer</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
