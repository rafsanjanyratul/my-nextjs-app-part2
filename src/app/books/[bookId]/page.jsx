
export async function generateStaticParams() {
  const books = await fetch('http://localhost:5000/books').then((res) => res.json())
 
  return books.slice(1,5).map((book) => ({
   bookId:book.id
  }))
}

const BookDetailsPage =async ({params}) => {
    const {bookId} =await params
    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const books =await res.json()
    const {title,author}=books
    return (
        <div>
            books: {bookId}
            name : {title}
            author : {author}
        </div>
    );
};

export default BookDetailsPage;