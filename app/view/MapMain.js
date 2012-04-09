Ext.define("TWA.view.MapMain", {

	extend: 'Ext.Panel',
	xtype: 'mapmainpanel',

	config: {
		title: 'Find Wineries',
		iconCls: 'info',
		cls: 'mapmain',
		scrollable: true,
		styleHtmlContent: true,

		items: [
					{
	                    html: [
	                    	'<h1>This is the map page</h1>'
	                    ]
                	}
                ]
	}

})