import './CryptoList.css'

export default function CryptoList({cryptoId=0, cryptoName, cryptoValue, onDeleteButton}) {
    return (
        <div className="list-item">
            <span>Crypto Name: {cryptoName}</span>
            <span>Crypto Value: {cryptoValue}</span>
            <button onClick={onDeleteButton}>X</button>
        </div>
    )
}
