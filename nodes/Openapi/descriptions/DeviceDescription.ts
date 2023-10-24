import {
	INodeProperties,
} from 'n8n-workflow';

export const deviceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'device',
				],
			},
		},
		options: [
			{
				name: 'Get Device Devices Add Post',
				value: 'getDeviceDevicesAddPost',
				description: 'Add a new device to the database Args: device Returns: status',
			},
			{
				name: 'Get Device Devices Get Serial No Get',
				value: 'getDeviceDevicesGetSerialNoGet',
			},
			{
				name: 'Get Devices Devices Get Get',
				value: 'getDevicesDevicesGetGet',
				description: 'Get a list of devices #### Query Parameters - **offset**: offset the results by this amount, default is 0 - **limit**: limit the results by this amount, default is 100 - **filters**: filter by fields in the database #### Filter Options - **configured**: Filter by configured status - **available**: Filter by available status - **billed**: Filter by billed status - **notified**: Filter by notified status',
			},
			{
				name: 'Update S Update Serial No Post',
				value: 'updateSUpdateSerialNoPost',
			},
		],
		default: 'get_device_devices_add_post',
	},
];

export const deviceFields: INodeProperties[] = [
	// ----------------------------------------
	// device: get_device_devices_get__serial_no__get
	// ----------------------------------------
	{
		displayName: 'Serial No',
		name: 'serial_no',
		description: '',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'get_device_devices_get__serial_no__get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//   device: get_devices_devices_get_get
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
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
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
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	{
		displayName: 'Configured',
		name: 'configured',
		description: '',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	{
		displayName: 'Available',
		name: 'available',
		description: '',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	{
		displayName: 'Billed',
		name: 'billed',
		description: '',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	{
		displayName: 'Notified',
		name: 'notified',
		description: '',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	// device: update__s_update__serial_no__post
	// ----------------------------------------
	{
		displayName: 'Serial No',
		name: 'serial_no',
		description: '',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'device',
				],
				operation: [
					'update__s_update__serial_no__post',
				],
			},
		},
	},
];
