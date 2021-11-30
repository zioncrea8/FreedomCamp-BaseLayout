'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"DeviceID":"2FXCY001","Serial":"234XFYT3YT500","DateCreated":"8/27/2017","Action":"Detach","Status":1,"Type":1},\n' +
            '{"RecordID":2,"DeviceID":"2XDCYF01","Serial":"234XFYT3YT500","DateCreated":"8/27/2017","Action":"Detach","Status":2,"Type":2},\n' +
            '{"RecordID":3,"DeviceID":"2FXCY03R","Serial":"234XFYT3YT500","DateCreated":"8/27/2017","Action":"Detach","Status":1,"Type":1},\n' +
            '{"RecordID":4,"DeviceID":"2FXCY001","Serial":"234XFYT3YT500","DateCreated":"8/27/2017","Action":"Detach","Status":2,"Type":1},\n' +
            // '{"RecordID":5,"Trans":2,"Amount":"7000","DateCreated":"8/27/2017","Media":"Mobile","Status":1,"Type":1},\n' +
            // '{"RecordID":6,"Trans":1,"Amount":"55000","DateCreated":"8/27/2017","Media":"POS","Status":2,"Type":1},\n' +
            // '{"RecordID":7,"Trans":1,"Amount":"75000","DateCreated":"8/27/2017","Media":"Mobile","Status":1,"Type":1},\n' +
            // '{"RecordID":8,"Trans":2,"Amount":"1700","DateCreated":"8/27/2017","Media":"Mobile","Status":1,"Type":1},\n' +
            // '{"RecordID":9,"Trans":1,"Amount":"2000","DateCreated":"8/27/2017","Media":"POS","Status":2,"Type":1},\n' +
            // '{"RecordID":10,"Trans":2,"Amount":"74000","DateCreated":"8/27/2017","Media":"POS","Status":1,"Type":1},\n' +
            // '{"RecordID":11,"Trans":1,"Amount":"10000","DateCreated":"8/27/2017","Media":"Mobile","Status":1,"Type":1},\n' +
            // '{"RecordID":12,"Trans":2,"Amount":"15000","DateCreated":"8/27/2017","Media":"Mobile","Status":1,"Type":1},\n' +
            '{"RecordID":5,"DeviceID":"2FXCY001","Serial":"234XFYT3YT500","DateCreated":"8/27/2017","Action":"Detach","Status":1,"Type":1}]');

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 7,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {
                    class: ''
                },
                textAlign: 'center',
            },
            {
                field: 'DeviceID',
                title: 'Device ID',
                template: function(row) {
                    return row.DeviceID;},
            },
            {
                field: 'Type',
                title: 'Type',
                // callback function support for column rendering
                template: function(row) {
                    var type = {
                        1: {
                            'title': 'POS',
                            'class': ' label-light-success'
                            
                        },
                        2: {
                            'title': 'Mobile',
                            'class': ' label-light-success'
                            
                        },
                        
                    };
                    return type[row.Type].title ;
                },
            }, {
                field: 'Serial',
                title: 'Serial No',
                template: function(row) {
                    return row.Serial;
                },
            },
            {
                field: 'DateCreated',
                title: 'Date Created',
                type: 'date',
                format: 'MM/DD/YYYY',
            },
            {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Active',
                            'class': ' label-light-success'
                        },
                        2: {
                            'title': 'Inactive',
                            'class': ' label-light-danger'
                        },
                        
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            },
            {
                field: 'Action',
                title: 'Action',
                
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
