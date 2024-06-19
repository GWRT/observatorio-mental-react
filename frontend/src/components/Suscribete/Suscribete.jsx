import React, { useState } from "react";

import suscribeImage from "/images/concepto-buzon-pagina-destino.png";

export default function Suscribete() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setNombre("");
    setEmail("");
  };

  return (
    <div className="flex flex-row h-[90vh]">
      <div className="flex flex-col w-full md:w-1/2 px-10 items-center justify-center">
        <h1 className="text-5xl text-center mb-10 text-main-color font-bold">
          Manténgase al día con nosotros
        </h1>
        <p className="text-lg text-center">
          Déjanos tu correo electrónico y nombre para suscribirte. Te avisaremos
          de las novedades
        </p>
        <div className="w-[70%] ">
          <form
            className="flex flex-col mt-10 mb-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="mb-5">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="flex w-min mx-auto shadow bg-main-color hover:bg-main-color/70  text-white font-bold py-2 px-5 rounded"
              type="submit"
            >
              Suscribete
            </button>
          </form>
        </div>
      </div>
      <div className=" hidden md:flex w-1/2 justify-center items-center">
        <img src={suscribeImage} alt="suscribeImage" className="w-[70%]" />
      </div>
    </div>
  );
}
