import { useLoaderData } from "react-router-dom";

const UpdateToyInfo = () => {
  const toyInfo = useLoaderData();

  const { _id, name, price, quantity, description } = toyInfo || {};

  const handleUpdateToyInfo = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyInfo = {
      price,
      quantity,
      description,
    };

    // console.log(toyInfo);

    fetch(`http://localhost:5000/myToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mb-12 mt-12">
      <div className="card-body bg-green-200 rounded-xl px-24 py-12">
        <h3 className="text-center text-2xl font-semibold text-indigo-700">
          Update: <span className="text-red-500">{name}</span>
        </h3>
        <form onSubmit={handleUpdateToyInfo} className="space-y-6">
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Price
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                defaultValue={price}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Available Quantity
                </span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                defaultValue={quantity}
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Detail Description
                </span>
              </label>
              <textarea
                name="description"
                cols="30"
                rows="6"
                className="textarea textarea-bordered text-base"
                placeholder="Detail Description"
                defaultValue={description}
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Update A Toy"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToyInfo;
