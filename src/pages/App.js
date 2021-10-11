import './App.css';
import Nav from '../components/nav/Nav';
import MeetUp from '../components/meet-up/MeetUp';
import NextMeetUp from '../components/next-meet-up/NextMeetUp';
import AboutMeetUp from '../components/about-meet-up/AboutMeetUp';
import Members from '../components/members/Members';
import PastMeetUp from '../components/past-meet-up/pastMeetUp';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <MeetUp />
      <NextMeetUp />
      <AboutMeetUp />
      <Members />
      <PastMeetUp />
      <Footer/>
    </div>
  );
}

export default App;
