import { useReducer, useRef } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INIT":
            return 0;
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.date;
        default:
            return state;
    }
}

function TestComp() {

    const [count, dispatch] = useReducer(reducer,0);
    
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={() => dispatch({type: "INCREASE", data: 1})}>+</button>
                <button onClick={() => dispatch({type: "DECREASE", date: 1})}>-</button>
                <button onClick={() => dispatch({type: "INIT", date: 1})}>0으로 초기화</button>

            </div>
        </div>
    );
}

export default TestComp;