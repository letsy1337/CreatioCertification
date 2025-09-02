define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f7a8a4b3-5899-4107-be5a-7a04753d113d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_tmliuch",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_tmliuch",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_i3isgdz",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_i3isgdz",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPricePerDay_19mqech",
					"labelPosition": "auto",
					"control": "$PDS_UsrPricePerDay_19mqech"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_wuupxgb",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_wuupxgb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_boejott",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_boejott"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_s9j7r6u",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_s9j7r6u",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_ci664gv",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersCount_ci664gv"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_zfxnxcv",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_zfxnxcv",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_fnmqhg1",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_fnmqhg1",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_v11ziz2",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewCount_v11ziz2"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5sjbkvi",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5sjbkvi_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_nk7uvxa",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5sjbkvi",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_r81mnct",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_nk7uvxa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_tlmwuvi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_tlmwuvi_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_r81mnct",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_xhw5qc7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_xhw5qc7_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_eat7ijuDS"
						}
					}
				},
				"parentName": "FlexContainer_r81mnct",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_x9k8fzy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_x9k8fzy_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_r81mnct",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_980zq5g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_980zq5g_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_eat7iju"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_x9k8fzy",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_czl18nc",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_czl18nc_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_x9k8fzy",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ceprci6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ceprci6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ceprci6_GridDetail_eat7iju",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_eat7iju"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ceprci6_SearchValue",
							"GridDetailSearchFilter_ceprci6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_r81mnct",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_j1d0hvx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5sjbkvi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eat7iju",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_eat7iju",
					"primaryColumnName": "GridDetail_eat7ijuDS_Id",
					"columns": [
						{
							"id": "f7f1ab8f-6197-bd18-a700-405d16f03f82",
							"code": "GridDetail_eat7ijuDS_UsrRentalStartDate",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_UsrRentalStartDate)#",
							"dataValueType": 7,
							"width": 155
						},
						{
							"id": "90dadd33-5e6e-5baa-174b-8db517473286",
							"code": "GridDetail_eat7ijuDS_UsrRentalEndDate",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_UsrRentalEndDate)#",
							"dataValueType": 7,
							"width": 146
						},
						{
							"id": "768fe6c7-dcca-a1ad-7bff-117a3cc8d0a3",
							"code": "GridDetail_eat7ijuDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 145
						},
						{
							"id": "e2cae28c-8213-2cd1-400c-57eda7037a66",
							"code": "GridDetail_eat7ijuDS_UsrManager",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_UsrManager)#",
							"dataValueType": 10,
							"width": 144
						},
						{
							"id": "7a208636-3d3f-068f-e134-cde12f8f8882",
							"code": "GridDetail_eat7ijuDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 130
						},
						{
							"id": "01659eff-07ed-bc63-e672-e3ffe08a0688",
							"code": "GridDetail_eat7ijuDS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_eat7ijuDS_UsrTotalPrice)#",
							"dataValueType": 32
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_j1d0hvx",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_boejott": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MinValueValidator": {
								"type": "usr.MinValueValidator",
								"params": {
									"minValue": 4,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPricePerDay_19mqech": {
						"modelConfig": {
							"path": "PDS.UsrPricePerDay"
						},
						"validators": {
							"MinValueValidator": {
								"type": "usr.MinValueValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PricePerDayCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_tmliuch": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_i3isgdz": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPassengersCount_ci664gv": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrCaptain_zfxnxcv": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCrewCount_v11ziz2": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrManager_s9j7r6u": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrComment_fnmqhg1": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_eat7iju": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_eat7ijuDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ceprci6_GridDetail_eat7iju",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_eat7ijuDS_UsrRentalStartDate": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.UsrRentalStartDate"
									}
								},
								"GridDetail_eat7ijuDS_UsrRentalEndDate": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.UsrRentalEndDate"
									}
								},
								"GridDetail_eat7ijuDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.UsrCustomer"
									}
								},
								"GridDetail_eat7ijuDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.UsrManager"
									}
								},
								"GridDetail_eat7ijuDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.CreatedOn"
									}
								},
								"GridDetail_eat7ijuDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.UsrTotalPrice"
									}
								},
								"GridDetail_eat7ijuDS_Id": {
									"modelConfig": {
										"path": "GridDetail_eat7ijuDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrTicketPrice_wuupxgb": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_eat7ijuDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht"
						},
						"scope": "page"
					},
					"GridDetail_eat7ijuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrRentalStartDate": {
									"path": "UsrRentalStartDate"
								},
								"UsrRentalEndDate": {
									"path": "UsrRentalEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			request: "crt.HandleViewModelAttributeChangeRequest",
	        /* The custom implementation of the base request handler. */
	        handler: async (request, next) => {
		            if (request.attributeName === 'PDS_UsrPricePerDay_19mqech') {
						var minPrice;
			            var callback = function(value) {
	                    minPrice = value;
			                };
		                this.Terrasoft.SysSettings.querySysSettingsItem("MinPriceToRequireYachtComment", callback, this);
		                if (minPrice === undefined) {
		                    return;
		                }
						
		                const actualPrice = await request.$context.PDS_UsrPricePerDay_19mqech;
						if (actualPrice > minPrice) {
								request.$context.enableAttributeValidator('PDS_UsrComment_fnmqhg1', 'required');
							 }
						else {
							request.$context.disableAttributeValidator('PDS_UsrComment_fnmqhg1', 'required');
						}
		            }
		            /* Call the next handler if it exists and return its result. */
		            return next?.handle(request);
		        }
		    },
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPricePerDay_19mqech' || 		       
					   request.attributeName === 'PDS_UsrPassengersCount_ci664gv' ) { 		
						var price = await request.$context.PDS_UsrPricePerDay_19mqech;
						var passengers = await request.$context.PDS_UsrPassengersCount_ci664gv;
						var ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_wuupxgb = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.MinValueValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.MinValueValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});