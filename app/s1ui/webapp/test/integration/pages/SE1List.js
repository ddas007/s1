sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 's1ui',
            componentId: 'SE1List',
            entitySet: 'SE1'
        },
        CustomPageDefinitions
    );
});