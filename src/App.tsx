// import { motion } from "framer-motion";
// import { useState } from "react";

// const App = () => {
//   const [animating, setAnimating] = useState<boolean>(false);

//   const boxVariant: any = {
//     hidden: {
//       x: "-80vw",
//     },
//     visible: {
//       x: 0,
//       transition: {
//         delay: 0.5,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const listVariant: any = {
//     hidden: {
//       x: -10,
//       opacity: 0,
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       staggerChildren: 0.2,
//     },
//   };
//   return (
//     <div className="p-4">
//       <motion.div
//         className="w-[200px] h-[200px] bg-blue-500 rounded-md flex items-center justify-center text-white font-bold hover:cursor-pointer "
//         animate={{
//           x: animating ? "1000px" : "10px",
//           opacity: animating ? 1 : 0.5,
//           rotate: animating ? 360 : 0,
//         }}
//         initial={{ opacity: 0.1 }}
//         transition={{ type: "spring", stiffness: 40 }}
//         onClick={() => setAnimating(!animating)}
//       >
//         Framer Motion
//       </motion.div>
//       <motion.div
//         className="w-[200px] h-[200px] mt-6 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold hover:cursor-pointer"
//         animate={{
//           x: animating ? "1000px" : "10px",
//           opacity: animating ? 1 : 0.5,
//           rotate: animating ? 360 : 0,
//         }}
//         initial={{ opacity: 0.1 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         onClick={() => setAnimating(!animating)}
//       >
//         Framer Motion
//       </motion.div>
//       <motion.div
//         className="w-[230px] h-[200px] m-4 rounded-md hover:cursor-pointer flex-col bg-black text-orange-600 flex justify-center items-center "
//         variants={boxVariant}
//         animate="visible"
//         initial="hidden"
//       >
//         {/* Box 2 of Framer-Motion */}
//         {[1, 2, 3].map((box) => {
//           return (
//             <motion.li
//               className="w-[40px] h-[40px] rounded-md bg-blue-400 m-2 flex items-center justify-center text-white"
//               variants={listVariant}
//             >
//               {box}
//             </motion.li>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default App;

import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const App = () => {
  // const client = new QueryClient();
  const persistor = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <QueryClientProvider client={client}> */}
          <RouterProvider router={mainRouter} />
          {/* </QueryClientProvider> */}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
