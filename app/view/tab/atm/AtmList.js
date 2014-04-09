Ext.define('MyApp.view.tab.atm.AtmList', {
    extend: 'MyApp.view.component.AppList',
    xtype: 'tab_atm_atmlist',
    config: { 
    	cls: 'atm-atmlist',
		store: 'TestATMs',  	
       	itemTpl: new Ext.XTemplate(
       				//'<div class="thumb">{dd}<br/>{monthname}</div>',
					['<div class="info">',
						'<div class="username">Tên: {username}</div>',
						'<div class="bank">Ngân hàng: {bank}</div>',
					'</div>',
					'<div class="amount">{amount:this.format} (đ)</div>',
					].join(''),
					{
						format: function(amount) {
							return amount.format(0, 3, '.');
						}	
					}
       		),
       	onItemDisclosure: true
       	
    },
	setLocale:function(locale){
		this.callParent(arguments);
	},
		
	initialize: function() {
		this.callParent(arguments);
		//Ux.locale.Manager.applyLocaleForCmp(this);
	}
});
