const bindata = [
    {
        "name": "Recycle bin",
        "fill": "45/60kg",
        "DTC": "6 Days",
        "date": "26 March",
        "charge": "86%",
        "method": "Solar",
        "week-c": "857",
        "week-p": "765",
        "month-c": "4523",
        "month-b": "5534",
        "all": "32387"
    },
        {
        "name": "LandFill bin",
        "fill": "70/60kg",
        "DTC": "6 Days",
        "date": "26 March",
        "charge": "100%",
        "method": "Solar",
        "week-c": "150",
        "week-p": "190",
        "month-c": "2189",
        "month-b": "3245",
        "all": "10490"
    },
        {
        "name": "Secondary Landfill bin",
        "fill": "20/60kg",
        "DTC": "6 Days",
        "date": "26 March",
        "charge": "86%",
        "method": "Solar",
        "week-c": "150",
        "week-p": "190",
        "month-c": "2189",
        "month-b": "3245",
        "all": "10490"
    },
        {
        "name": "Green bin",
        "fill": "30/60kg",
        "DTC": "6 Days",
        "date": "26 March",
        "charge": "63%",
        "method": "None",
        "week-c": "645",
        "week-p": "687",
        "month-c": "2103",
        "month-b": "2301",
        "all": "15480"
    }
]

function edit(x, id){
    let bin = document.getElementById(x);
    let newname = prompt("Please enter the new name");
    let element = bin.getElementsByClassName("name-box")[0];
    element.innerHTML = newname;
    bindata[Number(x.substr(x.length - 1)) - 1]["name"] = newname;
}

function openbin(id) {
    console.log(id)
    document.getElementById("bin-popup-name").innerHTML = bindata[id].name
    document.getElementById("bin-popup-filllevel").innerHTML = bindata[id].fill
    document.getElementById("bin-popup-days").innerHTML = bindata[id].DTC
    document.getElementById("bin-popup-date").innerHTML = bindata[id].date
    document.getElementById("bin-popup-charge").innerHTML = bindata[id].charge
    document.getElementById("bin-popup-charge-method").innerHTML = bindata[id].method
    document.getElementById("week-current").innerHTML = bindata[id]["week-p"]
    document.getElementById("week-prior").innerHTML = bindata[id]["week-p"]
    document.getElementById("month-current").innerHTML = bindata[id]["month-c"]
    document.getElementById("month-best").innerHTML = bindata[id]["month-b"]
    document.getElementById("all-time").innerHTML = bindata[id].all

    document.getElementById("openbin").click()
}