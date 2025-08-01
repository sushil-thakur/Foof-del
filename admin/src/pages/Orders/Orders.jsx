import React from 'react'
import "./Orders.css"
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import axios from "axios"
import { assets } from '../../assets/assets'

const Orders = ({url}) => {
  const [orders, setOrders]= useState([])
  
  const fetchAllOrders = async ()=>{
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status", {
      orderId,
      status: event.target.value
    });
    if (response.data.success) {
      await fetchAllOrders();
      toast.success("Status updated successfully");
    } else {
      toast.error("Error updating status");
    }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div className='order-item' key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index)=>{
                  if (index === order.items.length-1) {
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>Rs. {order.amount}</p>
            <select 
              value={order.status || "Food Processing"} 
              onChange={(event) => statusHandler(event, order._id)}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
