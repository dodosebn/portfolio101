
const AboutMeMain = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-2xl border-b-[1.2px] border-b-black pb-2">
        ABOUT ME
      </h1>
      <div className="pt-2">
        <p
          className=" lg:text-[1.20rem] text-lg"
          style={{
            lineHeight: "1.75rem",
          }}
        >
          I’m dedicated to front-end development and enjoy{" "}
            creating visually appealing, user-friendly interfaces
          . I focus on building complete features that enhance user experience
          while ensuring{" "}
            accessibility and responsiveness
          {" "}
          . My approach is detail-oriented, aiming for{" "}
            seamless interactions and intuitive designs
          . I’m always looking for ways to improve and stay up to date with the
          latest technologies and best practices in the field.
        </p>
      </div>
    </div>
  );
};

export default AboutMeMain;
