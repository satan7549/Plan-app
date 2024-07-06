
import "./Card.css";

export default function Card({data}) {
//   const [example, setExample] = useState(exampleData);
  return (
    <div className="mainDiv">
      <div>
        <h1>Chouse Plan</h1>
      </div>
      <div className="imgDiv">
        <img src={data.banner} alt="" />
      </div>
      <div className="scroller">
        <p>Plus</p>
      </div>
      <div>
        <h3>{data.claims}</h3>
        <div>
          {data.description?.data_annual.map((ele, i) => (
            <p key={i}>{ele.text}</p>
          ))}
          <p>lines</p>
        </div>
      </div>
    </div>
  );
}
