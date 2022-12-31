import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import UserService from "../services/UserService";
// import UserService from "../services/UserService";

const Wallet = () => {
  const [wallet, setWallet] = useState({
    cashAvailable: "",
    buyingPower: "",
  });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setWallet({ ...wallet, [e.target.name]: value });
  // };

  // const reset = (e) => {
  //   e.preventDefault();
  //   setWallet({
  //     cashAvailable: "",
  //     buyingPower: "",
  //   });
  // };

  const [loading, setLoading] = useState(true);
  //const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserService.getWallet();
        setWallet(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold font-center text-2xl tracking-wider">
          <h1>My Wallet</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Cash Available
          </label>
          <input
            type="text"
            name="cashAvailable"
            disabled={"disabled"}
            value={wallet.cashAvailable}
            // onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Buying Power
          </label>
          <input
            type="text"
            name="buyingPower"
            disabled={"disabled"}
            value={wallet.buyingPower}
            // onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <Popup
            trigger={
              <button /*onClick={(e,ticker)=> placeOrder(e,ticker)*/
                className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
              >
                {" "}
                Deposit{" "}
              </button>
            }
            modal
          >
            <span>
              <div className="flex max-w-2xl mx-auto shadow border-b">
                <div className="px-8 py-8">
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Transaction Amount
                    </label>
                    <input
                      type="text"
                      name="transactionAmount"
                      /*value = {User.fullName}*/
                      // onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Transaction type
                    </label>
                    <input
                      type="text"
                      name="transactionType"
                      value={"DEPOSIT"}
                      disabled={"disabled"}
                      // onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
                      Deposit
                    </button>
                    <button
                      // onClick={reset}
                      className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </Popup>
          <Popup
            trigger={
              <button /*onClick={(e,ticker)=> placeOrder(e,ticker)*/
                className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
              >
                {" "}
                Withdraw{" "}
              </button>
            }
            modal
          >
            <span>
              <div className="flex max-w-2xl mx-auto shadow border-b">
                <div className="px-8 py-8">
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Transaction Amount
                    </label>
                    <input
                      type="text"
                      name="transactionAmount"
                      /*value = {User.fullName}*/
                      // onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Transaction type
                    </label>
                    <input
                      type="text"
                      name="transactionType"
                      value={"WITHDRAW"}
                      disabled={"disabled"}
                      // onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
                      Withdraw
                    </button>
                    <button
                      // onClick={reset}
                      className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
