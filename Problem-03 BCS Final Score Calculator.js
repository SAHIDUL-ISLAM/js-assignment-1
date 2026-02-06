/**
 * 📥 Input:
একটি Object যার প্রপার্টিগুলো হবে: { right: Number, wrong: Number, skip: Number }

Output :  ফাইনাল স্কোর হবে নাম্বার এবং রাউন্ডেড। (Number, Rounded)  

🎯 BCS পরীক্ষার নিয়ম:
মোট প্রশ্ন সংখ্যা = ১০০টি।
সুতরাং, ইনপুটে থাকা right + wrong + skip এর যোগফল অবশ্যই ১০০ হতে হবে।


🚩 Challenge:
যদি right + wrong + skip এর যোগফল ১০০ না হয়, তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।
 
💡 Scoring Rules:
প্রতিটি সঠিক উত্তরের জন্য: +১ পয়েন্ট।
প্রতিটি ভুল উত্তরের জন্য: -০.৫ পয়েন্ট (০.৫ নম্বর কাটা যাবে)।
বাদ দেওয়া (skip) প্রশ্নের জন্য: ০ পয়েন্ট।


💡Hints: Rounded ভ্যালু বের করার জন্য  Math.round() function ব্যবহার করতে পারো।

else if(typeof omr!=='object'){
        return "Invalid";
    }

*/

/*function signature/sample */
function finalScore(omr) {
    const totalRightAns = omr.right;
    const totalWrongAns = omr.wrong;
    const totalSkipAns = omr.skip;
    const totalMarks = totalRightAns+totalWrongAns+totalSkipAns;
    if(totalMarks!==100){
        return "Invalid";
    }
    const finalScore = Math.round(totalRightAns-(totalWrongAns*0.5));
    return finalScore;
}
let obj = { right: 67, wrong: 23, skip: 10 }
const input = finalScore(obj);
console.log(input);

