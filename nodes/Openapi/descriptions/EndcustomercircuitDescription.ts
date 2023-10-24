import {
	INodeProperties,
} from 'n8n-workflow';

export const endcustomercircuitOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'endcustomercircuit',
				],
			},
		},
		options: [
			{
				name: 'Get All End Customer Circuits Endcustomercircuits Get Get',
				value: 'getAllEndCustomerCircuitsEndcustomercircuitsGetGet',
				description: 'Get a list of end customer circuits #### Query Parameters - **offset**: offset the results by this amount, default is 0 - **limit**: limit the results by this amount, default is 100 - **filters**: filter the results by these parameters, default is None #### Filter Options - **circuit_no**: Filter by circuit number - **third_party_circuit_no**: Filter by third party circuit number - **device_serial_no**: Filter by device serial number',
			},
		],
		default: 'get_all_end_customer_circuits_endcustomercircuits_get_get',
	},
];

export const endcustomercircuitFields: INodeProperties[] = [
	// ----------------------------------------
	// endcustomercircuit: get_all_end_customer_circuits_endcustomercircuits_get_get
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
					'endcustomercircuit',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
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
					'endcustomercircuit',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
				],
			},
		},
	},
	{
		displayName: 'Circuit No',
		name: 'circuit_no',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'endcustomercircuit',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
				],
			},
		},
	},
	{
		displayName: 'Third Party Circuit No',
		name: 'third_party_circuit_no',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'endcustomercircuit',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
				],
			},
		},
	},
	{
		displayName: 'Device Serial No',
		name: 'device_serial_no',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'endcustomercircuit',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
				],
			},
		},
	},
];
