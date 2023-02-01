import React from "react";
import meme from "./assets/Meme.png";

const ContentSection = () => (
  // <div className="bg-white text-left">
  //   <p className="display-4 text-dark p-1 font-weight-bold">
  //     But ,Why Meme Marketing?
  //   </p>
  //   <img src={meme} style={{ width: 170 }} />
  //   <p className="text-dark">
  //     Today, the Indian Meme Culture has evolved to become a language for the
  //     internet. Nearly every piece of information today is transmitted in the
  //     form of Memes ranging from news, politics, movies, trolling, sharing
  //     opinion, relatable content and what not! This change opens up a huge
  //     attention space for brands to tap into and we equip them with this new-age
  //     tool to seed their brand narratives. And you know what’s the best part
  //     about this? everyone on social media consume memes like its nutella 😉
  //   </p>
  <div class="d-flex  bd-highlight" id="content">
    <div class="mb-5 p-2 w-100 bd-highlight" id="image-text">
      {" "}
      <p className="display-4 text-dark p-3 font-weight-bold">
        But ,Why Meme Marketing?
      </p>
      <p className="text-dark  p-3 ">
        Today, the Indian Meme Culture has evolved to become a language for the
        internet. Nearly every piece of information today is transmitted in the
        form of Memes ranging from news, politics, movies, trolling, sharing
        opinion, relatable content and what not! This change opens up a huge
        attention space for brands to tap into and we equip them with this
        new-age tool to seed their brand narratives. And you know what’s the
        best part about this? everyone on social media consume memes like its
        nutella 😉
      </p>
    </div>
    <div class=" m-5 p-2 flex-shrink-1 bd-highlight">
      {" "}
      <img src={meme} style={{ width: 250 }} />
    </div>
  </div>

  //   {/* <div className="row  p-4">
  //     <div className="col-6 text-right">
  //       <button className="btn btn-warning btn-lg">Play Store</button>
  //     </div>
  //     <button className="btn btn-warning btn-lg">App Store</button>
  //     <div className="col-6 text-center"></div>
  //   </div> */}
  // </div>
);

export default ContentSection;
