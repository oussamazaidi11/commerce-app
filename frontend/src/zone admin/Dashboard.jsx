import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MoveUpRight, MoveDownRight } from "lucide-react";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  const [series2, setSeries2] = useState([44, 55, 41, 17, 15]);
  const [label, setLabel] = useState(["A", "B", "C", "D", "E"]);

  return (
    <div>
      <div
        id="resultat"
        className="my-5 mb-10 grid grid-cols-4 place-items-center"
      >
        <div
          id="ventes"
          className="bg-white inline-block p-2 shadow-lg rounded "
        >
          <h2 className=" uppercase text-xl mb-2 flex gap-1">
            Ventes mensuelles <MoveUpRight color={"green"} />
          </h2>
          <h3 className="text-center text-2xl ">30.500 DT</h3>
        </div>
        <div
          id="stock"
          className="bg-white inline-block p-2 shadow-lg rounded "
        >
          <h2 className=" uppercase text-xl mb-2 flex gap-1">
            Stock mensuelles <MoveDownRight color={"red"} />
          </h2>
          <h3 className="text-center text-2xl ">2500</h3>
        </div>
        <div id="Ca" className="bg-white inline-block p-2 shadow-lg rounded ">
          <h2 className=" uppercase text-xl mb-2 flex gap-1">
            Chiffre d'affaire <MoveUpRight color={"green"} />
          </h2>
          <h3 className="text-center text-2xl ">150,180.500 DT</h3>
        </div>
        <div
          id="transactions"
          className="bg-white inline-block p-2 shadow-lg rounded "
        >
          <h2 className=" uppercase text-xl mb-2 flex gap-1">
            Transactions mensuelles <MoveUpRight color={"green"} />
          </h2>
          <h3 className="text-center text-2xl ">7800</h3>
        </div>
      </div>

      <div
        id="charts"
        className=" flex justify-center items-center gap-[12rem] pt-8  px-6"
      >
        <div className="bg-white">
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
        <div className="bg-white">
          <Chart
            options={{}}
            series={series2}
            type="donut"
            width="500"
            label={label}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
