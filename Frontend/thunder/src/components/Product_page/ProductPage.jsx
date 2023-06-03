import React, { useState } from "react";
import useGetProduct from "../../Shared/useGetProduct";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [Product, setProduct] = useState({});
  const productid = useParams().productid;
  console.log("5555555555555555555555");
  useGetProduct(productid, setProduct);
  return (
    // <div class="container mt-5 mb-5">
    //    <div class="card">
    //       <div class="row g-0">
    //          <div class="col-md-6 border-end">
    //             <div class="d-flex flex-column justify-content-center">
    //                <div class="main_image">
    //                   <img src="https://i.imgur.com/TAzli1U.jpg" id="main_product_image" width="350" />
    //                   </div>
    //                   <div class="thumbnail_images">
    //                      <ul id="thumbnail">
    //                         <li><img onclick="changeImage(this)" src="https://i.imgur.com/TAzli1U.jpg" width="70"/></li>
    //                         <li><img onclick="changeImage(this)" src="https://i.imgur.com/w6kEctd.jpg" width="70"/></li>
    //                         <li><img onclick="changeImage(this)" src="https://i.imgur.com/L7hFD8X.jpg" width="70"/></li>
    //                         <li><img onclick="changeImage(this)" src="https://i.imgur.com/6ZufmNS.jpg" width="70"/></li>
    //                      </ul>
    //                   </div>
    //                </div>
    //             </div>
    //                         <div class="col-md-6">
    //                            <div class="p-3 right-side">
    //                               <div class="d-flex justify-content-between align-items-center">
    //                                  <h3>IIlana</h3>
    //                                  <span class="heart"><i class='bx bx-heart'></i></span>
    //                               </div>
    //                            <div class="mt-2">
    <div>{Product ? Product.name : "a7a"}</div>
  );
};

export default ProductPage;
