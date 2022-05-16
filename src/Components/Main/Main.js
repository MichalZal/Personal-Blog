import React, {useState} from 'react'
import './Main.css'

const gridBooks = document.querySelector('.grid-books')


const Main = ({books}) => {
  const [book, updateBook] = useState([])
  const [isShown, updateIsShown] = useState(false)


  const updateBooks = () => {
    const bookNames = books.map(book => <div className='grid'>{book.name}</div>)

    updateBook(bookNames)
    updateIsShown(true)
  }

  return (
    <main className='main' >
      <section className='section1 header-section row'>
        <h1> Power of Books! </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique delectus id est quibusdam eum quisquam commodi assumenda sunt inventore.</p>
      </section>
      <section className='section2 middle-section row'>
        <h1> My favourite parts: </h1>
        <button onClick={updateBooks}> Odśwież </button>
        <div className='grid-books'>
          {isShown ? book : <div className='no-books-info'> No Books :(</div>}
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