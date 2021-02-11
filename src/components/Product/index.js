import React, {useState} from 'react';
import './styles.css';
import Header from '../HeaderSup/index'
import Modal from '../Modal/index'



function Product({ id, name, price, img, counter=counter ,setCounter=setCounter}) {

    const real = value => {
        const options = { style: "currency", currency: "BRL" }
        return value.toLocaleString('pt-BR', options)
    }

    function incrementar(quantity) {
        setCounter(counter+quantity)
    }


    const [isModalVisible, setModalVisible] = useState(false)
    const [productModal, setProductModal] = useState('');
    const [productModalImg, setProductModalImg] = useState('');

    const showPopUp = (name, img, id) => {
        const quantity = parseInt(document.getElementById(id).value)
        if (quantity == 0 || isNaN(quantity)) {
            return
        }
        setProductModal(name);
        setProductModalImg(img);
        setModalVisible(true);
        incrementar(quantity);
        document.getElementById(id).value = ''
        
    }



    return (
        <>
            {
                isModalVisible ? (
                    <Modal name={productModal} img={productModalImg} onClose={ () =>setModalVisible(false)}/>
                ): null
        }
           
        <div className="product">
            

            <div className="div-img">
                <img src={img}/>
            </div>
            <p className="name">{name}</p>
            
            <p className="price">{real(price)}</p>

            <div>
                <input id={id} type="number" className="quantity" min={0}/>
                <button onClick={(e) => showPopUp(name,img, id, e)}>Adicionar ao carrinho</button>
            </div>
            
        </div>
        
        </>    
    )
}

export default Product