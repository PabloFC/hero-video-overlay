import hero_video from "../assets/hero_video.mp4";

const VideOverlay = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={hero_video} autoPlay loop muted></video>
        <div className="content">
          <h1>Welcolme</h1>
          <p>To my site</p>
        </div>
      </div>
    </>
  );
};

export default VideOverlay;
