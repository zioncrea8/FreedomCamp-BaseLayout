'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"Agent Name":"Victoria Abiola","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":1},\n' +
            '{"RecordID":2,"Agent Name":"Victoria Abiola","Username":"Bami.ajanaku","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":2,"Type":2},\n' +
            '{"RecordID":3,"Agent Name":"Victoria Abiola","Username":"sarah.doe","Request Date":"11/10/2020","Complaint":"Pls Reverse my...","Category":"Dispute","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":2},\n' +
            '{"RecordID":4,"Agent Name":"Victoria Abiola","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Rachael","Resolution Date":"11/10/2020","Status":3,"Type":1},\n' +
            '{"RecordID":5,"Agent Name":"Victoria Abiola","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"login error","Category":"dispute","Resolved by":"Rachael","Resolution Date":"11/10/2020","Status":3,"Type":1},\n' +
            '{"RecordID":6,"Agent Name":"Victoria Abiola","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"How can i get a new terminal","Category":"Enquiry","Resolved by":"Rachael","Resolution Date":"11/10/2020","Status":2,"Type":3},\n' +
            '{"RecordID":7,"Agent Name":"Victoria Abiola","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"How can i logout...","Category":"Enquiry","Resolved by":"Rachael","Resolution Date":"11/10/2020","Status":2,"Type":3},\n' +
            '{"RecordID":8,"AgentID":"FRE3D0M","Username":"peace.martin","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":2,"Type":3},\n' +
            '{"RecordID":9,"AgentID":"TRGE6777","Username":"tin.spray","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":3},\n' +
            // '{"RecordID":10,"AgentID":"FUMNI322","Username":"ben.bard,"TerminalID":"2X014FDA","TradingWallet":"22905839033","DateCreated":"8/27/2017","Phone":"08034562811","email":"vito01@gmail.com","Status":2,"Type":3},\n' +
            '{"RecordID":11,"AgentID":"RTA652S3","Username":"ranti.abiola","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":1},\n' +
            '{"RecordID":12,"AgentID":"ERPYFR34","Username":"dami.aremu","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":2,"Type":2},\n' +
            '{"RecordID":13,"AgentID":"RAPY65EW","Username":"linden.iraye","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":2,"Type":2},\n' +
            '{"RecordID":14,"AgentID":"WAPY432S","Username":"amazing.grace","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":1},\n' +
            '{"RecordID":15,"AgentID":"TOMI32FS","Username":"peace.joy","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":1,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","Username":"vic.abiola","Request Date":"11/10/2020","Complaint":"login error","Category":"Complaint","Resolved by":"Timothy Owolabi","Resolution Date":"11/10/2020","Status":2,"Type":2}]');

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
            //     field: 'Agent Name',
            //     title: 'Agent Name',
            // }, 
            {
                field: 'Username',
                title: 'Username',
                template: function(row) {
                    return row.Username;
                },
                
            },  
            {
                field: 'Request Date',
                title: 'Request Date',
                type: 'date',
                format: 'MM/DD/YYYY',
            },
            {
                field: 'Complaint',
                title: 'Complaint',
            },
            {
                field: 'Category',
                title: 'Category',
            },
            
            {
                field: 'Resolved by',
                title: 'Resolved by',
            },
            {
                field: 'Resolution Date',
                title: 'Resolution Date',
                type: 'date',
                format: 'MM/DD/YYYY',
            },
            // {
            //     field: 'Type',
            //     title: 'Agent Type',
            //     autoHide: false,
            //     // callback function support for column rendering
            //     template: function(row) {
            //         var status = {
            //             1: {
            //                 'title': 'Aggregator',
            //                 'state': 'primary'
            //             },
            //             2: {
            //                 'title': 'Sub-Aggregator',
            //                 'state': 'danger'
            //             },
            //             3: {
            //                 'title': 'Agent',
            //                 'state': 'success'
            //             },
            //         };
            //         return '<span class="label label-' + status[row.Type].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + status[row.Type].state + '">' +
            //             status[row.Type].title + '</span>';
            //     },
            // }, 
            {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Resolved',
                            'class': ' label-light-success'
                        },
                        2: {
                            'title': 'Pending',
                            'class': ' label-light-warning'
                        },
                        3: {
                            'title': 'Rejected',
                            'class': ' label-light-danger'
                        },
                        
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            }],
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
