// Copyright (c) 2018, QuasarPM.com and contributors
// For license information, please see license.txt

frappe.ui.form.on("BAP Code", "data_1",
    function(frm) {
        frappe.call({
            "method": "frappe.client.get",
            args: {
                doctype: "Document List",
                name: frm.doc.unit
            },
            callback: function (data) {
				
                frappe.model.set_value(frm.doctype,
                    frm.docname, "bap_code",
                    data.message.unit
                    + (data.message.document_name ?
                        (" " + data.message.document_name) : ""))
            }
		})
		console.log('js functions ........')
    });
