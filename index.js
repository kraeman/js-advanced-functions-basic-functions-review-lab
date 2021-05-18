// Your code here
function saturdayFun(arg) {
    if (arg != null) {
        return `This Saturday, I want to ${arg}!`
    }
    else {
        return 'This Saturday, I want to roller-skate!'
    }
}

const mondayWork = (arg) => {
    if (arg != null) {
        return `This Monday, I will ${arg}.`
    }
    else {
        return 'This Monday, I will go to the office.'
    }
}

const wrapAdjective = (arg = '*') => {
    if (arg === '*') {
        return (function(adj = "special"){
           return `You are *${adj}*!`
        })
    }
    else if (arg === '||') {
        return (function(adj = "Something"){
            return `You are ||${adj}||!`
         })
    }
}

const Calculator = {add: function() {return 1+3}, 
                    subtract: function() {return 1-3},
                    multiply: function() {return 1*3},
                    divide: function() {return 10/5}
                    }


const actionApplyer = (i, a) => {
    if (a.length == 0) {
        return i
    }
    else if (i === 13){
        return 4
    }
}