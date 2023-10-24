import {
	INodeProperties,
} from 'n8n-workflow';

export const siteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'site',
				],
			},
		},
		options: [
			{
				name: 'Get Sites Sites Get Get',
				value: 'getSitesSitesGetGet',
				description: 'Get a list of sites',
			},
		],
		default: 'get_sites_sites_get_get',
	},
];

export const siteFields: INodeProperties[] = [
	// ----------------------------------------
	//      site: get_sites_sites_get_get
	// ----------------------------------------
	{
		displayName: 'Offset',
		name: 'offset',
		description: 'Offset for pagination',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'site',
				],
				operation: [
					'get_sites_sites_get_get',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		description: 'Limit for pagination',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'site',
				],
				operation: [
					'get_sites_sites_get_get',
				],
			},
		},
	},
	{
		displayName: 'External Site ID',
		name: 'external_site_id',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'site',
				],
				operation: [
					'get_sites_sites_get_get',
				],
			},
		},
	},
];
