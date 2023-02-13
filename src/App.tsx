import React, { MouseEvent} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      < button onClick={(event) => {console.log('Hellow!')}} > MyYoutubeChannel-1 </button>
      < button onClick={(event) => {console.log('Hellow!')}} > MyYoutubeChannel-2 </button>
    </div>
  );
}

export default App;
