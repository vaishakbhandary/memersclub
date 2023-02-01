import React from "react";
import one from "./assets/1.png";

const CardSection = () => {
  return (
    <section className="contact bg-success py-4 ">
      <div className="container ">
        <h2 className="text-white text-center pb-4">
          Journey Of A Meme Marketing Campaign:
        </h2>
        <div className="row " id="card-container">
          <div className="col-4 mb-2">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src={one}
                style={{ width: "18rem", height: "15rem" }}
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body">
                <h5 className="card-title">1. Brand personality Scan</h5>
                <p className="card-text">
                  Understanding the brand’s objective, their tonality and target
                  audience
                </p>
                {/* <a href="#" className="btn btn-success">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-4 mb-2">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body " id="card-color">
                <h5 className="card-title">2. Deriving Content Pillars</h5>
                <p className="card-text">
                  Churning out relevant internet conversations that we can
                  connect with the brand or campaign narrative
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 mb-2">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body ">
                <h5 className="card-title">3. Content creation</h5>
                <p className="card-text">
                  Creating content with the perfect blend of campaign narrative
                  and relevant internet conversations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        {/* <h2 className="text-white text-center pb-4">
          Journey Of A Meme Marketing Campaign:
        </h2> */}
        <div className="row" id="card-container">
          <div className="col-4 mb-3">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body " id="card-color1">
                <h5 className="card-title">4. Content Distribution</h5>
                <p className="card-text">
                  The content created is then strategically distributed via Meme
                  Community
                </p>
                {/* <a href="#" className="btn btn-success">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-4 mb-2">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body">
                <h5 className="card-title">5. Campaign Optimization</h5>
                <p className="card-text">
                  Eliminating what’s not working and amplifying what’s working
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem", height: "15rem" }}>
              {/* <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              /> */}
              <div className="card-body " id="card-color2">
                <h5 className="card-title">6. Impact analysis and Reporting</h5>
                <p className="card-text">
                  Analyzing campaign’s performance by examining people’s
                  reaction and assessing against aimed numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
