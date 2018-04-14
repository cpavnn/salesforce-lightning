({
    //FOR GENERIC NOTIFICATIONS
    Base__showSuccessAlert: function (message, component) {
        console.log(message)
    },

    Base__showError: function (message, component) {
        console.error(message)
    },

    Base__callServerAction: function (component, apex, callBacks) {

        if (!apex.methodName) {
            this.Base__showError("Helper Error: no method name supplied");
            return;
        }

        var action = component.get(apex.methodName);

        if (apex.params) {
            action.setParams(apex.params);
        }

        action.setCallback(this, function (response) {
            if (response.getState() == "SUCCESS") {
                var result = response.getReturnValue();
                if (callBacks.successStateCallback) {
                    callBacks.successStateCallback(result);
                }
            } else if (response.getState() === "ERROR") {
                if (callBacks.failureStateCallback) {
                    callBacks.failureStateCallback(JSON.stringify(response.getError()));
                }
            } else if (response.getState() === "INCOMPLETE") {
                if (callBacks.incompleteStateCallback) {
                    var message = "The server didn’t return a response. The server might be down or the client might be offline";
                    callBacks.incompleteStateCallback(message);
                }
            }
        });

        $A.enqueueAction(action);

    }
})