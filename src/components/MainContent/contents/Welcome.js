import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import '../../../assets/css/Welcome.css'

const Welcome = (props) => {
    const [textClass, setTextClass] = useState('slideText-normal');

    function handleClick(){
        window.dispatchEvent(new Event("continueClicked"));
        setTextClass('slideText');
    }

    return (
        <div className = {textClass}>
            {props.mode === 'initial' ? 
                <>
                    <h4 style={{fontSize: '72px'}}> Olá, tudo bem com você? </h4>
                    <h3 style={{fontSize: '96px'}}> Me chamo Gustavo </h3>
                    <h4 style={{fontSize: '72px'}}> Bem-vindo ao meu website :) </h4>
                    <Button size='lg' onClick={handleClick}>Continuar</Button>
                </> :

                <>
                    <h4 style={{fontSize: '48px'}}> Te convido a continuar navegando pelo site</h4>
                    <h3 style={{fontSize: '52px'}}> para conhecer um pouco mais sobre mim =D</h3>
                    <h4 style={{fontSize: '72px'}}>{"<-"} </h4>
                </> 
            }

        </div>
    );
}

export default Welcome;