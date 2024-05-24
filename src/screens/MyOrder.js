import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);
    const [error, setError] = useState(null);

    const fetchMyOrder = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            if (!email) {
                throw new Error("User email not found in local storage");
            }

            const response = await fetch("http://localhost:1900/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setOrderData(data.orderData); // Ensure you are setting the correct part of the data
        } catch (error) {
            console.error("Failed to fetch order data:", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='row'>
                    {error ? (
                        <div className="error">Error: {error}</div>
                    ) : orderData && orderData.order_data ? (
                        orderData.order_data.map((order, index) => (
                            <React.Fragment key={index}>
                                {order.map((item, idx) => (
                                    <div key={idx} className='col-12 col-md-6 col-lg-3'>
                                        {item.Order_date ? (
                                            <div className='m-auto mt-5'>
                                                <div>{item.Order_date}</div>
                                                <hr />
                                            </div>
                                        ) : (
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px", backgroundColor:"pink" }}>
                                                {/* <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} onError={() => console.log("Image failed to load:", item.img)} /> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>{item.qty}</span>
                                                        <span className='m-1'>{item.size}</span>
                                                        <span className='m-1'>{item.Order_date}</span>
                                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                            ₹{item.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))
                    ) : (
                        <div>No orders found.</div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}



// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState(null);
//     const [error, setError] = useState(null);

//     const fetchMyOrder = async () => {
//         try {
//             const email = localStorage.getItem('userEmail');
//             if (!email) {
//                 throw new Error("User email not found in local storage");
//             }

//             const response = await fetch("http://localhost:1900/api/myorderData", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             setOrderData(data.orderData); // Ensure you are setting the correct part of the data
//         } catch (error) {
//             console.error("Failed to fetch order data:", error);
//             setError(error.message);
//         }
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className='container'>
//                 <div className='row'>
//                     {error ? (
//                         <div className="error">Error: {error}</div>
//                     ) : orderData && orderData.order_data ? (
//                         orderData.order_data.map((order, index) => (
//                             <React.Fragment key={index}>
//                                 {order.map((item, idx) => (
//                                     <div key={idx} className='col-12 col-md-6 col-lg-3'>
//                                         {item.Order_date ? (
//                                             <div className='m-auto mt-5'>
//                                                 <div>{item.Order_date}</div>
//                                                 <hr />
//                                             </div>
//                                         ) : (
//                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                 <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">{item.name}</h5>
//                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                         <span className='m-1'>{item.qty}</span>
//                                                         <span className='m-1'>{item.size}</span>
//                                                         <span className='m-1'>{item.Order_date}</span>
//                                                         <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                             ₹{item.price}/-
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </React.Fragment>
//                         ))
//                     ) : (
//                         <div>No orders found.</div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState(null);
//     const [error, setError] = useState(null);

//     const fetchMyOrder = async () => {
//         try {
//             const email = localStorage.getItem('userEmail');
//             if (!email) {
//                 throw new Error("User email not found in local storage");
//             }

//             const response = await fetch("http://localhost:1900/api/myorderData", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             setOrderData(data.orderData); // Ensure you are setting the correct part of the data
//         } catch (error) {
//             console.error("Failed to fetch order data:", error);
//             setError(error.message);
//         }
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div>
//             <Navbar />

//             <div className='container'>
//                 <div className='row'>
//                     {error ? (
//                         <div className="error">Error: {error}</div>
//                     ) : orderData && orderData.order_data ? (
//                         orderData.order_data.map((order, index) => (
//                             <React.Fragment key={index}>
//                                 {order.map((item, idx) => (
//                                     <div key={idx} className='col-12 col-md-6 col-lg-3'>
//                                         {item.Order_date ? (
//                                             <div className='m-auto mt-5'>
//                                                 <div>{item.Order_date}</div>
//                                                 <hr />
//                                             </div>
//                                         ) : (
//                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                 <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">{item.name}</h5>
//                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                         <span className='m-1'>{item.qty}</span>
//                                                         <span className='m-1'>{item.size}</span>
//                                                         <span className='m-1'>{item.Order_date}</span>
//                                                         <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                             ₹{item.price}/-
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </React.Fragment>
//                         ))
//                     ) : (
//                         <div>No orders found.</div>
//                     )}
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }
