import {Fragment} from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

function MeetUpDetails() {
    return (
        <MeetUpDetail
            image='https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Places-To-Visit-Near-Rome-3_dec.jpg'
            title='First Meetup'
            address='Some Street'
            description='This is the First Meetup Spot'
        />
    );
}

export default MeetUpDetails