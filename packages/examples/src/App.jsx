import "./App.css";
import { useLocalStorage, useFetch } from "@root/react-custom-hook";

const fetcher = () => fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json());

function App() {
  const [value, setValue] = useLocalStorage("coder", "Hello World");
 

  const {data, loading, error} = useFetch(fetcher);

  return (
    <div>
      Stored Value
      <input
        placeholder="Chage stored value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        {loading ? 'Loading...': data?.title} 
      </div>
    </div>
  );
}

export default App;
