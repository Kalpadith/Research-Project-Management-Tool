// import * as React from "react";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import NavBaro from "./NavBaro";

// const AddOrUpdateHotel = ({hotel,hideModel}) => {

//     if(!hotel)
//         hotel = {};

//     const [hotelId, setHotelId] = useState("");
//     const [name, setName] = useState("");
//     const [location, setLocation] = useState("");
//     const [description, setDescription] = useState("")

//     useEffect(() => {

//         if(hotel.hotelId) {
//             setHotelId(hotel.hotelId);
//             setName(hotel.name);
//             setLocation(hotel.location);
//             setDescription(hotel.description);
//             validateForm();
//         }

//     }, []);

//     function validateForm() {
//         if(hotel.hotelId)
//             return true;
//         return hotelId.length > 0 && name.length > 0 && location.length > 0 && description.length > 0;
//     }

//     async function handleSubmit(event) {
//         event.preventDefault();

//         if(hotel.hotelId) {
//             await axios.put(`hotel/hotels?id=${hotel?._id}`, {
//                 name: name,
//                 location: location,
//                 description: description
//             });
//             hideModel({});
//         } else {
//             await axios.post(`hotel/hotels`, {
//                 hotelId: hotelId,
//                 name: name,
//                 location: location,
//                 description: description
//             });
//             hideModel();
//         }
//     }


//     return (
//         <>
//         <div className="container">
//                     <NavBaro />

//                 </div>
//         <div className="container">
//             <div>
//                 <form className='mt-3' onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label className="form-label">HotelId</label>
//                         <input className="form-control"
//                                type="Number"
//                                disabled={!!hotel.hotelId}
//                                value={hotelId}
//                                onChange={(e) => setHotelId(e.target.value)}/>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Name</label>
//                         <input className="form-control" type="text"
//                                value={name}
//                                onChange={(e) => setName(e.target.value)}/>
//                     </div>

//                     <div className="mb-3">
//                         <label className="form-label">Location</label>
//                         <input className="form-control" type="text"
//                                value={location}
//                                onChange={(e) => setLocation(e.target.value)}/>
//                     </div>

//                     <div className="mb-3">
//                         <label className="form-label">Description</label>
//                         <input className="form-control" type="text"
//                                value={description}
//                                onChange={(e) => setDescription(e.target.value)}/>
//                     </div>

//                     <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>
//                         {hotel.hotelId ? 'Update' : 'Add' }
//                     </button>


//                 </form>
//             </div>
//         </div></>
//     )
// }

// export default AddOrUpdateHotel;
