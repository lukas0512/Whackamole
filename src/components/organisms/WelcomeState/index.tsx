import { Button } from "@components/atoms/Button";
import { Input } from "@components/atoms/Input";
import { Typography } from "@components/atoms/Typography";
import { Mole } from "@components/molecules/Mole";
import { generalState } from "@src/state/atoms/generalState";
import { useRecoilState } from "recoil";
import { ContainerWelcomeStateStyled } from "./styled";

export const WelcomeState = () => {
    const [state, setState] = useRecoilState(generalState);
    const handleClickStart = () => {
        setState({ ...state, inGame: true, score: 0 });
    };
    return (
        <ContainerWelcomeStateStyled>
            <Mole active />
            <Typography size='h1' styleType='primary'>
                <b>Whack a Mole</b>
            </Typography>
            <Input
                placeholder='Nickname'
                value={state.nickName}
                data-testid='inputNickname'
                onChange={(e) => {
                    setState({ ...state, nickName: e.target.value });
                }}
            />
            <Button
                onClick={handleClickStart}
                disabled={state.nickName.length < 1}
            >
                Start
            </Button>
        </ContainerWelcomeStateStyled>
    );
};

