/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

$(document).ready(function() {
    window.catLabel = $('#catDropdown')
        .find('.module-category-selector-label')
        .text();
    var controller = new AdminModuleController();
    controller.init();
});

/**
 * Module Admin Page Controller.
 * @constructor
 */
var AdminModuleController = function() {
    this.currentDisplay = '';
    this.isCategoryGridDisplayed = false;
    this.currentTagsList = [];
    window.currentRefCategory = null;
    window.currentRefStatus = null;
    this.currentSorting = null;
    this.baseAddonsUrl = 'https://addons.prestashop.com/';
    this.pstaggerInput = null;
    this.lastBulkAction = null;
    this.isUploadStarted = false;
    this.baseAdminDir = '';

    /**
     * Loaded modules list.
     * Containing the card and list display.
     * @type {Array}
     */
    this.modulesList = [];
    this.addonsCardGrid = null;
    this.addonsCardList = null;

    // Selectors into vars to make it easier to change them while keeping same code logic
    this.moduleItemGridSelector = '.module-item-grid';
    this.moduleItemListSelector = '.module-item-list';
    this.categorySelectorLabelSelector = '.module-category-selector-label';
    this.categorySelector = '.module-category-selector';
    this.categoryItemSelector = '.module-category-menu';
    this.addonsLoginButtonSelector = '#addons_login_btn';
    this.categoryResetBtnSelector = '.module-category-reset';
    this.moduleInstallBtnSelector = 'input.module-install-btn';
    this.moduleSortingDropdownSelector = '.module-sorting-author select';
    this.categoryGridSelector = '#modules-categories-grid';
    this.categoryGridItemSelector = '.module-category-item';
    this.addonItemGridSelector = '.module-addons-item-grid';
    this.addonItemListSelector = '.module-addons-item-list';

    // Upgrade All selectors
    this.upgradeAllSource = '.module_action_menu_upgrade_all';
    this.upgradeAllTargets =
        '#modules-list-container-update .module_action_menu_upgrade:visible';

    // Bulk action selectors
    this.bulkActionDropDownSelector = '.module-bulk-actions select';
    this.checkedBulkActionListSelector =
        '.module-checkbox-bulk-list input:checked';
    this.checkedBulkActionGridSelector =
        '.module-checkbox-bulk-grid input:checked';
    this.bulkActionCheckboxGridSelector = '.module-checkbox-bulk-grid';
    this.bulkActionCheckboxListSelector = '.module-checkbox-bulk-list';
    this.bulkActionCheckboxSelector = '#module-modal-bulk-checkbox';
    this.bulkConfirmModalSelector = '#module-modal-bulk-confirm';
    this.bulkConfirmModalActionNameSelector =
        '#module-modal-bulk-confirm-action-name';
    this.bulkConfirmModalListSelector = '#module-modal-bulk-confirm-list';
    this.bulkConfirmModalAckBtnSelector = '#module-modal-confirm-bulk-ack';

    // Placeholders
    this.placeholderGlobalSelector = '.module-placeholders-wrapper';
    this.placeholderFailureGlobalSelector = '.module-placeholders-failure';
    this.placeholderFailureMsgSelector = '.module-placeholders-failure-msg';
    this.placeholderFailureRetryBtnSelector =
        '#module-placeholders-failure-retry';

    // Module's statuses selectors
    this.statusSelectorLabelSelector = '.module-status-selector-label';
    this.statusItemSelector = '.module-status-menu';
    this.statusResetBtnSelector = '.module-status-reset';

    // Selectors for Module Import and Addons connect
    this.addonsConnectModalBtnSelector =
        '#page-header-desc-configuration-addons_connect';
    this.addonsLogoutModalBtnSelector =
        '#page-header-desc-configuration-addons_logout';
    this.addonsImportModalBtnSelector =
        '#page-header-desc-configuration-add_module';
    this.dropZoneModalSelector = '#module-modal-import';
    this.dropZoneModalFooterSelector = '#module-modal-import .modal-footer';
    this.dropZoneImportZoneSelector = '#importDropzone';
    this.addonsConnectModalSelector = '#module-modal-addons-connect';
    this.addonsLogoutModalSelector = '#module-modal-addons-logout';
    this.addonsConnectForm = '#addons-connect-form';
    this.moduleImportModalCloseBtn = '#module-modal-import-closing-cross';
    this.moduleImportStartSelector = '.module-import-start';
    this.moduleImportProcessingSelector = '.module-import-processing';
    this.moduleImportSuccessSelector = '.module-import-success';
    this.moduleImportSuccessConfigureBtnSelector =
        '.module-import-success-configure';
    this.moduleImportFailureSelector = '.module-import-failure';
    this.moduleImportFailureRetrySelector = '.module-import-failure-retry';
    this.moduleImportFailureDetailsBtnSelector =
        '.module-import-failure-details-action';
    this.moduleImportSelectFileManualSelector =
        '.module-import-start-select-manual';
    this.moduleImportFailureMsgDetailsSelector =
        '.module-import-failure-details';
    this.moduleImportConfirmSelector = '.module-import-confirm';

    /**
     * Initialize all listners and bind everything
     * @method init
     * @memberof AdminModule
     */
    this.init = function() {
        this.loadVariables();
        this.initSortingDisplaySwitch();
        this.initSortingDropdown();
        this.initSearchBlock();
        this.initCategorySelect();
        this.initCategoriesGrid();
        this.initActionButtons();
        this.initAddonsSearch();
        this.initAddonsConnect();
        this.initAddModuleAction();
        this.initDropzone();
        this.initPageChangeProtection();
        this.initBulkActions();
        this.initPlaceholderMechanism();
        this.initFilterStatusDropdown();
        this.fetchModulesList();
    };

    this.initFilterStatusDropdown = function() {
        var self = this;
        var body = $('body');
        body.on('click', this.statusItemSelector, function() {
            // Get data from li DOM input
            window.currentRefStatus = parseInt($(this).attr('data-status-ref'));
            var statusSelectedDisplayName = $(this)
                .find('a:first')
                .text();
            // Change dropdown label to set it to the current status' displayname
            $(self.statusSelectorLabelSelector).text(statusSelectedDisplayName);
            $(self.statusResetBtnSelector).show();
            // Do Search on categoryRef
            self.updateModuleVisibility();
        });

        body.on('click', this.statusResetBtnSelector, function() {
            var text = $(this)
                .find('a')
                .text();
            $(self.statusSelectorLabelSelector).text(text);
            $(this).hide();
            window.currentRefStatus = null;
            self.updateModuleVisibility();
        });
    };

    this.initBOEventRegistering = function() {
        BOEvent.on('Module Disabled', this.onModuleDisabled, this);
        BOEvent.on('Module Uninstalled', this.updateTotalResults, this);
    };

    this.onModuleDisabled = function() {
        var moduleItemSelector = this.getModuleItemSelector();
        var self = this;

        $('.modules-list').each(function() {
            var totalForCurrentSelector = $(this).find(
                moduleItemSelector + ':visible'
            ).length;
            self.updateTotalResults(totalForCurrentSelector, $(this));
        });
    };

    this.initPlaceholderMechanism = function() {
        var self = this;

        if ($(this.placeholderGlobalSelector).length) {
            this.ajaxLoadPage();
        }

        // Retry loading mechanism
        $('body').on(
            'click',
            this.placeholderFailureRetryBtnSelector,
            function() {
                $(self.placeholderFailureGlobalSelector).fadeOut();
                $(self.placeholderGlobalSelector).fadeIn();
                self.ajaxLoadPage();
            }
        );
    };

    this.fetchModulesList = function() {
        var self = this;
        self.modulesList = [];
        $('.modules-list').each(function() {
            var container = $(this);
            container.find('.module-item').each(function() {
                var $this = $(this);
                self.modulesList.push({
                    domObject: $this,
                    id: $this.attr('data-id'),
                    name:
                        typeof $this.attr('data-name') !== 'undefined'
                            ? $this.attr('data-name').toLowerCase()
                            : '',
                    scoring: parseFloat($this.attr('data-scoring')),
                    logo: $this.attr('data-logo'),
                    author:
                        typeof $this.attr('data-author') !== 'undefined'
                            ? $this.attr('data-author').toLowerCase()
                            : '',
                    version: $this.attr('data-version'),
                    description:
                        typeof $this.attr('data-description') !== 'undefined'
                            ? $this.attr('data-description').toLowerCase()
                            : '',
                    techName:
                        typeof $this.attr('data-tech-name') !== 'undefined'
                            ? $this.attr('data-tech-name').toLowerCase()
                            : '',
                    childCategories: $this.attr('data-child-categories'),
                    categories:
                        typeof $this.attr('data-categories') !== 'undefined'
                            ? $this.attr('data-categories').toLowerCase()
                            : '',
                    type: $this.attr('data-type'),
                    price: parseFloat($this.attr('data-price')),
                    active: parseInt($this.attr('data-active')),
                    access: $this.attr('data-last-access'),
                    display: $this.hasClass('module-item-list')
                        ? 'list'
                        : 'grid',
                    container: container
                });
            });
        });
        self.addonsCardGrid = $(this.addonItemGridSelector);
        self.addonsCardList = $(this.addonItemListSelector);
    };

    this.updateModuleVisibility = function() {
        var self = this;

        if (self.currentSorting) {
            // Modules sorting
            var order = 'asc';
            var key = self.currentSorting;
            if (key.split('-').length > 1) {
                key = key.split('-')[0];
            }
            if (self.currentSorting.indexOf('-desc') != -1) {
                order = 'desc';
            }

            function currentCompare(a, b) {
                if (a['attributes'][key] < b['attributes'][key]) return -1;
                if (a['attributes'][key] > b['attributes'][key]) return 1;
                return 0;
            }

            window.vApp.modules.sort(currentCompare);
            if (order == 'desc') {
                window.vApp.modules.reverse();
            }
        }

        // Modules visibility management
        for (var i = 0; i < window.vApp.modules.length; i++) {
            var currentModule = window.vApp.modules[i];

            var isVisible = true;
            if (window.currentRefCategory !== null) {
                if (window.currentRefCategory == 'Other' && 
                    currentModule.attributes.categoryName != '' &&
                    currentModule.attributes.categoryParent != ''
                ) {
                    isVisible = false;
                } else if (
                    currentModule.attributes.categoryName !=
                        window.currentRefCategory &&
                    currentModule.attributes.categoryParent !=
                        window.currentRefCategory
                ) {
                    isVisible = false;
                }
            }

            if (window.currentRefCategory == 'Other' && (
                currentModule.attributes.categoryName == '' ||
                    currentModule.attributes.categoryParent == ''
            )) {
                isVisible = true;
                window.vApp.modules[i].attributes.visible = true;
            }

            if (window.currentRefStatus !== null) {
                isVisible =
                    currentModule.attributes.visible ===
                    window.currentRefStatus;
            }

            var tagExists = false;
            if (self.currentTagsList.length) {
                $.each(self.currentTagsList, function(index, value) {
                    value = value.toLowerCase();

                    tagExists =
                        currentModule.attributes.displayName
                            .toLowerCase()
                            .indexOf(value) != -1 ||
                        currentModule.attributes.description
                            .toLowerCase()
                            .indexOf(value) != -1 ||
                        currentModule.attributes.author
                            .toLowerCase()
                            .indexOf(value) != -1 ||
                        currentModule.attributes.name
                            .toLowerCase()
                            .indexOf(value) != -1;
                });

                isVisible = tagExists && currentModule.attributes.visible;
            }

            if (isVisible) {
                window.vApp.modules[i].attributes.visible = true;
            } else {
                window.vApp.modules[i].attributes.visible = false;
            }
        }

        if (self.currentTagsList.length) {
            var urlString = '';
            $.each(self.currentTagsList, function(index, value) {
                value = value.toLowerCase();
                urlString = urlString + ' ' + value;
            });

            $('#see-results-addons a.url').attr(
                'href',
                'https://addons.prestashop.com/en/search?search_query=' +
                    urlString
            );
            $('#see-results-addons').removeClass('hidden');
        } else {
            $('#see-results-addons').addClass('hidden');
        }
    };

    this.initPageChangeProtection = function() {
        var self = this;

        $(window).on('beforeunload', function() {
            if (self.isUploadStarted === true) {
                return 'It seems some critical operation are running, are you sure you want to change page ? It might cause some unexepcted behaviors.';
            }
        });
    };

    this.initBulkActions = function() {
        var self = this;
        var body = $('body');

        body.on('change', this.bulkActionDropDownSelector, function() {
            if (0 === $(self.getBulkCheckboxesCheckedSelector()).length) {
                $.growl.warning({
                    message:
                        translate_javascripts[
                            'Bulk Action - One module minimum'
                        ]
                });
                return;
            }
            self.lastBulkAction = $(this)
                .find(':checked')
                .attr('value');
            var modulesListString = self.buildBulkActionModuleList();
            var actionString = $(this)
                .find(':checked')
                .text()
                .toLowerCase();
            $(self.bulkConfirmModalListSelector).html(modulesListString);
            $(self.bulkConfirmModalActionNameSelector).text(actionString);

            if (self.lastBulkAction !== 'bulk-uninstall') {
                $(self.bulkActionCheckboxSelector).hide();
            }
            $(self.bulkConfirmModalSelector).modal('show');
        });

        body.on('click', this.bulkConfirmModalAckBtnSelector, function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(self.bulkConfirmModalSelector).modal('hide');
            self.doBulkAction(self.lastBulkAction);
        });
    };

    this.buildBulkActionModuleList = function() {
        var checkBoxesSelector = this.getBulkCheckboxesCheckedSelector();
        var moduleItemSelector = this.getModuleItemSelector();
        var alreadyDoneFlag = 0;
        var htmlGenerated = '';

        $(checkBoxesSelector).each(function() {
            if (alreadyDoneFlag != 10) {
                var currentElement = $(this).parents(moduleItemSelector);
                htmlGenerated +=
                    '- ' + currentElement.attr('data-name') + '<br/>';
                alreadyDoneFlag += 1;
            } else {
                // Break each
                htmlGenerated += '- ...';
                return false;
            }
        });

        return htmlGenerated;
    };

    this.initAddonsConnect = function() {
        var self = this;

        // Make addons connect modal ready to be clicked
        if ($(this.addonsConnectModalBtnSelector).attr('href') == '#') {
            $(this.addonsConnectModalBtnSelector).attr('data-toggle', 'modal');
            $(this.addonsConnectModalBtnSelector).attr(
                'data-target',
                this.addonsConnectModalSelector
            );
        }
        if ($(this.addonsLogoutModalBtnSelector).attr('href') == '#') {
            $(this.addonsLogoutModalBtnSelector).attr('data-toggle', 'modal');
            $(this.addonsLogoutModalBtnSelector).attr(
                'data-target',
                this.addonsLogoutModalSelector
            );
        }
        $('body').on('submit', this.addonsConnectForm, function(event) {
            event.preventDefault();
            event.stopPropagation();

            $.ajax({
                method: 'POST',
                url: $(this).attr('action'),
                dataType: 'json',
                data: $(this).serialize(),
                beforeSend: function() {
                    $(self.addonsLoginButtonSelector).show();
                    $(
                        "button.btn[type='submit']",
                        self.addonsConnectForm
                    ).hide();
                }
            }).done(function(response) {
                var responseCode = response.success;
                var responseMsg = response.message;

                if (responseCode === 1) {
                    location.reload();
                } else {
                    $.growl.error({ message: responseMsg });
                    $(self.addonsLoginButtonSelector).hide();
                    $(
                        "button.btn[type='submit']",
                        self.addonsConnectForm
                    ).fadeIn();
                }
            });
        });
    };

    this.initAddModuleAction = function() {
        var addModuleButton = $(this.addonsImportModalBtnSelector);
        addModuleButton.attr('data-toggle', 'modal');
        addModuleButton.attr('data-target', this.dropZoneModalSelector);
    };

    this.initDropzone = function() {
        var self = this;
        var body = $('body');
        var dropzone = $('.dropzone');

        // Reset modal when click on Retry in case of failure
        body.on('click', this.moduleImportFailureRetrySelector, function() {
            $(
                self.moduleImportSuccessSelector +
                    ', ' +
                    self.moduleImportFailureSelector +
                    ', ' +
                    self.moduleImportProcessingSelector
            ).fadeOut(function() {
                // Added timeout for a better render of animation and avoid to have displayed at the same time
                setTimeout(function() {
                    $(self.moduleImportStartSelector).fadeIn(function() {
                        $(self.moduleImportFailureMsgDetailsSelector).hide();
                        $(self.moduleImportSuccessConfigureBtnSelector).hide();
                        dropzone.removeAttr('style');
                    });
                }, 550);
            });
        });

        // Reinit modal on exit, but check if not already processing something
        body.on('hidden.bs.modal', this.dropZoneModalSelector, function() {
            $(
                self.moduleImportSuccessSelector +
                    ', ' +
                    self.moduleImportFailureSelector
            ).hide();
            $(self.moduleImportStartSelector).show();
            dropzone.removeAttr('style');
            $(self.moduleImportFailureMsgDetailsSelector).hide();
            $(self.moduleImportSuccessConfigureBtnSelector).hide();
            $(self.dropZoneModalFooterSelector).html('');
            $(self.moduleImportConfirmSelector).hide();
        });

        // Change the way Dropzone.js lib handle file input trigger
        body.on(
            'click',
            '.dropzone:not(' +
                this.moduleImportSelectFileManualSelector +
                ', ' +
                this.moduleImportSuccessConfigureBtnSelector +
                ')',
            function(event, manual_select) {
                // if click comes from .module-import-start-select-manual, stop everything
                if (typeof manual_select == 'undefined') {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        );

        body.on('click', this.moduleImportSelectFileManualSelector, function(
            event
        ) {
            event.stopPropagation();
            event.preventDefault();

            // Trigger click on hidden file input, and pass extra data to .dropzone click handler fro it to notice it comes from here
            $('#importDropzone').trigger('click', ['manual_select']);
        });

        // Handle modal closure
        body.on('click', this.moduleImportModalCloseBtn, function() {
            if (self.isUploadStarted === true) {
                // @TODO: Display tooltip saying you can't escape at this stage
            } else {
                $(self.dropZoneModalSelector).modal('hide');
            }
        });

        // Fix issue on click configure button
        body.on('click', this.moduleImportSuccessConfigureBtnSelector, function(
            event
        ) {
            event.stopPropagation();
            event.preventDefault();
            window.location = $(this).attr('href');
        });

        // Open failure message details box
        body.on(
            'click',
            this.moduleImportFailureDetailsBtnSelector,
            function() {
                $(self.moduleImportFailureMsgDetailsSelector).slideDown();
            }
        );

        // @see: dropzone.js
        var dropzoneOptions = {
            url: $('#install_url').val(),
            acceptedFiles: '.zip, .tar',
            // The name that will be used to transfer the file
            paramName: 'file_uploaded',
            maxFilesize: 50, // can't be greater than 50Mb because it's an addons limitation
            uploadMultiple: false,
            addRemoveLinks: true,
            dictDefaultMessage: '',
            hiddenInputContainer: self.dropZoneImportZoneSelector,
            addedfile: function() {
                self.animateStartUpload();
            },
            processing: function() {
                // Leave it empty since we don't require anything while processing upload
            },
            sending: function() {
                // Prevent JS errors
            },
            uploadprogress: function() {
                // Prevent JS errors
            },
            success: function() {
                // Prevent JS errors
            },
            error: function(file, message) {
                self.displayOnUploadError(message);
            },
            complete: function(file) {
                if (file.status !== 'error') {
                    var responseObject = jQuery.parseJSON(file.xhr.response);
                    if (typeof responseObject.is_configurable === 'undefined')
                        responseObject.is_configurable = null;
                    if (typeof responseObject.module_name === 'undefined')
                        responseObject.module_name = null;

                    self.displayOnUploadDone(responseObject);
                }
                // State that we have finish the process to unlock some actions
                self.isUploadStarted = false;
            }
        };
        dropzone.dropzone($.extend(dropzoneOptions));

        this.animateStartUpload = function() {
            // State that we start module upload
            self.isUploadStarted = true;
            $(self.moduleImportStartSelector).hide(0);
            dropzone.css('border', 'none');
            $(self.moduleImportProcessingSelector).fadeIn();
        };

        this.animateEndUpload = function(callback) {
            $(self.moduleImportProcessingSelector)
                .finish()
                .fadeOut(callback);
        };

        /**
         * Method to call for upload modal, when the ajax call went well.
         *
         * @param object result containing the server response
         */
        this.displayOnUploadDone = function(result) {
            var self = this;
            self.animateEndUpload(function() {
                if (result.status === true) {
                    if (result.is_configurable === true) {

                        $(self.moduleImportSuccessConfigureBtnSelector).attr(
                            'href',
                            window.mboJavascriptUrls['configure'].replace(
                                '%25module_name%25', // not ideal but json_encode changes the '%' to '%25'
                                result.module_name
                            )
                        );
                        $(self.moduleImportSuccessConfigureBtnSelector).show();
                    } else {
                        $('.module-import-success-configure').hide();
                    }
                    $(self.moduleImportSuccessSelector).fadeIn();
                } else if (typeof result.confirmation_subject !== 'undefined') {
                    self.displayPrestaTrustStep(result);
                } else {
                    $(self.moduleImportFailureMsgDetailsSelector).html(
                        result.msg
                    );
                    $(self.moduleImportFailureSelector).fadeIn();
                }
            });
        };

        /**
         * Method to call for upload modal, when the ajax call went wrong or when the action requested could not
         * succeed for some reason.
         *
         * @param string message explaining the error.
         */
        this.displayOnUploadError = function(message) {
            self.animateEndUpload(function() {
                $(self.moduleImportFailureMsgDetailsSelector).html(message);
                $(self.moduleImportFailureSelector).fadeIn();
            });
        };

        /**
         * If PrestaTrust needs to be confirmed, we ask for the confirmation modal content and we display it in the
         * currently displayed one. We also generate the ajax call to trigger once we confirm we want to install
         * the module.
         *
         * @param Previous server response result
         */
        this.displayPrestaTrustStep = function(result) {
            var self = this;
            var modal = module_card_controller.replacePrestaTrustPlaceholders(
                result
            );
            var moduleName = result.module.attributes.name;
            $(this.moduleImportConfirmSelector)
                .html(modal.find('.modal-body').html())
                .fadeIn();
            $(this.dropZoneModalFooterSelector)
                .html(modal.find('.modal-footer').html())
                .fadeIn();
            $(this.dropZoneModalFooterSelector)
                .find('.pstrust-install')
                .off('click')
                .on('click', function() {
                    $(self.moduleImportConfirmSelector).hide();
                    $(self.dropZoneModalFooterSelector).html('');
                    self.animateStartUpload();

                    // Install ajax call
                    $.post(result.module.attributes.urls.install, {
                        'actionParams[confirmPrestaTrust]': '1'
                    })
                        .done(function(data) {
                            self.displayOnUploadDone(data[moduleName]);
                        })
                        .fail(function(data) {
                            self.displayOnUploadError(data[moduleName]);
                        })
                        .always(function() {
                            self.isUploadStarted = false;
                        });
                });
        };
    };

    this.getBulkCheckboxesSelector = function() {
        return this.currentDisplay == 'grid'
            ? this.bulkActionCheckboxGridSelector
            : this.bulkActionCheckboxListSelector;
    };

    this.getBulkCheckboxesCheckedSelector = function() {
        return this.currentDisplay == 'grid'
            ? this.checkedBulkActionGridSelector
            : this.checkedBulkActionListSelector;
    };

    this.loadVariables = function() {
        this.initCurrentDisplay();

        // If index.php found in the current URL, we need it also in the baseAdminDir
        // noinspection JSUnresolvedVariable
        this.baseAdminDir = baseAdminDir;
        if (window.location.href.indexOf('index.php') != -1) {
            this.baseAdminDir += 'index.php/';
        }
    };

    this.getModuleItemSelector = function() {
        return this.currentDisplay == 'grid'
            ? this.moduleItemGridSelector
            : this.moduleItemListSelector;
    };

    this.initAddonsSearch = function() {
        var self = this;
        $('body').on(
            'click',
            this.addonItemGridSelector + ', ' + this.addonItemListSelector,
            function() {
                var searchQuery = '';
                if (self.currentTagsList.length) {
                    searchQuery = encodeURIComponent(
                        self.currentTagsList.join(' ')
                    );
                }
                var hrefUrl =
                    self.baseAddonsUrl +
                    'search.php?search_query=' +
                    searchQuery;
                window.open(hrefUrl, '_blank');
            }
        );
    };

    this.initCategoriesGrid = function() {
        if (typeof refMenu === 'undefined') var refMenu = null;
        var self = this;

        $('body').on('click', this.categoryGridItemSelector, function(event) {
            event.stopPropagation();
            event.preventDefault();
            var refCategory = $(this).attr('data-category-ref');

            // In case we have some tags we need to reset it !
            if (self.currentTagsList.length) {
                self.pstaggerInput.resetTags(false);
                self.currentTagsList = [];
            }
            var menuCategoryToTrigger = $(
                self.categoryItemSelector +
                    '[data-category-ref="' +
                    refCategory +
                    '"]'
            );

            if (!menuCategoryToTrigger.length) {
                console.warn(
                    'No category with ref (' + refMenu + ') seems to exist!'
                );
                return false;
            }

            // Hide current category grid
            if (self.isCategoryGridDisplayed === true) {
                $(self.categoryGridSelector).fadeOut();
                self.isCategoryGridDisplayed = false;
            }

            // Trigger click on right category
            $(
                self.categoryItemSelector +
                    '[data-category-ref="' +
                    refCategory +
                    '"]'
            ).click();
        });
    };

    this.initCurrentDisplay = function() {
        if (this.currentDisplay === '') {
            this.currentDisplay = 'list';
        } else {
            this.currentDisplay = 'grid';
        }
    };

    this.initSortingDropdown = function() {
        var self = this;

        self.currentSorting = $(this.moduleSortingDropdownSelector)
            .find(':checked')
            .attr('value');

        $('body').on('change', this.moduleSortingDropdownSelector, function() {
            self.currentSorting = $(this)
                .find(':checked')
                .attr('value');
            self.updateModuleVisibility();
        });
    };

    this.doBulkAction = function(requestedBulkAction) {
        // This object is used to check if requested bulkAction is available and give proper
        // url segment to be called for it
        var forceDeletion = $('#force_bulk_deletion').prop('checked');

        var bulkActionToUrl = {
            'bulk-uninstall': 'uninstall',
            'bulk-disable': 'disable',
            'bulk-enable': 'enable',
            'bulk-disable-mobile': 'disable_mobile',
            'bulk-enable-mobile': 'enable_mobile',
            'bulk-reset': 'reset'
        };

        // Note no grid selector used yet since we do not needed it at dev time
        // Maybe useful to implement this kind of things later if intended to
        // use this functionality elsewhere but "manage my module" section
        if (typeof bulkActionToUrl[requestedBulkAction] === 'undefined') {
            $.growl.error({
                message: translate_javascripts[
                    'Bulk Action - Request not found'
                ].replace('[1]', requestedBulkAction)
            });
            return false;
        }

        // Loop over all checked bulk checkboxes
        var bulkActionSelectedSelector = this.getBulkCheckboxesCheckedSelector();

        if ($(bulkActionSelectedSelector).length > 0) {
            var bulkModulesTechNames = [];
            $(bulkActionSelectedSelector).each(function() {
                var moduleTechName = $(this).attr('data-tech-name');
                bulkModulesTechNames.push({
                    techName: moduleTechName,
                    actionMenuObj: $(this)
                        .parent()
                        .next()
                });
            });

            $.each(bulkModulesTechNames, function(index, data) {
                var actionMenuObj = data.actionMenuObj;
                var moduleTechName = data.techName;

                var urlActionSegment = bulkActionToUrl[requestedBulkAction];

                if (typeof module_card_controller !== 'undefined') {
                    // We use jQuery to get the specific link for this action. If found, we send it.
                    var urlElement = $(
                        module_card_controller.moduleActionMenuLinkSelector +
                            urlActionSegment,
                        actionMenuObj
                    );

                    if (urlElement.length > 0) {
                        module_card_controller.requestToController(
                            urlActionSegment,
                            urlElement,
                            forceDeletion
                        );
                    } else {
                        $.growl.error({
                            message: translate_javascripts[
                                'Bulk Action - Request not available for module'
                            ]
                                .replace('[1]', urlActionSegment)
                                .replace('[2]', moduleTechName)
                        });
                    }
                }
            });
        } else {
            console.warn(
                translate_javascripts['Bulk Action - One module minimum']
            );
            return false;
        }
    };

    this.initActionButtons = function() {
        $('body').on('click', this.moduleInstallBtnSelector, function(event) {
            var $this = $(this);
            var $next = $($this.next());
            event.preventDefault();
            $this.hide();
            $next.show();
            $.ajax({
                url: $this.attr('data-url'),
                dataType: 'json'
            }).done(function() {
                $next.fadeOut();
            });
        });

        // "Upgrade All" button handler
        var that = this;
        $('body').on('click', this.upgradeAllSource, function(event) {
            event.preventDefault();
            $(that.upgradeAllTargets).click();
        });
    };

    this.initCategorySelect = function() {
        var body = $('body');

        body.on('click', this.categoryItemSelector, function() {
            var selectedCategory = $(this).attr('data-category-display-ref');

            $.each(window.vApp.modules, function(index, value) {
                value.attributes.visible = false;
            });

            $.each(window.vApp.modules, function(index, value) {
                if (
                    value.attributes.categoryName == selectedCategory ||
                    value.attributes.categoryParent == selectedCategory
                ) {
                    value.attributes.visible = true;
                }

                if (selectedCategory == 'Other' && (
                    value.attributes.categoryName == '' ||
                    value.attributes.categoryParent == ''
                )) {
                    value.attributes.visible = true;
                }

            });
            $('.module-category-reset').show();

            window.currentRefCategory = selectedCategory;
            $('#catDropdown')
                .find('.module-category-selector-label')
                .text(selectedCategory);
        });

        body.on('click', this.categoryResetBtnSelector, function() {
            window.currentRefCategory = null;
            window.currentRefStatus = null;

            $.each(window.vApp.modules, function(index, value) {
                value.attributes.visible = true;
                $('.module-category-reset').hide();
            });

            $('#catDropdown')
                .find('.module-category-selector-label')
                .text(window.catLabel);
        });
    };

    this.updateTotalResults = function() {
        // If there are some shortlist: each shortlist count the modules on the next container.
        var $shortLists = $('.module-short-list');
        if ($shortLists.length > 0) {
            $shortLists.each(function() {
                var $this = $(this);
                updateText(
                    $this.find('.module-search-result-wording'),
                    $this.next('.modules-list').find('.module-item').length
                );
            });

            // If there is no shortlist: the wording directly update from the only module container.
        } else {
            var modulesCount = $('.modules-list').find('.module-item').length;
            updateText($('.module-search-result-wording'), modulesCount);

            $(this.addonItemGridSelector).toggle(
                modulesCount !== this.modulesList.length / 2
            );
            $(this.addonItemListSelector).toggle(
                modulesCount !== this.modulesList.length / 2
            );
            if (modulesCount === 0) {
                $('.module-addons-search-link').attr(
                    'href',
                    this.baseAddonsUrl +
                        'search.php?search_query=' +
                        encodeURIComponent(this.currentTagsList.join(' '))
                );
            }
        }

        function updateText(element, value) {
            var explodedText = element.text().split(' ');
            explodedText[0] = value;
            element.text(explodedText.join(' '));
        }
    };

    this.initSearchBlock = function() {
        var self = this;
        this.pstaggerInput = $('#module-search-bar').pstagger({
            onTagsChanged: function(tagList) {
                self.currentTagsList = tagList;
                self.updateModuleVisibility();
            },
            onResetTags: function() {
                self.currentTagsList = [];
                self.updateModuleVisibility();
            },
            inputPlaceholder: 'Search',
            closingCross: true,
            context: self
        });

        $('body').on('click', '.module-addons-search-link', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var href = $(this).attr('href');
            window.open(href, '_blank');
        });
    };

    /**
     * Initialize display switching between List or Grid
     */
    this.initSortingDisplaySwitch = function() {
        var self = this;

        $('body').on('click', '.module-sort-switch', function() {
            var switchTo = $(this).attr('data-switch');
            var isAlreadyDisplayed = $(this).hasClass('active-display');
            if (
                typeof switchTo !== 'undefined' &&
                isAlreadyDisplayed === false
            ) {
                self.switchSortingDisplayTo(switchTo);
                self.currentDisplay = switchTo;
            }
        });
    };

    this.switchSortingDisplayTo = function(switchTo) {
        if (switchTo == 'grid' || switchTo == 'list') {
            $('.module-sort-switch').removeClass('module-sort-active');
            $('#module-sort-' + switchTo).addClass('module-sort-active');
            this.currentDisplay = switchTo;
            this.updateModuleVisibility();
        } else {
            console.error(
                'Can\'t switch to undefined display property "' + switchTo + '"'
            );
        }
    };
};
