import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { UserService } from "../services/UserService";

const Wallet = () => {
  const [wallet, setWallet] = useState({
    cashAvailable: "",
    buyingPower: "",
  });
  const navigate = useNavigate();
  const ref = useRef();
  const ref2 = useRef();

  const [transaction, setTransaction] = useState({
    emailId: sessionStorage.getItem("emailId"),
    transactionType: "",
    transactionAmount: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTransaction({ ...transaction, [e.target.name]: value });
  };

  // const reset = (e) => {
  //   e.preventDefault();
  //   setWallet({
  //     cashAvailable: "",
  //     buyingPower: "",
  //   });
  // };

  const [loading, setLoading] = useState(true);

  const Deposit = (e) => {
    transaction.transactionType = "DEPOSIT";
    console.log(transaction);
    e.preventDefault();
    new UserService()
      .transactionWallet(transaction)
      .then((response) => {
        console.log("respose");
        console.log(response);
        navigate("/wallet");
        ref.current.close();
        // window.location.reload(true);
      })
      .catch((error) => {
        console.log(transaction);
        console.log(error);
      });
  };

  const Withdraw = (e) => {
    transaction.transactionType = "WITHDRAW";
    console.log(transaction);
    e.preventDefault();
    new UserService()
      .transactionWallet(transaction)
      .then((response) => {
        console.log("respose");
        console.log(response);
        navigate("/wallet");
        ref2.current.close();
        // window.location.reload(true);
      })
      .catch((error) => {
        console.log(transaction);
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new UserService().getWallet();
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
            ref={ref}
            trigger={
              <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
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
                      onChange={(e) => handleChange(e)}
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
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                      onClick={Deposit}
                      className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                    >
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
            ref={ref2}
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
                      onChange={(e) => handleChange(e)}
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
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                      onClick={Withdraw}
                      className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                    >
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
