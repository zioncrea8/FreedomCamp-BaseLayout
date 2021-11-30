'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"AgentID":"APY652S2","DeviceType":"3LINE_COMMISSION_FEE_PERCENTAGE","UpdatedOn":"21-10-2020","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"23","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":2,"AgentID":"DAPY62SE","DeviceType":"FCMB","UpdatedOn":"2F014TDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"25","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":3,"AgentID":"AP2Y752S","DeviceType":"Skye Bank","UpdatedOn":"2X014ER3","CbnCode":"22905839023","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"5","Status":1,"Actions":null,"Type":2},\n' +
            '{"RecordID":4,"AgentID":"CAPY52HT","DeviceType":"Guaranty Trust Bank","UpdatedOn":"2X034FDA","CbnCode":"22905839031","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"nil","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":5,"AgentID":"TY5E652S","DeviceType":"Wema Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839433","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"25","Status":2,"Actions":null,"Type":1},\n' +
            '{"RecordID":6,"AgentID":"PR32FREE","DeviceType":"Piggy Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"25","Status":1,"Actions":null,"Type":3},\n' +
            '{"RecordID":7,"AgentID":"TAJB3NK","DeviceType":"Kuda Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"10","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":8,"AgentID":"FRE3D0M","DeviceType":"First Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"10","Status":1,"Actions":null,"Type":3},\n' +
            '{"RecordID":9,"AgentID":"TRGE6777","DeviceType":"Union Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"5","Status":1,"Actions":null,"Type":1},\n' +
            // '{"RecordID":10,"AgentID":"FUMNI322","DeviceType":"ben.bard,"UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"6","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":11,"AgentID":"RTA652S3","DeviceType":"3line","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"9","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":12,"AgentID":"ERPYFR34","DeviceType":"Zaid Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"9","Status":2,"Actions":null,"Type":2},\n' +
            '{"RecordID":13,"AgentID":"RAPY65EW","DeviceType":"Fidelity Bank","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"9","Status":2,"Actions":null,"Type":2},\n' +
            '{"RecordID":14,"AgentID":"WAPY432S","DeviceType":"Amazing grace","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"9","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":15,"AgentID":"TOMI32FS","DeviceType":"peace.joy","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","DeviceType":"vic.abiola","UpdatedOn":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppVersion":"GVT-CDE","UpdatedBy":"9","Status":2,"Actions":null,"Type":2}]');

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: false,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
            //     selector: {
            //      textAlign: 'center',
            // },      class: ''
                },
              
            // {
            //     field: 'AgentID',
            //     title: 'Agent ID',
            // }, 
            {
                field: 'DeviceType',
                title: 'Device Type',
                
            },  
            {
                field: 'AppVersion',
                title: 'App Version',
            },
            {
                field: 'UpdatedBy',
                title: 'Updated By',
            },
            {
                field: 'UpdatedBy',
                title: 'Updated By',
            },
            {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 110,
                overflow: 'visible',
                autoHide: false,
                template: function() {
                    return '\
                    <button data-record-id="" class="btn btn-sm btn-default btn-font-sm" title="Edit details" data-toggle="modal" data-target="#kt_modal_4">\
		                      <i class="fa fa-pen icon-sm"></i> Edit\
		                  </button>\
                ';
                },
            }
            ],
        });

        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableDataLocalDemo.init();
});
