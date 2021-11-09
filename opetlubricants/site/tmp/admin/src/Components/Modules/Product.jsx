import React, {useEffect, useState} from 'react';
import cookie from "js-cookie";
import axios from "axios";
import classNames from 'classnames';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {

    faCogs,
    faExternalLinkAlt, faEye, faEyeSlash,
    faImages,
    faPen,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

import './Product.scss';
import {Modal} from "../index";
import ProductEdit from "./ProductEdit";
import moment from "moment";

const replaceItems = (items, lang) => {
    return (items.map(item => {
        try {
            const {name, urlName} = item.translations.find(elem => (elem.lang === lang));

            return {...item, name, urlName};
        } catch (e) {
            return item;
        }
    }));
}

const Product = ({sessionKey, config, languages, param}) => {
    const [lang, setLang] = useState("");
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [opetObjects, setOpetObjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [currentObject, setCurrentObject] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [stateModalImages, setStateModalImages] = useState(false);
    const [stateModalProgress, setStateModalProgress] = useState(false);
    const [stateModalAddEditProduct, setStateModalAddEditProduct] = useState(false);

    const itemToSave = {showDate: null, translations: null, sizes: null};

    useEffect(() => {
        if (!cookie.get('lang')) {
            cookie.set('lang', 'ru');
        }
        setLang(cookie.get('lang', 'ru') || 'ru');
    }, []);

    useEffect(() => {
        axios.get(`${config["wsUrl"]}/api/opetObjects/`)
            .then(({data}) => {
                if (lang && data.data && data.data.length>0) {
                    setOpetObjects(data.data.map(item => {
                        const {name} = item.translations.find(elem => (elem.lang === lang));
                        return {...item, name};
                    }));
                }
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });

        axios.get(`${config["wsUrl"]}/api/categories/`)
            .then(({data}) => {
                if (lang && data.data && data.data.length>0) {
                    setAllCategories(data.data.map(item => {
                        const {name} = item.translations.find(elem => (elem.lang === lang));
                        return {...item, name};
                    }));
                }
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });

    }, [lang, config, sessionKey]);

    const showItemImagesModal = item => {

        axios.post(`${config["wsUrl"]}/system/entities/getItemImages`, {sessionKey, itemId: item.id})
            .then(({data}) => {
                if (data.data) {
                    setItemToEdit(item);
                    setStateModalImages(true);

                }
            });


    };

    const uploadImage = event => {
        const form = event.target.parentNode;
        const progress = document.getElementById('progressProgress');
        const bar = document.getElementById('progressBar');

        setStateModalProgress(true);
        bar.classList.add('in-progress');
        progress.setAttribute('data-progress', '0');
        progress.style.setProperty('--progress', '0');

        axios.request({
            method: "post",
            url: form.getAttribute('action'),
            data: new FormData(form),
            onUploadProgress: (p) => {
                const prc = Math.round(p.loaded * 100 / p.total);
                progress.setAttribute('data-progress', `${prc}%`);
                progress.style.setProperty('--progress', `calc(${prc}% - 10px)`);

            }
        }).then(({data}) => {
            const newItem = {...itemToEdit, picture: data.data.mainImage, image: data.data.mainImage}
            setItemToEdit(newItem);
            showItemImagesModal(newItem);
            setItems(items.map(item => {
                return (item.id === data.data.id) ? newItem : item;
            }));

        }).catch(() => {
            alert('ERROR: Check File Format and Size');
        }).finally(() => {
            setStateModalProgress(false);
            bar.classList.remove('in-progress');
        });
    };

    const deleteItemImage = (objectType, objectId) => {
        axios.post(`${config["wsUrl"]}/system/deleteImage`, {sessionKey, objectType, objectId})
            .then(({data}) => {
                if (data.data) {
                    setItemToEdit({...itemToEdit, picture: null});
                    setItems(items.map(item => {
                        return (item.id === data.data.id) ? {...item, picture: null, image: null} : item;
                    }));
                }
            });

    };

    const loadCategories = objectId => {
        setCategories(allCategories.filter(category => (category.objectId === objectId)));
        setCurrentObject(objectId);
        setCurrentCategory(null);
        setItems(null);
    }

    const loadProducts = categoryId => {
        setItems([]);
        setCurrentCategory(categoryId);
        axios.get(`${config["wsUrl"]}/api/products/?categoryId=${categoryId}`)
            .then(({data}) => {
                if (lang && data.data && data.data.length>0) {
                    setItems(replaceItems(data.data, lang));
                }
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }

    const controlAction = (action, itemId) => {

        axios.post(`${config["wsUrl"]}/system/entities/${action}`, {sessionKey, itemId})
            .then(({data}) => {
                if (data.data) {
                    setItems(replaceItems(items.map(item => {
                        return (item.id === data.data.id) ? {...item, isVisible: data.data.isVisible} : item;
                    })));
                }
            });

    };

    const showItemAddEditModal = item => {
        if (!item.translations) {
            item.translations = languages.map(language => ({lang: language.lang}));
        }
        setItemToEdit(item);
        itemToSave.showDate = item.showDate;
        itemToSave.sizes = item.productSizes;
        setStateModalAddEditProduct(true);
    };

    const deleteItem = id => {

        if (!window.confirm('Вы уверены?')) {
            return;
        }

        axios.delete(`${config["wsUrl"]}/api/products/${id}?sessionKey=${sessionKey}`)
            .then(({data}) => {
                setItems(replaceItems(items.filter(item => (
                    id !== item.id
                )), lang));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    };

    const onDeleteSize = params => {

        axios.delete(`${config["wsUrl"]}/api/productSizes/${params.id}?sessionKey=${sessionKey}`)
            .then(({data}) => {
                setItems(items.map(item => {
                    if (item.id !== params.productId) {
                        return item;
                    }

                    const newSizes = itemToEdit.productSizes.filter(sz => (sz.id !== params.id));

                    const newItem = {...itemToEdit, productSizes: newSizes}
                    setItemToEdit( newItem);
                    return newItem;
                }));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }

    const onAddSize = productSize => {
        axios.post(`${config["wsUrl"]}/api/productSizes/`, {...productSize, sessionKey})
            .then(({data}) => {
                setItems(items.map(item => {
                    if (item.id !== productSize.productId) {
                        return item;
                    }

                    const newSizes = item.productSizes ? item.productSizes : [];

                    newSizes.push(data.data);

                    setItemToEdit( {...item, productSizes: newSizes});
                    return {...itemToEdit};
                }));
            })
            .catch(err => {
                console.error(err);
                alert(`Произошла ошибка, код ошибки в консоли`);
            });
    }

    const onChangeSize = productSize => {
        if (!productSize) {return}

        if (!itemToSave.sizes) itemToSave.sizes=[];

        const search = itemToSave.sizes.find(sz => (sz.id === productSize.id));

        if (!search) {
            itemToSave.sizes.push(productSize);
        } else {
            itemToSave.sizes = itemToSave.sizes.map(sz => (sz.id === productSize.id ? productSize : sz));
        }

    }

    const onChangeTranslation = translation => {
        if (!translation) {return }

        if (!itemToSave.translations) itemToSave.translations=[];

        const search = itemToSave.translations.find(tr => (tr.lang === translation.lang));

        if (!search) {
            itemToSave.translations.push(translation);
        } else {
            itemToSave.translations = itemToSave.translations.map(tr => (tr.lang === translation.lang ? translation : tr));
        }

    }

    const onChangeDate = newDate => {
        if (newDate) itemToSave.showDate = newDate;
    }

    const saveProduct = async () => {

        let emptyElement = false;
        for (const input of [...document.querySelectorAll('.input-text[required]')]){
            emptyElement = emptyElement || input.value.trim() === "";
        }

        if (emptyElement) {
            return alert(`Произошла ошибка, одна из обязательных полей не заполнена`);
        }
        if (!itemToSave.showDate) {
            itemToSave.showDate = itemToEdit.showDate ? itemToEdit.showDate : new Date()
        }
        if (itemToEdit.id>0) {
            await axios.put(`${config["wsUrl"]}/api/products/${itemToEdit.id}`, {...itemToSave, sessionKey})
                .then(({data}) => {
                    // const newItems = replaceItems(items.map(item=>(item.id===data.data.id ? data.data : item)), lang);
                    // setItems(null);
                    // setItems(newItems);
                    loadProducts(currentCategory);
                    setStateModalAddEditProduct(false);
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        } else {
            await axios.post(`${config["wsUrl"]}/api/products`, {...itemToSave, sessionKey, categoryId: currentCategory})
                .then(({data}) => {
                    //setItems(replaceItems([data.data, ...items], lang));
                    loadProducts(currentCategory);
                    setStateModalAddEditProduct(false);
                })
                .catch(err => {
                    console.error(err);
                    alert(`Произошла ошибка, код ошибки в консоли`);
                });
        }
    }

    return (
        <div className="products">
            <ul className="objects-list">
                {opetObjects.map(opetObject => (
                    <li className={classNames("m-1 btn btn-primary objects-list__item", {active: opetObject.id === currentObject})}
                        onClick={()=>{loadCategories(opetObject.id)}}
                        key={opetObject.id}>{opetObject.name}</li>
                ))
                }
            </ul>
            <hr className="mt-2 mb-2"/>
            <ul className="categories-list">
                {currentObject && categories.map(category => (
                        <li className={classNames("m-1 btn btn-secondary categories-list__item", {active: category.id === currentCategory})}
                            onClick={()=>{loadProducts(category.id)}} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
            <hr className="mt-2 mb-2"/>
            <div className="category">
                {currentCategory && <button className="btn btn-success" onClick={() => {
                    showItemAddEditModal({id: 0})
                }}>Создать</button>}
            </div>
            {items && items.length>0 && <table className="table table-hover table-striped category__table">
                <thead className="thead">
                <tr>
                    <th>Картинка</th>
                    <th>Название</th>
                    <th>Дата</th>
                    <th className="th"><FontAwesomeIcon icon={faCogs}/></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <td><img className="product-image" src={`${config.siteUrl+item.picture}`} alt=""/></td>
                            <td>{item.name}</td>
                            <td>{moment(item["showDate"]).format('DD/MM/YYYY HH:mm')}</td>
                            <td>
                                <FontAwesomeIcon className="ico-edit entity__control clickable"
                                                 icon={faPen}
                                                 title="Изменить"
                                                 onClick={()=>{showItemAddEditModal(item)}}

                                />
                                <FontAwesomeIcon className="ico-images entity__control clickable"
                                                 icon={faImages}
                                                 title="Изображения"
                                                 onClick={()=>{showItemImagesModal(item)}}

                                />
                                <FontAwesomeIcon
                                    className={
                                        classNames(
                                            "entity__control",
                                            "clickable",
                                            item["isVisible"] ? "ico-hide" : "ico-show")
                                    }
                                    icon={item["isVisible"] ? faEyeSlash : faEye}
                                    title={item["isVisible"] ? "Скрыть" : "Показать"}
                                    onClick={() => {
                                        controlAction("toggleItemVisibility", item.id)
                                    }}
                                />
                                <FontAwesomeIcon title="Удалить"
                                                 className="entity__control ico-delete clickable"
                                                 icon={faTrash}
                                                 onClick={() => {
                                                     deleteItem(item.id)
                                                 }}
                                />
                                {item.urlName && <a className="entity__control" rel="noopener noreferrer"
                                                    href={`${config.siteUrl}/product/${item.id}-${item.urlName}.html`} target="_blank">
                                    <FontAwesomeIcon className="ico-link clickable"
                                                     icon={faExternalLinkAlt}
                                                     title="Ссылка"

                                    />
                                </a>}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table> }

            <Modal
                show={stateModalAddEditProduct}
                dialogSize="modal-xl"
                headText="Продукт"
                dismissText="Закрыть"
                successText="Сохранить"
                onSuccess={saveProduct}
                onDismiss={() => {setStateModalAddEditProduct(false)}} >

                {
                    itemToEdit && <ProductEdit
                        product={itemToEdit}
                        languages={languages}
                        categoryId={currentCategory}
                        sessionKey={sessionKey}
                        siteUrl={cookie.get('siteUrl')}
                        lang={lang}
                        onChangeDate={onChangeDate}
                        onDeleteSize={onDeleteSize}
                        onChangeSize={onChangeSize}
                        onChangeTranslation={onChangeTranslation}
                        onAddSize={onAddSize}
                    />
                }
            </Modal>
            <Modal
                show={stateModalImages}
                dialogSize="modal-sm"
                headText="Изображения"
                dismissText="Закрыть"
                onDismiss={() => {setStateModalImages(false)}} >
                <div className="image-edit">
                    <div className="main-image">
                        <h3>Главное изображение</h3>
                        {itemToEdit &&
                        <div className="main-image-box">
                            <img className="main-image-image"
                                 width={100} height={100}
                                 src={`${config.siteUrl}${itemToEdit["picture"]}`} alt=""/>
                            <div className="main-image-buttons">
                                <button className="w-100 btn btn-vertical btn-danger mb-2"
                                        onClick={()=>{deleteItemImage('entity_item_main', itemToEdit.id)}}
                                >
                                    <FontAwesomeIcon className="ico-delete btn-icon" icon={faTrash} />
                                    Удалить
                                </button>
                                <form action={`${config.siteUrl}/upload/images/products`} method="post"
                                      encType="multipart/form-data">

                                    <input className="hidden"
                                           type="file" id="mainImg"
                                           name="file" required
                                           onChange={uploadImage}
                                    />
                                    <input type="hidden" name="objectType"
                                           value="entity_item_main"/>
                                    <input type="hidden" name="objectId" value={itemToEdit.id}/>
                                    <input type="hidden" name="sessionKey"
                                           value={sessionKey}/>

                                    <label htmlFor="mainImg" className="w-100 btn btn-vertical btn-secondary"
                                           onClick={()=>(document.getElementById("mainImg").value="")}
                                    >
                                        <FontAwesomeIcon className="ico-edit btn-icon" icon={faPen}/>Изменить
                                    </label>
                                </form>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </Modal>

            <Modal
                show={stateModalProgress}
                dialogSize="modal-sm"
                noHeader={true}
                noFooter={true}
                noMaxHeight={true}
                onDismiss={() => {return false}} >
                <div className="progress" id="progressProgress" data-progress="0%">
                    <div className="bar" id="progressBar"/>
                </div>
            </Modal>
        </div>
    )
};

export default Product;