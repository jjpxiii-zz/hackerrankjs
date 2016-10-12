module.exports = {
    processData: function (input) {
        var t1 = input.split("\n")[0].split(" ");
        var t2 = input.split("\n")[1].split(" ");
        return (((+t1[0] > +t2[0] ? 1 : 0) + (+t1[1] > +t2[1] ? 1 : 0) + (+t1[2] > +t2[2] ? 1 : 0))
            + " "
            + ((+t2[0] > +t1[0] ? 1 : 0) + (+t2[1] > +t1[1] ? 1 : 0) + (+t2[2] > +t1[2] ? 1 : 0)));
    }
}