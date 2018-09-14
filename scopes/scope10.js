// Now what happens if I move name to line 18?

function grandfather() {
    var name = 'Hammad';

    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here

            //console.log(likes);
            console.log(name);
        }
        child();
    }
    parent();
}
grandfather();


