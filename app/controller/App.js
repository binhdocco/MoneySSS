Ext.define('MyApp.controller.App', {
    extend: 'Ext.app.Controller',
	requires:[		
		
	],
    config: {
        refs: {		
			app: 'app'
        },//end refs
        control: {
			app: {
				initialize: function() {					
					//this.getApplication().on('show_popup', this.onPopupShown, this);
					//this.getApplication().on('show_alert', this.onAlertShown, this);
				}
			}
		}
    },
	
	onToggleMenu:function(){
		Ext.Viewport.toggleMenu("left");		
	}
});