import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/UserService";

const MarketSchedule = () => {
  const [schedule, setSchedule] = useState({
    startTime: "",
    endTime: "",
    holidays: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setSchedule({ ...schedule, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new UserService().getMarketSchedule();
        setSchedule(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const changeTimings = (e) => {
    e.preventDefault();
    console.log(schedule);

    new UserService()
      .changeTimings(schedule)
      .then((response) => {
        console.log(response);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("unsuccessful");
      });
  };

  const addHoliday = (e) => {
    e.preventDefault();
    console.log(schedule);
    console.log(schedule.holidays);
    new UserService()
      .addHoliday(schedule)
      .then((response) => {
        console.log(response);
        //window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("unsuccessful");
      });
  };

  // const deleteHoliday = (e) => {
  //   e.preventDefault();
  //   console.log(schedule);
  //   console.log(schedule.holidays);
  //   new UserService()
  //     .deleteHoliday(schedule)
  //     .then((response) => {
  //       console.log(response);
  //       //window.location.reload(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("unsuccessful");
  //     });
  // };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold font-center text-2xl tracking-wider">
          <h1>Change Market Schedule</h1>
        </div>
        <div className="container mx-auto my-8">
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              onChange={(e) => handleChange(e)}
              value={schedule.startTime}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
            <label className="block text-gray-600 text-sm font-normal">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              onChange={(e) => handleChange(e)}
              value={schedule.endTime}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
            <div>
              <button
                className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6 mx-36"
                onClick={(e) => changeTimings(e)}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-40">
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Holiday
            </label>
            <input
              type="text"
              name="holidays"
              disabled={"disabled"}
              value={schedule.holidays}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
            <input
              type="date"
              name="holidays"
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
            <button
              className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6 mx-36"
              onClick={addHoliday}
            >
              Add
            </button>
            {/* <button
              className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6 mx-36"
              onClick={deleteHoliday}
            >
              Delete
            </button> */}
          </div>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <button
            className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6 mx-36"
            onClick={() => navigate("/user")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketSchedule;
