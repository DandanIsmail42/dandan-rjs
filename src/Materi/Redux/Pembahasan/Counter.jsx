import { useDispatch, useSelector } from "react-redux/es/exports";
import { decrement, increment } from "../../../App/Features/Counter/actions";

const Counter = () => {
    // eslint-disable-next-line no-unused-vars
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}
export default Counter;