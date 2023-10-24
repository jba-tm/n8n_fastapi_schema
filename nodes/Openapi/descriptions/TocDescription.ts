import {
	INodeProperties,
} from 'n8n-workflow';

export const tocOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'toc',
				],
			},
		},
		options: [
			{
				name: 'Download File S Download Unique Id Get',
				value: 'downloadFileSDownloadUniqueIdGet',
				description: 'Download a TOC file from the server #### Path Parameters - **uniqueId**: the unique id of the TOC file',
			},
			{
				name: 'Get Tocs Tocs Get Get',
				value: 'getTocsTocsGetGet',
				description: 'List TOCs from the database #### Query Parameters - **offset**: offset the results by this amount, default is 0 - **limit**: limit the results by this amount, default is 100 - **filters**: filter by fields in the database #### Filter Options - **toc_status**: filter by the status of the toc - **serial_no**: filter by the serial number of the device',
			},
			{
				name: 'Submit Data S Submit Post',
				value: 'submitDataSSubmitPost',
				description: 'Submit a TOC to be processed and saved to the database #### Body Parameters - **toc_file_reference**: the unique id of the TOC file - **isp**: the name of the ISP - **region**: the name of the region - **customer_name**: the name of the customer - **customer_contact_number**: the contact number of the customer - **circuit_no**: the circuit number of the customer - **third_party_circuit_no**: the third party circuit number of the customer - **downspeed**: the download speed of the customer - **upspeed**: the upload speed of the customer - **wifi_ssid**: the wifi ssid of the customer - **wifi_ssid_password**: the wifi ssid password of the customer - **address**: the address of the customer - **serial_no**: the serial number of the device - **portal_id**: the portal id of the device - **complex_suburb_building**: the complex, suburb or building of the customer - **pppoe_username**: the pppoe username of the customer - **pppoe_password**: the pppoe password of the customer',
			},
			{
				name: 'Upload File S Upload Post',
				value: 'uploadFileSUploadPost',
				description: 'Upload a TOC file to the server and save the data to the database #### Body Parameters - **toc_data**: json string of the data to be saved to the database - **toc_file**: the file to be uploaded ##### toc_data - **received_from**: the name of the person who sent the TOC',
			},
		],
		default: 'download__file_s_download__uniqueId__get',
	},
];

export const tocFields: INodeProperties[] = [
	// ----------------------------------------
	// toc: download__file_s_download__uniqueId__get
	// ----------------------------------------
	{
		displayName: 'Unique ID',
		name: 'uniqueId',
		description: '',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'toc',
				],
				operation: [
					'download__file_s_download__uniqueId__get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//        toc: get_tocs_tocs_get_get
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
					'toc',
				],
				operation: [
					'get_tocs_tocs_get_get',
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
					'toc',
				],
				operation: [
					'get_tocs_tocs_get_get',
				],
			},
		},
	},
	{
		displayName: 'Toc Status',
		name: 'toc_status',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'toc',
				],
				operation: [
					'get_tocs_tocs_get_get',
				],
			},
		},
	},
	{
		displayName: 'Serial No',
		name: 'serial_no',
		description: '',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'toc',
				],
				operation: [
					'get_tocs_tocs_get_get',
				],
			},
		},
	},
];
