import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyInfo = {
      img: photo,
      name,
      seller_name,
      seller_email,
      sub_category: selectedValue,
      price,
      rating,
      quantity,
      description,
    };

    fetch("http://localhost:5000/addToy", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
        }
      });
  };

  return (
    <div className="mb-12 mt-12">
      <div className="card-body bg-green-200 rounded-xl px-24 py-12">
        <form onSubmit={handleAddToy} className="space-y-6">
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Toy Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Seller Name"
                name="seller_name"
                defaultValue={user?.displayName}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="email"
                placeholder="Seller Email"
                name="seller_email"
                defaultValue={user?.email}
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="select w-full"
              >
                <option value="Sports Car">Sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Mini Police Car">Mini Police Car</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Price"
                name="price"
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <textarea
                name="description"
                cols="30"
                rows="6"
                className="textarea textarea-bordered text-base"
                placeholder="Detail Description"
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add A Toy"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
