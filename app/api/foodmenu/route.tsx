import { NextRequest } from "next/server";
import { json } from "stream/consumers";

export async function GET(request: NextRequest) {
  const user = request.nextUrl.searchParams.get("username");

  if (!user) {
    return new Response("failed");
  }

  console.log(user, "request");

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

  return Response.json({
    respCode: 200,
    respMsg: "Success",
    foodLst: foodList,
  });
}
