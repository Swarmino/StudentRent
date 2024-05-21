import HouseList from "./HouseList";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-2xl">Houses</h1>
      <HouseList />
    </div>
  );
}

