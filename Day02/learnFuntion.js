const browserVersion = "Chrome"
function getBrowserVersion ()
{
    if (browserVersion == "Chrome")
    {
        // Inside Block
        let browserVersion = 145
        console.log ('Browser is Chrome and version is: '+ browserVersion)
    }
        //Outside Block
        console.log ("Browser is: "+browserVersion)
}
//call the function
getBrowserVersion()