import { Pie, PieChart, Tooltip } from "recharts";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-3 m-5 p-4 h-[80vh] rounded-2xl ">
        <div className="font-bold text-3xl">Dashboard</div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-3 ">
            <div className="text-xl">Upcoming</div>
            <div className="flex items-center ">
              <div>
                <PieChart
                  width={200}
                  height={200}
                  className="[&_*]:focus:outline-none"
                >
                  <Pie
                    
                    activeShape={{
                      fill: "gray",
                    }}
                    data={[
                      { name: "Completed tasks", uv: 5, fill: "#22c55e",  },
                      { name: "Incomplete tasks", uv: 2, fill: "#ef4444", },
                    ]}
                    dataKey="uv"
                  />
                  <Tooltip />
                </PieChart>
              </div>
              <div>
                <div>Total tasks: 10</div>
                <div>Completed tasks: 5</div>
                <div>Incomplete tasks: 5</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-xl">Today</div>
            <div className="flex items-center ">
              <div className="ouline-none">
                <PieChart
                  width={200}
                  height={200}
                  className="[&_*]:focus:outline-none"
                >
                  <Pie
                    activeShape={{
                      fill: "gray",
                    }}
                    data={[
                      { name: "Completed tasks", uv: 7, fill: "#22c55e",  },
                      { name: "Incomplete tasks", uv: 8, fill: "#ef4444", },
                    ]}
                    dataKey="uv"
                  />
                  <Tooltip />
                </PieChart>
              </div>
              <div>
                <div>Total tasks: 15</div>
                <div>Completed tasks: 7</div>
                <div>Incomplete tasks: 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
