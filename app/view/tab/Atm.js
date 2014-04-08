Ext.define('MyApp.view.tab.Atm', {
    extend: 'MyApp.view.component.NavigationViewBase',
    xtype: 'tab_atm',
    requires: [
		
	],
    config: {      
		scrollable:true,
		iconCls:'tabbar-icon-home',	
		items:[
			{
				xtype:'container',
				title: 'ATM',				
				items:[
					{
						xtype:'container',
						layout: {
							type: 'hbox',
							align: 'center'
						},
						style: {
							'background-color': '#999'
						},
						
						items:[
							{
								xtype: 'label',
								html:'Tien mat',
								cls:'atm-tienmat'
							},
							{
								xtype: 'label',
								html:'100.000 (đ)',
								cls:'atm-tienmat'
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'button',								
								title: 'moneyadd',
								iconCls: 'toolbar-icon-add'
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

