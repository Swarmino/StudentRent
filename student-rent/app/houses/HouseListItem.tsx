import { IHouse } from "../interfaces/IHouse";


export default function HouseListItem({ house }: { house: IHouse}) {
    return (
        <div className="Card border-white/80 border-4 rounded-lg bg-white/20 p-2 aspect-square min-w-72">
            <img className="bg-white aspect-video rounded-md max-w-full" src="https://ankerapartment.no/wp-content/uploads/2023/02/Anker-apartment-leilighet-oslo-2023-2.jpg" alt="" />
            <h2>{house.name}</h2>
            <p>{house.address}</p>
            <p>{house.price}</p>
            <button className="bg-green-400 p-2">Interested</button>
        </div>
    );
}