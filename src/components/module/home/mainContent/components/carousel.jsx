import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import MataKuliahList from '../../../../../content/mataKuliah.json'

const Carousel = styled['div']`
    width: 100%;
`

const CarouselBox = styled['div']`
    width: 100%;
    height: 300px;

    position: relative;

    border-radius: 24px;

    overflow: hidden;

    display: flex;
    justify-items: center;
`

const CarouselOverlay = styled['div']`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.9) 80%
    );

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 20px;
`

const CarouselText = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['16']};

    color: #ffffff;
`

const CarouselSubText = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['14']};

    color: #999999;
`

const CarouselImage = styled['img']`
    width: 100%;
`

const carousel = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (number === MataKuliahList.length - 1) {
                setNumber(0)
            } else {
                setNumber(prev => prev + 1)
            }
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [number])

    return (
        <Carousel>
            <CarouselBox>
                <CarouselOverlay>
                    <CarouselText>{MataKuliahList[number].nama}</CarouselText>
                    <CarouselSubText>
                        oleh {MataKuliahList[number].dosen}
                    </CarouselSubText>
                </CarouselOverlay>
                <CarouselImage src={`/assets/${MataKuliahList[number].img}`} />
            </CarouselBox>
        </Carousel>
    )
}

export default carousel
