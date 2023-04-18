import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Admin from "./components/Admin";
import User from "./components/Menu";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <User />
    </>
  );
};

//   if (sector === "user") {
//     return (
//       <>
//         <Navbar />
//         <Header />
//         <User />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <Header />
//       <div></div>
//     </>
//   );
// };
export default Home;
