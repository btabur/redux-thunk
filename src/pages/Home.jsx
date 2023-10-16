import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Home = () => {
  const { productReducer, basketReducer } = useSelector((store) => ({
    productReducer: store.productReducer,
    basketReducer: store.basketReducer,
  }));

  

  return (
    <div>
      {productReducer.isLoading && <Loading />}

      <div className="d-flex flex-wrap gap-4 justify-content-center p-4">
        {productReducer.product.map((item,index) => (
         <Card key={index} product={item}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
