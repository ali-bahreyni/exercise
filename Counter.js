import React, { useState } from 'react';
const Counter = () => {
// State hook در اینجا قرار می‌گیرد
const Counter = () => {
const [count, setCount] = useState(0);
// باقی محتوای کامپوننت
return (
    <div>
    <h1>Count: {count}</h1>
    {/* دکمه‌های افزایش و کاهش در اینجا قرار می‌گیرند */}
    <button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>

    </div>
    );
    
};

return (
// JSX کامپوننت در اینجا قرار می‌گیرد
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1 style={{ fontSize: '2em' }}>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
</div>
);
};
export default Counter;
