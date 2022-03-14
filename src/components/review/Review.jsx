import './Review.scss'
const Review = () => {
  const data = [
    {
      id: 1,
      title: "HTML/CSS",
      img:
        "https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      title: "Vanila JS",
      img:
        "https://miro.medium.com/proxy/0*UzaG_alYU6vQ8MIt.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    },
    {
      id: 3,
      title: "Node JS",
      img:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
    {
      id: 4,
      title: "React JS",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
  ];
  return (
    <div className="review" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Review