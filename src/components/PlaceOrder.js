import React from 'react'

const PlaceOrder = () => {
     
  const [ticker] = useParams();
  cconst [order, placeOrder] = useState({

    ticker: ticker,
	limitValue: "",
	expiry: "",
	orderType: "",
	numOfShares: ""
  })
  return (
    <div>PlaceOrder</div>
  )
}

export default PlaceOrder
