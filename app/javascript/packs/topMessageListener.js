// function receiveMessage(event) {
//     console.log(event.origin);
//     if (event.origin !== "http://view.publitas.com" && event.origin !== "https://view.publitas.com" && event.origin !== "https://9023-109-255-239-131.ngrok-free.app") {
//         console.log(event.data);
//         console.log('Message received from untrusted origin:', event);
//         return;
//     }
//
//     console.log(event.data);
//
//     if (event.data === 'publitas viewer loaded') {
//         setPublitasCartCount();
//     }
//
//     if (event.data === '{"publitasEmbedPopup":"opened"}') {
//         setPublitasCartCount();
//     }
// }
//
// function setPublitasCartCount() {
//     let cart_count = document.getElementById('cart-count').innerHTML;
//     let publication = document.getElementById('#embed-container-publitas-embed-scwirwgmk8');
//     console.log("BOOM", cart_count);
//     publication.postMessage( JSON.stringify(['cartContentChanged', {
//         numItems: "1",
//     }]), '*' );
// }
//
//
// window.addEventListener("message", receiveMessage, false);
//
