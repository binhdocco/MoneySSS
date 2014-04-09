Ext.define('MyApp.view.tab.Atm', {
    extend: 'MyApp.view.component.NavigationViewBase',
    xtype: 'tab_atm',
    requires: [
		'MyApp.view.tab.atm.Atm',
		'MyApp.view.tab.atm.Saving'
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
								html:'Tiền mặt',
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
								cls: 'button-icon',
								iconCls: 'button-icon-addnew'
							}
						]
					},
					{
						xtype:'tab_atm_atm',
						style: {
							'background-color': '#CCC'
						},
						height: 70*2 + 20,
					},
					{
						xtype:'tab_atm_saving',
						style: {
							'background-color': '#999'
						},
						height: 80*2 + 20,
					},
				]
			}
		]			
   },
   
   initialize: function() {
   		this.callParent(arguments);
   }
});

