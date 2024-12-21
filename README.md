# react-custom-hooks

This package provides some useful custom hooks.

## Getting Started

```javascript
npm install react-custom-hook
```

### List Of Hooks

- #### useLocalStorage

  This hook lets you use the localStorage API as if it were React state. When the value changes, it updates localStorage and re-renders the component.

  ```javascript
  import { useLocalStorage } from "react-custom-hook";

  const App = () => {
    const [value, setValue] = useLocalStorage("greetings", "Hello World");

    return (
      <div>
        Stored Value
        <input
          placeholder="Chage stored value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };

  export default App;
  ```
