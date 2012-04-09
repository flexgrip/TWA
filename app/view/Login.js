Ext.define("TWA.view.Login", {
	extend: 'Ext.form.Panel',
	xtype: 'loginpanel',
	id: 'loginForm',

	requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password'
    ],

	config: {
		title: 'Login',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,

		items: [
	                        {
	                            xtype: 'fieldset',
	                            title: 'Login',
	                            instructions: 'For now, leave this blank and click login to enter the app.',
	                            
	                            items: [
	                                {
	                                    xtype: 'emailfield',
	                                    label: 'Email',
	                                    name: 'email'
	                                },
	                                {
	                                    xtype: 'passwordfield',
	                                    label: 'Password',
	                                    name: 'password'
	                                }
	                            ]
	                        },
	                        {
	                            xtype: 'button',
				                ui: 'confirm',
				                text: 'Login',
				                id:'lobu',
				                action: 'doLogin'
	                        }
	                    ]
	}
})