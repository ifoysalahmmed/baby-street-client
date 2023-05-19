const Subscribe = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0">
        <div className="bg-teal-400 p-6 rounded">
          <h2 className="text-2xl font-semibold text-black pb-3">
            Same day delivery
          </h2>
          <p className="text-slate-600">
            Your shipt shopper will leave your order right at your doorstep.
            Begin your shopping and save $3.99 per delivery.{" "}
            <span className="text-black font-semibold">Start your order.</span>
          </p>
        </div>
        <div className="bg-rose-400 p-6 rounded">
          <div className="form-control">
            <label className="label pb-3">
              <span className="text-2xl font-semibold text-white">
                Subscribe to our Newsletter for upcoming Toys
              </span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full rounded-full"
              />
              <button className="btn rounded-full btn-info absolute right-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
