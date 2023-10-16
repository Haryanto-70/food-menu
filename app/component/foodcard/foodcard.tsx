import Image from "next/image";

const FoodCard = ({ food }: any) => {
  const foodData = {
    photo: food.photo,
    name: food.name,
    descriptions: {
      ingredient: "meat, salt",
      state: "Banten",
      country: "Indonesia",
    },
    remarks: {
      price: 55000,
      rating: 5,
      review: 10,
    },
  };

  return (
    <>
      <div className="flex flex-col w-40  ">
        <div className="">
          <Image
            className="aspect-square w-40 rounded-t-md"
            src={foodData.photo}
            alt="pict"
            width="300"
            height="200"
          />
        </div>
        <div className="flex flex-col px-1 border-2 border-slate-600/[0.5] rounded-b-md">
          <h1 className="  text-center text-sm text-blue-700 font-bold my-2">
            {foodData.name}
          </h1>
          <div className="flex flex-row">
            <div className="ml-0 text-sm">
              {foodData.descriptions.ingredient} <br />
              {foodData.descriptions.state} <br />
              {foodData.descriptions.country}
            </div>
            <div className="mr-0 ml-auto items-end text-sm ">
              <p className="text-right text-yellow-600 font-bold">
                Rp. {foodData.remarks.price}
              </p>
              <p className="text-right text-xs">
                rating {foodData.remarks.rating}{" "}
              </p>
              <p className="text-right text-sm">
                {" "}
                {foodData.remarks.review} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
