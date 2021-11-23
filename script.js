//  add Some Books Data
let booksData = [
  {
    title: 'The Lord Of The Rings',
    author: 'J. R. R. Tolkien',
    id: 0,
  },
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    id: 1,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    id: 2,
  }  
];

const initLoad = (booksData) => {
  const storedData =JSON.parse(localStorage.getItem('storedData'))
  if(storedData){
    storedData.forEach((book) => {
      createBook(book)
    })
  }else {
    localStorage.setItem('storedData', JSON.stringify(booksData))
    booksData.forEach((book) => {
      createBook(book)
    })
  }
  
}


function createBook(book) {
  const booksCont = document.getElementById('booksCont');
  const bookDiv = document.createElement('div');
  bookDiv.className = "book"
  bookDiv.id = `book-${book.id}`
  const bookElement = 
    `
      <h3 class="bookTitle">${book.title}</h3>
      <h4 class="bookAuthor">${book.author}</h4>
      <button class="removeBtn">Remove</button>
      <hr>
    `
  bookDiv.innerHTML += bookElement;
 
  bookDiv.querySelector(".removeBtn").addEventListener('click', (event) => {
    const book = document.querySelector("#" + event.target.parentElement.id);
    book.parentElement.removeChild(book);
    let storedData = JSON.parse(localStorage.getItem("storedData"))
    // slice
    localStorage.setItem('storedData', JSON.stringify(storedData))

  });
  booksCont.append(bookDiv)
}
initLoad(booksData)


