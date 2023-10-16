import FoodMenu from "@/app/component/foodmenu/foodmenu";
import Image from "next/image";

export default function Home() {
  const foodList = [
    {
      id: 1,
      photo: "/images/pict-1.jpeg",
      name: "Seafood",
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
    },
    {
      id: 2,
      photo: "/images/pict-2.jpeg",
      name: "Lobster Choice's",
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
    },
    {
      id: 3,
      photo: "/images/pict-3.jpeg",
      name: "Java Vegetabels",
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
    },
    {
      id: 4,
      photo: "/images/pict-4.jpeg",
      name: "Burger Slice",
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
    },
    {
      id: 5,
      photo: "/images/pict-5.jpeg",
      name: "Satay Sunda",
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
    },
  ];
  return (
    <>
      <div>
        <div
          className="food-bg"
          style={{
            width: "full",
            background: "yellow",
            alignContent: "center",
            display: "flex",
          }}
        >
          <div className="relative flex justify-center bg-slate-50 ">
            <Image
              className="w-full aspect-[16/7]"
              src="/images/background.jpeg"
              alt="background"
              width="1024"
              height="200"
            />
          </div>
          <div className="absolute flex justify-center w-full mt-8 ">
            <div className="flex-col bg-slate-800/[0.7]">
              <h1 className="font-extrabold text-2xl text-amber-50  px-32 py-2 text-center">
                FOOD MENU{" "}
              </h1>
              <h1 className="font-extrabold text-xl text-amber-50  px-32 py-2 text-center">
                JAVA NOODLE RESTAURANT
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <FoodMenu foodList={foodList} />
        </div>
      </div>
    </>
  );
}
