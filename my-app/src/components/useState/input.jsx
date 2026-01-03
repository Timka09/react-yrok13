import { useState } from "react";

export default function Input() {
  const [inpText, setInpText] = useState();

  function handleChange(e) {
    setInpText(e.target.value);
  }

  const handleReset = () => setInpText("");

  return (
    <>
      <input type="text" onChange={handleChange} value={inpText} />
      <p>{inpText}</p>
      <button onClick={handleReset}>Очистити</button>
    </>
  );
}
