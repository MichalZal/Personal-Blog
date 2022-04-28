import React from 'react'
import './Main.css'

const books =  [
  {key: 1, name: 'Rodzaju'},
  {key: 2, name: 'Wyjścia'},
  {key: 3, name: 'Kapłańska'},
  {key: 4, name: 'Liczb'},
  {key: 5, name: 'Pwt Prawa'},
  {key: 6, name: 'Jozuego'},
  {key: 7, name: 'Sędziów'},
  {key: 8, name: 'Rut'},
  {key: 9, name: '1 Samuela'},
  {key: 10, name: '2 Samuela'},
  {key: 11, name: '1 Królów'},
  {key: 12, name: '2 Królów'},
  {key: 13, name: '1 Kronik'},
  {key: 14, name: '2 Kronik'},
  {key: 15, name: 'Ezdrasza'},
  {key: 16, name: 'Nehemiasza'},
  {key: 17, name: 'Estery'},
  {key: 18, name: 'Hioba'},
  {key: 19, name: 'Psalmy'},
  {key: 20, name: 'Przysłów'},
  {key: 21, name: 'Kaznodziei'},
  {key: 22, name: 'Pieśń'},
  {key: 23, name: 'Izajasza'},
  {key: 24, name: 'Jeremiasza'},
  {key: 25, name: 'Lamentacje'},
  {key: 26, name: 'Ezechiela'},
  {key: 27, name: 'Daniela'},
  {key: 28, name: 'Ozeasza'},
  {key: 29, name: 'Joela'},
  {key: 30, name: 'Amosa'},
  {key: 31, name: 'Abdiasza'},
  {key: 32, name: 'Jonasza'},
  {key: 33, name: 'Micheasza'},
  {key: 34, name: 'Nahuma'},
  {key: 35, name: 'Habakuka'},
  {key: 36, name: 'Sofoniasza'},
  {key: 37, name: 'Aggeusza'},
  {key: 38, name: 'Zachariasza'},
  {key: 39, name: 'Malachiasza'},
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
        <h1> Power of Books! </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique delectus id est quibusdam eum quisquam commodi assumenda sunt inventore.</p>
      </section>
      <section className='section2 middle-section row'>
        <h1> My favourite parts: </h1>
        <button onClick={addBooks}>dodaj</button>
        <div className='grid-books'>
          {/* <div className='grid grid1'>Rodzaju</div>
          <div className='grid grid2'>Wyjścia</div>
          <div className='grid grid3'>Kapłańska</div>
          <div className='grid grid4'>Liczb</div>
          <div className='grid grid5'>Pwt Prawa</div>
          <div className='grid grid6'>Jozuego</div>
          <div className='grid grid7'>Sędziów</div>
          <div className='grid grid8'>Rut</div>
          <div className='grid grid9'>1 Samuela</div>
          <div className='grid grid10'>2 Samuela</div>
          <div className='grid grid11'>1 Królów</div>
          <div className='grid grid12'>2 Królów</div>
          <div className='grid grid13'>1 Kronik</div>
          <div className='grid grid14'>2 Kronik</div>
          <div className='grid grid15'>Ezdrasza</div>
          <div className='grid grid16'>Nehemiasza</div>
          <div className='grid grid17'>Estery</div>
          <div className='grid grid18'>Hioba</div>
          <div className='grid grid19'>Psalmy</div>
          <div className='grid grid20'>Przysłów</div>
          <div className='grid grid21'>Kaznodziei</div>
          <div className='grid grid22'>Pieśń</div>
          <div className='grid grid23'>Izajasza</div>
          <div className='grid grid24'>Jeremiasza</div>
          <div className='grid grid25'>Lamentacje</div>
          <div className='grid grid26'>Ezechiela</div>
          <div className='grid grid27'>Daniela</div>
          <div className='grid grid28'>Ozeasza</div>
          <div className='grid grid29'>Joela</div>
          <div className='grid grid30'>Amosa</div>
          <div className='grid grid31'>Abdiasza</div>
          <div className='grid grid32'>Jonasza</div>
          <div className='grid grid33'>Micheasza</div>
          <div className='grid grid34'>Nahuma</div>
          <div className='grid grid35'>Habakuka</div>
          <div className='grid grid36'>Sofoniasza</div>
          <div className='grid grid37'>Aggeusza</div>
          <div className='grid grid38'>Zachariasza</div>
          <div className='grid grid39'>Malachiasza</div>
          <div className='grid grid1'>Rodzaju</div>
          <div className='grid grid2'>Wyjścia</div>
          <div className='grid grid3'>Kapłańska</div>
          <div className='grid grid4'>Liczb</div>
          <div className='grid grid5'>Pwt Prawa</div>
          <div className='grid grid6'>Jozuego</div>
          <div className='grid grid7'>Sędziów</div>
          <div className='grid grid8'>Rut</div>
          <div className='grid grid9'>1 Samuela</div>
          <div className='grid grid10'>2 Samuela</div>
          <div className='grid grid11'>1 Królów</div>
          <div className='grid grid12'>2 Królów</div>
          <div className='grid grid13'>1 Kronik</div>
          <div className='grid grid14'>2 Kronik</div>
          <div className='grid grid15'>Ezdrasza</div>
          <div className='grid grid16'>Nehemiasza</div>
          <div className='grid grid17'>Estery</div>
          <div className='grid grid18'>Hioba</div>
          <div className='grid grid19'>Psalmy</div>
          <div className='grid grid20'>Przysłów</div>
          <div className='grid grid21'>Kaznodziei</div>
          <div className='grid grid22'>Pieśń</div>
          <div className='grid grid23'>Izajasza</div>
          <div className='grid grid24'>Jeremiasza</div>
          <div className='grid grid25'>Lamentacje</div>
          <div className='grid grid26'>Ezechiela</div>
          <div className='grid grid27'>Daniela</div>
          <div className='grid grid28'>Ozeasza</div>
          <div className='grid grid29'>Joela</div>
          <div className='grid grid30'>Amosa</div>
          <div className='grid grid31'>Abdiasza</div>
          <div className='grid grid32'>Jonasza</div>
          <div className='grid grid33'>Micheasza</div>
          <div className='grid grid34'>Nahuma</div>
          <div className='grid grid35'>Habakuka</div>
          <div className='grid grid36'>Sofoniasza</div>
          <div className='grid grid37'>Aggeusza</div>
          <div className='grid grid38'>Zachariasza</div>
          <div className='grid grid39'>Malachiasza</div> */}
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
