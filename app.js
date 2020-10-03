
// function showError(){
//     // creat div
//     const WarningDiv = document.createElement('div');
//     // get Element
//     const iframe = document.querySelector('#register');
//     const formDiv = document.querySelector('.form-div');
//     // add class
//     WarningDiv.className = 'alert alert-danger';
//     // creat text node and apend to WarningDiv
//     WarningDiv.appendChild(document.createTextNode('please make sure you kame paayment after form submission'));

//     // insert warnning above iframe
//     formDiv.insertBefore(WarningDiv, iframe)
// }




alert('Please make sure you make payment after you submit the form');
    // function pay(){
    //     var btn = document.querySelector(".button-for-payment");
    //     btn.addEventListener('click', function{
    //         btn.textContent = 'pay';
    //     })
    // }

    // document.getElementById("submit").addEventListener('click', function(){
    //     alert('registration succesfull, kindly make payment');
    //     // window.location = "https://google.com";
    //     window.location = "https://flutterwave.com/pay/leagueoflegend";
    // });

    function myFunction(event){
        // window.location = "https://google.com";
        alert('registration succesfull, kindly make payment');
        window.location = "https://flutterwave.com/pay/leagueoflegend";

        event.preventDefault();
    }
    // function secFunction(){
    //     alert('registration succesfull, kindly make payment');
    //     // window.location = "https://google.com";
    //     window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfMkfe1edUqRlv3mQr4PptiFvZKPGku8Pl5ic23claHwuhnMA/closedform";
    // }