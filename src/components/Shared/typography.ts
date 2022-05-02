import styled, { css } from "styled-components";

const theme = {
    colors:{
        title: '#1e1e1e',
        subtitle: '#ccc'

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
        color = 'title', 
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

export type TextProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 400 | 700
    lineHeight?: string | number
}

export const Text = styled('p')<TextProps>`
    ${({ 
        color = 'title', 
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