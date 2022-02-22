"use strict";

// Class definition
var KTSweetAlert2Demo = function () {
	var _init = function () {
		// Sweetalert Demo 1
		$('#kt_sweetalert_demo_1').click(function (e) {
			Swal.fire('Good job!');
		});

		// Sweetalert Demo 2
		$('#kt_sweetalert_demo_2').click(function (e) {
			Swal.fire("Here's the title!", "...and here's the text!");
		});

		// Sweetalert Demo 3
		$('#kt_sweetalert_demo_3_1').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "warning");
		});

		$('#kt_sweetalert_demo_3_2').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "error");
		});

		$('#kt_sweetalert_demo_3_3').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "success");
		});

		$('#kt_sweetalert_demo_3_4').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "info");
		});

		$('#kt_sweetalert_demo_3_5').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "question");
		});

		// Sweetalert Demo 4
		$("#kt_sweetalert_demo_4").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Agent Created Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "agents.html";
			})
			
		});

		$("#kt_sweetalert_demo_4_1").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Admin Created Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "admin-details.html";
			})
			
		});

		$("#kt_sweetalert_demo_4_2").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "*Admin Details has been Updated!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "admin-details.html";
			})
			
		});

		$("#kt_sweetalert_demo_4_3").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Agent Created Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "agg-agent-details.html";
			})
			
		});

		$("#kt_sweetalert_demo_4b").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Terminal Created Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "terminal_details.html";
			})
			
		});

		$("#kt_sweetalert_demo_4c").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Termianl Status Created Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "terminal_status.html";
			})
			
		});

		$("#kt_sweetalert_demo_4d").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Termianl type Updated Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "terminal_type.html";
			})
			
		});

		$("#kt_sweetalert_demo_4e").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Operation Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "#";
			})
			
		});

		// Sweetalert Demo 5
		$("#kt_sweetalert_demo_5").click(function (e) {
			Swal.fire({
				title: "Good job!",
				text: "You clicked the button!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "<i class='la la-headphones'></i> I am game!",
				showCancelButton: true,
				cancelButtonText: "<i class='la la-thumbs-down'></i> No, thanks",
				customClass: {
					confirmButton: "btn btn-danger",
					cancelButton: "btn btn-default"
				}
			});
		});

		$('#kt_sweetalert_demo_6').click(function (e) {
			Swal.fire({
				position: 'top-right',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500
			});
		});

		$('#kt_sweetalert_demo_7').click(function (e) {
			Swal.fire({
				title: 'jQuery HTML example',
				showClass: {
			    	popup: 'animate__animated animate__wobble'
			  	},
			  	hideClass: {
			    	popup: 'animate__animated animate__swing'
			  	}
		  	});
		});

		$('#kt_sweetalert_demo_8').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_9').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: true
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
					// result.dismiss can be 'cancel', 'overlay',
					// 'close', and 'timer'
				} else if (result.dismiss === 'cancel') {
					Swal.fire(
						'Cancelled',
						'Your imaginary file is safe :)',
						'error'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_10').click(function (e) {
			Swal.fire({
				title: 'Sweet!',
				text: 'Modal with a custom image.',
				imageUrl: 'https://unsplash.it/400/200',
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
				animation: false
			});
		});

		$('#kt_sweetalert_demo_11').click(function (e) {
			Swal.fire({
				title: 'Auto close alert!',
				text: 'I will close in 5 seconds.',
				timer: 5000,
				onOpen: function () {
					Swal.showLoading()
				}
			}).then(function (result) {
				if (result.dismiss === 'timer') {
					console.log('I was closed by the timer')
				}
			})
		});

		$('#kt_sweetalert_demo_12').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, change it!'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Changed!',
						'Agent\'s password has been changed.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_13').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, change it!'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Changed!',
						'Agent\'s pin has been changed.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_14').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "Are you sure you want to activate agent!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Activated!',
						'Agent has been successfully activated.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_14_detachTerminal').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "Device will be detached from this agent!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Terminal Detached!',
						'This device is successfully detached, Agent has no more access.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_14_disableTerminal').click(function (e) {
			Swal.fire({
				title: 'Are you sure you want to Disable Terminal?',
				text: "Device will not be able to perform transcations, while disabled!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Terminal Disabled!',
						'Device can no longer perform transactions.',
						'success'
					)
				}
			});
		});

		$("#kt_sweetalert_demo_15").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Dispute Raised Successfully!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "disputes.html";
			})
			
		});

		$("#kt_sweetalert_demo_16").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Issue Submitted!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "issuelog.html";
			})
			
		});
		$("#kt_sweetalert_demo_16b").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Charge Profile Saved!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "configuration-commissions-charge-controller.html";
			})
			
		});

		$("#kt_sweetalert_demo_17").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Institution details updated!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "institution-details.html";
			})
			
		});
		$("#kt_sweetalert_demo_17b").click(function (e) {
			Swal.fire({
				title: "Successfull!",
				text: "Institution has been created and auto-generated password has been sent!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "Continue!",
				
				customClass: {
					confirmButton: "btn btn-primary"
				}
			}).then(function (result) {
				window.location.href = "institution-basic-info.html";
			})
			
		});
	};

	return {
		// Init
		init: function () {
			_init();
		},
	};
}();

// Class Initialization
jQuery(document).ready(function () {
	KTSweetAlert2Demo.init();
});
