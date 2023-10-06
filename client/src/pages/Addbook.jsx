import { Header } from "../components/Header/Header.jsx"
import { Main } from "../components/Main/Main.jsx"

export const Addbook = () => {
    return(
        <> 
            <Header/>
            <Main
            formAddbook={true}
            />
        </>
    )
}