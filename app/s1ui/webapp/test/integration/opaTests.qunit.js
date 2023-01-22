sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        's1ui/test/integration/FirstJourney',
		's1ui/test/integration/pages/SE1List',
		's1ui/test/integration/pages/SE1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, SE1List, SE1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('s1ui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSE1List: SE1List,
					onTheSE1ObjectPage: SE1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);