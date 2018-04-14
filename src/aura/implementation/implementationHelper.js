({

    getServerResponse: function (component) {
        var apex = new Object();
        apex.methodName = "c.getUserName";

        apex.params = { userId: "1", throwException: false };

        var callBacks = new Object();
        callBacks.successStateCallback = this.successStateCallback;
        callBacks.failureStateCallback = this.failureStateCallback;
        callBacks.incompleteStateCallback = this.incompleteStateCallback;

        this.Base__callServerAction(
            component,
            apex,
            callBacks
        );
    },

    getServerException: function (component) {
        var apex = new Object();
        apex.methodName = "c.getUserName";

        apex.params = { userId: "1", throwException: true };

        var callBacks = new Object();
        callBacks.successStateCallback = this.successStateCallback;
        callBacks.failureStateCallback = this.failureStateCallback;
        callBacks.incompleteStateCallback = this.incompleteStateCallback;

        this.Base__callServerAction(
            component,
            apex,
            callBacks
        );
    },

    //COMPONENT SPECIFIC BUSINESS LOGIC
    successStateCallback: function (message) {
        console.log('success callback', message);
    },

    failureStateCallback: function (message) {
        console.log('failure callback', message);
    },

    incompleteStateCallback: function (message) {
        console.log('incomplete callback', message);
    }

})