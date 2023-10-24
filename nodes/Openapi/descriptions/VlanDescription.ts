import {
	INodeProperties,
} from 'n8n-workflow';

export const vlanOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'vlan',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Add a new VLAN to the database linked to region, product and ISP #### Body Parameters - **region**: region name or alias - **product**: product name - **isp**: isp name or alias - **description**: description of the vlan - **svlan**: svlan number - **cvlan**: cvlan number - **uservlan**: uservlan number - **port_options**: port options as defined by the enum',
			},
			{
				name: 'Get All Vlans Vlans Get Get',
				value: 'getAllVlansVlansGetGet',
			},
		],
		default: 'create',
	},
];

export const vlanFields: INodeProperties[] = [
	// ----------------------------------------
	//    vlan: get_all_vlans_vlans_get_get
	// ----------------------------------------
	{
		displayName: 'Offset',
		name: 'offset',
		description: '',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'vlan',
				],
				operation: [
					'get_all_vlans_vlans_get_get',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		description: '',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'vlan',
				],
				operation: [
					'get_all_vlans_vlans_get_get',
				],
			},
		},
	},
];
