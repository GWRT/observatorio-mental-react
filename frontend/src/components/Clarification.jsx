import React, { useEffect, useState } from 'react';

export default function Clarification() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className='bg-green-500 p-4 relative flex items-center justify-between'>
        <h2 className='text-center text-lg font-semibold text-white flex-grow'>
          La consulta a la base de datos puede demorar 1 minuto debido al host
        </h2>
        <button
          className='text-white text-2xl font-bold leading-none'
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    )
  );
};
