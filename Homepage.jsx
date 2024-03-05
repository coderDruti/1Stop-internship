import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <div
      className="HomePage"
      style={{
        width: 1440,
        height: 1024,
        position: "relative",
        background: "white",
      }}
    >
      <Header />
      <MainContent />
      <Footer></Footer>
    </div>
  );
}
