define("UsrYacht_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYacht"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "3715a660-f64f-77b7-dcae-0ba38e26e296",
							"code": "PDS_UsrDriveType",
							"caption": "#ResourceString(PDS_UsrDriveType)#",
							"dataValueType": 10
						},
						{
							"id": "b016b574-24e0-3394-bb9e-5238ba9157fa",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "f36a3405-3fc1-143d-ee74-b07cce36504c",
							"code": "PDS_UsrPricePerDay",
							"caption": "#ResourceString(PDS_UsrPricePerDay)#",
							"dataValueType": 32
						},
						{
							"id": "d735f7b5-40de-78dd-44aa-f92a41caf3ea",
							"code": "PDS_UsrLength",
							"caption": "#ResourceString(PDS_UsrLength)#",
							"dataValueType": 4
						},
						{
							"id": "49a6b91c-f171-9e54-3767-34ef519b4cf6",
							"code": "PDS_UsrPassengersCount",
							"caption": "#ResourceString(PDS_UsrPassengersCount)#",
							"dataValueType": 4
						},
						{
							"id": "07691759-a605-b273-a20e-42534b2e3cdb",
							"code": "PDS_UsrCrewCount",
							"caption": "#ResourceString(PDS_UsrCrewCount)#",
							"dataValueType": 4
						},
						{
							"id": "1da63544-6ced-4157-451e-b6b2ef4d7606",
							"code": "PDS_UsrCaptain",
							"caption": "#ResourceString(PDS_UsrCaptain)#",
							"dataValueType": 10
						},
						{
							"id": "cdc48de1-1e85-7f71-d606-fe62135a04b3",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYacht",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrDriveType": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPricePerDay": {
						"modelConfig": {
							"path": "PDS.UsrPricePerDay"
						}
					},
					"PDS_UsrLength": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrPassengersCount": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrCrewCount": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrCaptain": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYacht",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrDriveType": {
							"path": "UsrDriveType"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrPricePerDay": {
							"path": "UsrPricePerDay"
						},
						"UsrLength": {
							"path": "UsrLength"
						},
						"UsrPassengersCount": {
							"path": "UsrPassengersCount"
						},
						"UsrCrewCount": {
							"path": "UsrCrewCount"
						},
						"UsrCaptain": {
							"path": "UsrCaptain"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});