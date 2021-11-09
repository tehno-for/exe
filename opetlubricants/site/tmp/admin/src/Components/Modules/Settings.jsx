import React, {useState, useEffect} from 'react';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCogs } from '@fortawesome/free-solid-svg-icons';

import {Modal} from '../../Components';
import {TextInput, SearchInput} from '../FormElements';

import './Settings.scss';

const Settings = ({sessionKey, config}) => {
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [stateModalEditSetting, setStateModalEditSetting] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [modalFieldSettingBodyValue, setModalFieldSettingBodyValue] = useState("");

    useEffect(() => {
        setPage(0);
    }, []);

    useEffect(() => {
        const genPages = [];
        for(let i=0; i<itemCount/config["itemLimit"]; i++) {
            genPages.push(i);
        }
        setPages(genPages);
    }, [itemCount, config]);


    useEffect(() => {

        axios.post(`${config["wsUrl"]}/system/settings/getItemCount`, {sessionKey})
            .then(({data}) => {
                if(data.data) {
                    setItemCount(data.data["itemCount"]);
                }
            });

        axios.post(`${config["wsUrl"]}/system/settings/getItems`, {sessionKey, page, limit: config["itemLimit"]})
            .then(({data}) => {
                if(data.data) {
                    setItems(data.data);
                }
            });
    }, [page, config, sessionKey]);

    const changePage = event => {
        const clicked = Number(event.target.dataset.page);
        if (page !== clicked){
            setPage(clicked);
        }
    };

    const showModalEditSetting = name => {

        const item = items.find(obj => {
            return obj.name === name;
        });
        setCurrentItem(item);
        setModalFieldSettingBodyValue(item.body);
        setStateModalEditSetting(true);
    };

    const changeCurrentItem = event => {
        setModalFieldSettingBodyValue(event.target.value);
        setCurrentItem({...currentItem, body: event.target.value});
    };

    const onSuccessEdit = () => {

        axios.post(`${config["wsUrl"]}/system/settings/editItemValue`,
            {sessionKey, name: currentItem.name, value: currentItem.body})
            .then(({data}) => {
                const newItems = items.map(item => {
                    if (item.id === data.data.id) {
                        item = {...currentItem};
                    }
                    return item;
                });
                setItems(newItems);
                setStateModalEditSetting(false);
            });
    };

    const searchItemsByText = text => {

        axios.post(`${config["wsUrl"]}/system/settings/getItemsByText`,
            {sessionKey, text})
            .then(({data}) => {
                if (data.data) {
                    setItems(data.data);
                }
            });
    };

    return (
        <div className="settings">

            <div className="settings__header">
                <SearchInput placeholder="Поиск" onSearch={searchItemsByText} />
            </div>
            <table className="table table-hover table-striped settings__table">
                <thead className="thead">
                <tr>
                    <th className="th">Настройка</th>
                    <th className="th">Значение</th>
                    <th className="th"><FontAwesomeIcon icon={faCogs} /></th>
                </tr>
                </thead>
                <tbody className="tbody">
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <td className="text-nowrap">{item.description}</td>
                            <td>{item.body}</td>
                            <td><FontAwesomeIcon title="Изменить" className="ico-edit clickable" onClick={()=>showModalEditSetting(item.name)} icon={faPen} /></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ul className="settings__pages">
                {
                    pages.map(pg => (
                        <li className="settings__page-item" key={pg} data-page={pg} onClick={changePage}>{pg+1}</li>
                    ))
                }
            </ul>
            <Modal show={stateModalEditSetting}
                   headText="Изменить"
                   dismissText="Закрыть"
                   successText="Сохранить"
                   onSuccess={onSuccessEdit}
                   onDismiss={() => {setStateModalEditSetting(false)}} >
                <TextInput value={modalFieldSettingBodyValue} onChange={changeCurrentItem}/>
            </Modal>
        </div>
    )
};

export default Settings;