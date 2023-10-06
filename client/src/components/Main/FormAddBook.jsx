import { useState } from "react"

export const FormAddbook = () => {

    const [formState, setFormState] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormState(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formState) {
            const image = new FormData();
            image.append("file", formState);

            const responses = await fetch("http://localhost:4000/api/book", {
                method: "POST",
                body: image,
                headers: {
                    "Content-Type": "multipart/form-data",
                }

            });
        }
    }
    return (
        < form action="" className="" method="post" encType="multipart/form-data" onChange={handleFileChange} onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <label htmlFor="">Add tittle</label>
                            <input className="w-50" type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label htmlFor="">Add author</label>
                            <input className="w-50" type="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <label htmlFor="">Add genre</label>
                            <input className="w-50" type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label htmlFor="">Add image</label>
                            <input type="file" name="archivo" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark m-4">Enviar</button>
            </div>
        </form >
    )
}