import {
	INodeProperties,
} from 'n8n-workflow';

export const apiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'API',
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
				name: 'Create',
				value: 'create',
				description: 'Add a new ISP to the database linked with a single VNO by alias. #### Body Parameters - **name**: name of the ISP - **alias**: alias of the ISP - **vno_alias**: alias of the VNO to link the ISP to',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Add a new ISP to the database linked with a single VNO by alias. #### Body Parameters - **name**: name of the ISP - **alias**: alias of the ISP - **vno_alias**: alias of the VNO to link the ISP to',
			},
			{
				name: 'Download Toc File Tocs Download Unique Id Get',
				value: 'downloadTocFileTocsDownloadUniqueIdGet',
				description: 'Download a TOC file from the server #### Path Parameters - **uniqueId**: the unique id of the TOC file',
			},
			{
				name: 'Get Action Statistics Crm Statistics Actions Get Get',
				value: 'getActionStatisticsCrmStatisticsActionsGetGet',
				description: 'Get CRM Sales Actions from the database.',
			},
			{
				name: 'Get All End Customer Circuits Endcustomercircuits Get Get',
				value: 'getAllEndCustomerCircuitsEndcustomercircuitsGetGet',
				description: 'Get a list of end customer circuits #### Query Parameters - **offset**: offset the results by this amount, default is 0 - **limit**: limit the results by this amount, default is 100 - **filters**: filter the results by these parameters, default is None #### Filter Options - **circuit_no**: Filter by circuit number - **third_party_circuit_no**: Filter by third party circuit number - **device_serial_no**: Filter by device serial number',
			},
			{
				name: 'Get All Isps Isps Get Get',
				value: 'getAllIspsIspsGetGet',
			},
			{
				name: 'Get All Vlans Vlans Get Get',
				value: 'getAllVlansVlansGetGet',
			},
			{
				name: 'Get Contacts Contacts Get Get',
				value: 'getContactsContactsGetGet',
				description: 'Get a list of contacts',
			},
			{
				name: 'Get Crm Crm Get Get',
				value: 'getCrmCrmGetGet',
				description: 'Get CRM Sales Leads from the database.',
			},
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
				name: 'Get Lead Statistics Crm Statistics Leads Get Get',
				value: 'getLeadStatisticsCrmStatisticsLeadsGetGet',
				description: 'Get CRM Sales Leads from the database.',
			},
			{
				name: 'Get Sites Sites Get Get',
				value: 'getSitesSitesGetGet',
				description: 'Get a list of sites',
			},
			{
				name: 'Get Tocs Tocs Get Get',
				value: 'getTocsTocsGetGet',
				description: 'List TOCs from the database #### Query Parameters - **offset**: offset the results by this amount, default is 0 - **limit**: limit the results by this amount, default is 100 - **filters**: filter by fields in the database #### Filter Options - **toc_status**: filter by the status of the toc - **serial_no**: filter by the serial number of the device',
			},
			{
				name: 'Submit Toc Data Tocs Submit Post',
				value: 'submitTocDataTocsSubmitPost',
				description: 'Submit a TOC to be processed and saved to the database #### Body Parameters - **toc_file_reference**: the unique id of the TOC file - **isp**: the name of the ISP - **region**: the name of the region - **customer_name**: the name of the customer - **customer_contact_number**: the contact number of the customer - **circuit_no**: the circuit number of the customer - **third_party_circuit_no**: the third party circuit number of the customer - **downspeed**: the download speed of the customer - **upspeed**: the upload speed of the customer - **wifi_ssid**: the wifi ssid of the customer - **wifi_ssid_password**: the wifi ssid password of the customer - **address**: the address of the customer - **serial_no**: the serial number of the device - **portal_id**: the portal id of the device - **complex_suburb_building**: the complex, suburb or building of the customer - **pppoe_username**: the pppoe username of the customer - **pppoe_password**: the pppoe password of the customer',
			},
			{
				name: 'Update Device Devices Update Serial No Post',
				value: 'updateDeviceDevicesUpdateSerialNoPost',
			},
			{
				name: 'Update Isp Isps Update Isp Id Post',
				value: 'updateIspIspsUpdateIspIdPost',
				description: 'Update an ISP in the database.',
			},
			{
				name: 'Upload Toc File Tocs Upload Post',
				value: 'uploadTocFileTocsUploadPost',
				description: 'Upload a TOC file to the server and save the data to the database #### Body Parameters - **toc_data**: json string of the data to be saved to the database - **toc_file**: the file to be uploaded ##### toc_data - **received_from**: the name of the person who sent the TOC',
			},
		],
		default: 'create',
	},
];

export const apiFields: INodeProperties[] = [
	// ----------------------------------------
	// aPI: download_toc_file_tocs_download__uniqueId__get
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
					'API',
				],
				operation: [
					'download_toc_file_tocs_download__uniqueId__get',
				],
			},
		},
	},
	
	// ----------------------------------------
	// aPI: get_all_end_customer_circuits_endcustomercircuits_get_get
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
					'API',
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
					'API',
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
					'API',
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
					'API',
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
					'API',
				],
				operation: [
					'get_all_end_customer_circuits_endcustomercircuits_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//      aPI: get_all_isps_isps_get_get
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
					'API',
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
					'API',
				],
				operation: [
					'get_all_isps_isps_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//     aPI: get_all_vlans_vlans_get_get
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
					'API',
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
					'API',
				],
				operation: [
					'get_all_vlans_vlans_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//    aPI: get_contacts_contacts_get_get
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
					'API',
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
					'API',
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
					'API',
				],
				operation: [
					'get_contacts_contacts_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//         aPI: get_crm_crm_get_get
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
					'API',
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
					'API',
				],
				operation: [
					'get_crm_crm_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	// aPI: get_device_devices_get__serial_no__get
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
					'API',
				],
				operation: [
					'get_device_devices_get__serial_no__get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//     aPI: get_devices_devices_get_get
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
					'API',
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
					'API',
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
					'API',
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
					'API',
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
					'API',
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
					'API',
				],
				operation: [
					'get_devices_devices_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//       aPI: get_sites_sites_get_get
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
					'API',
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
					'API',
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
					'API',
				],
				operation: [
					'get_sites_sites_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	//        aPI: get_tocs_tocs_get_get
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
					'API',
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
					'API',
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
					'API',
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
					'API',
				],
				operation: [
					'get_tocs_tocs_get_get',
				],
			},
		},
	},
	
	// ----------------------------------------
	// aPI: update_device_devices_update__serial_no__post
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
					'API',
				],
				operation: [
					'update_device_devices_update__serial_no__post',
				],
			},
		},
	},
	
	// ----------------------------------------
	// aPI: update_isp_isps_update__isp_id__post
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
					'API',
				],
				operation: [
					'update_isp_isps_update__isp_id__post',
				],
			},
		},
	},
];
