class Dialog {
    successDialog(buefy, title, sucessMessage) {
        buefy.dialog.alert({
        title: title,
        message: sucessMessage,
        type: "is-success",
        ariaRole: "alertdialog",
        ariaModal: true,
        });
    }
}

export default new Dialog();