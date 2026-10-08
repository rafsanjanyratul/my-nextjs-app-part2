import Link from "next/link";


const BooksCart = ({book}) => {
    const {title,author}=book
    return (
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{author}</p>
    <div className="justify-end card-actions">
      <Link href={`/books/${book.id}`}>show more</Link>
    </div>
  </div>
</div>
    );
};

export default BooksCart;