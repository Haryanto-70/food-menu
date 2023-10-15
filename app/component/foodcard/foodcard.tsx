import Image from "next/image";

const FoodCard = (props: any) => {
  const foodData = {
    photo: "/images/pict-1.jpeg",
    name: "props.name",
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
      <div className="flex flex-col w-64">
        <div className="w-64">
          <Image src={foodData.photo} alt="pict" width="300" height="200" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black text-center text-lg">{foodData.name}</h1>
          <div className="flex flex-row">
            <div className="ml-0">
              {foodData.descriptions.ingredient} <br />
              {foodData.descriptions.state} <br />
              {foodData.descriptions.country}
            </div>
            <div className="mr-0 ml-auto items-end">
              <p className="text-right">{foodData.remarks.price}</p>
              <p className="text-right"> {foodData.remarks.rating} </p>
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
