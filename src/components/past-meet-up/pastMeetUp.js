import "./pastMeetUp.css";
import React ,{useState} from "react";

const MeetUpCard = (props) => {
    return (
        <>
        <div className="content-card">
            <p>{props.meetup.date}</p>
                <hr></hr>
            <p>{props.meetup.desc}</p>
            <p>{props.meetup.amount} Went</p>
            <a href="#">View</a>
        </div>
        </>
    );
};

function PastMeetUp(){
    
    const [meetups,setMeetups] = useState([
        {
          date: '27 November 2017',
          desc: '#39 JakartaJS April Meetup with kumparan',
          amount: 139
        },
        {
          date: '27 Oktober 2017',
          desc: '#38 JakartaJS April Meetup with BliBli',
          amount: 113
        },
        {
          date: '27 September 2017',
          desc: '#37 JakartaJS April Meetup with Hacktiv8',
          amount: 110
        }
      ]
    )

    return(
        <div className="past-meetUp-container">
            <h4 className="next-meet-up">Next MeetUp</h4>
            <h4 className="see-all">See All</h4>
            <div className="past-meetUp-content">
            {
                meetups.map((data,index)=>
                <MeetUpCard key={index} meetup={data}/> 
                )
            }
            </div>
        </div>
    );
}

export default PastMeetUp;