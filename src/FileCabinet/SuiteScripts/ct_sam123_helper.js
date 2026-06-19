/**
 * ct_sam123_helper.js
 * Shared utility module
 *
 * DEPLOY: Upload to File Cabinet. Referenced as a Library
 * by UE. Not deployed on its own.
 *
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 */
define(["N/search", "N/log"], function (search, log) {
    
    return {
        logTest: function() {
            log.debug("HELPER MODULE", "Hello from the helper module!");
        }
    };
});