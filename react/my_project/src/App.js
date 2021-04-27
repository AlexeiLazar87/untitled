import logo from './logo.svg';
import './App.css';
import Character from "./components/characters/character";

function App() {
    return (
        <div>
            <Character
                newCharacter={'mars'}
                image={'https://lh3.googleusercontent.com/proxy/lYLEKvXPIGRsuVH57p1V4Chuo3BDtcqCxBbYwwudOxkFY_Xk-0QV1ua2Q6xNcJXCh_ws5dXrlG6ww1PIChSL8HftnIaKej_E52hviGNfgns'}/>

            <Character
                newCharacter={'saturn'}
                image={'data:image/jpeg;base64,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'}/>

        </div>
    );
}

export default App;
