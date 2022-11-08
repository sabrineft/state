import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const [name, setname] = useState("chouaieb abidi");
  const [profession, setprofession] = useState("web dev");
  const [bio, setbio] = useState("student");
  const [image, setimage] = useState(
    "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
  );
  const [show, setshow] = useState(false);
  return (
    <div className="renderDiv">
      {show ? (
        <Profile className="profile" name={name} pro={profession} bio={bio} img={image} />
      ) : null}
      <button className="butt" onClick={() => setshow(!show)}>
        {show ? "click to hide" : "click to show"}
      </button>
    </div>
  );
}

export default App;
