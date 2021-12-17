function createPdf () {
   const element = document.getElementById("id")
    var opt = {
        margin:       0,
        filename:     'OllyMarsters-cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
   html2pdf()
   .set(opt)
   .from(element)
   .save()
}