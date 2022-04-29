import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 10px;
    height: 400px;
    width: 250px;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;
    
    text-align: center;
`

const theme = {
    colors:{
        red: '#FF0000'
    },
    sizes: {
        xsmall: '1rem',
        small:'1.2rem',
        normal:'1.6rem',
        large:'2.4rem',
        xlarge:'3.2rem',
        xxlarge:'4rem',
    }
}

export type HeadingProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 400 | 700
    lineHeight?: string | number
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${level}`
}))<HeadingProps>`
    ${({ 
        color = 'red', 
        size='normal', 
        fontWeight=700, 
        lineHeight=1.5
    }) => css`
        font-size: ${theme.sizes[size]};
        color: ${theme.colors[color]};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
    `}
`