"use strict";

function Picker() {
    this.canvas.colorPicker({picketDefault: "ffffff"});
    var picker = document.getElementById("picker");
    picker.colorPicker(onChangeColor);

    var clic= false;


}