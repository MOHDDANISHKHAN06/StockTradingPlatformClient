import React, {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import StockService from '../services/StockService';

const UserPage = () => {
    const navigate = useNavigate();
    const [stock, setStocks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData  = async () => {
            setLoading(true);
            try {
                const response = await StockService.getStocks();
                setStocks(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
            <button
                onClick={() => navigate("/login")}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Buy
            </button>
            </div>
            <div className="h-12">
            <button
                onClick={() => navigate("/register")}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Sell
            </button>
            </div>
                <table className="min-w-full">
                    <thead className="bg-gray-400">
                        <tr>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Ticker
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Company Name
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Opening Price
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Current Price
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Volume
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Day High
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Day Low
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Market Capitalisation
                        </th>
                        <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                            Operation
                        </th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                        {stock.map((stock) => (
                            <Stock stock={stock} key={stock.ticker}></Stock>
                        ))}
                        </tbody>
                    )}
                </table>
        </div>
  );
};

export default StockList;