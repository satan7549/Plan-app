import { useEffect, useState } from "react";
import { getData } from "../API";
import Card from "./Card";
import "./Main.css";

export default function MainComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div className="main">
      {data.map((ele, i) => (
        <Card key={i} data={ele} />
      ))}
    </div>
  );
}
