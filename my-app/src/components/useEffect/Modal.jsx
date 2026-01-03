import { useEffect, useRef } from "react";

export default function Modal({ showModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!showModal) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [showModal]);

  return (
    <>
      <dialog ref={ref}>{children}</dialog>
    </>
  );
}
