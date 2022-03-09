import HomeIcon from "../Assets/HomeIcon.svg";
import "../Assets/Home.css";

const Home = () => {
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          width: "100%",
          margin: " 0 auto",
          padding: "25vh 18vw 0 18vw",
          height: "93.5vh",
          background: "rgba(0,0,0,0.85)",
        }}
      >
        <div
          className="jumbotron intro "
          style={{
            float: "left",
            margin: " 0 auto 0 0",
            marginLeft: "auto",
            width: "50%",
            padding: "0",
            height: "max-content",
          }}
        >
          <h1 className="display-3 fw-bolder">
            <span style={{ color: "#fff" }}>Project</span>{" "}
            <span style={{ color: "blue" }}>Name</span>
          </h1>
          <p className="lead">
            <span
              style={{
                color: "#fff",
                fontSize: "20px",
                wordSpacing: "4px",
                letterSpacing: "1px",
                opacity: "0.8",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae dui ultriciess ;kf; sdlf;sdl
            </span>
            <br />
            <span
              style={{
                color: "#fff",
                fontSize: "20px",
                wordSpacing: "4px",
                letterSpacing: "1px",
                opacity: "0.8",
              }}
            >
              Lorem ipsum dolor sit amet, con
            </span>
          </p>
          <button
            style={{
              background: "blue",
              color: "#fff",
              fontSize: "20px",
              padding: "4px 20px",
              border: "0",
              borderRadius: "4px",
              fontWeight: "500",
              marginTop: "10px",
            }}
          >
            Get Hired
          </button>
        </div>
        <img src={HomeIcon} className="homePic homePic_keyFrame"   alt="homeImg" />
      </div>
    </div>
  );
};
export default Home;
