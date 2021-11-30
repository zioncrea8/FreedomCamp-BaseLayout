'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"AgentID":"APY652S2","Username":"victoria abiola","Email":"admin@freedom.com","Phone":"08034562811", "LGA":"Kosofe","Status":1,"Type":1},\n' +
            '{"RecordID":2,"AgentID":"DAPY62SE","Username":"john doe","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Surulere", "Status":2,"Type":3},\n' +
            '{"RecordID":3,"AgentID":"AP2Y752S","Username":"sarah doe","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Ketu","Status":1,"Type":2},\n' +
            '{"RecordID":4,"AgentID":"CAPY52HT","Username":"afo ola","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Obalende","Status":1,"Type":1},\n' +
            '{"RecordID":5,"AgentID":"TY5E652S","Username":"zion dami","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Ikeja","Status":2,"Type":1},\n' +
            '{"RecordID":6,"AgentID":"PR32FREE","Username":"kola.omi","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Kosofe","Status":1,"Type":3},\n' +
            '{"RecordID":7,"AgentID":"TAJB3NK","Username":"olukoya siony","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Ajah","Status":2,"Type":3},\n' +
            // '{"RecordID":8,"AgentID":"FRE3D0M","Username":"peace.martin","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Berger","Status":1,"Type":3},\n' +
            // '{"RecordID":9,"AgentID":"TRGE6777","Username":"tin.spray","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Mowe","Status":1,"Type":3},\n' +
            // '{"RecordID":10,"AgentID":"FUMNI322","Username":"ben.bard,"Email":"admin@freedom.com","Phone":"08034562811","LGA":"Kosofe","Status":2,"Type":3},\n' +
            // '{"RecordID":11,"AgentID":"RTA652S3","Username":"ranti.abiola","Email":"admin@freedom.com","Phone":"08034562811", "LGA":"Kosofe","Status":1,"Type":1},\n' +
            // '{"RecordID":12,"AgentID":"ERPYFR34","Username":"dami.aremu","TerminalID":"2X014FDA","TradingWallet":"22905839033","Email":"admin@freedom.com","Phone":"08034562811","Status":2,"Type":2},\n' +
            // '{"RecordID":13,"AgentID":"RAPY65EW","Username":"linden.iraye","TerminalID":"2X014FDA","TradingWallet":"22905839033","Email":"admin@freedom.com","Phone":"08034562811","Status":2,"Type":2},\n' +
            // '{"RecordID":14,"AgentID":"WAPY432S","Username":"amazing.grace","TerminalID":"2X014FDA","TradingWallet":"22905839033","Email":"admin@freedom.com","Phone":"08034562811","Status":1,"Type":1},\n' +
            // '{"RecordID":15,"AgentID":"TOMI32FS","Username":"peace.joy","TerminalID":"2X014FDA","TradingWallet":"22905839033","Email":"admin@freedom.com","Phone":"08034562811","Status":1,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","Username":"vic.abiola","Email":"admin@freedom.com","Phone":"08034562811","LGA":"Kosofe", "Status":2,"Type":2}]');

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
            }, {
                field: 'Username',
                title: 'Username',
                template: function(row) {
                    return row.Username;
                },
            },{
                field: 'Phone',
                title: 'Phone',
            },
            {
                field: 'Email',
                title: 'Email',
                
            },
            // {
            //     field: 'LGA',
            //     title: 'LGA',
            // },
            {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
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
