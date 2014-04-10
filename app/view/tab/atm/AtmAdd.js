Ext.define('MyApp.view.tab.atm.AtmAdd', {
    extend: 'Ext.Container',
    xtype: 'tab_atm_atmadd',
    requires: [
    	 
    ],
    config: {
    	title: 'Tạo tài khoản',
        layout:{
			type:'vbox'
		},
		cls:'atm-popup-container',
		items:[
			{
                xtype: 'fieldset',
                title: 'Thông tin tài khoản:',
                instructions: '(Vui lòng điền đầy đủ thông tin phía trên)',
                defaults: {
                    required: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Tên tài khoản ',
                        placeHolder:'Tên chủ thẻ',
                        autoCapitalize: false
                    },
                     {
                        xtype: 'textfield',
                        name: 'bank',
                        label: 'Ngân hàng ',
                        placeHolder:'VCB, HSBC, ACB ...',
                        autoCapitalize: false
                    },
                     {
                        xtype: 'numberfield',
                        name: 'money',
                        placeHolder:'0 (đ)',
                        label: 'Số tiền hiện có  '
                    },
                ]    
           },
           {
				xtype:'container',
				layout:'hbox',
				items:[
					{
						xtype: 'button',
						text: 'HỦY',
						cls:'button-cancel',
						flex: 1,
						title: 'atmaddcancelbutton'
					},
					{
						xtype: 'button',
						text: 'TẠO',
						cls:'button-submit',
						flex: 1,
						title: 'atmaddsubmitbutton'
					}
				]	
			}
		]
    },
	initialize: function() {
		this.callParent(arguments);
		//this.assignFields(true, true);
	}
 });   