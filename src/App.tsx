import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow!I am Vasia!')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hellow!I am Lioha!')
    // }

//     const onClickHandler = (name: string) => {
// console.log(name);
//     }

    const foo1 = () => {
        //ничего не передавать но в консоли должно показаться 100200
    }
    const foo2 = () => {
         //передать цифру 100200
    }

    return (
        <div className="App">
            {/*< button onClick={(event) => {console.log('Hellow!')}} > MyYoutubeChannel-1 </button>*/}
            {/*< button onClick={(event) => onClickHandler('Vasia')} > MyYoutubeChannel-1 </button>*/}
            {/*< button onClick={(event) => onClickHandler('Lioha')} > MyYoutubeChannel-2 </button>*/}
            {/*< button onClick={(event) => onClickHandler('Clown')} > MyYoutubeChannel-3 </button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={foo1}>2</button>
        </div>
    );
}

export default App;
