import { GameInput } from "./styled";

export const Input = ({
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <GameInput data-testid='input' {...props} />;
};

