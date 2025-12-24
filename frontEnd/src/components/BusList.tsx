import { useEffect, useState } from "react";
import BusCard from "./BusCart";
const URI = import.meta.env.URL;
// type Obj = {
//   buses: buses[];
// };

// type buses = {
//   busName: string;
//   busNum: string;
//   totalSeat: number;
//   source: string;
//   destination: string;
// };

// interface Obj {
//   buses: Buses[];
// }
interface Bus {
  busName: string;
  busNum: string;
  totalSeat: number;
  source: string;
  destination: string;
  fair: number;
}

// const obj: Obj = {
//   buses: [
//     {
//       busName: "Super Express",
//       busNum: "SE1234",
//       totalSeat: 50,
//       source: "City A",
//       destination: "City B",
//     },
//     {
//       busName: "Express",
//       busNum: "BC3456",
//       totalSeat: 50,
//       source: "City A",
//       destination: "City Z",
//     },
//   ],
// };

function BusList() {
  // const busList = obj.buses.map((bus) => {
  //   return (
  //     <li key={bus.busNum}>
  //       <u>
  //         <strong className="text-3xl font-bold underline">
  //           {bus.busName}
  //         </strong>
  //       </u>
  //       <p>
  //         Total Seat: {bus.totalSeat} <br /> Source : {bus.source}
  //         <br />
  //         Destination: {bus.destination}
  //       </p>
  //     </li>
  //   );
  // });
  // ----------------------------------------------
  const [buses, setBuses] = useState<Bus[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/buses")
      .then((res) => res.json())
      .then((data) => {
        setBuses(data);
        // console.log(data);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
        {buses.map((bus) => (
          <BusCard
            key={bus.busNum}
            busName={bus.busName}
            busNum={bus.busNum}
            totalSeat={bus.totalSeat}
            source={bus.source}
            destination={bus.destination}
            fair={bus.fair}
          />
        ))}
      </div>
    </>
  );
}

export default BusList;
