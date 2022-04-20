import React, {useState} from 'react'

export const useSecret = () => {

    const [secret, setSecret] = useState('');
    const [count, setCount] = useState(1)
    const [message, setMessage] = useState('');


    const handleSecretChange = (event) =>{
        setSecret(event.target.value)
    }

    
    const handleCountChange = (event) =>{
        if(event.target.value >=1){
            setCount(event.target.value)
        }
    }

    const createSecret = () =>{

    }

    return {
        secret,
        count,
        message,
        handleCountChange,
        handleSecretChange,
        createSecret,
    }
}
