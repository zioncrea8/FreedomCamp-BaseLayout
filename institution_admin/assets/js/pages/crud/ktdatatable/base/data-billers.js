'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"AgentID":"APY652S2","ClientName":"3LINE_COMMISSION_FEE_PERCENTAGE","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"23","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":2,"AgentID":"DAPY62SE","ClientName":"FCMB","OpayCode":"2F014TDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"25","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":3,"AgentID":"AP2Y752S","ClientName":"Skye Bank","OpayCode":"2X014ER3","CbnCode":"22905839023","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"5","Status":1,"Actions":null,"Type":2},\n' +
            '{"RecordID":4,"AgentID":"CAPY52HT","ClientName":"Guaranty Trust Bank","OpayCode":"2X034FDA","CbnCode":"22905839031","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"nil","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":5,"AgentID":"TY5E652S","ClientName":"Wema Bank","OpayCode":"2X014FDA","CbnCode":"22905839433","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"25","Status":2,"Actions":null,"Type":1},\n' +
            '{"RecordID":6,"AgentID":"PR32FREE","ClientName":"Piggy Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"25","Status":1,"Actions":null,"Type":3},\n' +
            '{"RecordID":7,"AgentID":"TAJB3NK","ClientName":"Kuda Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"10","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":8,"AgentID":"FRE3D0M","ClientName":"First Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"10","Status":1,"Actions":null,"Type":3},\n' +
            '{"RecordID":9,"AgentID":"TRGE6777","ClientName":"Union Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"5","Status":1,"Actions":null,"Type":1},\n' +
            // '{"RecordID":10,"AgentID":"FUMNI322","ClientName":"ben.bard,"OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"6","Status":2,"Actions":null,"Type":3},\n' +
            '{"RecordID":11,"AgentID":"RTA652S3","ClientName":"3line","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"9","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":12,"AgentID":"ERPYFR34","ClientName":"Zaid Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"9","Status":2,"Actions":null,"Type":2},\n' +
            '{"RecordID":13,"AgentID":"RAPY65EW","ClientName":"Fidelity Bank","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"9","Status":2,"Actions":null,"Type":2},\n' +
            '{"RecordID":14,"AgentID":"WAPY432S","ClientName":"Amazing grace","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"9","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":15,"AgentID":"TOMI32FS","ClientName":"peace.joy","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","Status":1,"Actions":null,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","ClientName":"vic.abiola","OpayCode":"2X014FDA","CbnCode":"22905839033","AcquiredPercentage":"0.5","AppID":"GVT-CDE","AppKey":"9","Status":2,"Actions":null,"Type":2}]');

        var datatable = $('#kt_datatable_details').KTDatatable({
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
                field: 'ClientName',
                title: 'Client Name',
                
            },  
            {
                field: 'AppID',
                title: 'Application ID',
            },
            {
                field: 'AppKey',
                title: 'Application Key',
            },
            
            // {
            //     field: 'Type',
            //     title: 'Agent Type',
            //     autoHide: false,
            //     // callback function support for column rendering
            //     template: function(row) {
            //         var status = {
            //             1: {
            //                 'title': 'Sole Agent',
            //                 'state': 'secondary'
            //             },
            //             2: {
            //                 'title': 'Aggregator',
            //                 'state': 'secodary'
            //             },
            //             3: {
            //                 'title': 'Sub-aggregator',
            //                 'state': 'secondary'
            //             },
            //         };
            //         return '<span class="label label-' + status[row.Type].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + status[row.Type].state + '">' +
            //             status[row.Type].title + '</span>';
            //     },
            // }, 
            {
                field: 'Status',
                title: 'Status',
               
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Enabled',
                            'class': ' label-light-success'
                        },
                        2: {
                            'title': 'Disabled',
                            'class': ' label-light-danger'
                        },
                        
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            },
            
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
