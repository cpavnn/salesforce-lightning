({

    getResponse: function (component, event, helper) {
        helper.getServerResponse(component);
    },

    getException: function (component, event, helper) {
        helper.getServerException(component);
    }

})