import logo from "./assets/logo.svg";
export default function Header() {
  return (
    <>
      <div
        className="Group7"
        style={{
          width: 188,
          height: 156.74,
          left: 0,
          top: 0,
          position: "absolute",
        }}
      >
        <img src={logo}></img>
      </div>
      <div
        className="Frame1"
        style={{
          width: 1440,
          height: 157,
          left: 0,
          top: 0,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          className="GtdGetThingsDone"
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 36,
            fontFamily: "Inter",
            fontWeight: "800",
            wordWrap: "break-word",
          }}
        >
          GTD ~ Get Things Done
        </div>
      </div>
    </>
  );
}
