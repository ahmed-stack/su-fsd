import { useEffect, useState } from "react";
import { aToZSort, dateSort, zToASort } from "../helper/sort";
import Dropdown from "../src/components/dropdown";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        setData([]);
      });
  };

  const dropMenu = [
    {
      label: "sort by created at",
      action: () => setData([...dateSort(data)]),
    },
    {
      label: "sort by a-z",
      action: () => setData([...aToZSort(data)]),
    },
    {
      label: "sort by z-a",
      action: () => setData([...zToASort(data)]),
    },
  ];

  return (
    <div className="w-screen">
      <div className="w-full p-10 flex flex-col justify-center items-center">
        <Dropdown dropMenu={dropMenu} />

        <div className="w-2/4 m-auto p-10">
          <div className="grid grid-cols-2 gap-20">
            {data.map((elem, index) => (
              <div className="bg-white rounded-md text-gray-900 h-16 flex justify-center items-center" key={index}>
                {elem.created} : {elem.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
