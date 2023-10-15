import FoodCard from "../foodcard/foodcard";

const FoodMenu = () => {
  const foodList = [
    {
      id: 1,
      photo: "/images/pict-1.jpeg",
      name: "Food1",
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
      name: "Food1",
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
      name: "Food1",
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
      name: "Food1",
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
      name: "Food1",
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
    <div>
      <div>
        <FoodCard />
      </div>
    </div>
  );
};
export default FoodMenu;
