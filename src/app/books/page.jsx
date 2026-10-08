import BooksCart from "@/components/Books";


const BooksPage = async () => {
    const res = await fetch("http://localhost:5000/books",{next:{revalidate:6}})
    const books = await res.json()
    return (
        <div>
            <h3>books : {books.length}</h3>
            <div className="grid grid-cols-3 gap-3">
                {
                    books.map(book=><BooksCart key={book.id} book={book}></BooksCart>)
                }

            </div>
        </div>
    );
};

export default BooksPage;