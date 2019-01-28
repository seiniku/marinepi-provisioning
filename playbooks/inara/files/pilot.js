        $(document).ready(function () {
            $("#auto").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "setState",
                        value: "auto"
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
        $(document).ready(function () {
            $("#standby").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "setState",
                        value: "standby"
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
        $(document).ready(function () {
            $("#minus1").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "changeHeading",
                        value: -1
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
        $(document).ready(function () {
            $("#minus10").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "changeHeading",
                        value: -10
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
        $(document).ready(function () {
            $("#plus1").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "changeHeading",
                        value: 1
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
        $(document).ready(function () {
            $("#plus10").click(function () {
                $.post("http://" + window.location.host + "/plugins/raymarineautopilot/command",
                    {
                        action: "changeHeading",
                        value: 10
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
            });
        });
