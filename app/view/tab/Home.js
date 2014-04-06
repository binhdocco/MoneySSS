Ext.define('MyApp.view.tab.Home', {
    extend: 'MyApp.view.component.NavigationViewBase',
    xtype: 'tab_home',
    requires: [
		
	],
    config: {      
		scrollable:true,
		iconCls:'tabbar-icon-home',
		//title:'Home',
		items:[
			{
				xtype:'container',
				title: 'Trang chủ',
				html: 'This is Home Roboto',
			}
		]			
   },
   
   initialize: function() {
   		this.callParent(arguments);
   }
});