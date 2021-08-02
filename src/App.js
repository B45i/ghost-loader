import Ghost from './shared/components/Ghost';

import './App.css';

function App() {
    return (
        <div>
            <Ghost
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
            <Ghost isLoading={true} height="1rem" width="50%"></Ghost>
        </div>
    );
}

export default App;
