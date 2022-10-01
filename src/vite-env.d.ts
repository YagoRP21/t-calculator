/// <reference types="vite/client" />

type IdisplayProps = {
    value: string
};

type IkeyPadProps = {
    displayInput: (text: string) => void;
    deleteInput: () => void;
    computeInput: () => void;
    clearInput: () => void;
};