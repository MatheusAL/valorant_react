import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

const Button = styled.button`
    color: white;
    border: 1px solid black;
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    width: 140px;
    background-color: ${ props => props.color } ;


`;

function SocialButton({ color, social }){
   console.log(color);
   switch(social){
       case "facebook":
           return(
            <Button color={color} className="socialButton">
                <FaFacebook />
            </Button>
                );
            
        case "google":
            return(
            <Button color={color} className="socialButton">
                <FcGoogle />
            </Button>
                );
        case "apple":
            return(
            <Button color={color} className="socialButton">
                <AiFillApple />
            </Button>
            );
        default:    
    };
}


export default SocialButton;