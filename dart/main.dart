String intz() {
  String value = 'pratap singh sisodiya';
  return value;
}

String reverse(String input) {
  for (var i = 0; i < input.length; i++) {
    input[i] = input[input.length - 1 - i];
  }
  return input;
}

// bool palindrome(String input) {
//   String output = input;
  
// }


void main() {
  var data = 2345;
  String inputodre = "pratapsinghsisodiya";
  print(inputodre[0]);
  print(reverse(inputodre));
  print('hell ${data}');
}
