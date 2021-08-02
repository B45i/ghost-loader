import Ghost from './shared/components/Ghost/Ghost';

import './App.css';

function App() {
    return (
        <div>
            {/* <Ghost loading={true} width="3rem" height="3rem" > */}
            <Ghost loading={true} style={{ height: '3rem' }}>
                Hello
            </Ghost>
        </div>
    );
}

export default App;
