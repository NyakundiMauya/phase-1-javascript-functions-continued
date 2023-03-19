// code your solution here
function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity1 = "go to the office") {
   return `This Monday, I will ${activity1}.`;
}
function wrapAdjective(param) {
   if (param === '*') {
      return function (late = "very late") {
         return `You are *${late}*!`;
      }
   } else if (param === `||`) {
      return function (late = "very late") {
         return `You are ||${late}||!`;
      }

   }
   //return

}


