import './App.css'
import {ButtonComponent} from "./componant/ButtonComponent.tsx";
function App() {

    const HandelClick = (name: string) => {
        alert(name + 'Button Clicked')
    }

    return (
        <>
            <ButtonComponent myFunction={HandelClick}></ButtonComponent>
            <ButtonComponent myFunction={HandelClick}></ButtonComponent>

        </>
    )
}

export default App