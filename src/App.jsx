// import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home"; // Example page

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Layout/>
//         <Route>
//           <Route path="/" element={<Home />} /> 
//         </Route>
//       </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;



import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // this is correct
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Put Layout as a wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Home page inside layout */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
