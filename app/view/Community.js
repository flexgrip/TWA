Ext.define("TWA.view.Community", {

	extend: 'Ext.Panel',
	xtype: 'communitypanel',

	config: {
		title: 'Community',
		iconCls: 'user',
		cls: 'events',
		scrollable: true,
		styleHtmlContent: true,

		items: [
					{
	                    html: [
	                    	'<h1>This is the community list page</h1>'
	                    ]
                	}
                ]
	}

})