import "./App.css";
import Input from "./components/useState/input";
import CheckBox from "./components/useState/CheckBox";
import Modal from "./components/useEffect/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      {/* <Input/> */}
      {/* <CheckBox/> */}
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal showModal={isModalOpen}>
        <p>Hello im the modal window!</p>
        <br />
        <hr />
        <button onClick={() => setIsModalOpen(false)}>Close modal</button>
      </Modal>
    </>
  );
}

export default App;
