$(document).ready(function () {
    $(".deleteList").click(function () {
        event.preventDefault();
        $.ajax({
            url: 'components/controller.cfc',
            method: 'post',
            data: {
                method: "deleteRow",
                pageId: $(this).attr("data-id")
            },
            dataType: "text",
            success: function (response) {
                if (response) {
                    location.reload(true);
                    alert("Delete successfully!");
                }

            },
            error: function (xhr, status, error) {
                console.log("An error occurred : " + error);
            }
        });
    });
});