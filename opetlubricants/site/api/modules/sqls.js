module.exports = {
    site: {
        getInitialObjects: 'call sitep_get_initial_objects(?, ?)',
        getEntityById: 'call sitep_get_entity_by_id(?, ?, ?)',
        getEntitiesByType: 'call sitep_get_entities_by_type(?, ?, ?, ?, ?)',
        getEntityTypeDetails: 'call sitep_get_entity_type_details(?, ?, ?)',
    },

    system: {
        login: 'call sysp_login(?, ?)',
        changePassword: 'call sysp_change_password(?, ?, ?)',
        getUserInfoBySession: 'call sysp_users_get_id_by_session(?)',
        getUserModules: 'call sysp_users_get_modules(?)',
        getLanguagesByCompany: 'call asm_system_p_get_languages(?)',
        uploadImage: 'call asm_system_p_upload_image(?, ?, ?, ?, ?)',
        deleteImage: 'call asm_system_p_delete_image(?, ?, ?)',
    },

    settings: {
        getItems: 'call asm_settings_p_get_items(?, ?, ?)',
        getItemCount: 'call asm_settings_p_get_item_count(?)',
        getItemsByText: 'call asm_settings_p_get_by_text(?, ?)',
        editItemValue: 'call asm_settings_p_edit_value(?, ?, ?)',
    },

    translations: {
        getItems: 'call asm_translations_p_get_items(?, ?, ?)',
        getItemCount: 'call asm_translations_p_get_item_count(?)',
        getItemsByText: 'call asm_translations_p_get_by_text(?, ?)',
        editItemValues: 'call asm_translations_p_edit(?, ?, ?)',
    },

    entities: {
        getParams: 'call asm_entities_p_get_type(?, ?)',
        saveEntity: 'call asm_entities_p_save_entity(?, ?, ?)',
        getItems: 'call asm_entities_p_get_items(?, ?, ?, ?)',
        getItemCount: 'call asm_entities_p_get_item_count(?, ?)',
        getItemById: 'call asm_entities_p_get_item_by_id(?, ?)',
        getItemImages: 'call asm_entities_p_get_item_images(?, ?)',
        moveImage: 'call asm_entities_p_move_image(?, ?, ?, ?)',
        toggleImageVisibility: 'call asm_entities_p_toggle_image_visibility(?, ?)',
        toggleItemVisibility: 'call asm_entities_p_toggle_item_visibility(?, ?)',
        toggleItemImportance: 'call asm_entities_p_toggle_item_importance(?, ?)',
        toggleItemArchive: 'call asm_entities_p_toggle_item_archive(?, ?)',
        saveItem: 'call asm_entities_p_save_item(?, ?, ?, ?, ?)',
    },
};
