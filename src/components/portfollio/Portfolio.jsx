import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  AllPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  DocsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "All",
      title: "All",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "Docs",
      title: "Docs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "All":
        setData(AllPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "Docs":
        setData(DocsPortfolio);
        break;
      default:
        setData(AllPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
           <a target="_blank" href={d.url}>
           <img
              src={d.img}
              alt=""
            />
           </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
