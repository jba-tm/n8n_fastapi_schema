import {
	INodeProperties,
} from 'n8n-workflow';

export const ispOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'isp',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Add a new ISP to the database linked with a single VNO by alias. #### Body Parameters - **name**: name of the ISP - **alias**: alias of the ISP - **vno_alias**: alias of the VNO to link the ISP to',
			},
			{
				name: 'Get All Isps Isps Get Get',
				value: 'getAllIspsIspsGetGet',
			},
			{
				name: 'Update S Update Id Post',
				value: 'updateSUpdateIdPost',
				description: 'Update an ISP in the database.',
			},
		],
		default: 'create',
	},
];

export const ispFields: INodeProperties[] = [
	// ----------------------------------------
	//      isp: get_all_isps_isps_get_get
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
					'isp',
				],
				operation: [
					'get_all_isps_isps_get_get',
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
					'isp',
				],
				operation: [
					'get_all_isps_isps_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//     isp: update__s_update___id__post
	// ----------------------------------------
	{
		displayName: 'Isp ID',
		name: 'isp_id',
		description: '',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'isp',
				],
				operation: [
					'update__s_update___id__post',
				],
			},
		},
	},
];
