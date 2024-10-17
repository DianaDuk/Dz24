import './SWAPIinterface.css';

export function InputSection(){
    return (
        <div className = "input-section">
            <span>https://swapi.dev/api/</span>
            <input type = "text" placeholder = "people/1/" />
            <button>Get info</button>
        </div>
    );
}