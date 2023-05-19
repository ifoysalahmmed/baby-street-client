import img1 from "../../../assets/images/banner/banner-1.jpg";
import img2 from "../../../assets/images/banner/banner-2.jpg";
import img3 from "../../../assets/images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <div className="mt-6">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full  rounded-xl" />
          <div className="absolute transform -translate-y-1/2 right-10 top-1/2 w-1/2 space-y-4">
            <p className="text-2xl font-bold text-black">
              Big fun for kid&apos;s!
            </p>
            <h2 className="text-4xl font-bold text-rose-600">
              A World <br /> To Explore
            </h2>
            <p className="text-xl font-semibold">
              Active toys for smart and active kids. Bring fun and non-stop
              learning for your little ones.
            </p>
            <button className="btn btn-warning rounded-full">Read More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute transform -translate-y-1/2 right-10 top-1/2 w-1/2 space-y-4">
            <p className="text-2xl font-bold text-black">Your wow! Store</p>
            <h2 className="text-4xl font-bold text-rose-600">
              The Ultimate Toy Store
            </h2>
            <p className="text-xl font-semibold">
              Delivering smile with toys. Get your unbeatable fun and learning
              experience with our creative toys.
            </p>
            <button className="btn btn-warning rounded-full">Read More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute transform -translate-y-1/2 right-10 top-1/2 w-1/2 space-y-4">
            <p className="text-2xl font-bold text-black">
              Fuel the imagination!
            </p>
            <h2 className="text-4xl font-bold text-rose-600">
              Extraordinary <br /> Learning Toys
            </h2>
            <p className="text-xl font-semibold">
              Premium toy for the genuine start. The best place to your buy
              dream toys. We provide toys for all age kids.
            </p>
            <button className="btn btn-warning rounded-full">Read More</button>
          </div>
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
