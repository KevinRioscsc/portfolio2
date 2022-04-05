import styled from 'styled-components'

export const Nav = styled.div`

    height: 100%;
    z-index: 50;
    min-width: 100%;
    overflow: hidden;
    background: #393b49;
    position: fixed;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
export const Btn = styled.div`
    background: #393b49;
    z-index: 1;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    overflow: hidden;
    font-size: 3em;
    text-transform: uppercase;
    height: 70px;
    width: 250px;

    &::after{
        content: '';
        z-index: -1;
        background-color: hsla(0, 0%, 100%, 0.2);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 1.25em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
    }
    &:hover::after{
        transition: transform 0.45s ease-in-out;
        transform: translate3d(310%, 0, 0) rotate(35deg);
    }

`
export const Burg = styled.div`
`
export const CheckBox = styled.input`
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 

    /*
    &:checked + label > div > span:first-child{
    transform: ${props => props.toggle ? 'rotate(-45deg)' : 'rotate(45deg)'};
    transform-origin:${props => props.toggle ? '5%' : '1%'} ;
    width: ${props => props.toggle ? '30px' : '41px'};
    }
    &:checked + label > div > span:nth-child(2) {
    transform: translateX(-40px);
    background-color: transparent;
}

    &:checked + label > div > span:nth-child(3) {
    transform: translateX(40px);
    background-color: transparent;
}

    &:checked + label > div > span:last-child {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 41px;
}*/

`
export const Label = styled.label`
`
export const HamBurger = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;

    
`
export const Bar1 = styled.span`
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    top: 0;
    transform: ${props => props.toggle ? 'rotate(45deg)' : 'rotate(0deg)'};
    transform-origin:${props => props.toggle ? '5%' : '1%'} ;
    width: ${props => props.toggle ? '41px' : '30px'};
`
export const Bar2 = styled.span`
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    top: 13.5px;
    transform:${props => props.toggle ? 'translateX(-40px)' : 'translateX(0)'} ;
    background-color: ${props => props.toggle ? 'transparent' : 'white'};
`
export const Bar3 = styled.span`
      padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    top: 13.5px;
    right: 0;

 
    transform:  ${props => props.toggle ? 'translateX(40px)' : 'translateX(0)'};
    background-color: ${props => props.toggle ? 'transparent' : 'white'};
`
export const Bar4 = styled.span`
      padding: 0;
    width: 30px;
    height: 4px;
    background-color: white;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    bottom: 0;

    transform-origin: ${props => props.toggle ? '5%' : '1%'};
    transform: ${props => props.toggle ? 'rotate(-45deg)' : 'rotate(0deg)'};
    width:${props => props.toggle ? '41px' : '30px'};
`