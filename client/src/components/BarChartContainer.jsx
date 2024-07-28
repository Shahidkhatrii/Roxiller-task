import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
const BarChartContainer = ({ priceRangeData, month }) => {
  return (
    <div className="mt-32 bg-yellow-100 p-4 rounded text-lg">
      <h2 className="text-4xl font-bold ml-4">
        Bar Chart Stats -{" "}
        {new Date(0, month - 1).toLocaleString("default", { month: "long" })}
        <sup className="text-lg font-normal ml-2">
          (selected month name from dropdown)
        </sup>
      </h2>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: Object.keys(priceRangeData),
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: Object.values(priceRangeData),
          },
        ]}
        width={900}
        height={400}
      />
    </div>
  );
};

export default BarChartContainer;
