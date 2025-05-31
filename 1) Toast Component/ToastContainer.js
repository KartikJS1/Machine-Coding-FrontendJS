import { useState, useRef } from "react";

export default function ToastContainer() {
  //   const [show, setShow] = useState(0);
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});
  const handleClick = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toasts, { id, message, type }];
    setToasts(newToasts);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
  };

  const handleClose = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prevToasts) => {
      const newToasts = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return newToasts;
    });
  };

  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button onClick={() => handleClick("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleClick("Info", "info")}>Info Toast</button>
        <button onClick={() => handleClick("Warning", "warning")}>
          Warning Toast
        </button>
        <button onClick={() => handleClick("Error", "error")}>
          Error Toast
        </button>
      </div>
    </div>
  );
}
