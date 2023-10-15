import Image from "next/image";
import FoodCard from "./component/foodcard/foodcard";
import FoodMenu from "./component/foodmenu/foodmenu";

export default function Home() {
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
          <div className="relative flex  justify-center bg-slate-50 ">
            <Image
              src="/images/background.jpeg"
              alt="background"
              width="102400"
              height="200"
            />
          </div>
          <div className="absolute flex justify-center w-full mt-16 ">
            <div className="flex-col">
              <h1 className="font-extrabold text-3xl text-amber-50 bg-slate-800 px-32 py-4 text-center">
                FOOD MENU{" "}
              </h1>
              <h1 className="font-extrabold text-3xl text-amber-50 bg-slate-800 px-32 py-4 text-center">
                JAVA TRADITIONAL
              </h1>
            </div>
          </div>
        </div>
        <FoodMenu />
      </div>
    </>
  );
}
