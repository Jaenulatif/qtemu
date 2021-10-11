import "./Members.css";

function Members(){
    return(
        <div className="members-container">
            <h4 className="next-meet-up">Next MeetUp</h4>
            <h4 className="see-all">See All</h4>
            <div className="members-content">
                <div className="images"></div>
                <table>
                    <tr>
                        <td>Organizers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Jaenulatif Pudin</td>
                        <td>4 others</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Members;