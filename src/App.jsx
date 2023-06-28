import Nav from './components/Nav';
import Jumbotron from "./components/Jumbotron.jsx";
import SoundSection from "./components/SoundSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import WebgiViewer from "./components/WebgiViewer.jsx";

function App() {

    return (
        <div className="App">
            <Nav/>
            <Jumbotron/>
            <SoundSection/>
            <DisplaySection/>
            <WebgiViewer/>
        </div>
    );
}

export default App;
