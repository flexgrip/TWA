Ext.define("TWA.view.Events", {

	extend: 'Ext.Panel',
	xtype: 'eventspanel',

	config: {
		title: 'Local Events',
		iconCls: 'star',
		cls: 'events',
		scrollable: true,
		styleHtmlContent: true,

		items: [
					{
	                    html: [
	                    	'<h1>This is the events list page</h1>'
	                    ]
                	}
                ]
	}

})