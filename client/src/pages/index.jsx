import { Header } from "../components/Header/Header.jsx"
import { Main } from "../components/Main/Main.jsx"

export const Index = () => {
    return (
        <div>
            <Header />
            <Main
                index={true}
            />
        </div>
    )
}