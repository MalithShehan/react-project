export const Item = (prpos: {title : string, description: string}) => {
    return (
        <>
            <h1>{prpos.title}</h1>
            <p>{prpos.description}</p>
        </>
    );
};

export default Item;