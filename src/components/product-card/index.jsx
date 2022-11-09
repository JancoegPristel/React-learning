import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ random, productName,productPrice, productCategory, onClick }) => {
  const navigate = useNavigate();

  return (
    <>
    <Card
      className="product-card"
      hoverable
      cover={
        <img alt="example" src={`https://i.kym-cdn.com/photos/images/original/002/350/948/150.jpg`} />
      }
    >
      <Meta
        title={productName}
        description={
          <div>
            <div className="ant-card-meta-category">{productCategory}</div>
            <div className="ant-card-meta-price">Rp. {productPrice} </div>
          </div>
        }
      />
    </Card>
    <Button type="primary" onClick={()=> navigate(`/detail-product/${onClick}`)}>Detail Product</Button>
    </>
  );
};

export default ProductCard;
