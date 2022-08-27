import {useState} from 'react'
import React from 'react'
import CryptoList from './CryptoList'
import './CryptoForm.css'

const ListOfCrypto = [
    {id:0, name:'Bitcoin', value:21600},
    {id:1, name:'Ethereum', value:1600},
    {id:2, name:'Dogecoin', value:0.069},
    {id:3, name:'Tether', value:1},
    {id:4, name:'Binance coin', value:279},
]



export default function CryptoForm() {
    const [crypto, setCrypto] = useState(ListOfCrypto);
    const [userData, setUserData] =useState({
        name:"",
        value:"",
    })


    const AddCr = (e) => {
        e.preventDefault();
        setCrypto((prev) => [
            ...prev,
            {
                name:userData.name,
                value:userData.value,
                id:Math.random()
            },
        ])
    }

    const deleteButton=(id) => {
        const newCrypto = crypto.filter((value) => value.id !== id);
        setCrypto(newCrypto)
    }
    return (
        <div className='list-container'>
            <form className='cryptoList'>
                <label htmlFor='CryptoName'>Crypto Name</label>
                <input type="text" defaultValue={userData.name} onChange={(event) => setUserData((prev) => ({...prev, name: event.target.value}))}></input>
                <label htmlFor='CryptoValue'>Crypto Value</label>
                <input type="number" Value={userData.value} onChange={(event) => setUserData((prev) => ({...prev, value: event.target.value}))}></input>
                <button type='submit' onClick={AddCr}>Add crypto value</button>
            </form>
            {crypto.map((el) => (
                <div key={el.id}>
                <CryptoList
                cryptoName={el.name}
                cryptoValue={el.value}
                cryptoId={el.id}
                onDeleteButton={()=>deleteButton(el.id)}
                />
                </div>
            ))}
        </div>
    )
}