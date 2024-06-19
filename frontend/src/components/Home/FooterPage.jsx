import React from 'react'
import { IconContext } from 'react-icons/lib'
import {BiLogoFacebookSquare, BiLogoWhatsappSquare} from 'react-icons/bi'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'

export default function FooterPage() {
  return (
    <footer className="flex flex-col w-full h-auto bg-[#6266ea] text-white mt-auto">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="flex flex-col justify-center space-y-3 py-5 px-10">
          <h1>Smart Mind</h1>
          <h2 className="text-3xl">Observatorio</h2>
          <p>
            Para mas novedades ingrese a nuestros grupos de facebook o whatsapp
          </p>
          <IconContext.Provider value={{ color: "white", size: "30" }}>
            <div className="flex flex-row">
              <BiLogoFacebookSquare />
              <BiLogoWhatsappSquare />
            </div>
          </IconContext.Provider>
          <h3>atencion al cliente</h3>
          <div className="">
            <div className="flex flex-row items-center space-x-3">
              <AiOutlinePhone />
              <p>010-020-0340</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <AiOutlineMail />
              <p>smartmindsalud77example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 justify-items-center items-center m-2 pt-4">
          <img
            src="/footerImages/footer1.jpg"
            alt="footer-image"
            className="w-1/2 h-30 pb-4"
          />
          <img
            src="/footerImages/footer2.jpg"
            alt="footer-image"
            className="w-1/2 h-30 pb-4"
          />
          <img
            src="/footerImages/footer3.jpg"
            alt="footer-image"
            className="w-1/2 h-30 pb-4"
          />
          <img
            src="/footerImages/footer4.jpg"
            alt="footer-image"
            className="w-1/2 h-30 pb-4"
          />
        </div>
      </div>
      <div className="flex px-16 py-5 w-full h-auto md:h-16 bg-main-color items-center">
        <p>
          Los datos (MINSA - SALUD MENTAL) son extraidos de la {" "}
          <a
            href="https://www.datosabiertos.gob.pe/dataset/minsa-salud-mental"
            target='_blank'
            className="underline"
          >
            base de datos abierta de Peru
          </a>
        </p>
      </div>
    </footer>
  );
}
