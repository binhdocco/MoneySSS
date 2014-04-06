Ext.define('MyApp.view.tab.Expense', {
    extend: 'MyApp.view.component.NavigationViewBase',
    xtype: 'tab_expense',
    requires: [
		
	],
    config: {      
		scrollable:true,
		iconCls:'tabbar-icon-home',
		//title:'Home',
		items:[
			{
				xtype:'container',
				title: 'Chi tiêu',
				items:[
					{
						xtype:'container',
						layout:'vbox',
						items:[
							{
								xtype: 'label',
								html:'Hôm nay, 17 - 09 - 2014',
								cls:'today-title'
							}
						]
					}
				]
			}
		]			
   },
   
   initialize: function() {
   		this.callParent(arguments);
   }
});

