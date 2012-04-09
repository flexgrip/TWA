Ext.define('TWA.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.data.JsonP'
    ],

    config: {

        refs: {
            loginButton: 'button[action=doLogin]', //Set a reference (like a css selector) for the login button...
            loginForm: '#loginForm' //Set a reference (like a css selector) for the login button...
        },

        control: {
            
            
                loginButton: {
                
                    tap: 'doLogin'

                    // Moves user to another location when passed the right xtype/panel
                    // tap: function(btn) {
                    //     Ext.Viewport.setActiveItem({
                    //         xtype: btn.go
                    //     });
                    // }
                }
        },

        
    } ,

    doLogin: function() {
            var form = this.getLoginForm(); //Get the data from the loginForm ref -> which gets the data from the Login.js id.
            //console.log(form);

            Ext.Ajax.request({
                url: 'http://www.thewineapp.com/wineries/system/connect.jsonp',
                //default method = POST, but we define it because we are #fff
                method: 'POST',
                //the callbackKey is used for JSONP requests (I'm not sure if this has to be there for a simple query.)
                callbackKey: 'callback',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/javascript"
                },     

                //now we define the params to be sent to the server
                params: {
                    //first it is the API key so we can use the site
                    //key: '23f6a0ab24185952101705',

                    //nexgt is the `q` param which is a valid US zipcode (palo alto in this case)
                    //q: '94301',

                    //next we define the format, json
                    format: 'json',

                    //and finally the number of days we want
                    //num_of_days: 5
                },

                callback: function(response) {
                    console.log(response);
                }

                // callback: function(response) {
                //     console.log(response.responseText);
                // }
            });
        }
});