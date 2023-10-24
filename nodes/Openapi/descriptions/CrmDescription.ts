import {
	INodeProperties,
} from 'n8n-workflow';

export const crmOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'crm',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Add a new lead to the database. #### Body Parameters - **company_name**: name of the company - **company_email**: email of the company - **company_phone**: phone number of the company - **company_website**: website of the company - **industry**: industry of the company - **company_address**: address of the company - **multiple_branches**: whether the company has multiple branches - **company_latitude**: latitude of the company - **company_longitude**: longitude of the company - **notes**: initial notes about the company - **lead_status**: status of the lead, can be `new`, `qualified`, `opportunity`, `closed-loss`, `closed-win` - **lead_owner_username**: lead owner username',
			},
			{
				name: 'Get Action Statistics Crm Statistics Actions Get Get',
				value: 'getActionStatisticsCrmStatisticsActionsGetGet',
				description: 'Get CRM Sales Actions from the database.',
			},
			{
				name: 'Get Crm Crm Get Get',
				value: 'getCrmCrmGetGet',
				description: 'Get CRM Sales Leads from the database.',
			},
			{
				name: 'Get Lead Statistics Crm Statistics Leads Get Get',
				value: 'getLeadStatisticsCrmStatisticsLeadsGetGet',
				description: 'Get CRM Sales Leads from the database.',
			},
		],
		default: 'create',
	},
];

export const crmFields: INodeProperties[] = [
	// ----------------------------------------
	//         crm: get_crm_crm_get_get
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
					'crm',
				],
				operation: [
					'get_crm_crm_get_get',
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
					'crm',
				],
				operation: [
					'get_crm_crm_get_get',
				],
			},
		},
	},
];
