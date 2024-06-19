import React from 'react'
import mentalNewsProvider from '../../apiProvider/mentalNewsProvider';

import NewsCard from './NewsCard';

export default function Noticias() {

  const mentalNews = mentalNewsProvider()
  console.log(mentalNews)

  return (
    <>
      <div className='bg-main-color text-center p-4 text-3xl'>
        <header className='text-white'>Noticias</header>
      </div>
      <div className='container mx-auto p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            mentalNews.map((item) => {
              return (
                <NewsCard key={item._id.$oid} news={item} />
              )
            })
          }
        </div>
      </div>
    </>

  )
}
