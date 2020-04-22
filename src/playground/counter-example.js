
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}



const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);

}

renderCounterApp();