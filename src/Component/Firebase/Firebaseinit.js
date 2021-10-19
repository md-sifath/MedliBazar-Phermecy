import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebsaeconfig";

const firebaseappinit=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseappinit;