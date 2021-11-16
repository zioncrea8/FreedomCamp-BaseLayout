'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions
   
    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[ {"RecordID":1,"AgentID":"APY652S2","InstitutionName":"Access Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"23","Status":1,"Type":1},\n' +
            '{"RecordID":2,"AgentID":"DAPY62SE","InstitutionName":"FCMB","InstitutionAddress":"Abuja","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"25","Status":2,"Type":3},\n' +
            '{"RecordID":3,"AgentID":"AP2Y752S","InstitutionName":"Skye Bank","InstitutionAddress":"Lagos","PhoneNo":"22905839023","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"5","Status":1,"Type":2},\n' +
            '{"RecordID":4,"AgentID":"CAPY52HT","InstitutionName":"Guaranty Trust Bank","InstitutionAddress":"Ogun","PhoneNo":"22905839031","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"nil","Status":1,"Type":1},\n' +
            '{"RecordID":5,"AgentID":"TY5E652S","InstitutionName":"Wema Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839433","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"25","Status":2,"Type":1},\n' +
            '{"RecordID":6,"AgentID":"PR32FREE","InstitutionName":"Piggy Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"25","Status":1,"Type":3},\n' +
            '{"RecordID":7,"AgentID":"TAJB3NK","InstitutionName":"Kuda Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"10","Status":2,"Type":3},\n' +
            '{"RecordID":8,"AgentID":"FRE3D0M","InstitutionName":"First Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"10","Status":1,"Type":3},\n' +
            '{"RecordID":9,"AgentID":"TRGE6777","InstitutionName":"Union Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"5","Status":1,"Type":1},\n' +
            // '{"RecordID":10,"AgentID":"FUMNI322","InstitutionName":"ben.bard,"InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"6","Status":2,"Type":3},\n' +
            '{"RecordID":11,"AgentID":"RTA652S3","InstitutionName":"3line","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"9","Status":1,"Type":1},\n' +
            '{"RecordID":12,"AgentID":"ERPYFR34","InstitutionName":"Zaid Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"9","Status":2,"Type":2},\n' +
            '{"RecordID":13,"AgentID":"RAPY65EW","InstitutionName":"Fidelity Bank","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"9","Status":2,"Type":2},\n' +
            '{"RecordID":14,"AgentID":"WAPY432S","InstitutionName":"Amazing grace","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"9","Status":1,"Type":1},\n' +
            '{"RecordID":15,"AgentID":"TOMI32FS","InstitutionName":"peace.joy","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","Status":1,"Type":1},\n' +
            '{"RecordID":16,"AgentID":"APY652S","InstitutionName":"vic.abiola","InstitutionAddress":"3, Crimson way, VI, Lagos,, Nigeria","PhoneNo":"22905839033","AcquiredPercentage":"0.5","InstitutionEmail":"Institution@email.com","MagtiponCode":"9","Status":2,"Type":2}]');

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
                field: 'InstitutionName',
                title: 'Institution Name',
                
            },  
            {
                field: 'InstitutionEmail',
                title: 'Institution Email',
            },
           
            
            {
                field: 'PhoneNo',
                title: 'Mobile No',
            },
             
            {
                field: 'InstitutionAddress',
                title: 'Institution Address',
            },

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
            
            // {
            //     field: 'AcquiredPercentage',
            //     title: 'Acquired Percentage',
                
            // },
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
            // {
            //     field: 'Status',
            //     title: 'Status',
               
            //     template: function(row) {
            //         var status = {
            //             1: {
            //                 'title': 'Active',
            //                 'class': ' label-light-success'
            //             },
            //             2: {
            //                 'title': 'Inactive',
            //                 'class': ' label-light-danger'
            //             },
                        
            //         };
            //         return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
            //     },
            // }
            // ],
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
