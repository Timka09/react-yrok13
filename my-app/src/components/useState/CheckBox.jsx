import { useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <>
      <label htmlFor="">
        <input type="checkbox" onChange={handleChange} />
        Вам є 16 років?
      </label>
      <p>{checked ? "маєте права" : "Не маєте прав"}</p>
    </>
  );
}
