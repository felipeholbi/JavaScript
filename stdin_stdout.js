/*Arrow function to input string in stdin
after print in stdout*/
process.stdin.on('data', data => {
    console.log('Hello world');
    console.log(data.toString())
    process.exit();
});