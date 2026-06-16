import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  // eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");
  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false)
    }
  };
  //   console.log(imgURL);

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input ref={inputRef} type="text" placeholder="enter a name" />
        <button onClick={focusInput}>Focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h2>sec:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input
          type="file"
          accept="image/*"
          ref={imgRef}
          hidden
          onChange={handleImage}
        />

        {newProduct ? (
          <div className="img-container" onClick={() => imgRef.current.click()}>
            upload image...
          </div>
        ) : (
          <img className="img" src={imgURL} onClick={() => imgRef.current.click()}/>
        )}
      </nav>
    </div>
  );
}
