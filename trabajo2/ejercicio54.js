function stingArray() {
    let arr = JSON.parse('[1, 5, "false", "yuli"]');
    console.log(arr);
    console.log(typeof arr)
    let a = arr[0]
    console.log(a)
}
stingArray();