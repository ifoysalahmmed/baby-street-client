import img1 from "../../../assets/images/banner/banner-1.jpg";
import img2 from "../../../assets/images/banner/banner-2.jpg";
import img3 from "../../../assets/images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <div className="mt-6">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
