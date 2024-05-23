import HouseListItem from "./HouseListItem";

export default function HouseList() {
    
    const mocJson = [
        {
            id: 1,
            name: "House 1",
            address: "Address 1",
            price: 1000
        },
        {
            id: 2,
            name: "House 2",
            address: "Address 2",
            price: 2000
        },
        {
            id: 3,
            name: "House 3",
            address: "Address 3",
            price: 3000
        }
    ];
    
    return (
        <div className="flex gap-2">
            {mocJson.map((house) => (
                <HouseListItem key={house.id} house={house} />
            ))}
        </div>
    );
    }