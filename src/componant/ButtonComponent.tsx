import React from 'react';

interface ButtonComponentProps {
    myFunction: (name: string) => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ myFunction }) => {
    return (
        <button onClick={() => myFunction('Button')}>Click me</button>
    );
};

