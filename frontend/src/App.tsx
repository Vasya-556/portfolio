import { fetchAPI } from "./api/api";

function App() {
  fetchAPI({
    url: "/test",
    method: "get",
  }).then(data => {
    console.log(data);
  });
  
  return (
    <div>
    </div>
  );
}

export default App;
