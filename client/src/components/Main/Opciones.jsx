import { Link } from 'react-router-dom'
export const Opciones = () => {
    return (
        <div className="container">
            <div className="row m-1">
                <div className="col text-center">
                    <Link to='/add-book' className="btn btn-outline-dark" href="">Add book</Link>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <Link to='/add-author' className="btn btn-outline-danger" href="">Add author</Link>
                </div>
            </div>
            <div className="row m-1">
                <div className="col text-center">
                    <Link to='/list-books' className="btn btn-outline-success" href="">List of books</Link>
                </div>
            </div>
        </div>
    )

}