import React from 'react'
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Button } from "antd/lib/radio";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param =useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get (url);
      const payload = {...response?.data?.data?.product}
      console.log(payload);
      setProduct(payload || []);
    } catch (error) {
      alert (error)    
    }
  }

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id])
  

  return (
    <>
    <Button type="primary" onClick={() => navigate (-1)}>Back</Button>
    <div className="text-center">DetailProduct</div>
    <p>Product Name: {product?.name}</p>
    <p>Price: {product?.price}</p>
    <p>Seller: {product?.ownerId?.name}</p>
    </>
  )
}

export default DetailProduct