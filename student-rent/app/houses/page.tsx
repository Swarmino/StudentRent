import HouseList from "@/components/HouseList";
import LoginPage from "@/components/LoginPage";


export default function Page() {
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className=" text-2xl">Houses</h1>
      <HouseList />
      <LoginPage/>
    </div>
  );
}

