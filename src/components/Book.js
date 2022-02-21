import '../index.css'

function Book(props) {
    
    return (
        <article className="book">
            <img src={props.book.img} />
            <h4>{props.book.title} </h4>
            <label>Price:</label><label className='price'>{props.book.price} &#8377;</label>
        </article>

    );
}
export default Book;