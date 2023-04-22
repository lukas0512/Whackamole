import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface HammerCursorProps {
    hammerImage: string;
}

const CursorImage = styled.img`
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%) rotate(0deg);
    transition: transform 0.1s ease-out;
    width: 10rem;
`;

const HammerCursor = ({ hammerImage }: HammerCursorProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        setMousePosition({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });
        document.addEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseDown = () => {
            setIsClicked(true);
        };
        const handleMouseUp = () => {
            setIsClicked(false);
        };
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const angle = isClicked ? 30 : -30;

    return (
        <CursorImage
            src={hammerImage}
            alt='hammer cursor'
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
            }}
        />
    );
};

export default HammerCursor;

