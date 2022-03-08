import "./styles.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
export default function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter Your Text" />
      </div>
    </>
  );
}
