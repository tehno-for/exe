import React, {useEffect, useState} from 'react';
import axios from "axios";
import cookie from "js-cookie";
import moment from "moment";
import classNames from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCogs, faPen, faArchive, faEye, faEyeSlash,
    faSyncAlt, faImages, faExternalLinkAlt,
    faTrash, faPlus, faArrowUp, faArrowDown
} from "@fortawesome/free-solid-svg-icons";

import {Modal} from "../index";
import EntityItemEdit from "./EntityItemEdit";
import EntityEdit from "./EntityEdit";

import './Entity.scss';

const Entity = ({sessionKey, config, languages, param}) => {
    const [lang] = useState(cookie.get('lang'));
    const [entity, setEntity] = useState(null);
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [stateModalAddEdit, setStateModalAddEdit] = useState(false);
    const [titleModalAddEdit, setTitleModalAddEdit] = useState("");
    const [stateModalImages, setStateModalImages] = useState(false);
    const [stateModalProgress, setStateModalProgress] = useState(false);
    const [stateModalEntitySEO, setStateModalEntitySEO] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [itemImages, setItemImages] = useState([]);

    const itemToSave = {showDate: null, translations: null};
    const entityToSave = {translations: null};

    useEffect(() => {
        const genPages = [];
        for(let i=0; i<itemCount/config["itemLimit"]; i++) {
            genPages.push(i);
        }
        setPages(genPages);
    }, [itemCount, config]);

    const convertItems = data => {
        if (data) {
            const newItems = data.map(item => {
                if (lang) {
                    const currTranslation = item["arrTranslations"].find(tr => {
                        return tr.lang === lang;
                    });
                    item.title = currTranslation.title;
                    item.urlName = currTranslation.urlName;
                }
                return item;
            });
            setItems(newItems);
        }
    };

    useEffect(() => {
        setEntity(null);
    }, [param, page]);

    useEffect(() => {

        if (!entity) {
            //
            axios.post(`${config["wsUrl"]}/system/entities/getParams`, {sessionKey, entity: param})
                .then(({data}) => {
                    if (data.data) {
                        setEntity(data.data);

                        axios.post(`${config["wsUrl"]}/system/entities/getItems`,
                            {sessionKey, entityId: data.data.id, page, limit: config["itemLimit"]})
                            .then(({data: iData}) => {
                                if (iData.data) {
                                    convertItems(iData.data);
                                }
                            });


                        axios.post(`${config["wsUrl"]}/system/entities/getItemCount`, {sessionKey, entityId: data.data.id})
                            .then(({data: iData}) => {
                                if (iData.data) {
                                    setItemCount(iData.data["itemCount"]);
                                }
                            });

                    }
                });
        }

    });

    const controlAction = (action, itemId, filterItem = false) => {

        axios.post(`${config["wsUrl"]}/system/entities/${action}`, {sessionKey, itemId})
            .then(({data}) => {
                if (data.data) {
                    convertItems(items.map(item => {
                        return (item.id === data.data.id) ? data.data : item;
                    }));

                    if (filterItem) {
                        convertItems(items.filter(item => item.id !== itemId))
                    }
                }
            });

    };

    const showItemAddEditModal = item => {
        setTitleModalAddEdit(Number(item.id) === 0 ? "Добавить" : "Изменить");
        if (item.id === 0) {
            item.arrTranslations = [];
            for (const l of languages) {
                item.arrTranslations.push({
                    lang: l.lang,
                    body: "",
                    link: "",
                    urlName: "",
                    seoKeywords: "",
                    seoDescription: "",
                    title: "",
                    shortDescription: ""});
            }
        }
        setItemToEdit(item);
        setStateModalAddEdit(true);
    };

    const showEntitySEOModal = () => {
        setStateModalEntitySEO(true);
    };

    const saveEntity = () => {
        axios.post(`${config["wsUrl"]}/system/entities/saveEntity`,
        {
            sessionKey,
            entity: param,
            translations: Object.values(entityToSave.translations)
        }).then(() => {
            setEntity(null);
            setStateModalEntitySEO(false);
        })

    };

    const showItemImagesModal = item => {

        axios.post(`${config["wsUrl"]}/system/entities/getItemImages`, {sessionKey, itemId: item.id})
            .then(({data}) => {
                if (data.data) {
                    setItemImages(data.data);
                    setItemToEdit(item);
                    setStateModalImages(true);

                }
            });


    };

    const saveEntityItem = () => {

        axios.post(`${config["wsUrl"]}/system/entities/saveItem`,
            {sessionKey, ...itemToSave})
            .then(({data}) => {
                if (data.data && items) {
                    let newItems;
                    if (items.find(item => (item.id === data.data.id))) {
                        newItems = items.map(item => {
                            return (item.id === data.data.id) ? data.data : item;
                        });
                    } else {
                        newItems = [data.data];
                        for (const item of items) {
                            if (item.id !== data.data.id) newItems.push(item);
                        }
                    }
                    convertItems(newItems);
                    setStateModalAddEdit(false);
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
            if (form.querySelector('[name="objectType"]').value === 'entity_main') {
                setEntity(null);
            } else {
                showItemImagesModal(data.data);
                convertItems(items.map(item => {
                    return (item.id === data.data.id) ? data.data : item;
                }));
            }
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
                    showItemImagesModal(data.data);
                    convertItems(items.map(item => {
                        return (item.id === data.data.id) ? data.data : item;
                    }));
                }
            });

    };

    const moveItemImage = (itemId, imageId, sign) => {

        axios.post(`${config["wsUrl"]}/system/entities/moveImage`, {sessionKey, itemId, imageId, sign})
            .then(({data}) => {
                if (data.data) {
                    showItemImagesModal(data.data);
                    convertItems(items.map(item => {
                        return (item.id === data.data.id) ? data.data : item;
                    }));
                }
            });

    };

    const toggleItemImageVisibility = imageId => {

        axios.post(`${config["wsUrl"]}/system/entities/toggleImageVisibility`, {sessionKey, imageId})
            .then(({data}) => {
                if (data.data) {
                    showItemImagesModal(data.data);
                    convertItems(items.map(item => {
                        return (item.id === data.data.id) ? data.data : item;
                    }));
                }
            });

    };

    const changePage = event => {
        const clicked = Number(event.target.dataset.page);
        if (page !== clicked){
            setPage(clicked);
        }
    };

    return (
        <div className="entity">
            <div className="entity__header">
                {entity && entity.canCreateItem === 1 && <button className="btn btn-success" onClick={()=>{showItemAddEditModal({id: 0})}}>Создать</button>}
                {entity && entity.hasGlobalSeo === 1 && <button className="btn btn-secondary ml-3" onClick={showEntitySEOModal}>SEO Данные</button> }
            </div>
            <table className="table table-hover table-striped entity__table">
                <thead className="thead">
                <tr>
                    {entity && entity.name.substr(0,11)!=='techsupport' && <th className="th">Картинка</th>}
                    <th className="th">Заголовок</th>
                    <th className="th">Дата</th>
                    {
                        entity &&
                        Number(entity["hasArchive"]) > 0 &&
                        <th className="th">Состояние</th>
                    }
                    <th className="th"><FontAwesomeIcon icon={faCogs} /></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {

                    items.map(item => (
                        <tr key={item.id}>
                            {entity && entity.name.substr(0,11)!=='techsupport' && <td>{item.mainImage && <img className="entity__main-image" src={`${config.siteUrl}${item["mainImage"]}`}
                                      alt=""/>}</td>}
                            <td>{item.title}</td>
                            <td>{moment(item["showDate"]).format('DD/MM/YYYY HH:mm')}</td>
                            {
                                entity &&
                                Number(entity["hasArchive"]) > 0 &&
                                <td className="th">{item["isArchive"] ? "Архив" : "Основа"}</td>
                            }
                            <td className="entity__controls">
                                <FontAwesomeIcon className="ico-reload entity__control clickable"
                                                 icon={faSyncAlt}
                                                 title="Обновить"
                                                 onClick={()=>{controlAction("getItemById", item.id)}}

                                />
                                <FontAwesomeIcon className="ico-edit entity__control clickable"
                                                 icon={faPen}
                                                 title="Изменить"
                                                 onClick={()=>{showItemAddEditModal(item)}}

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
                                {param!=='about' && param!=='toplinks' && <FontAwesomeIcon
                                    className={
                                        classNames(
                                            "entity__control",
                                            "clickable",
                                            "ico-make-important")
                                    }
                                    icon={faTrash}
                                    title={"Удалить"}
                                    onClick={() => {
                                        if (window.confirm("Уверены?")) {
                                            const newItems = items.filter(itm => itm.id !== item.id);
                                            convertItems(newItems);
                                            controlAction("toggleItemImportance", item.id, true);
                                        }
                                    }}
                                />}
                                {
                                    entity &&
                                    Number(entity["hasArchive"])>0 &&
                                    <FontAwesomeIcon className="ico-archive entity__control clickable"
                                                     icon={faArchive}
                                                     title="В архив"
                                                     onClick={()=>{controlAction("toggleItemArchive", item.id)}}
                                    />
                                }
                                {entity && entity.name.substr(0,11)!=='techsupport' && <FontAwesomeIcon className="ico-images entity__control clickable"
                                                 icon={faImages}
                                                 title="Изображения"
                                                 onClick={()=>{showItemImagesModal(item)}}

                                />}
                                {item.urlName && <a className="entity__control" rel="noopener noreferrer"
                                    href={`${config.siteUrl}/article/${item.id}-${item.urlName}.html`} target="_blank">
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
            </table>

            <ul className="entity__pages">
                {
                    pages.map(pg => (
                        <li className="entity__page-item" key={pg} data-page={pg} onClick={changePage}>{pg+1}</li>
                    ))
                }
            </ul>

            <Modal
                show={stateModalEntitySEO}
                headText="SEO"
                dismissText="Закрыть"
                successText="Сохранить"
                onSuccess={saveEntity}
                onDismiss={() => {setStateModalEntitySEO(false)}}
            >
                <div className="image-edit">
                    <div className="main-image">
                        {entity &&
                        <div className="main-image-box">
                            <img className="main-image-image"
                                 width={100} height={100}
                                 src={`${config.siteUrl}${entity["mainImage"]}`} alt=""/>
                            <div className="main-image-buttons">
                                <form action={`${config.siteUrl}/upload/images/${entity.name}`} method="post"
                                      encType="multipart/form-data">
                                    <input className="hidden" id="mainEntityImg" type="file" name="file" required onChange={uploadImage} />
                                    <input type="hidden" name="objectType" value="entity_main"/>
                                    <input type="hidden" name="objectId" value={entity.id}/>
                                    <input type="hidden" name="sessionKey" value={sessionKey}/>
                                    <label htmlFor="mainEntityImg" className="w-100 btn btn-vertical btn-secondary"
                                           onClick={()=>(document.getElementById("mainEntityImg").value="")}>
                                        <FontAwesomeIcon className="ico-edit btn-icon" icon={faPen}/>Изменить
                                    </label>
                                </form>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                {
                    entity && <EntityEdit
                        entity={entity}
                        languages={languages}
                        lang={lang}
                        onEdit={
                            translations => {
                                entityToSave.translations = translations;
                            }
                        }
                    />
                }
            </Modal>

            <Modal
                show={stateModalAddEdit}
                headText={titleModalAddEdit}
                dismissText="Закрыть"
                successText="Сохранить"
                onSuccess={saveEntityItem}
                onDismiss={() => {setStateModalAddEdit(false)}} >
                {
                    itemToEdit && <EntityItemEdit
                        item={itemToEdit}
                        languages={languages}
                        entity={entity}
                        sessionKey={sessionKey}
                        siteUrl={cookie.get('siteUrl')}
                        lang={lang}
                        onEdit={(entity)=>{
                            itemToSave.itemId = entity.id;
                            itemToSave.param = param;
                            itemToSave.showDate = entity.showDate;
                            itemToSave.translations = [];
                            for (const key of Object.keys(entity.translations)) {
                                itemToSave.translations.push(entity["translations"][key]);
                            }
                        }}
                    />
                }
            </Modal>

            <Modal
                show={stateModalImages}
                dialogSize="modal-sm"
                headText="Изображения"
                dismissText="Закрыть"
                onSuccess={saveEntityItem}
                onDismiss={() => {setStateModalImages(false)}} >
                <div className="image-edit">
                    <div className="main-image">
                        <h3>Главное изображение</h3>
                        {itemToEdit && entity &&
                        <div className="main-image-box">
                            <img className="main-image-image"
                                 width={100} height={100}
                                 src={`${config.siteUrl}${itemToEdit["mainImage"]}`} alt=""/>
                            <div className="main-image-buttons">
                                <button className="w-100 btn btn-vertical btn-danger mb-2"
                                        onClick={()=>{deleteItemImage('entity_item_main', itemToEdit.id)}}
                                >
                                    <FontAwesomeIcon className="ico-delete btn-icon" icon={faTrash} />
                                    Удалить
                                </button>
                                <form action={`${config.siteUrl}/upload/images/${entity.name}`} method="post"
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
                    {entity && Number(entity.multiimage)>0 && itemImages && itemToEdit && <div className="other-images">
                        <h3 className="title">Дополнительные изображения</h3>
                        <div className="other-images-list">
                        {
                            itemImages.map(image => (
                                <div key={image.id} className="other-images-box">
                                    <img className="other-images-image" src={`${config.siteUrl}${image.imageFile}`} alt=""/>
                                    <div className="other-images-move">
                                        <button className="btn btn-round"
                                                onClick={() => {moveItemImage(itemToEdit.id, image.id, -1)}}
                                        >
                                            <FontAwesomeIcon icon={faArrowUp} />
                                        </button>
                                        <button className="btn btn-round"
                                                onClick={() => {moveItemImage(itemToEdit.id, image.id, 1)}}
                                        >
                                            <FontAwesomeIcon icon={faArrowDown} />
                                        </button>
                                    </div>
                                    <div className="other-images-buttons">
                                        <button className="w-100 btn btn-vertical btn-danger mb-2"
                                                onClick={()=>{deleteItemImage('entity_item_secondary', image.id)}}
                                        >
                                            <FontAwesomeIcon className="btn-icon" icon={faTrash} />
                                            Удалить
                                        </button>
                                        <button className="w-100 btn btn-vertical btn-secondary mb-2"
                                                onClick={()=>{toggleItemImageVisibility(image.id)}}
                                        >
                                            <FontAwesomeIcon className="btn-icon" icon={image.isVisible ? faEye : faEyeSlash} /> {image.isVisible ? "Скрыть" : "Показать"}
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <form action={`${config.siteUrl}/upload/images/${entity.name}`} method="post"
                              encType="multipart/form-data" >

                            <input className="hidden"
                                   type="file" id="secondaryImg"
                                   name="file" required
                                   onChange={uploadImage}
                            />
                            <input type="hidden" name="objectType"
                                   value="entity_item_secondary"/>
                            <input type="hidden" name="objectId" value={itemToEdit.id}/>
                            <input type="hidden" name="sessionKey"
                                   value={sessionKey}/>

                            <label htmlFor="secondaryImg" className="btn btn-primary"
                                   onClick={()=>(document.getElementById("secondaryImg").value="")}>
                                <FontAwesomeIcon className="btn-icon" icon={faPlus}/>Добавить
                            </label>
                        </form>
                    </div>}
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

export default Entity;