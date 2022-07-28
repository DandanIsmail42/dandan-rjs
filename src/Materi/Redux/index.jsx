import store from "../../App/store";
import Counter from "./Pembahasan/Counter";
import { Provider } from "react-redux";

const Redux = () => {
    return(
        
            <Provider store={store} >
                <Counter />
            </Provider>
    
    )
}
export default Redux;