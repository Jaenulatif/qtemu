// import "./MeetUp.css";
// import React, {useState, Component} from "react";
// import axios from "axios";



// class MeetUp extends Component{
//     constructor(){
//         super();
//         //inisialisasi state
//         this.state={
//             fullName:""
//         };
//     }
    
//     componentDidMount(){
//         axios.get("https://swapi.dev/api/people/1/").than((response)=>{
//             this.setState({fullName: response.data})
//         })
//     }

//     render(){
//         return(
//             <div className="meetUp-container">
//                 <div className="image-meetUp"></div>
                
//                 <table>
//                     <h2>Hacktiv8 Meetup</h2>
//                     <tr>
//                         <td>Location</td>
//                         <td>Jakarta, Indonesia</td>
//                     </tr>
//                     <tr>
//                         <td>Member</td>
//                         <td>1078</td>
//                     </tr>
//                     <tr>
//                         <td>Organizer</td>
//                         <td>Latif</td>
//                     </tr>
        
//                     <a href="#">Joint Us</a>
//                 </table>
//             </div>
//         );
//     }
// }

// export default MeetUp;

import "./MeetUp.css";

function MeetUp(){
    return(
        <div className="meetUp-container">
            <div className="image-meetUp"></div>
            
            <table>
                <h2>Hacktiv8 Meetup</h2>
                <tr>
                    <td>Location</td>
                    <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                    <td>Member</td>
                    <td>1078</td>
                </tr>
                <tr>
                    <td>Organizer</td>
                    <td>Adhy Wiranata</td>
                </tr>
    
                <a href="#">Joint Us</a>
            </table>
        </div>
    );
}

export default MeetUp;