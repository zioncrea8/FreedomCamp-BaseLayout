'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"AgentName":"Ayobami Ajanaku","Type":1,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":2,"AgentName":"Owolabi Timothy","Type":2,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"15000"},\n' +
            '{"RecordID":3,"AgentName":"Zion Damilare","Type":3,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"4000"},\n' +
            '{"RecordID":4,"AgentName":"John Doe","Type":1,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"52000"},\n' +
            '{"RecordID":5,"AgentName":"Bernie Sanders","Type":1,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"45000"},\n' +
            '{"RecordID":6,"AgentName":"Joe Biden","Type":3,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":7,"AgentName":"Melissa Joe","Type":3,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"45000"},\n' +
            '{"RecordID":8,"AgentName":"Sarah Ajanaku","Type":2,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":9,"AgentName":"Afolabi Olaoye","Type":1,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"10000"},\n' +
            '{"RecordID":10,"AgentName":"Ayobami Ajanaku","Type":2,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":11,"AgentName":"Tola Praise","Type":3,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":12,"AgentName":"Doyin Ajanaku","Type":1,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":13,"AgentName":"Ayobami Toni","Type":2,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":14,"AgentName":"Peace Joy","Type":3,"Action":"Debit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":15,"AgentName":"Temi Tope","Type":1,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"},\n' +
            '{"RecordID":16,"AgentName":"Ayobami Ajanaku","Type":1,"Action":"Credit","Raised":"SuperAdmin", "Approved":"SuperAdmin", "DateCreated":"8/27/2017","Amount":"5000"}]');

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
            }, {
                field: 'AgentName',
                title: 'Agent Name',
            }, {
                field: 'Type',
                title: 'Type',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Withdrawal',
                            'state': 'primary'
                        },
                        2: {
                            'title': 'Reversal',
                            'state': 'danger'
                        },
                        3: {
                            'title': 'Wallet',
                            'state': 'success'
                        },
                    };
                    return '<span class=' + status[row.Type].state + '></span><span class="font-weight-bold text-' + status[row.Type].state + '">' +
                        status[row.Type].title + '</span>';
                },
            },
              {
                field: 'Action',
                title: 'Action',
            },
            {
                field: 'Raised',
                title: 'Raised By',
            },
            {
                field: 'Approved',
                title: 'Approved By',
            },
            {
                field: 'Amount',
                title: 'Amount',
            },
            {
                field: 'DateCreated',
                title: 'Date Created',
                type: 'date',
                format: 'MM/DD/YYYY',
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
