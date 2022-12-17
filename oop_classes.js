

class Learnable {
    static studentFullName = 'Donatus Prince';

    static getStudentName() {
        return this.studentFullName;
    }

    checkMean(values) {
        let sum = 0;
        for (let i = 0; i < values.length; i++){
            sum = sum + values[i];
        }
        const mean = sum / values.length;
        return mean;
    }
 
    checkMedian(values) {
        const { length } = values;
            
        values.sort((a, b) => a - b);
        if (length % 2 === 0) {
          return (values[length / 2 - 1] + values[length / 2]) / 2;
            }
        return values[(length - 1) / 2];
    }

    checkMode(values) {
        const mode = {};
        let max = 0, count = 0;
      
        for(let i = 0; i < values.length; i++) {
          const item = values[i];
          
          if(mode[item]) {
            mode[item]++;
          } else {
            mode[item] = 1;
          }
          
          if(count < mode[item]) {
            max = item;
            count = mode[item];
          }
        }
         
        return max;
      }

    checkRange(values) {
        values.sort((a, b) => a - b);
        return [values[0], values[values.length - 1]];
    }

    checkVariance(arr) {
            if(!arr.length){
               return 0;
            };
            const sum = arr.reduce((acc, val) => acc + val);
            const { length: num } = arr;
            const median = sum / num;
            let variance = 0;
            arr.forEach(num => {
               variance += ((num - median) * (num - median));
            });
            variance /= num;
            return variance;
    }

}

const studentName = Learnable.studentFullName;
// console.log(studentName)

const testCase1 = [5, 6, 1, 2, 10, 8, 3, 4] 
const testCase2 = [1, 2, 3, 4, 5]
const testCase3 = [5, 6, 50, 1, -5,]

const studentStats = new Learnable();
const mean =studentStats.checkMean(testCase1);
const median =studentStats.checkMedian(testCase1);
const mode =studentStats.checkMode(testCase1);
const range = studentStats.checkRange(testCase1);
const variance = studentStats.checkVariance(testCase1);
const std = Math.sqrt(variance)


console.log(`Mean is ${mean}`)
console.log(`Median is ${median}`)
console.log(`Mode is ${mode}`)
console.log(`range is ${range}`)
console.log(`variance is ${variance}`)
console.log(`standard deviation is ${std}`)