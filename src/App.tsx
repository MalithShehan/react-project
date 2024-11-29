import './App.css'
import Item from './componant/Item.tsx'
// import ButtonComponent from './componant/ButtonComponent.tsx'
function App() {
    const itemList = [
        {title: 'ABC', description: 'ABC description'},
        {title: 'DEF', description: 'DEF description'},
        {title: 'GHI', description: 'GHI description'},

    ]
    return (
        <>
            {/*<ButtonComponent name = 'Add'></ButtonComponent>*/}
            {/*<ButtonComponent name = 'Update'></ButtonComponent>*/}
            {/*<ButtonComponent name = 'Delete'></ButtonComponent>*/}

            <Item title={itemList[0].title} description={itemList[0].description}></Item>
            <Item title={itemList[1].title} description={itemList[1].description}></Item>
            <Item title={itemList[2].title} description={itemList[2].description}></Item>
        </>
    )
}

export default App