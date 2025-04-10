// type ButtonProps = {
//   style: React.CSSProperties;
// };

"use client";

import { useState } from "react";

// Define las props del botón
type ButtonProps = {
  onClickProp: () => void; // función que se llama al hacer clic
};

// El botón recibe la función como prop
function Button({ onClickProp }: ButtonProps) {
  return <button onClick={onClickProp}>Harold</button>;
}

function Page() {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      {/* El botón recibe la función handleClick como prop */}    
      <Button onClickProp={handleClick} />
    </>
  );
}

export default Page;
// Flujo
/**
 * En el componente padre (Page) se define el estado (count) y la función (handleClick) que lo modifica.
 * El componente hijo (Button) recibe la función como prop y la ejecuta al hacer clic.
 * Al hacer clic en el botón, se llama a la función handleClick, que incrementa el contador.
 * El componente se vuelve a renderizar y muestra el nuevo valor del contador.
 */
