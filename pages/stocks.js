import Head from "next/head";
import data from "../lib/data"
import Link from "next/link";

function BarChart({ data }) {
  const chartHeight = 400
  const chartWidth = 600
  const boxWidth = 10

  const high = Math.max(...data)
  const heightScalar = chartHeight / high
  const widthScalar = chartWidth / (data.length * boxWidth)
  console.log('width scaler:', widthScalar)
  console.log('height scaler:', heightScalar)

  let elems = [];
  for (let i in data) {
    const gt = data[i - 1] ? data[i - 1] < data[i] : false;
    const style = {
      width: `${boxWidth * widthScalar}px`,
      height: `${data[i] * heightScalar}px`,
      background: gt ? "#0f0" : "#f00",
    };
    elems.push(<div className="bar" style={style} key={i} />);
  }

  return <div
    className="chart"
    children={elems}
    style={{
      height: `${chartHeight}px`,
      width: `${chartWidth}px`,
      background: '#222',
    }}
  />;
}

export default function Stocks() {
  return (
    <div className="container">
      <Head>
        <title>Stonks</title>
      </Head>

      <Link href="/">
        <a className="back">{"<- back"}</a>
      </Link>

      <main>
        <h2>$TSLA stonks best stonks</h2>
        <small>Can you pick out where corona-chan entered the chat?</small>
        <BarChart data={data} />
        <p>High: {Math.max(...data)}, low: {Math.min(...data)}</p>
      </main>
    </div>
  );
}
