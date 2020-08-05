import React from 'react'
import data from '../data.json'
import {Link} from 'react-router-dom';
import Details from '../components/Details'
export default function Home() {
    let card_details = data.Mobile;
    console.log(card_details);
    return (
        <div className="row justify-content-center"> 
            {card_details.map(
                (values,index)=>(
                    <div className="col-sm-6 col-md-6 mt-4  " key={index}>
                        <div className="card">
                            <div className="view overlay zoom">
                                <img src={values.features.photo} className="card-img-top" alt="card-image"/>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="card-header bg-primary text-white">{values.features.Brand}</h4> 
                                <Link to={{pathname:'/Details',data:{id:index}}} className="btn btn-dark mt-4">View Details</Link>
                            </div>     
                        </div>
                </div>
                )
            )}
        </div>
    )
}
// import React from "react";
// import data from '../data.json';
// // import {Link} from 'react-router-dom';

// let Home = () => {
//     let card_details = data.Mobile;
//     console.log(card_details);
//     // console.log(`value of i is ${Resume()}`);
//     // return (
//     //     <div className="row justify-content-center">
//     //         {card_details.map(
//     //             (values,index)=>(
//     //                 <section className="col-lg-4 col-md-5 col-sm-10 mt-2">
//     //                     <div className="card">
//     //                         <article className="card-body">
//     //                             <img src={icon} alt="image" style={{width:"50%"}}/>
//     //                             <h1>{values.details.name}</h1>
//     //                             <h3 className="text-secondary">{values.details.role}</h3>
//     //                             <a href={"tel:"+values.details.role}><h4 >{values.details.mobile}</h4></a> 
//     //                             <a href={"mailto:"+values.details.email}><h4>{values.details.email}</h4></a> 
//     //                             <Link to={{pathname: '/resume', data1:{id:index}}} className="btn btn-dark">View Profile</Link>
//     //                         </article>
//     //                         <h1></h1>
//     //                     </div>                      
//     //                 </section>
//     //             )
//     //         )}
//     //     </div>
//     // );
// }
// export default Home;