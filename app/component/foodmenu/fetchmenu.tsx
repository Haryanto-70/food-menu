// "use client";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((r) => r.json());

// function fetchData() {
//   const { data, error, isLoading } = useSWR("/api/data", fetcher);
//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

//   // render data
//   return <div>hello {data.name}!</div>;
// }
