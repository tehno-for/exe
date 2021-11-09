import React, {useEffect, useState} from 'react';
import ProductSize from "./ProductSize";
import {Modal} from "../index";
import classNames from "classnames";
import ProductDetail from "./ProductDetail";
import DateInput from "../FormElements/DateInput";
import moment from "moment";

const ProductEdit = ({product, categoryId, languages, lang, sessionKey, siteUrl,
                         onAddSize, onChangeSize, onChangeDate, onDeleteSize, onChangeTranslation}) => {
    const [showDate, setShowDate] = useState("");
    const [stateModalProgress, setStateModalProgress] = useState(false);

    useEffect(() => {
        setShowDate(moment(product ? product["showDate"] : new Date()).format("YYYY-MM-DDTHH:mm"));
    }, [product]);

    const changePill = (event, lang) => {
        const ul = event.target.parentNode;
        [...ul.children].forEach(li=> {
            li.classList.remove('active');
        });
        event.target.classList.add('active');
        const tabs = document.querySelector(event.target.parentNode.dataset.target);
        [...tabs.children].forEach(tab=>{
            if (tab.dataset.lang===lang) {
                tab.classList.add('active');

            }else {
                tab.classList.remove('active');
            }
        })
    };

    const onChangeProductSize = productSize => {
        onChangeSize(productSize)
    }

    const onUploadSizePicture = imgProgress => {
        const {/*id, imageFile, */progress:prc, stage} = imgProgress;

        const progress = document.getElementById('sizeProgressProgress');
        const bar = document.getElementById('sizeProgressBar');

        if (stage !== 'finish') {
            setStateModalProgress(true);
            bar.classList.add('in-progress');
        } else {
            setStateModalProgress(false);
            bar.classList.remove('in-progress');
        }

        progress.setAttribute('data-progress', `${prc}%`);
        progress.style.setProperty('--progress', `calc(${prc}% - 10px)`);

    }

    const addSize = () => {
        onAddSize({
            productId: product.id,
            size: '-',
            price: 0,
            picture: ''
        });
    }

    const setTranslation = translation => {

        const links = [];
        if (translation.link1Name || translation.link1Icon  || translation.link1Svg  || translation.link1Url ){
            links.push({
                name: translation.link1Name,
                icon: translation.link1Icon,
                svg: translation.link1Svg,
                url: translation.link1Url
            })
        }
        if (translation.link2Name || translation.link2Icon  || translation.link2Svg  || translation.link2Url ){
            links.push({
                name: translation.link2Name,
                icon: translation.link2Icon,
                svg: translation.link2Svg,
                url: translation.link2Url
            })
        }
        if (translation.link3Name || translation.link3Icon  || translation.link3Svg  || translation.link3Url ){
            links.push({
                name: translation.link3Name,
                icon: translation.link3Icon,
                svg: translation.link3Svg,
                url: translation.link3Url
            })
        }

        onChangeTranslation({
            lang: translation.lang,
            description: translation.description,
            name: translation.name,
            urlName: translation.urlName,
            seoDescription: translation.seoDescription,
            seoKeywords: translation.seoKeywords,
            links: links
        });
    }

    return (
        <div>
            <DateInput type="datetime-local" value={showDate} onChange={event=>{setShowDate(event.target.value); onChangeDate(event.target.value)}}/>
            {product.id>0 && <div>
                Размеры:
                <ul className="product-sizes">
                    {product.productSizes && product.productSizes.length>0 && product.productSizes.map(sz => (
                        <ProductSize key={sz.id}
                                     params={sz}
                                     siteUrl={siteUrl}
                                     onDeleteSize={onDeleteSize}
                                     onChangeProductSize={onChangeProductSize}
                                     onUploadProgress={onUploadSizePicture}/>
                    ))}
                </ul>
                <button className="btn btn-primary" onClick={addSize}>Добавить размер</button>
                <hr className="mt-2 mb-2" />
            </div> }
            Переводы:
            <div className="translations">
            <ul className="tab-pills" data-target="#langTabs">
                {
                    languages.map(l => (
                        <li onClick={event=>{changePill(event, l.lang)}}
                            className={classNames("pill", {active: l.lang===lang})}
                            key={l.lang}>{l.name}</li>
                    ))
                }
            </ul>
            <div className="tabs" id="langTabs">
                {
                    product.translations.map(translation => (
                        <ProductDetail className={classNames("tab-content", {active: translation.lang===lang})}
                                       key={translation.lang}
                                       siteUrl={siteUrl}
                                       sessionKey={sessionKey}
                                       item={translation}
                                       onChangeItem={setTranslation}
                        />
                    ))
                }
            </div>
            </div>

            <Modal
                show={stateModalProgress}
                dialogSize="modal-sm"
                noHeader={true}
                noFooter={true}
                noMaxHeight={true}
                onDismiss={() => {return false}} >
                <div className="progress" id="sizeProgressProgress" data-progress="0%">
                    <div className="bar" id="sizeProgressBar"/>
                </div>
            </Modal>
        </div>
    )
};

export default ProductEdit;