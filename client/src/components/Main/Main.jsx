import { Listbooks } from "./Listbooks.jsx"
import { Opciones } from "./Opciones.jsx"

export const Main = ({ index }) => {
    return (
        <main>
            {
                index ? <Opciones /> : null
            }
            <Listbooks />
        </main>
    )
}