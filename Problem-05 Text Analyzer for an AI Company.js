/**
 * তোমাকে একটি ফাংশন লিখতে হবে, যা—
1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
 2️⃣ ওই text থেকে  সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
 3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
  ➡️ স্পেস (space) গণনায় ধরা হবে না
  Object: { longwords:String, token: Number }
longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
token → Sentence এর total length without স্পেস 

Challenge 📢 : যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো। 
 */

/*function signature/sample */
function  analyzeText(str) {
    if(typeof str!=='string'){
        return "Invalid";
    }

    let text = str.split(" ");
    const sentenceTotalLength = text.join("").length;
    let max = "";
    for(const texts of text){
        if(texts.length>max.length){
            max = texts;
        }
    }
    if(sentenceTotalLength<=0){
        return "Invalid";
    }
    return {
        longwords: max,
        token: sentenceTotalLength
    }
}
const string = "I am a little honest person";
const result = analyzeText(string);
console.log(result);

