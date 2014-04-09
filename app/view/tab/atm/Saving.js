Ext.define('MyApp.view.tab.atm.Saving', {
    extend: 'Ext.Container',
    xtype: 'tab_atm_saving',
    requires: [
    	'MyApp.view.tab.atm.SavingList'		     
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
						html:'Sổ tiết kiệm',
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
				xtype:'tab_atm_savinglist',
				scrollable: false,
			}
		]
    },
	initialize: function() {
		this.callParent(arguments);
		//this.assignFields(true, true);
	}
 });   