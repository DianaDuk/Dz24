import { InputSection } from "./SWAPIbody";
import { Card } from "./SWAPIfooter";
import { Header } from "./SWAPIheader";
import './SWAPIinterface.css';
export function Interface(){
    return(
        <div className = "container">
            <Header />
            <InputSection />
            <Card />
        </div>
    );
}