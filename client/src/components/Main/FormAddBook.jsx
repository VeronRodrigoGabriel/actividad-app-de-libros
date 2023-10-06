export const FormAddbook = () => {
    return(
        <form action="" className="">
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
                            <input className="w-50" type=""/>
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
                            <input type="file"/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}