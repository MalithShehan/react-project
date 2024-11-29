export function Subject(props: {name: string, children: React.ReactNode}) {
    return (
        <>
            <h1 style={{ color: 'red'}}>{props.name}</h1>
            <p>{props.children}</p>
        </>
    );
}

