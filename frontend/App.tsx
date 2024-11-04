import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MKBagian from "./Pages/MKBagian";
import MKDetail from "./Pages/MKDetail";
import Materi from "./Pages/Materi";
import Soal from "./Pages/Soal";
import { NoPage } from "./Pages/NoPage";
import Test from "./Pages/Test";


function App () {
  return (<>
  <div>
    <BrowserRouter>
      <Routes >
        {/* base routes */}
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />

        {/* materi routes */}
        <Route path="/mkdetail" element={<MKDetail />} />
        <Route path="/mkbagian" element={<MKBagian />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/soal" element={<Soal />} />

        {/* No Page */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  </>)
}

export default App;