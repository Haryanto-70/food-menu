import FoodCard from "../foodmenu/foodcard/foodcard";

const FoodMenu = ({ foodList }: any) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {foodList.map((food: any) => {
          return <FoodCard food={food} key={food.id} />;
        })}
      </div>
    </div>
  );
};
export default FoodMenu;
