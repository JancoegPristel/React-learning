import { Carousel } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Carousel autoplay className="m-5">
      <div>
        <h3 className="content-style">
          <img src="https://media.suara.com/pictures/653x366/2021/03/31/73302-trailer-film-american-psycho.webp" alt="us physco" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://i.kym-cdn.com/entries/icons/original/000/040/219/cover1.jpg" alt="four fingers" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://www.ilcineocchio.it/cine/wp-content/uploads/2022/05/the-boys-stagione-3-patriota.jpg" alt="the boys" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://i.kym-cdn.com/photos/images/original/002/304/582/a8b" alt="aot" />
        </h3>
      </div>
    </Carousel>
  );
};

export default Banner;
