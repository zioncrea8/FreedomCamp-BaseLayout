'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"Username":"Bami Aremu","TerminalID":"2X014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/27/2017","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":2,"Username":"Ajanaku Victer","TerminalID":"2X014FDA","Initiator":"John Disu","Verifier":"admin","DateCreated":"10/2/2018","Description":"Under Performing","Status":1,"Type":1},\n' +
            '{"RecordID":3,"Username":"Ajanaku Victer","TerminalID":"2X014FDA","Initiator":"admin","Verifier":"Racheal","DateCreated":"8/27/2018","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":4,"Username":"Ajanaku Victer","TerminalID":"1M014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/04/2019","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":5,"Username":"Uju Amaka","TerminalID":"1M014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/04/2019","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":6,"Username":"Emeka Odii","TerminalID":"1M014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/04/2019","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":7,"Username":"Uju Amaka","TerminalID":"1M014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/04/2019","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":6,"Username":"Emeka Odii","TerminalID":"1M014FDA","Initiator":"admin","Verifier":"admin","DateCreated":"8/04/2019","Description":"User changed location","Status":1,"Type":1},\n' +
            '{"RecordID":15,"AgentID":"TOMI32FS","Username":"peace.joy","TerminalID":"2X014FDA","TradingWallet":"22905839033","DateCreated":"8/27/2017","Phone":"08034562811","Status":1,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","Username":"vic.abiola","TerminalID":"2X014FDA","TradingWallet":"22905839033","DateCreated":"8/27/2017","Phone":"08034562811","email":"vito01@gmail.com","Status":2,"Type":2}]');

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
                type: 'text',
            //     selector: {
            //      textAlign: 'center',
            // },      class: ''
                },
              
            {
                field: 'Username',
                title: 'Assigned Agent',
            },
            {
                field: 'TerminalID',
                title: 'Terminal ID',
            },
            {
                field: 'Initiator',
                title: 'Initiator',
            },
            {
                field: 'Verifier',
                title: 'Verifier',
            },
            
            {
                field: 'DateCreated',
                title: 'Date Assigned',
                type: 'date',
                format: 'MM/DD/YYYY',
            },

            {
                field: 'Description',
                title: 'Description',
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
