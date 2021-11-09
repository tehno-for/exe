import React, {useEffect, useState} from 'react';
import {TextInput, NumberInput} from "../FormElements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProductSize = ({params, siteUrl, onChangeProductSize, onUploadProgress, onDeleteSize}) => {
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0);
    const [picture, setPicture] = useState('');

    useEffect(() => {
        setSize(params.size);
        setPrice(params.price);
        setPicture(params.picture);
    }, [params]);

    useEffect(() => {
        onChangeProductSize({
            id: params.id,
            productId: params.productId,
            size, price, picture
        })
    }, [size, price, picture, params, onChangeProductSize]);

    const uploadImage = event => {


        const form = event.target.parentNode;

        onUploadProgress({
            progress: 0,
            stage: 'start'
        });

        axios.request({
            method: "post",
            url: form.getAttribute('action'),
            data: new FormData(form),
            onUploadProgress: (p) => {
                const prc = Math.round(p.loaded * 100 / p.total);

                onUploadProgress({
                    progress: prc,
                    stage: 'progress'
                });
            }
        }).then(({data}) => {
            onUploadProgress({
                ...data.data,
                progress: 100,
                stage: 'finish'
            });

            setPicture(data.data.imageFile);

        }).catch(err => {
            console.log(err)
            alert('ERROR: Check File Format and Size');
        });
    }

    return (
        <li className="product-sizes__item">
            <FontAwesomeIcon className="ico-delete btn-icon"
                             icon={faTimesCircle}
                             onClick={()=>{onDeleteSize(params)}}
            />
            <div className="product-sizes__image-box">
                <img className="product-sizes__image" src={`${siteUrl+picture}`} alt=""/>
            </div>
            <form action={`${siteUrl}/upload/images`} method="post"
                  encType="multipart/form-data">

                <input className="hidden"
                       type="file" id={`sizeImage${params.id}`}
                       name="file" required
                       onChange={uploadImage}
                />
                <input type="hidden" name="id" value={params.id}/>

                <label htmlFor={`sizeImage${params.id}`} className="w-100 btn btn-vertical btn-secondary"
                       onClick={event=>(document.getElementById(`sizeImage${params.id}`).value="")}
                >
                    <FontAwesomeIcon className="ico-edit btn-icon" icon={faPen}/>Изменить картинку
                </label>
            </form>
            Размер: <TextInput value={size} onChange={event => {setSize(event.target.value)}} />
            Цена: <NumberInput value={price} onChange={event => {setPrice(event.target.value)}} />
        </li>
    )
};

export default ProductSize;