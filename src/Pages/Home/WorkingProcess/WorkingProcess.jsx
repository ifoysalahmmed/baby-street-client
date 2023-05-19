import img1 from "../../../assets/images/workingProcess/inspire.jpg";
import img2 from "../../../assets/images/workingProcess/encouraging.jpg";
import img3 from "../../../assets/images/workingProcess/creative.webp";

const WorkingProcess = () => {
  return (
    <div className="mt-12 px-5 md:px-0">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black">
          Here&apos;s how it works
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-full shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Inspires</h2>
            <p>
              Toys encourage children to use their imagination and create
              stories, scenarios, and characters. Whether it&apos;s building
              blocks, dolls, or action figures, children can invent their own
              narratives and explore different roles and possibilities.
            </p>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Encouraging</h2>
            <p>
              Toys stimulate children&apos;s natural curiosity and encourage
              them to explore and discover new things. Whether it&apos;s a
              puzzle, a science kit, or a nature-themed toy, they spark interest
              and motivate children to investigate and learn about the world
              around them.
            </p>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Creative</h2>
            <p>
              Toys that present challenges or puzzles, such as construction
              sets, brainteasers, or strategy games, foster creative thinking
              and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
