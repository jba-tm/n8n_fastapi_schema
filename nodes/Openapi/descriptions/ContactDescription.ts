import {
	INodeProperties,
} from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				name: 'Get Contacts Contacts Get Get',
				value: 'getContactsContactsGetGet',
				description: 'Get a list of contacts',
			},
		],
		default: 'get_contacts_contacts_get_get',
	},
];

export const contactFields: INodeProperties[] = [
	// ----------------------------------------
	//  contact: get_contacts_contacts_get_get
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
					'contact',
				],
				operation: [
					'get_contacts_contacts_get_get',
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
					'contact',
				],
				operation: [
					'get_contacts_contacts_get_get',
				],
			},
		},
	},
	{
		displayName: 'Vno',
		name: 'vno',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
				operation: [
					'get_contacts_contacts_get_get',
				],
			},
		},
	},
];
