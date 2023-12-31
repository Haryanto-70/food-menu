import Image from "next/image";

const FoodCard = ({ food }: any) => {
  const priceOfFood = food.remarks.price;

  const foodData = {
    photo: food.photo,
    name: food.name,
    descriptions: {
      ingredient: food.descriptions.ingredient,
      state: food.descriptions.state,
      country: food.descriptions.country,
    },
    remarks: {
      price: food.remarks.price.toLocaleString(),
      rating: food.remarks.rating,
      review: food.remarks.review,
    },
  };

  return (
    <>
      <div className="flex flex-col w-40  ">
        <div className="">
          <Image
            className="aspect-square w-40 rounded-md"
            src={foodData.photo}
            alt="pict"
            width="300"
            height="200"
          />
        </div>
        <div className="flex flex-col px-1 border-1 border-slate-600/[0.5] rounded-b-md">
          <h1 className="  text-center text-sm text-blue-700 dark:text-yellow-300 font-bold my-2">
            {foodData.name}
          </h1>
          <div className="flex flex-row">
            <div className="ml-0 text-xs">
              {foodData.descriptions.ingredient} <br />
              {foodData.descriptions.state} <br />
              {foodData.descriptions.country}
            </div>
            <div className="mr-0 ml-auto items-end text-xs/[18px]">
              <p className="text-right text-yellow-600 font-bold">
                Rp. {foodData.remarks.price}
              </p>
              <p className="text-right text-xs">
                rating {foodData.remarks.rating}
                <p className="float-right">
                  <Image
                    src="/images/foodmenu/star.png"
                    width="15"
                    height="12"
                    alt="star"
                  />
                </p>
              </p>
              <p className="text-right text-xs/[12px]">
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
