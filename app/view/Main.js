Ext.define("TWA.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    xtype: 'mainpanel',
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [ /* These xtypes tell the main "panel toolbar" which buttons to display.*/
            
            /* 1st bottom toolbar button */
            {   
                xtype: 'eventspanel'
            },

            {   
                xtype: 'mapmainpanel'
            },

            {   
                xtype: 'communitypanel'
            }

            /* 2nd bottom toolbar button... etc 
            {

            }
        */


        ]
    }
});