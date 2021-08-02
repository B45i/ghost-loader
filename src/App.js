import Navbar from './components/Navbar';
import Demo from './components/Demo';
import Ghost from './shared/components/Ghost';

import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <Demo />
            {/* <Ghost
                type="circle"
                isLoading={true}
                height="3rem"
                width="3rem"
            ></Ghost>

            <Ghost
                isLoading={true}
                height="1rem"
                width="100%"
                count={4}
            ></Ghost>
            <Ghost isLoading={true} height="1rem" width="50%"></Ghost> */}
        </div>
    );
}

export default App;
