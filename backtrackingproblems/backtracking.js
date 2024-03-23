





//substring code starts from here


const backtrackingsubstring = (string,indexa,answer="") => {
    if (indexa >= string.length) {
        return answer;
    }
    backtrackingsubstring(string,indexa,answer)
    answer += string[indexa];
    backtrackingsubstring(stringm,indexa+1,answer)  
}


console.log(backtrackingsubstring("pratp",0));

// const values = return 'string dat in a n value by which data can be done so much as you know by which data can be proccesed'