sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 's1ui',
            componentId: 'SE1ObjectPage',
            entitySet: 'SE1'
        },
        CustomPageDefinitions
    );
});