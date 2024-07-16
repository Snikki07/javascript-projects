// holds object we want to design
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num) {
        let parts = {
            2:"Launch",
            3:"Code",
            5:"Rocks",
        }
        let result = "";
        for (let modulus in parts){
            if(num % modulus=== 0){
                if (modulus == 5 && result.length !== 0) {
                    result += " ";
                }
                result += parts[modulus];
            }
        }
        // if (num % 2 === 0) { 
        //     result += "Launch";
        // }
        // if (num % 3 === 0) {
        //     result += "Code";
        // }
        // if (num % 5 === 0) {
        //     if (result.length !== 0) {
        //         result += " ";
        //     }
        //     result += "Rocks";
        // }
        if (result.length === 0) {
            return "Rutabagas! That doesn't work.";
        } else {
            result += "!";
            if (result === "Launch Rocks!") {
                result += " (CRASH!!!!)";
            }
            return result;
        }

    }
};

module.exports = launchcode;

