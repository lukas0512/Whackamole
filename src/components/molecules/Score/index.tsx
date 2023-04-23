import { Typography } from "@components/atoms/Typography";
import { generalState } from "@src/state/atoms/generalState";
import { useRecoilValue } from "recoil";
import { ContainerScoreStyled } from "./styled";

export const Score = () => {
    const { score } = useRecoilValue(generalState);
    return (
        <ContainerScoreStyled data-testid='score-container'>
            <Typography size='h3' styleType='secondary'>
                Score
            </Typography>
            <Typography size='h2' styleType='primary' data-testid='score-value'>
                {score}
            </Typography>
        </ContainerScoreStyled>
    );
};

