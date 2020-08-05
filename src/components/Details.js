import React from 'react'
import data from '../data.json'

export default function Details(props) {
    let info=data.Mobile[props.location.data.id].features;
    console.log(info.KEY_SPECS);
    return (
        
        <div className="row justify-content-center">
           <div className="col-12 col-lg-3 my-auto">
               <div className="card shadow">
                   <div className="card-body text-center">
                       <img src={info.photo} alt="profile Icon" style={{width:"30%"}}/>
                       <h4>{info.Brand}</h4>
                       <h4 className="text-secondary">{info.price}</h4>
                   </div>
               </div>
           </div>
           <div className="col-sm-9 col-md-10 col-lg-8 m-2 ">
           <h2>KEY SPECS</h2>
                <div className="row bg-dark">
                    <div className="col-sm-3 col-md-4 col-lg-4"> 
                        <ul class="list-group">
                            {info.title.map(element => (
                                <l1 class="list-group-item bg-light" >{element}</l1>
                            ))}
                        </ul>
                        </div>
                        <div className=" col-12 col-sm-7 col-md-8 col-lg-8">
                            <ul class="list-group " style={{display:"block"}}>
                                {info.KEY_SPECS.map(element => (
                                    <l1 class="list-group-item bg-light" >{element}</l1>
                                ))}
                            </ul>
                        </div>
                       
                </div>
                  
                      
                   </div>
               </div>
           

   )
}
{/* <tbody>
    <tr data-nd="front_camera">
        <td width="33%" class="title">front camera</td>
        <td width="67%" class="val">32 MP + 8 MP</td>
    </tr><tr data-nd="battery"><td width="33%" class="title">battery</td><td width="67%" class="val">4115 mAh</td></tr><tr data-nd="processor"><td width="33%" class="title">processor</td><td width="67%" class="val">Qualcomm Snapdragon 765G</td></tr><tr data-nd="ram"><td width="33%" class="title">ram</td><td width="67%" class="val">6 GB</td></tr><tr data-nd="rear_camera"><td width="33%" class="title">rear camera</td><td width="67%" class="val">48 MP + 8 MP + 5 MP + 2 MP</td></tr><tr data-nd="display"><td width="33%" class="title">display</td><td width="67%" class="val">6.44 inches</td></tr></tbody> */}