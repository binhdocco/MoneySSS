Ext.Loader.setPath({
    'App': 'app'
});
Ext.require([
		'App.util.CommonUtil',
		'App.util.offline.Connection',
		'App.util.offline.Proxy',
		'App.util.offline.Data'
]);
Ext.onReady(function(){
	var dbconnval = {
        dbName: "moneysss",
        dbDescription: "MoneySSS database"
    };
   //PatientDiary.util.CommonUtil.dbConnection = Ext.create('PatientDiary.util.offline.Connection',dbconnval);
   //PatientDiary.util.CommonUtil.offline = Ext.create('PatientDiary.util.offline.Data',{});
});
Ext.application({
    name:'App',
	 requires: [
	 	'Ext.ux.Deferred',
	 	'Ux.locale.Manager',
        'Ux.locale.override.st.Component',
		'Ux.locale.override.st.Container',
        'Ux.locale.override.st.Button',
        'Ux.locale.override.st.navigation.View',
        'Ux.locale.override.st.field.Field',
        'Ux.locale.override.st.field.DatePicker',
        'Ux.locale.override.st.form.FieldSet',
        'Ux.locale.override.st.picker.Picker',
        'Ux.locale.override.st.picker.Date',
        'Ux.locale.override.st.DataView',
        'Ux.locale.override.st.tab.Panel',
		'Ux.locale.override.st.SegmentedButton',
	 	'Ext.ux.TouchCalendarView',
		'Ext.ux.TimePicker'
    ],   
    models:[
    	'System',
    	'User',
    ],
    stores:[
    	'Systems',
    	'Users',

	],
	startupImage: {
        '320x460': 'resources/startup/Default.png', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/Default@2x~iphone.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/Default-568h@2x~iphone.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/Default@2x~iphone.png' //  Non-retina iPad (first and second generation) in portrait orientation
    },
    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },
	views: ['App','AppMenu'],
    controllers: ['App', 'AppLogin', 'AppMenu'],
    launch: function() {
    	//if(!App.util.CommonUtil.runningDevice()){
    		this.onDeviceReady();
    	//}else{
    		//document.addEventListener("deviceready", this.onDeviceReady, false);
    	//}
    	
    },
    onDeviceReady:function(){
    	//PatientDiary.util.CommonUtil.preferredLanguage();
		
		    Ext.Viewport.add({
	        	xtype: 'app'
	    	});
	    	var menu = Ext.create('App.view.AppMenu');
	    	Ext.Viewport.setMenu(menu, {
	            side: 'left',
	            reveal: true
	        });

    }
});
