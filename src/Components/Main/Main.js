import React from 'react'
import './Main.css'

const books =  [
  {key: 1, name:  'sieema'},
  {key: 2, name:  'sieema'},
  {key: 3, name:  'sieema'},
  {key: 4, name:  'sieema'},
  {key: 5, name:  'sieema'},
  {key: 6, name:  'sieema'},
  {key: 7, name:  'sieema'},
  {key: 8, name:  'sieema'},
  {key: 9, name:  'sieema'},
  {key: 10, name: 'sieema'},
  {key: 11, name: 'sieema'},
  {key: 12, name: 'sieema'},
  {key: 13, name: 'sieema'},
  {key: 14, name: 'sieema'},
  {key: 15, name: 'sieema'},
  {key: 16, name: 'sieema'},
  {key: 17, name: 'sieema'},
  {key: 18, name: 'sieema'},
  {key: 19, name: 'sieema'},
  {key: 20, name: 'sieema'},
  {key: 21, name: 'sieema'},
  {key: 22, name: 'sieema'},
  {key: 23, name: 'sieema'},
  {key: 24, name: 'sieema'},
  {key: 25, name: 'sieema'},
  {key: 26, name: 'sieema'},
  {key: 27, name: 'sieema'},
  {key: 28, name: 'sieema'},
  {key: 29, name: 'sieema'},
  {key: 30, name: 'sieema'},
  {key: 31, name: 'sieema'},
  {key: 32, name: 'sieema'},
  {key: 33, name: 'sieema'},
  {key: 34, name: 'sieema'},
  {key: 35, name: 'sieema'},
  {key: 36, name: 'sieema'},
  {key: 37, name: 'sieema'},
  {key: 38, name: 'sieema'},
  {key: 39, name: 'sieema'},
]

const gridBooks = document.querySelector('.grid-books')

const addBooks = () => {
  books.forEach(book => {
    const singleBook = document.createElement('div')
    singleBook.classList.add(`grid${book.key}`)
    singleBook.classList.add(`grid`)
    singleBook.textContent = book.name;

    gridBooks.appendChild(singleBook)
  })
}



const Main = () => {
  return (
    <main className='main' onLoad={addBooks}>
      <section className='section1 header-section row'>
        <h1> Power of Bible! </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique delectus id est quibusdam eum quisquam commodi assumenda sunt inventore.</p>
      </section>
      <section className='section2 middle-section row'>
        <h1> My favourite parts: </h1>
        <button onClick={addBooks}>dodaj</button>
        <div className='grid-books'>
          {/* <div className='grid grid1'>Rodzaju</div>
          <div className='grid grid2'>Wsiema</div<
          <div className='grid grid3'>Ksiema</div<
          <div className='grid grid4'>Lsiema</div<
          <div className='grid grid5'>Psiema</div<
          <div className='grid grid6'>Jsiema</div<
          <div className='grid grid7'>Ssiema</div<
          <div className='grid grid8'>Rsiema</div<
          <div className='grid grid9'>1siema</div<
          <div className='grid grid10'>siema</div<
          <div className='grid grid11'>siema</div<
          <div className='grid grid12'>siema</div<
          <div className='grid grid13'>siema</div<
          <div className='grid grid14'>siema</div<
          <div className='grid grid15'>siema</div<
          <div className='grid grid16'>siema</div<
          <div className='grid grid17'>siema</div<
          <div className='grid grid18'>siema</div<
          <div className='grid grid19'>siema</div<
          <div className='grid grid20'>siema</div<
          <div className='grid grid21'>siema</div<
          <div className='grid grid22'>siema</div<
          <div className='grid grid23'>siema</div<
          <div className='grid grid24'>siema</div<
          <div className='grid grid25'>siema</div<
          <div className='grid grid26'>siema</div<
          <div className='grid grid27'>siema</div<
          <div className='grid grid28'>siema</div<
          <div className='grid grid29'>siema</div<
          <div className='grid grid30'>siema</div<
          <div className='grid grid31'>siema</div<
          <div className='grid grid32'>siema</div<
          <div className='grid grid33'>siema</div<
          <div className='grid grid34'>siema</div<
          <div className='grid grid35'>siema</div<
          <div className='grid grid36'>siema</div<
          <div className='grid grid37'>siema</div<
          <div className='grid grid38'>siema</div>
          <div className='grid grid39'>siema</div>
          <div className='grid grid1'>Rsiema</div<
          <div className='grid grid2'>Wsiema</div<
          <div className='grid grid3'>Ksiema</div<
          <div className='grid grid4'>Lsiema</div<
          <div className='grid grid5'>Psiema</div<
          <div className='grid grid6'>Jsiema</div<
          <div className='grid grid7'>Ssiema</div<
          <div className='grid grid8'>Rsiema</div<
          <div className='grid grid9'>1siema</div<
          <div className='grid grid10'>siema</div<
          <div className='grid grid11'>siema</div<
          <div className='grid grid12'>siema</div<
          <div className='grid grid13'>siema</div<
          <div className='grid grid14'>siema</div<
          <div className='grid grid15'>siema</div<
          <div className='grid grid16'>siema</div<
          <div className='grid grid17'>siema</div<
          <div className='grid grid18'>siema</div<
          <div className='grid grid19'>siema</div<
          <div className='grid grid20'>siema</div<
          <div className='grid grid21'>siema</div<
          <div className='grid grid22'>siema</div<
          <div className='grid grid23'>siema</div<
          <div className='grid grid24'>siema</div<
          <div className='grid grid25'>siema</div<
          <div className='grid grid26'>siema</div<
          <div className='grid grid27'>siema</div<
          <div className='grid grid28'>siema</div<
          <div className='grid grid29'>siema</div<
          <div className='grid grid30'>siema</div<
          <div className='grid grid31'>siema</div<
          <div className='grid grid32'>siema</div<
          <div className='grid grid33'>siema</div<
          <div className='grid grid34'>siema</div<
          <div className='grid grid35'>siema</div<
          <div className='grid grid36'>siema</div<>
          <div className='grid grid37'>siema</div<
          <div className='grid grid38'>siema</div<v>
          <div className='grid grid39'>siema</div<v> */}
        </div>
      </section>
      <section className='section3 end-section row'>
        <div className='ending-info flexible'>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi.</p>
        </div>
      </section>
    </main>
  )
}

export default Main
