// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange() {
        console.log("Entering password...")
    }
    return(
        <input type="password" id="pwd" name="password" onChange={handleChange}></input>
    )
}

export default PasswordInput;