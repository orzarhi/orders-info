export default define([
    "https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"

], function (jsPDF) {
    var theClass = {
        addFont: function (doc) {
            var font = '<here comes a very long string of the fone>';

            var callAddFont = function () {
                doc.addFileToVFS('David-normal.ttf', font);
                doc.addFont('David-normal.ttf', 'David', 'normal');
            };
            jsPDF.jsPDF.API.events.push(['addFonts', callAddFont]);
        }

        // eof public property functions
    };
    return theClass;
});

