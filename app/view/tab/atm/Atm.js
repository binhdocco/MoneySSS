Ext.define('MyApp.view.tab.atm.Atm', {
    extend: 'Ext.Container',
    xtype: 'tab_atm_atm',
    requires: [
    	'MyApp.view.tab.atm.AtmList'		     
    ],
    config: {
        layout:{
			type:'vbox'
		},
		items:[
			{
				xtype:'container',
				 layout:{
					type:'hbox',
					align:'center'
				},
				items:[
					{
						xtype: 'label',
						html:'ATM',
						cls:'atm-atm'
					},
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',								
						title: 'atmadd',
						cls: 'button-icon',
						iconCls: 'button-icon-addnew'
					}
				]
			},
			{
				xtype:'tab_atm_atmlist',
				scrollable: false,
			}
		]
    },
	initialize: function() {
		this.callParent(arguments);
		//this.assignFields(true, true);
	}
 });   