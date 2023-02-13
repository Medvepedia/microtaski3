import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)

    }
    const Button3Foo = () => {
        console.log('I am stupid button')
    }

    return (
        <div className="App">
            <Button name={'MyYoutubeChannel-1'} callBack={()=>Button1Foo('I am Vasia', 21, 'live in Minsk')}/>
            <Button name={'MyYoutubeChannel-2'} callBack={()=>Button2Foo('I am Perya')}/>
            <Button name={'I am stupid Button'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
