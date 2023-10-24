

import {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	openapiApiRequest,
} from './GenericFunctions';

import {
	apiFields,
	apiOperations,
	contactFields,
	contactOperations,
	crmFields,
	crmOperations,
	deviceFields,
	deviceOperations,
	endcustomercircuitFields,
	endcustomercircuitOperations,
	ispFields,
	ispOperations,
	siteFields,
	siteOperations,
	tocFields,
	tocOperations,
	vlanFields,
	vlanOperations,
} from './descriptions';

export class Openapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Openapi',
		name: 'openapi',
		icon: 'file:openapi.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Openapi API',
		defaults: {
			name: 'Openapi',
			color: '#ffffff',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'API',
						value: 'api',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Crm',
						value: 'crm',
					},
					{
						name: 'Device',
						value: 'device',
					},
					{
						name: 'Endcustomercircuit',
						value: 'endcustomercircuit',
					},
					{
						name: 'Isp',
						value: 'isp',
					},
					{
						name: 'Site',
						value: 'site',
					},
					{
						name: 'Toc',
						value: 'toc',
					},
					{
						name: 'Vlan',
						value: 'vlan',
					},
				],
				default: 'api',
			},
			...apiOperations,
			...apiFields,
			...contactOperations,
			...contactFields,
			...crmOperations,
			...crmFields,
			...deviceOperations,
			...deviceFields,
			...endcustomercircuitOperations,
			...endcustomercircuitFields,
			...ispOperations,
			...ispFields,
			...siteOperations,
			...siteFields,
			...tocOperations,
			...tocFields,
			...vlanOperations,
			...vlanFields,
		], 
	}; 

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const body = this.getNodeParameter('body', 0) as { name: string; value: string };

		let responseData;

		for (let i = 0; i < items.length; i++) {

			if (resource === 'api') {

				// **********************************************************************
				//                                  api
				// **********************************************************************

				if (operation === 'create') {

					// ----------------------------------------
					//               api: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/isps/add', body);
				
				} else if (operation === 'create') {

					// ----------------------------------------
					//               api: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/isps/add', body);
				
				} else if (operation === 'create') {

					// ----------------------------------------
					//               api: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/isps/add', body);
				
				} else if (operation === 'downloadTocFileTocsDownloadUniqueIdGet') {

					// ----------------------------------------
					// api: download_toc_file_tocs_download__uniqueId__get
					// ----------------------------------------

					const uniqueId = this.getNodeParameter('uniqueId', i);

					const endpoint = `/tocs/download/${uniqueId}`;
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getActionStatisticsCrmStatisticsActionsGetGet') {

					// ----------------------------------------
					// api: get_action_statistics_crm_statistics_actions_get_get
					// ----------------------------------------

					const endpoint = '/crm/statistics/actions/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getAllEndCustomerCircuitsEndcustomercircuitsGetGet') {

					// ----------------------------------------
					// api: get_all_end_customer_circuits_endcustomercircuits_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const endpoint = '/endcustomercircuits/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint, {}, qs);
				
				} else if (operation === 'getAllIspsIspsGetGet') {

					// ----------------------------------------
					//      api: get_all_isps_isps_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/isps/get', {}, qs);
				
				} else if (operation === 'getAllVlansVlansGetGet') {

					// ----------------------------------------
					//     api: get_all_vlans_vlans_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/vlans/get', {}, qs);
				
				} else if (operation === 'getContactsContactsGetGet') {

					// ----------------------------------------
					//    api: get_contacts_contacts_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/contacts/get', {}, qs);
				
				} else if (operation === 'getCrmCrmGetGet') {

					// ----------------------------------------
					//         api: get_crm_crm_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/crm/get', {}, qs);
				
				} else if (operation === 'getDeviceDevicesAddPost') {

					// ----------------------------------------
					//     api: get_device_devices_add_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/devices/add', body);
				
				} else if (operation === 'getDeviceDevicesGetSerialNoGet') {

					// ----------------------------------------
					// api: get_device_devices_get__serial_no__get
					// ----------------------------------------

					const serial_no = this.getNodeParameter('serial_no', i);

					const endpoint = `/devices/get/${serial_no}`;
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getDevicesDevicesGetGet') {

					// ----------------------------------------
					//     api: get_devices_devices_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/devices/get', {}, qs);
				
				} else if (operation === 'getLeadStatisticsCrmStatisticsLeadsGetGet') {

					// ----------------------------------------
					// api: get_lead_statistics_crm_statistics_leads_get_get
					// ----------------------------------------

					const endpoint = '/crm/statistics/leads/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getSitesSitesGetGet') {

					// ----------------------------------------
					//       api: get_sites_sites_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/sites/get', {}, qs);
				
				} else if (operation === 'getTocsTocsGetGet') {

					// ----------------------------------------
					//        api: get_tocs_tocs_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/tocs/get', {}, qs);
				
				} else if (operation === 'submitTocDataTocsSubmitPost') {

					// ----------------------------------------
					//  api: submit_toc_data_tocs_submit_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/tocs/submit', body);
				
				} else if (operation === 'updateDeviceDevicesUpdateSerialNoPost') {

					// ----------------------------------------
					// api: update_device_devices_update__serial_no__post
					// ----------------------------------------

					const serial_no = this.getNodeParameter('serial_no', i);

					const endpoint = `/devices/update/${serial_no}`;
					responseData = await openapiApiRequest.call(this, 'POST', endpoint, body);
				
				} else if (operation === 'updateIspIspsUpdateIspIdPost') {

					// ----------------------------------------
					// api: update_isp_isps_update__isp_id__post
					// ----------------------------------------

					const isp_id = this.getNodeParameter('isp_id', i);

					const endpoint = `/isps/update/${isp_id}`;
					responseData = await openapiApiRequest.call(this, 'POST', endpoint, body);
				
				} else if (operation === 'uploadTocFileTocsUploadPost') {

					// ----------------------------------------
					//  api: upload_toc_file_tocs_upload_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/tocs/upload', body);
				
				}

			} else if (resource === 'contact') {

				// **********************************************************************
				//                                contact
				// **********************************************************************

				if (operation === 'getContactsContactsGetGet') {

					// ----------------------------------------
					//  contact: get_contacts_contacts_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/contacts/get', {}, qs);
				
				}

			} else if (resource === 'crm') {

				// **********************************************************************
				//                                  crm
				// **********************************************************************

				if (operation === 'create') {

					// ----------------------------------------
					//               crm: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/crm/add', body);
				
				} else if (operation === 'getActionStatisticsCrmStatisticsActionsGetGet') {

					// ----------------------------------------
					// crm: get_action_statistics_crm_statistics_actions_get_get
					// ----------------------------------------

					const endpoint = '/crm/statistics/actions/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getCrmCrmGetGet') {

					// ----------------------------------------
					//         crm: get_crm_crm_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/crm/get', {}, qs);
				
				} else if (operation === 'getLeadStatisticsCrmStatisticsLeadsGetGet') {

					// ----------------------------------------
					// crm: get_lead_statistics_crm_statistics_leads_get_get
					// ----------------------------------------

					const endpoint = '/crm/statistics/leads/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				}

			} else if (resource === 'device') {

				// **********************************************************************
				//                                 device
				// **********************************************************************

				if (operation === 'getDeviceDevicesAddPost') {

					// ----------------------------------------
					//   device: get_device_devices_add_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/devices/add', body);
				
				} else if (operation === 'getDeviceDevicesGetSerialNoGet') {

					// ----------------------------------------
					// device: get_device_devices_get__serial_no__get
					// ----------------------------------------

					const serial_no = this.getNodeParameter('serial_no', i);

					const endpoint = `/devices/get/${serial_no}`;
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getDevicesDevicesGetGet') {

					// ----------------------------------------
					//   device: get_devices_devices_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/devices/get', {}, qs);
				
				} else if (operation === 'updateSUpdateSerialNoPost') {

					// ----------------------------------------
					// device: update__s_update__serial_no__post
					// ----------------------------------------

					const serial_no = this.getNodeParameter('serial_no', i);

					const endpoint = `/devices/update/${serial_no}`;
					responseData = await openapiApiRequest.call(this, 'POST', endpoint, body);
				
				}

			} else if (resource === 'endcustomercircuit') {

				// **********************************************************************
				//                           endcustomercircuit
				// **********************************************************************

				if (operation === 'getAllEndCustomerCircuitsEndcustomercircuitsGetGet') {

					// ----------------------------------------
					// endcustomercircuit: get_all_end_customer_circuits_endcustomercircuits_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const endpoint = '/endcustomercircuits/get';
					responseData = await openapiApiRequest.call(this, 'GET', endpoint, {}, qs);
				
				}

			} else if (resource === 'isp') {

				// **********************************************************************
				//                                  isp
				// **********************************************************************

				if (operation === 'create') {

					// ----------------------------------------
					//               isp: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/isps/add', body);
				
				} else if (operation === 'getAllIspsIspsGetGet') {

					// ----------------------------------------
					//      isp: get_all_isps_isps_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/isps/get', {}, qs);
				
				} else if (operation === 'updateSUpdateIdPost') {

					// ----------------------------------------
					//     isp: update__s_update___id__post
					// ----------------------------------------

					const isp_id = this.getNodeParameter('isp_id', i);

					const endpoint = `/isps/update/${isp_id}`;
					responseData = await openapiApiRequest.call(this, 'POST', endpoint, body);
				
				}

			} else if (resource === 'site') {

				// **********************************************************************
				//                                  site
				// **********************************************************************

				if (operation === 'getSitesSitesGetGet') {

					// ----------------------------------------
					//      site: get_sites_sites_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/sites/get', {}, qs);
				
				}

			} else if (resource === 'toc') {

				// **********************************************************************
				//                                  toc
				// **********************************************************************

				if (operation === 'downloadFileSDownloadUniqueIdGet') {

					// ----------------------------------------
					// toc: download__file_s_download__uniqueId__get
					// ----------------------------------------

					const uniqueId = this.getNodeParameter('uniqueId', i);

					const endpoint = `/tocs/download/${uniqueId}`;
					responseData = await openapiApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'getTocsTocsGetGet') {

					// ----------------------------------------
					//        toc: get_tocs_tocs_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/tocs/get', {}, qs);
				
				} else if (operation === 'submitDataSSubmitPost') {

					// ----------------------------------------
					//     toc: submit__data_s_submit_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/tocs/submit', body);
				
				} else if (operation === 'uploadFileSUploadPost') {

					// ----------------------------------------
					//     toc: upload__file_s_upload_post
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/tocs/upload', body);
				
				}

			} else if (resource === 'vlan') {

				// **********************************************************************
				//                                  vlan
				// **********************************************************************

				if (operation === 'create') {

					// ----------------------------------------
					//               vlan: create
					// ----------------------------------------

					responseData = await openapiApiRequest.call(this, 'POST', '/vlans/add', body);
				
				} else if (operation === 'getAllVlansVlansGetGet') {

					// ----------------------------------------
					//    vlan: get_all_vlans_vlans_get_get
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await openapiApiRequest.call(this, 'GET', '/vlans/get', {}, qs);
				
				}

			}

			Array.isArray(responseData)
				? returnData.push(...responseData)
				: returnData.push(responseData);

		}

		return [this.helpers.returnJsonArray(returnData)];
	}
} 