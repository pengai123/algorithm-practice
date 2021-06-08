let reverseList = function (head) {
  let result = null;
  while (head) {
    let newHead = head.next;
    head.next = result;
    result = head;
    head = newHead;
  }
  return result;
};

// let reverseList = function (head) {

//   if (head === null) {
//     return null;
//   }

//   let result = null;
//   let reverseHead = hd => {
//     if (hd.next) {
//       let newHd = hd.next;
//       hd.next = result;
//       result = hd;
//       reverseHead(newHd)
//     } else {
//       hd.next = result;
//       return hd;
//     }
//   }
//   reverseHead(head);
//   return result;
// };


var reverseList = function (head) {
  if (!head) { return null; }
  if (!head.next) { return head; }

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;

};


let list = { value: 6, next: { value: 10, next: { value: 12, next: null } } }
let rst = reverseList(list)
console.log(rst)

