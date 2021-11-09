import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {TextInput} from "../FormElements";
import {Editor} from "@tinymce/tinymce-react";

const ProductDetail = ({className, item, sessionKey, siteUrl, onChangeItem}) => {

    const [urlName, setUrlName] = useState("");
    const [seoKeywords, setSeoKeywords] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [editor, setEditor] = useState(null);

    const [link1Icon, setLink1Icon] = useState("");
    const [link1Name, setLink1Name] = useState("");
    const [link1Url, setLink1Url] = useState("");
    const [link1Svg, setLink1Svg] = useState("");

    const [link2Icon, setLink2Icon] = useState("");
    const [link2Name, setLink2Name] = useState("");
    const [link2Url, setLink2Url] = useState("");
    const [link2Svg, setLink2Svg] = useState("");

    const [link3Icon, setLink3Icon] = useState("");
    const [link3Name, setLink3Name] = useState("");
    const [link3Url, setLink3Url] = useState("");
    const [link3Svg, setLink3Svg] = useState("");


    useEffect(() => {
        setUrlName(item.urlName ? item.urlName : "");
        setDescription(item.description ? item.description : "");
        setName(item.name ? item.name : "");
        setSeoDescription(item.seoDescription ? item.seoDescription : "");
        setSeoKeywords(item.seoKeywords ? item.seoKeywords : "");
        if (editor) {
            editor.setContent(item.description ? item.description : "");
        }

        if (item.productDetailLinks && item.productDetailLinks[0]) {
            setLink1Name(item.productDetailLinks[0].name ? item.productDetailLinks[0].name : "");
            setLink1Icon(item.productDetailLinks[0].icon ? item.productDetailLinks[0].icon : "");
            setLink1Url(item.productDetailLinks[0].url ? item.productDetailLinks[0].url : "");
            setLink1Svg(item.productDetailLinks[0].svg ? item.productDetailLinks[0].svg : "");
        } else {
            setLink1Name("");
            setLink1Icon("");
            setLink1Url("");
            setLink1Svg("");
        }
        
        if (item.productDetailLinks && item.productDetailLinks[1]) {
            setLink2Name(item.productDetailLinks[1].name ? item.productDetailLinks[1].name : "");
            setLink2Icon(item.productDetailLinks[1].icon ? item.productDetailLinks[1].icon : "");
            setLink2Url(item.productDetailLinks[1].url ? item.productDetailLinks[1].url : "");
            setLink2Svg(item.productDetailLinks[1].svg ? item.productDetailLinks[1].svg : "");
        } else {
            setLink2Name("");
            setLink2Icon("");
            setLink2Url("");
            setLink2Svg("");
        }
        
        if (item.productDetailLinks && item.productDetailLinks[2]) {
            setLink3Name(item.productDetailLinks[2].name ? item.productDetailLinks[2].name : "");
            setLink3Icon(item.productDetailLinks[2].icon ? item.productDetailLinks[2].icon : "");
            setLink3Url(item.productDetailLinks[2].url ? item.productDetailLinks[2].url : "");
            setLink3Svg(item.productDetailLinks[2].svg ? item.productDetailLinks[2].svg : "");
        } else {
            setLink3Name("");
            setLink3Icon("");
            setLink3Url("");
            setLink3Svg("");
        }
    }, [item, editor]);

    useEffect(() => {
        onChangeItem({
            lang: item.lang,
            urlName,
            seoKeywords,
            seoDescription,
            description,
            name,
            link1Icon,
            link1Name,
            link1Url,
            link1Svg,
            link2Icon,
            link2Name,
            link2Url,
            link2Svg,
            link3Icon,
            link3Name,
            link3Url,
            link3Svg
        })
    }, [item, onChangeItem, urlName, seoKeywords, seoDescription, description, name, link1Icon, link1Name,
        link1Url, link1Svg, link2Icon, link2Name, link2Url, link2Svg, link3Icon, link3Name, link3Url, link3Svg]);

    const handleEditorChange = (data, editor) => {
        setDescription(data);
    }

    return (
        <div className={classNames(className, "entity-item-details")} data-lang={item.lang}>
            <label htmlFor={`urlNameItemDetail${item.lang}`}>Url Name *</label>
            <TextInput required id={`urlNameItemDetail${item.lang}`} value={urlName} onChange={event=>{setUrlName(event.target.value);}}/>
            <label htmlFor={`nameItemDetail${item.lang}`}>Name *</label>
            <TextInput required id={`nameItemDetail${item.lang}`} value={name} onChange={event=>{setName(event.target.value);}}/>
            <label htmlFor={`seoDescriptionItemDetail${item.lang}`}>Seo Description</label>
            <TextInput id={`seoDescriptionItemDetail${item.lang}`} value={seoDescription} onChange={event=>{setSeoDescription(event.target.value);}}/>
            <label htmlFor={`seoKeywordsItemDetail${item.lang}`}>Seo Keywords</label>
            <TextInput id={`seoKeywordsItemDetail${item.lang}`} value={seoKeywords} onChange={event=>{setSeoKeywords(event.target.value);}}/>
            <Editor
                apiKey="bxy8y2bkefsd84rsn9fvqio1wlni21rzb8y7f34bo56hrhca"
                initialValue={description}
                init={{
                    setup: editor => {
                        setEditor(editor);
                    },
                    height: 400,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen image table hr charmap nonbreaking pagebreak legacyoutput',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: [
                        'undo redo | media | image | bold italic forecolor backcolor | link anchor charmap nonbreaking pagebreak | removeformat',
                        'alignleft aligncenter alignright alignjustify | hr fontselect fontsizeselect styleselect | bullist outdent indent |  ',
                        'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol '
                    ]
                }}
                onEditorChange={handleEditorChange}
            />
            <hr className="mt-2 mb-2"/>
            <label htmlFor={`link1NameItemDetail${item.lang}`}>Link 1 Name</label>
            <TextInput id={`link1NameItemDetail${item.lang}`} value={link1Name} onChange={event=>{setLink1Name(event.target.value);}}/>
            <label htmlFor={`link1IconItemDetail${item.lang}`}>Link 1 Icon</label>
            <TextInput id={`link1IconItemDetail${item.lang}`} value={link1Icon} onChange={event=>{setLink1Icon(event.target.value);}}/>
            <label htmlFor={`link1UrlItemDetail${item.lang}`}>Link 1 Url</label>
            <TextInput id={`link1UrlItemDetail${item.lang}`} value={link1Url} onChange={event=>{setLink1Url(event.target.value);}}/>
            <label htmlFor={`link1SvgItemDetail${item.lang}`}>Link 1 Svg</label>
            <TextInput id={`link1SvgItemDetail${item.lang}`} value={link1Svg} onChange={event=>{setLink1Svg(event.target.value);}}/>
            <hr className="mt-2 mb-2"/>
            <label htmlFor={`link2NameItemDetail${item.lang}`}>Link 2 Name</label>
            <TextInput id={`link2NameItemDetail${item.lang}`} value={link2Name} onChange={event=>{setLink2Name(event.target.value);}}/>
            <label htmlFor={`link2IconItemDetail${item.lang}`}>Link 2 Icon</label>
            <TextInput id={`link2IconItemDetail${item.lang}`} value={link2Icon} onChange={event=>{setLink2Icon(event.target.value);}}/>
            <label htmlFor={`link2UrlItemDetail${item.lang}`}>Link 2 Url</label>
            <TextInput id={`link2UrlItemDetail${item.lang}`} value={link2Url} onChange={event=>{setLink2Url(event.target.value);}}/>
            <label htmlFor={`link2SvgItemDetail${item.lang}`}>Link 2 Svg</label>
            <TextInput id={`link2SvgItemDetail${item.lang}`} value={link2Svg} onChange={event=>{setLink2Svg(event.target.value);}}/>
            <hr className="mt-2 mb-2"/>
            <label htmlFor={`link3NameItemDetail${item.lang}`}>Link 3 Name</label>
            <TextInput id={`link3NameItemDetail${item.lang}`} value={link3Name} onChange={event=>{setLink3Name(event.target.value);}}/>
            <label htmlFor={`link3IconItemDetail${item.lang}`}>Link 3 Icon</label>
            <TextInput id={`link3IconItemDetail${item.lang}`} value={link3Icon} onChange={event=>{setLink3Icon(event.target.value);}}/>
            <label htmlFor={`link3UrlItemDetail${item.lang}`}>Link 3 Url</label>
            <TextInput id={`link3UrlItemDetail${item.lang}`} value={link3Url} onChange={event=>{setLink3Url(event.target.value);}}/>
            <label htmlFor={`link3SvgItemDetail${item.lang}`}>Link 3 Svg</label>
            <TextInput id={`link3SvgItemDetail${item.lang}`} value={link3Svg} onChange={event=>{setLink3Svg(event.target.value);}}/>
        </div>
    )
};

export default ProductDetail;