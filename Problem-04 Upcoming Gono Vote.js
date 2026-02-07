/**
 * 📥 Input:
ইনপুট হবে একটি Array। যেমন: ["ha", "na", "ha"]


🚀 Output:
যদি "ha" সংখ্যা "na" এর বেশি → true
যদি "ha" সংখ্যা "na" এর সমান → “equal”
অন্যথায় → false

যদি ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

 */

/*function signature/sample */
function gonoVote(array) {
    if(Array.isArray(array)===false){
        return "Invalid";
    }
    let haVote = 0;
    let naVote = 0;
    for(const vote of array){
        if(vote ==="ha"){
            haVote = haVote + 1;
        }else if(vote === "na"){
            naVote = naVote + 1;
        }
    }
    if(haVote>naVote){
        return true;
    }else if(haVote<naVote){
        return false;
    }else{
        return "equal";
    }
}
const arr = ["ha", "na", "ha", "na"];
const result = gonoVote(arr)
console.log(result);


