import React from 'react'
import './Main.css'

const gridBooks = document.querySelector('.grid-books')


const Main = ({books}) => {
  const addBooks = () => {
    books.forEach(book => {
      const singleBook = document.createElement('div')
      singleBook.classList.add(`grid${book.key}`)
      singleBook.classList.add(`grid`)
      singleBook.textContent = book.name;
  
      gridBooks.appendChild(singleBook)
    })
  }

  return (
    <main className='main' onLoad={addBooks}>
      <section className='section1 header-section row'>
        <h1> Power of Books! </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique delectus id est quibusdam eum quisquam commodi assumenda sunt inventore.</p>
      </section>
      <section className='section2 middle-section row'>
        <h1> My favourite parts: </h1>
        <button onClick={addBooks}>dodaj</button>
        <div className='grid-books'>
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