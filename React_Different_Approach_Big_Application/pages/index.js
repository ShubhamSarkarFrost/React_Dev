
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id:'m1',
        image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Places-To-Visit-Near-Rome-3_dec.jpg',
        title: 'Florence',
        address: 'Rome'
    },
    {
        id:'m2',
        image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/og-for-Things-To-Do-In-Naples.jpg',
        title: 'Napples',
        address: 'Rome'
    },
    {
        id:'m3',
        image: 'https://www.jetsetter.com//uploads/sites/7/2018/09/GettyImages-857817758-1378x1035.jpg',
        title: 'Trivoli',
        address: 'Rome'
    }
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;